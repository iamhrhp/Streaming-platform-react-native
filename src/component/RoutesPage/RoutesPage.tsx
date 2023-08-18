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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="ViewListPage" component={ViewListPage} />
      {/* <Stack.Screen name="Search" component={SearchPage} /> */}
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
                size={25}
                color="white"
              />
            );
          },
        }}
        name="Home"
        component={StackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => {
            return <Ionicon name="search" size={25} color="white" />;
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
                size={25}
                color="white"
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
