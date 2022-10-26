import React, { useState } from "react";
import { Image, View, StyleSheet, SafeAreaView, Text } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";

import SpotifyAuthButton from "./app/components/button"
import SongList from "./app/components/list" 
import Player from "./app/components/player"

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  let contentDisplayed = null;

  if (token) {
    contentDisplayed = <SongList tracks={tracks}/>
  } else {
    contentDisplayed = <SpotifyAuthButton authFunction={getSpotifyAuth} />
  }
  
  return (
    <SafeAreaView style={styles.container}>
      {/* <Player index={index} /> */}
      {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});
