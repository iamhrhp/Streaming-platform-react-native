import {StyleSheet} from 'react-native';
import MovieCardByGenre from '../MovieCardByGenre/MovieCardByGenre';
import MovieProductionsPage from '../MovieProduction/MovieProductionsPage';
import {ScrollView} from 'react-native';
import SliderPage from '../common components/SliderPage/SliderPage';

const HomePage = () => {
  return (
    <ScrollView style={styles.mainView}>
      <SliderPage />
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
    backgroundColor: '#000000',
  },
});

export default HomePage;
