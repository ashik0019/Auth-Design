import { Navigation } from "react-native-navigation";

import App from "./App";
import Login from "./Login";
import Registration from "./Registration";

Navigation.registerComponent('AppScreen', () => App);
Navigation.registerComponent('LoginScreen', () => Login);
Navigation.registerComponent('RegistrationScreen', () => Registration);


const bottomTabs = {
  id: 'bottomTabsId',
  children: [
    {
      component: {
        name: 'AppScreen',
        options: {
          bottomTab: {text: 'Home', icon: require('./assets/dashboard.png')}
        }
      }
    },
    {
      component: {
        name: 'LoginScreen',
        options: {
          bottomTab: {text: 'Login', icon: require('./assets/msg.png')}
        },
       
      }
    },
    {
      component: {
        name: 'RegistrationScreen',
        options: {
          bottomTab: {text: 'Register', color: 'red', icon: require('./assets/wind.png')}
        }
      }
    }

  ]
}

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
      bottomTabs
     }
  });
});