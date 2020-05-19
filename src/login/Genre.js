import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight} from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class Genre extends React.Component {
  static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};
  render() {
  return (
    <View style={styles.container}>

      <View style={styles.instructionBox}>
        <Text style={styles.instruction}>
          Choose necessary tags
        </Text>
      </View>

      <View style={styles.taglistBox}>

        <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Results')}
            >
          <View style={styles.taglist}>
            <Text style={styles.taglistText}>
              Superhero
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={styles.taglist}>
            <Text style={styles.taglistText}>
              Romance
            </Text>
          </View>
        </TouchableHighlight>

    </View>
    <View style={styles.taglistBox}>

        <TouchableHighlight>
          <View style={styles.taglist}>
            <Text style={styles.taglistText}>
              Anime
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={styles.taglist}>
            <Text style={styles.taglistText}>
              Anime
            </Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight>
          <View style={styles.taglist}>
            <Text style={styles.taglistText}>
              Anime
            </Text>
          </View>
        </TouchableHighlight>
  </View>

</View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  instructionBox: {
    margin: 20,
    backgroundColor: 'white',
    borderColor: 'red',
    borderWidth: 2,
  },

  instruction: {
    color: 'gray',
  },

  taglistBox: {
    backgroundColor: 'black',
    height: 50,
    flexDirection: 'row',
  },

  taglist: {
    backgroundColor: 'red',
    width: 90,
    alignItems: 'center',
    borderRadius: 5,
  },

  taglistText: {
    color: 'white',
  },
});

export default Genre;
