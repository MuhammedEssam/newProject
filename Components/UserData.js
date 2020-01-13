import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    TextComponent
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
import { Navigation } from 'react-native-navigation'
const { height, width } = Dimensions.get("window")
import { ListItem } from 'react-native-elements'
export default class UserData extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            name: "",
            phone: "",
            list: []
        }
        this.get(this.state.list)
    }
    async get(list) {
        let data = await AsyncStorage.getItem("User")
        data = JSON.parse(data)
        this.setState({
            name: data.name, email: data.email,
            phone: data.phone
        })
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#f1f2f6', height: height, width: width }}>
                <View style={{ alignSelf:"center",marginTop:0.1*height }}>
                    <Text style={{fontSize:25,fontWeight:"bold"}}>P r o f i l e</Text>
                </View>
                <View style={{ flexDirection: "column", marginVertical: 0.1 * height, alignItems: "center", backgroundColor: "#b2bec3",margin:0.2*width ,borderRadius:20}}>
                    <View style={{ flexDirection: "row", alignSelf: "flex-start", marginHorizontal: 0.1 * width, marginVertical: 0.01 * height }}>
                        <Text>Name:      </Text>
                        <Text>{this.state.name}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "flex-start", marginHorizontal: 0.1 * width, marginVertical: 0.01 * height }}>
                        <Text>Email:      </Text>
                        <Text>{this.state.email}</Text>
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "flex-start", marginHorizontal: 0.1 * width, marginVertical: 0.01 * height }}>
                        <Text>Phone:      </Text>
                        <Text>{this.state.phone}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

});