import {View, StyleSheet} from 'react-native';
import MovieCardByGenre from './MovieCardByGenre/MovieCardByGenre';

const HomePage = ({setIsDarkTheme}: any) => {
  console.log('---', setIsDarkTheme);

  return (
    <View style={styles.mainView}>
      <MovieCardByGenre Genre="Action" tv={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#100f13',
  },
});

export default HomePage;
