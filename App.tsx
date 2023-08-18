/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import RoutesPage from './src/component/RoutesPage/RoutesPage';
import {Provider} from 'react-redux';
import {store} from './src/Utils/redux/store/store';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App({isDarkMode}: any): JSX.Element {
  return (
    <Provider store={store}>
      <RoutesPage />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
