import getEnv from "../../utils/env";
import { Image, Pressable, StyleSheet, Text } from "react-native";
import { Themes } from "../../assets/Themes";

// import SpotifyWebApi from "spotify-web-api-node";
import { useSelector, useDispatch } from "react-redux";

const {
    REDIRECT_URI,
    SCOPES,
    CLIENT_ID,
    ALBUM_ID,
    SPOTIFY_API: { DISCOVERY },
  } = getEnv();

var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  CLIENT_ID: CLIENT_ID,
  ALBUM_ID: ALBUM_ID,
  REDIRECT_URI: REDIRECT_URI
});

const Player = (props) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token.token);
    const [playing, setPlaying] = useState(true);
    const topSongs = useSelector((state) => state.topSongs.topSongs);
  
    spotifyApi.setAccessToken(token);
  
    useEffect(() => {
      spotifyApi
        .play({
          uris: [topSongs.data.items[props.index].uri],
          position_ms: 50000,
        })
        .then(
          function () {
            console.log("playing: ", topSongs.data.items[props.index].name);
          },
          function (err) {
            console.log("Something went wrong!", err);
          }
        );
    }, [props.index]);
  
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "1%",
          }}
        >
         
          <TouchableOpacity
            onPress={() =>
              spotifyApi.pause().then(
                function () {
                  setPlaying(false);
                  console.log("Playback paused");
                },
                function (err) {
                  console.log("Something went wrong!", err);
                }
              )
            }
            style={{
              display: playing ? "flex" : "none",
              paddingHorizontal: "10%",
              paddingTop: "5%",
              marginTop: Dimensions.get("window").height < 700 ? "10%" : "6%",
            }}
          >
            <Ionicons name="pause" size={50} color="grey" />
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() =>
              spotifyApi.play().then(
                function () {
                  setPlaying(true);
                  console.log("Playback resumed");
                },
                function (err) {
                  //if the user making the request is non-premium, a 403 FORBIDDEN response code will be returned
                  console.log("Something went wrong!", err);
                }
              )
            }
            style={{
              display: playing ? "none" : "flex",
              paddingHorizontal: "10%",
              paddingTop: "5%",
              marginTop: Dimensions.get("window").height < 700 ? "10%" : "6%",
            }}
          >
            <Ionicons name="md-play-sharp" size={50} color="grey" />
          </TouchableOpacity>
        </View>
  
        {/* <View style={styles.musicProgress}>
          <Text></Text>
        </View> */}
      </View>
    );
  };
  
  export default Player;
  
  const styles = StyleSheet.create({
    musicProgress: {
      backgroundColor: "grey",
      marginLeft: "12%",
      marginRight: "12%",
      borderRadius: 30,
    },
  });