import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Dimensions, Image, TouchableOpacity, TextInput, KeyboardAvoidingView
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
import Tabs from 'react-native-tabs'
import axios from "axios"
import AsyncStorage from '@react-native-community/async-storage'
const { height, width } = Dimensions.get("window")
export default class AxiosCom extends Component {
    constructor() {
        super();
        this.state = {
            Email: "",
            Password: ""
        }
    }
    updateValue = (text, filed) => {
        if (filed == 'Email') {
            this.setState({
                Email: text
            })
        } else if (filed == "Password") {
            this.setState({
                Password: text
            })
        }
    }
    signIn = () => {
        axios.post('https://a-market.herokuapp.com/usersignin', { email: this.state.Email, password: this.state.Password, type: "CLIENT" }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept-Language': "en"
            },
        })
            .then(async (res) => {
                console.log(res.data.user);
                await AsyncStorage.setItem("User", JSON.stringify(res.data.user));
                await AsyncStorage.setItem("Token", JSON.stringify(res.data.token));
                const value = await AsyncStorage.getItem('User');
                console.log(value)
                const tokevalue = await AsyncStorage.getItem('Token');
                console.log(tokevalue)
            })
            .catch(async (err) => { console.log(err.response.data);
            alert(err.response.data.errors) })
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <Image source={require('../Images/blackpanther.jpg')} style={{ width: 0.75 * width, height: 0.5 * height }} />
                    </View>
                    <View style={styles.inputs}>
                        <TextInput style={{
                            padding: 0.02 * width, borderWidth: 1, width: 0.65 * width, marginBottom: 0.05 * width, borderRadius: 30, backgroundColor: 'white', alignSelf: "center"
                        }} placeholder="Email or Phone number" name="Email" onChangeText={(text) => this.updateValue(text, 'Email')}></TextInput>
                        <TextInput style={{ borderWidth: 1, width: 0.65 * width, borderRadius: 30, backgroundColor: 'white', alignSelf: "center", padding: 0.02 * width }}
                            placeholder="Password" name="Password" secureTextEntry={true} onChangeText={(text) => this.updateValue(text, 'Password')}>
                        </TextInput>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={this.signIn}>
                        <Text style={{ fontSize: 20, textAlign: "center" }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        flex: 1,
        flexDirection: "column",
        backgroundColor: 'black',
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputs: {
        justifyContent: "space-between",
        flexDirection: "column",
        bottom: 0.25 * height
    },
    btn: {
        borderWidth: 1,
        padding: 0.02 * width,
        borderRadius: 30,
        backgroundColor: '#e84393',
        alignContent: "center",
        bottom: 0.2 * height,
        width: 0.75 * width
    }
});