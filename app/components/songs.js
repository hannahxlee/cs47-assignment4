import { Image, View, StyleSheet, Text } from "react-native";
import { Themes } from "../../assets/Themes";
import { useNavigation } from '@react-navigation/native';
import Ionicons from "@expo/vector-icons/Ionicons";

import { millisToMinutesAndSeconds } from "../../utils";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export const Song = ({ navigation, albumImage, songTitle, songArtist, albumName, externalUrl, previewUrl, duration }) => {
    return (
        <View style={styles.container}>
            <Pressable 
                style={styles.button}
                onPress={() => navigation.navigate('Preview', { preview: previewUrl })}>
                <Ionicons name="play-circle" size={20} color={Themes.colors.spotify}/>
            </Pressable>
            <View style={styles.cover}>   
                <Image style={styles.image} source={{uri: albumImage}}/>
            </View> 
            <Pressable
                style={styles.songInfo}
                onPress={() => navigation.navigate('Details', { details: externalUrl })}>
                <Text style={styles.text} numberOfLines={1}>{songTitle}</Text>
                <Text style={styles.lightText} numberOfLines={1}>{songArtist}</Text>
            </Pressable>   
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
    button: {
        width: '10%', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    cover: {
        width: '20%', 
        paddingRight: 10, 
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
        width: '35%',
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