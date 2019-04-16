/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
var MOCKED_MOVIES_DATA = [
  {
    title: "标题",
    year: "2015",
    posters: { thumbnail: "https://tpc.googlesyndication.com/daca_images/simgad/2820795734590792458" }
  }
];

export default class MyAppMovies extends Component {
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!杨国宁
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text>
          {movie.title}
        </Text>
        <Text>
          {movie.year}
        </Text>
        <Image source={{ uri: movie.posters.thumbnail }} style={styles.thumbnail}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 22,
    textAlign: 'center',
    margin: 12,
  },
  instructions: {
    textAlign: 'center',
    color: '#555',
    marginBottom: 5,
  },
  thumbnail: {
    width: 500,
    height: 70
  }
});

AppRegistry.registerComponent('MyAppMovies', () => MyAppMovies);
