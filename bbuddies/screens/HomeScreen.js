import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  TextInput,
} from 'react-native';

export default function HomeScreen() {
  return (
    <ImageBackground source={require('../assets/images/small_bg.jpg')} style={styles.container}>

        <View style={styles.welcomeContainer}>
          <Image
            source={
              require('../assets/images/logo_bg5.png')
            }
            style={styles.homeLogo}
          />

          <TextInput
              style={styles.inputBox} underlineColorAndroid='rgba(0,0,0,0)'
          />
          <TextInput
              style={styles.inputBox2} underlineColorAndroid='rgba(0,0,0,0)'
          />

        </View>



    </ImageBackground>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f00',
  },

  welcomeContainer: {
    alignItems: 'center',
  },
  homeLogo: {
    width: 350,
    height: 150,
    resizeMode: 'contain',
    marginTop: 150,
  },
  inputBox: {
    width:300,
    height:40,
    backgroundColor:'rgba(255,255,255,0.9)',
    borderRadius:25,
  },
  inputBox2: {
    marginTop:25,
    width:300,
    height:40,
    backgroundColor:'rgba(255,255,255,0.9)',
    borderRadius:25
  }
});
