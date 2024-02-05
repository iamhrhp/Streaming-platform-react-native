/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {StyleSheet, View} from 'react-native';

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
import {ws} from './src/Theme/ResponsiveDesign';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App({isDarkMode}: any): JSX.Element {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RoutesPage />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: ws(360),
    maxWidth: ws(360),
  },
});

export default App;
