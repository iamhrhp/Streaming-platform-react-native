import {View} from 'react-native';
import MovieCardByGenre from './MovieCardByGenre/MovieCardByGenre';

const HomePage = () => {
  return (
    <View>
      <MovieCardByGenre Genre="Action" tv={false} />
    </View>
  );
};

export default HomePage;
