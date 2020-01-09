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
    KeyboardAvoidingView
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
import { ListItem } from 'react-native-elements'
export default class UserData extends Component {
    
    constructor() {
        super();
        this.state = {
            email: "",
            name: "",
            phone: "",
            list:[]
        }
        this.get(this.state.list)
    }
    async get(list) {
        let data = await AsyncStorage.getItem("User")
        data = JSON.parse(data)
        this.setState({list:[...this.state.list,data]})  
        
    }
    render() {
        return (
            <ScrollView>
                <View>
                    {
                        this.state.list.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.email}
                                subtitle={l.name}
                                bottomDivider
                            />
                        ))
                    }</View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({

});