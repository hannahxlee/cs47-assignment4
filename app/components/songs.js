import { Image, View, StyleSheet, Text } from "react-native";
import { Themes } from "../../assets/Themes";

import { millisToMinutesAndSeconds } from "../../utils";

export const Song = ({id, albumImage, songTitle, songArtist, albumName, duration}) => {
    console.log(albumImage)
    return (
        <View style={styles.container}>
            <View style={styles.id}>
                <Text style={styles.lightText}>{id}</Text>
            </View>
            <View style={styles.cover}>   
                <Image style={styles.image} source={{uri: albumImage}}/>
            </View> 
            <View style={styles.songInfo}>
                <Text style={styles.text} numberOfLines={1}>{songTitle}</Text>
                <Text style={styles.lightText} numberOfLines={1}>{songArtist}</Text>
            </View>    
            <View style={styles.album}>
                <Text style={styles.text}>{albumName}</Text>
            </View>
            <View style={styles.duration}>
                <Text style={styles.text} numberOfLines={1}>{millisToMinutesAndSeconds(duration)}</Text>
            </View>
        </View>
    )
}

export default Song;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: Themes.colors.background,
        padding: 5,
    },
    id: {
        width: '5%', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    cover: {
        width: '20%', 
        paddingLeft: 15,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 60, 
        height: 60, 
    },
    text: {
        fontSize: 13,
        color: Themes.colors.white,
    },
    lightText: {
        fontSize: 13,
        color: Themes.colors.white,
        opacity: 0.6,
    },
    songInfo: {
        width: '40%',
        flexDirection: 'column',
        paddingRight: 15, 
    },
    album: {
        width: '25%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    duration: {
        width: '10%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})