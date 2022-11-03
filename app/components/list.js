import { FlatList, Image, View, StyleSheet, Text } from "react-native";
import { Themes } from "../../assets/Themes";

import Song from "./Songs";

export const SongList = ({ navigation, tracks }) => {
    const renderSong = ({ item, index }) => (
        <Song
            id={index + 1}
            albumImage={item.album.images[0].url}
            songTitle={item.name}
            songArtist={item.artists[0].name}
            albumName={item.album.name}
            duration={item.duration_ms}
            externalUrl={item.external_urls.spotify}
            previewUrl={item.preview_url}
            navigation={navigation}
        />
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image 
                    style={styles.logo}
                    source={require('../../assets/spotify-logo.png')}/>
                <Text style={styles.text}>
                    My Top Tracks
                </Text>
            </View>
            <FlatList
                data={tracks}
                renderItem={(item) => renderSong(item)}
            />
        </View>
    );
} 

export default SongList;

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    logo: {
        width: 20, 
        height: 20, 
        marginRight: 10, 
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Themes.colors.white,
    }
})