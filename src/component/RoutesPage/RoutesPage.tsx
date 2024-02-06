import {createStackNavigator} from '@react-navigation/stack';
import HomePage from '../HomePage/HomePage';
import ViewListPage from '../MovieList/MoviesListPage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import SearchPage from '../HomePage/SearchPage/SearchPage';
import Icon from 'react-native-vector-icons/Foundation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FIcon from 'react-native-vector-icons/FontAwesome';
import ProfilePage from '../HomePage/ProfilePage/ProfilePage';
import DetailsPage from '../common components/DetailsPage';
import FirstScreen from '../ScreenPages/FirstScreen';
import SecondScreen from '../ScreenPages/SecondScreen';
import ThirdScreen from '../ScreenPages/ThridScreen';
import {ms} from '../../Theme/ResponsiveDesign';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ViewListPage" component={ViewListPage} />
      <Stack.Screen name="Movie-Details" component={DetailsPage} />
    </Stack.Navigator>
  );
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: 'black'},
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
      }}
      initialRouteName="HomePage">
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicon
                name={focused ? 'home' : 'home-outline'}
                size={ms(16)}
                color={focused ? 'white' : 'grey'}
              />
            );
          },
        }}
        name="Home"
        component={StackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <Ionicon
                name="search"
                size={ms(16)}
                color={focused ? 'white' : 'grey'}
              />
            );
          },
        }}
        name="Search"
        component={SearchPage}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => {
            return (
              <FIcon
                name={focused ? 'user-circle-o' : 'user-circle'}
                size={ms(16)}
                color={focused ? 'white' : 'grey'}
              />
            );
          },
        }}
        name="profile"
        component={ProfilePage}
      />
    </Tab.Navigator>
  );
};

export default function RoutesPage() {
  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}
