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
import Carousel from 'react-native-snap-carousel';

const { height, width } = Dimensions.get("window")

export default class CarouselCom extends Component {
    state = {
        entries: [{
            title: "joker",
            uri: require("../Images/joker2.jpg")
        },
        {
            title: "Image",
            uri: require("../Images/joker3.jpg")
        },
        {
            title: "Epic",
            uri: require("../Images/images.jpg")
        }
        ]
    }
    _renderItem = ({ item, index }) => {
        return (
            <View  >
                <Image source={item.uri} style={{ width: 210, height: 500, top: "10%" }} />
                <Text style={{ top: "10%" }}>{item.title}</Text>
            </View>
        );
    }

    render() {
        return (
            <Carousel
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={500}
                itemWidth={200}
                loop
            />
        );
    }
}
const styles = StyleSheet.create({

})