import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class Question extends React.Component {
  static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};
  render() {
  return (
    <View style={styles.container}>
    
      <View style={styles.textContainer}>
      <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Genre')}
            >
        <View style={styles.questionText}>
          Movie or TV Show?
        </View>
      </TouchableHighlight>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Genre')}
            >
        <View style={styles.buttonText}>
          MOVIE
        </View>
      </TouchableHighlight>
      </View>

       <View style={styles.buttonContainer}>
        <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Genre')}
            >
          <Text style={styles.buttonText}>
            TV SHOW
          </Text>
        </TouchableHighlight>

      </View>


    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },

  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  questionText: {
    color: 'red',
    fontSize: 28,
    margin: 50,
  },

  buttonContainer: {
    backgroundColor: 'gray',
    margin: 10,
    borderColor: 'white',
    borderRadius: 4,
    
  },

});

export default Question;
