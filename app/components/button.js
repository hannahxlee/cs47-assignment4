import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Themes } from "../../assets/Themes";

export const SpotifyAuthButton = ({ authFunction }) => {
    return (
        <Pressable
            style={styles.button}
            onPress={authFunction}>
            <Image 
                style={styles.logo}
                source={require('../../assets/spotify-logo.png')}/>
            <Text style={styles.text}>
                CONNECT WITH SPOTIFY
            </Text>
        </Pressable>          
    )
}

export default SpotifyAuthButton;

const styles = StyleSheet.create({
    logo: {
        width: 20,
        height: 20,
      },
      button: {
        width: 170,
        height: 30,
        backgroundColor: Themes.colors.spotify,
        borderRadius: 99999,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 8, 
      },
      text: {
        fontSize: 10,
        color: Themes.colors.white,
        fontWeight: 'bold',
      }
})