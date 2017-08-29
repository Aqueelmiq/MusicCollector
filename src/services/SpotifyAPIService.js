import moment from 'moment';

const BASE_URI = 'https://api.spotify.com/v1/';
const CLIENT_SECRET = '3e7648d0c66547588dc860105654b490';
const CLIENT_ID = '916bc719cb574200b2cb5d06c7a33c54';
const PATHS = {
    SEARCH: 'search/'
}

let AUTH_TOKEN = {
    TOKEN: '',
    VALID_TILL: 0
}

const serializeParams = (params={}) => Object.keys(params)
    .filter((key) => params[key])
    .map((key) => `${key}=${params[key]}`)
    .join('&');

const serializeEncodedParams = (params={}) => Object.keys(params)
    .filter((key) => params[key])
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

const urlWithParams = (url, params={}) => url.concat('?'+serializeParams(params));

const getOAuth = () => {
    const body = serializeEncodedParams({
        'grant_type': 'client_credentials'
    });
    return moment().millisecond() < AUTH_TOKEN.VALID_TILL ?
        Promise.resolve(AUTH_TOKEN.TOKEN)
        :
        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(CLIENT_SECRET + ':' + CLIENT_ID)}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        }).then((response) => {
                return response.json()
            })
            .then((json) => {
                AUTH_TOKEN.TOKEN = json['access_token'];
                AUTH_TOKEN.VALID_TILL = moment().millisecond() + json["expires_in"];
                return AUTH_TOKEN.TOKEN;
            })
            .catch(console.log);
}

const fetchWithAuth = (url, method, body) => {
    return getOAuth()
        .then(token => {
            const options = {
                method: method,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
            if(body) options.body = body;
            return fetch(url, options)
                .then((response) => response.json())
            });
}

const mapTrackToSongData = (track) => {
    const name = track.name;
    const album = track.album.name;
    const artists = track.artists.length > 0 ?
        track.artists.map(artist => artist.name).join(", ") : "";
    const imgLink = track.album.images.length > 0 ? track.album.images[0].url : "";
    const preview = track.preview_url;
    return {name, album, artists, imgLink, preview}
}

const search = (query, type, {limit, market, offset}) => {
    const searchURI = `${BASE_URI}${PATHS.SEARCH}`
    const url = urlWithParams(searchURI, {query, type, limit, market, offset});
    return fetchWithAuth(url, 'GET')
        .then((data) => {
            console.log(data);
            return data;
        })
        .then((data) => data.tracks.items)
        .then((tracks) => {
            console.log(tracks);
            return tracks;
        })
        .then(tracks => tracks.map(mapTrackToSongData));
}

export {search as SpotifyAPISearch};