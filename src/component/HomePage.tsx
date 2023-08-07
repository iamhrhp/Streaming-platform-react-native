import {View, StyleSheet} from 'react-native';
import MovieCardByGenre from './MovieCardByGenre/MovieCardByGenre';
import MovieProductionsPage from './MovieProduction/MovieProductionsPage';

const HomePage = ({setIsDarkTheme}: any) => {
  console.log('---', setIsDarkTheme);

  return (
    <View style={styles.mainView}>
      <MovieCardByGenre Genre="Action" tv={false} />
      <MovieCardByGenre Genre="Comedy" tv={false} />
      <MovieProductionsPage />
      <MovieCardByGenre Genre="Horror" tv={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#100f13',
  },
});

export default HomePage;
