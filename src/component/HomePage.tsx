import {View, StyleSheet} from 'react-native';
import MovieCardByGenre from './MovieCardByGenre/MovieCardByGenre';
import MovieProductionsPage from './MovieProduction/MovieProductionsPage';
import {ScrollView} from 'react-native-gesture-handler';

const HomePage = ({setIsDarkTheme}: any) => {
  console.log('---', setIsDarkTheme);

  return (
    <ScrollView style={styles.mainView}>
      <MovieCardByGenre Genre="Action" tv={false} />
      <MovieCardByGenre Genre="Comedy" tv={false} />
      <MovieProductionsPage />
      <MovieCardByGenre Genre="Horror" tv={false} />
      <MovieCardByGenre Genre="Animation" tv={false} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#100f13',
  },
});

export default HomePage;
