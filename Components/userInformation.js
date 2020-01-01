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
import Icon from 'react-native-vector-icons/MaterialIcons';
import SocialMedia from '../Components/socialMedia'
const { height, width } = Dimensions.get("window")
class UserInfo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.upperHalf}>
                    <View style={styles.rightSection}>
                        <TouchableOpacity>
                            <Image source={require('../Images/Filtered_Image.png')} style={styles.profilePicture} /></TouchableOpacity>
                        <View style={styles.influencerInfo}>
                            <TouchableOpacity>
                                <Text style={{ fontSize: 25, color: '#2d3436' }}>اسم المؤثر</Text></TouchableOpacity>
                            <View style={styles.location}>
                                <Icon name="location-on" size={20} color="#636e72" />
                                <Text style={{ fontSize: 20, color: '#636e72' }}>البلد</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.leftSection}>
                        <SocialMedia socialIcon={"instagram"} followers={250} followersNumber={"K"} iconColor={"#ff4757"} />
                        <SocialMedia socialIcon={"snapchat"} followers={255} followersNumber={"K"} iconColor={"#ffd32a"} />
                        <SocialMedia socialIcon={"twitter"} followers={255} followersNumber={"K"} iconColor={"#1B9CFC"} />
                    </View>
                </View>
                <View style={styles.downSection}>
                    <View style={styles.campaignTime}>
                        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#1B9CFC" }}>موعد الاعلان</Text>
                    </View>
                    <View style={{ justifyContent: "flex-start", flexDirection: "row-reverse" }}>
                        <View style={{ alignItems: "center", marginRight: 0.05 * width, flexDirection: "column" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>45</Text>
                            <Text style={{ alignSelf: "center", fontSize: 15, color: '#636e72' }}>دقيقة</Text>
                        </View>
                        <View style={{ alignItems: "center", marginRight: 0.05 * width, flexDirection: "column" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>45</Text>
                            <Text style={{ alignSelf: "center", fontSize: 15, color: '#636e72' }}>ساعة</Text>
                        </View>
                        <View style={{ alignItems: "center", marginRight: 0.05 * width, flexDirection: "column" }}>
                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>45</Text>
                            <Text style={{ alignSelf: "center", fontSize: 15, color: '#636e72' }}>ايام</Text>
                        </View>
                        <View style={{ alignItems: "center", marginRight: 0.05 * width, flexDirection: "column", marginRight: 0.1 * width }}>
                            <Text style={{ fontSize: 15, marginBottom: 0.01 * width, color: '#636e72' }}>30/12/2019</Text>
                            <Text style={{ alignSelf: "center", fontSize: 15, color: '#636e72' }}>10:00 PM</Text>
                        </View>
                    </View>
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
        flexDirection: "row-reverse",
        backgroundColor: "white"
    },
    downSection: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "white",
        
    },
    rightSection: {
        flex: 1,
        alignItems: "flex-start",
        flexDirection: "row-reverse",
        paddingTop: "10%"
    },
    leftSection: {

        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    profilePicture: {
        width: width * 0.12,
        height: width * 0.12,
        borderRadius: 50,
        margin: width * 0.02,
        marginTop: height * 0.035
    },
    influencerInfo: {
        alignItems: "center",
        alignItems: "flex-end",
        marginTop: height * 0.03
    },
    location: {
        flexDirection: "row-reverse",
        alignItems: "center"
    },
    campaignTime: {
        alignSelf: "flex-end",
        marginRight: width * 0.06,
        marginBottom:width * 0.02

    }
});

export default UserInfo;
