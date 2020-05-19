import * as React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

class Results extends React.Component {
  static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};
  render() {
  return (
    <View style={styles.container}>

      <View style={styles.navbarContainer}>

        <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Genre')}
            >
      <View style={styles.backBox}>
        <Text style={styles.text}>
          Back 
        </Text>
      </View>
    </TouchableHighlight>

      </View>

      <View style={styles.contentContainer}>

        <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Movie')}
            >
          <View style={styles.contentBox}>
            <Text style={styles.contentText}>
              Code8:
              a man with superpowers who works with a group of criminals to raise money to help his sick mother. 
            </Text>
          </View>
        </TouchableHighlight>

        <View style={styles.contentBox}>
          <Text style={styles.contentText}>
            Avengers Infinity War:
            Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. 
          </Text>
        </View>

        <View style={styles.contentBox}>
          <Text style={styles.contentText}>
            Into the Spiderverse:
            Bitten by a radioactive spider in the subway, Brooklyn teenager Miles Morales suddenly develops mysterious powers that transform him into the one and only Spider-Man.
          </Text>
        </View>

      </View>


    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  navbarContainer: {
    backgroundColor: 'black',
    height: 30,
    justifyContent: 'center',
  },

  text: {
    color: 'gray',
  },

  contentContainer: {
    backgroundColor: 'black',
    height: 450,
  },

  contentBox: {
    borderWidth: 2,
    borderColor: 'gray',
  },

  contentText: {
    color: 'red',
  },
});

export default Results;
