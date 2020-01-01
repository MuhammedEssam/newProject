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
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Tabs from 'react-native-tabs'
const { height, width } = Dimensions.get("window")

export default class Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = { page: 'first' };
    }
    render() {
        var self = this;
        return (
            <View style={styles.container}>
                <View style={styles.ScreenTitle}>
                    <TouchableOpacity style={{ marginRight: 0.5 * width }}>
                        <Icons name="dots-horizontal" size={25} color="#1B9CFC" /></TouchableOpacity>
                    <Text style={{ marginRight: 0.02 * width, color: "#1B9CFC", fontSize: 20 }}>
                        الحملات الاعلانيه
                    </Text>
                    <TouchableOpacity>
                        <Icon name="ios-arrow-forward" size={25} color="#1B9CFC" /></TouchableOpacity>
                </View>
                <View style={styles.CampaignTitle}>
                    <Text style={{ color: "grey", fontSize: 25, fontWeight: "bold" }}>اعلان وجبة جديدة لشارومر </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop:0.05*height }}>
                    <Tabs selected={this.state.page} style={{ backgroundColor: 'white' }}
                        selectedStyle={{ color: '#1B9CFC' }} onSelect={el => this.setState({ page: el.props.name })}>
                        <Text name="first">تفاصيل الاعلان</Text>
                        <Text name="second" selectedIconStyle={{ borderTopWidth: 2, borderTopColor: '#1B9CFC' }}>الطلبات</Text>
                        <Text name="third">التعاقدات</Text>
                    </Tabs>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        flex: 1,
        flexDirection: "column",
        backgroundColor:'white'
    },
    ScreenTitle: {
        flexDirection: "row",
        justifyContent: "flex-end",
        margin: 0.05 * width,
        marginBottom: -0.02 * width
    },
    CampaignTitle: {
        flexDirection: "row",
        justifyContent: "flex-end",
        margin: 0.05 * width,
    },
    scene: {
        flex: 1,
    },
});