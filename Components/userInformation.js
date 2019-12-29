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
                                <Text style={{ fontSize: 20, color: 'white' }}>اسم المؤثر</Text></TouchableOpacity>
                            <View style={styles.location}>
                                <Icon name="location-on" size={20} color="white" />
                                <Text style={{ fontSize: 20, color: 'white' }}>البلد</Text>
                            </View>
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
        flexDirection: "column",
        backgroundColor:"#dfe4ea"
    },
    upperHalf: {
        flex: 1,
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
    }
});

export default UserInfo;
