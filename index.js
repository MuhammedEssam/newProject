/**
 * @format
 */
import { Navigation } from "react-native-navigation";
// import {AppRegistry} from 'react-native';
import App from './App';
// import {name as appName} from './app.json';
import Campaign from './Components/campaign'
import SwiperCom from './Components/swiper'
import AxiosCom from './Components/Axios'
import CarouselCom from './Components/CarouselCom'
import UserData from './Components/UserData'
// AppRegistry.registerComponent(appName, () => App);
Navigation.registerComponent("App", () => App);
Navigation.registerComponent("Campaign", () => Campaign)
Navigation.registerComponent("SwiperCom", () => SwiperCom)
Navigation.registerComponent("AxiosCom", () => AxiosCom)
Navigation.registerComponent("CarouselCom", () => CarouselCom)
Navigation.registerComponent("UserData", () => UserData)

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                id: 'AppStack',
                children: [
                    {
                        component: {
                            name: "App"
                        }
                    }
                ]
            }
        }
    });
});