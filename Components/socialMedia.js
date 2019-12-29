import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Dimensions, Image, TouchableOpacity
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get("window")
const SocialMedia = (props) => {
  return (
    <View style={styles.socialMedia}>
      <Icon name={props.socialIcon} size={50} color="#ff4757" />
    </View>
  )
};

const styles = StyleSheet.create({
  socialMedia: {
    width:0.2*width,
    margin:0.2*width,
    height:0.2*width,
    borderWidth:0.5,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:50,
    borderColor:"grey"
  }
});

export default SocialMedia;
