import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class Movie extends React.Component {
  static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};
  render() {
  return (
    <View style={styles.container}>
      <Image
      style={{width: 200, height: 200}}
      source={{uri: 'https://i.pinimg.com/736x/99/a0/f4/99a0f4f92dae0f444eb022154c4a8618.jpg'}}
    />

    <View style={styles.textBox}>
      <Text style={styles.text}>
        Code8: a man with superpowers who works with a group of criminals to raise money to help his sick mother. 
      </Text>
    </View>

    <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Results')}
            >
      <View style={styles.backBox}>
        <Text style={styles.back}>
          Back 
        </Text>
      </View>
    </TouchableHighlight>

    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },

  text: {
    color: 'gray',
    margin: 10,
  },

  backBox: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  back: {
    color: 'gray',
  },
});


export default Movie;
