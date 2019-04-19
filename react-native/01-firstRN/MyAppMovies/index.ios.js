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
const MOCKED_MOVIES_DATA = [
  {
    title: "标题",
    year: "2015",
    posters: { thumbnail: "https://tpc.googlesyndication.com/daca_images/simgad/2820795734590792458" }
  }
];
const REQUEST_URL = "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

export default class MyAppMovies extends Component {
  constructor(props) {
    super(props);   //这一句不能省略，照抄即可
    this.state = {
      movies: null,  //这里放你自己定义的state变量及初始值
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    this.fetchData = this.fetchData.bind(this);
  };
  
  render() {
    var movie = MOCKED_MOVIES_DATA[0];
    return (
      <View style={styles.container}>
        <Image source={{ uri: movie.posters.thumbnail }} style={styles.thumbnail} />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.year}>{movie.year}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  thumbnail: {
    width: 253,
    height: 81
  }
});

AppRegistry.registerComponent('MyAppMovies', () => MyAppMovies);
