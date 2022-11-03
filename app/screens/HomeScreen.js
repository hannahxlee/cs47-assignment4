import React, { useState } from "react";
import { Image, View, StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "../../utils";
import { Themes } from "../../assets/Themes";

import SpotifyAuthButton from "../components/Button"
import SongList from "../components/List" 

const HomeScreen = ({ navigation }) => {
    // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <SongList tracks={tracks} navigation={navigation}/> 
  } else {
    contentDisplayed = <SpotifyAuthButton authFunction={getSpotifyAuth} />
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {contentDisplayed}
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      backgroundColor: Themes.colors.background,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
  });