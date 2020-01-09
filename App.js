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
  StatusBar, Dimensions, Image, TouchableOpacity
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import UserInfo from './Components/userInformation'
import SocialMedia from './Components/socialMedia'
import Icon from 'react-native-vector-icons/MaterialIcons';
import Campaign from './Components/campaign'
import SwiperCom from './Components/swiper'
import AxiosCom from './Components/Axios'
import CarouselCom from './Components/CarouselCom'
const { height, width } = Dimensions.get("window")
class App extends Component {
  render() {
    return <AxiosCom />
  }
}

export default App;
