import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Question from './src/login/question.js';
import Genre from './src/login/genre.js';
import Results from './src/login/results.js';
import Movie from './src/login/movie.js';





const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Question: { screen: Question },
  Genre: { screen: Genre },
  Results : { screen: Results },
  Movie : { screen: Movie },
 
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

