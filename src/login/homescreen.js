import React from 'react';
import {
  StyleSheet,
  Text,
  Keyboard,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Button,
  Image,
  TouchableHighlight,
  ImageBackground,Platform,Animated
} from 'react-native';



class Homescreen extends React.Component {
  static navigationOptions = {
//To hide the NavigationBar from current Screen
header: null
};

  render() {
    return (


      <View style={styles.container}>
        <Animated.View style={{ ...this.props.style, opacity: this.fadeAnim }} >
        {this.props.children}
          <View style={styles.textContainer}>

          <Image source ={{uri: 'https://i.imgur.com/FqJDwft.png'}}
 style={{ height: 100, width: 250, justifyContent: 'center', }}
/>
          
          
            </View>


 </Animated.View>

<View style={styles.textContainer}>
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate('Question')}
            >
           <View style={styles.touchableButton1}>
                        <Text style={styles.buttonText}>
                            Find Me Something
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
    justifyContent: 'center',
  },


  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },


  text: {
    
    fontSize: 8,
    fontWeight:'bold',
    justifyContent: 'center',
    alignItems: 'center',
  },

   touchableButton1: {
        backgroundColor: 'black',
        height: 40,
        width: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 50,
         borderRadius: 10,
         borderColor: 'gray',
         borderWidth: 1,
   
   
    },
   
    buttonText: {
     
        
        fontSize: 14,
        fontWeight:'bold',
        color: 'red',
    }
});


export default Homescreen;
