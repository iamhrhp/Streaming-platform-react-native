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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App({isDarkMode}: any): JSX.Element {
  return (
    <NavigationContainer>
      <RoutesPage isDarkMode={isDarkMode} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default App;
