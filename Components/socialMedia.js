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
    <View style={styles.container}>
      <View style={styles.socialMedia}>
        <Icon name={props.socialIcon} size={30} color={props.iconColor} />
      </View>
      <View style={styles.followerContainer}>
        <Text style={{ fontSize: 15, fontWeight: "bold", backgroundColor: "white" }}>{props.followers}</Text>
        <Text style={{ fontSize: 20, color: "#1B9CFC" }}>{props.followersNumber}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    width: 0.25 * width,
    alignItems: "center",
    justifyContent: "space-between",
    margin: -0.05 * width
  },
  socialMedia: {
    width: 0.12 * width,
    margin: 0.2 * width,
    height: 0.12 * width,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderColor: "black"
  },
  followerContainer: {
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    alignSelf: "center",
    paddingTop: 0.18 * height
  }
});

export default SocialMedia;
