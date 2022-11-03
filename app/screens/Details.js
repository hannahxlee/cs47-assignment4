import { Image, View, StyleSheet, Text } from "react-native";
import { Themes } from "../../assets/Themes";
import { WebView } from "react-native-webview";

export const Details = ({ route }) => {
    const details = route.params.details;
    return (
        <WebView source={{ uri: details }} />
    );
};

export default Details;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.background,
    }
})