import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const SongCard = ({song, btnTitle, onBtnPress}) => (
    <View style={styles.container}>
        <Image style={styles.cardImage} resizeMode="contain" source={{uri:song.imgLink}}/>
        <View style={styles.cardActions}>
            <Text style={styles.cardDetails}> {"Name: " + song.name} </Text>
            <Text style={styles.cardDetails}> {"Album: " + song.album} </Text>
            <Text style={styles.cardDetails}> {"Artists: " + song.artists} </Text>
            <Button title={btnTitle}
                    onPress={onBtnPress}/>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
        marginVertical: 5,
        borderWidth: 2,
        borderColor: '#ccc',
        backgroundColor: '#fff'
    },
    cardActions: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    cardImage: {
        flex: 10,
        width: 640,
        height: 640
    },
    cardDetails: {
        flex: 1
    }
});

export default SongCard;