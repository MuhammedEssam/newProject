import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Dimensions, Image, TouchableOpacity, TouchableNativeFeedbackBase
} from 'react-native';
import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper'
import Tabs from 'react-native-tabs'
import Userinfo from './userInformation'
const { height, width } = Dimensions.get("window")

export default class CarouselCom extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'red', width: width, height: height }}>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
})