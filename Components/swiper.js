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

export default class SwiperCom extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'red', width: width, height: height }}>
                <Swiper style={styles.wrapper} showsButtons={true}>
                    <View style={styles.slide1}>
                        <Image source={require('../Images/joker2.jpg')} resizeMode="center" style={{ height: height }} />
                        <View style={{ top: 0, left: 0, right: 0, bottom: 0, position: "absolute", justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.text}>you are awful murray!</Text>
                        </View>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={require('../Images/maxresdefault.jpg')} resizeMode="center" style={{ height: height }} />
                        <View style={{ top: 0, left: 0, right: 0, bottom: 0, position: "absolute", justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.text}>you get what you deserver</Text>
                        </View>
                    </View>
                    <View style={styles.slide3}>
                        <Image source={require('../Images/images4.jpg')} style={{ height: height }} resizeMode="contain"/>
                        <View style={{ top: 0, left: 0, right: 0, bottom: 0, position: "absolute", justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.text}></Text>
                        </View>
                    </View>
                    <View style={styles.slide4}>
                        <Image source={require('../Images/joker3.jpg')}  resizeMode="cover" style={{alignSelf:"center",height: height}}/>
                        <View style={{ top: 0, left: 0, right: 0, bottom: 0, position: "absolute", justifyContent: "center", alignItems: "center" }}>
                            <Text style={styles.text}>Epic!</Text>
                        </View>
                    </View>
                </Swiper>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative",
        backgroundColor: "white"
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    },
    text: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "white"
    }
})