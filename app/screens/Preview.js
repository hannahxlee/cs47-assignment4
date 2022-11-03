import { Image, View, StyleSheet, Text } from "react-native";
import { Themes } from "../../assets/Themes";
import { WebView } from "react-native-webview";

export const Preview = ({ route }) => {
    const preview = route.params.preview;
    return (
        <WebView source={{ uri: preview }} />
    );
};

export default Preview;