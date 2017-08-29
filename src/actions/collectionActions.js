
//Actions on Song
export const ADD_SONG = 'ADD_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const GET_ALL_SONGS = 'GET_ALL_SONGS'

//Action Creators for Song
export const addSong = (song) => ({
   type: ADD_SONG,
   song,
});

export const removeSong = (song) => ({
    type: REMOVE_SONG,
    song,
});

export const getAllSongs = () => ({
    type: GET_ALL_SONGS,
});




