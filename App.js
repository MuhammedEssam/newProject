/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Dimensions, Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const { height, width } = Dimensions.get("window")
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperHalf}>
          <View style={styles.rightSection}>
            <Image source={require('./Images/Filtered_Image.png')} style={styles.profilePicture} />
            <View style={styles.influencerInfo}>
              <Text style={{ fontSize: 20, color: 'white' }}>اسم المؤثر</Text>
              <Text style={{ fontSize: 20, color: 'white' }}>البلد</Text>
            </View>
          </View>
          <View style={styles.leftSection}>

          </View>
        </View>
        <View style={styles.downSection}>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  upperHalf: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: "row-reverse",

  },
  downSection: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: "row"
  },
  rightSection: {
    backgroundColor: 'blue',
    flex: 0.5,
    alignItems: "flex-start",
    flexDirection: "row-reverse",
    paddingTop: "10%"
  },
  leftSection: {
    backgroundColor: 'red',
    flex: 0.5
  },
  profilePicture: {
    width: 75,
    height: 75,
    borderRadius: 50,
    margin: width * 0.02
  },
  influencerInfo: {
    alignItems: "center",
    alignItems: "flex-end",
    margin: width * 0.02,
    // marginBottom: width * 0.02,
  }
});

export default App;
