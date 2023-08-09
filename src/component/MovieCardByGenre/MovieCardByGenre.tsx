import React, {FC, Fragment, useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import {moviesGenreId} from '../../Data/MoviesGenreId';
import {API_KEY, baseURL} from '../../api';
import axios from 'axios';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {useDispatch} from 'react-redux/es/exports';

import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from '@react-navigation/native';
import {ADD_MOVIES, ADD_TV} from '../../Utils/redux/reducer/reducer';

interface IProps {
  Genre?: string;
  tv?: boolean;
}

const MovieCardByGenre: FC<IProps> = (props: IProps) => {
  const [currData, setCurrData] = useState<any[]>([]);
  const {Genre, tv} = props;
  const dispatch = useDispatch();

  // const getMovieData = async () => {
  const movieId = moviesGenreId
    .filter(item => {
      if (item.title === Genre) {
        return item.id;
      }
    })
    .map(item => item.id);

  const tvId = !tv
    ? null
    : moviesGenreId
        .filter(item => {
          if (item.title === Genre) {
            return item.id;
          }
        })
        .map(item => item.id);

  //   try {
  //     const res = await axios(
  //       `${baseURL}/3/discover/${tv ? 'tv' : 'movie'}?api_key=${
  //         process.env.REACT_APP_API_KEY
  //       }&language=en-US&sort_by=popularity.desc&page=1&include_video=true&with_genres=${
  //         tv ? tvId : movieId
  //       }`,
  //     );
  //     const resJson = await res.data;
  //     setCurrData(resJson.results);
  //     // console.log('resJson', resJson.results);
  //   } catch (e) {
  //     console.log('e', e);
  //   }
  // };

  const getMovieData = async () => {
    try {
      const res = await axios(
        `${baseURL}/3/discover/${
          tv ? 'tv' : 'movie'
        }?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&include_video=true&with_genres=${
          tv ? tvId : movieId
        }`,
      );
      const resJson = await res.data;
      setCurrData(resJson.results);
      // console.log('resJson', resJson.results);
    } catch (e) {
      console.log('e', e);
    }
  };
  const {navigate}: NavigationProp<ParamListBase> = useNavigation<any>();
  const navigateToViewAllPage = () => {
    // if (tvSeries.length <= 0 && tv === true) {
    //   dispatch(ADD_TV(currData));
    // } else if (movies.length <= 0 && !tv) {
    //   dispatch(ADD_MOVIES(currData));
    // }
    // if (tv === true) {
    //   dispatch(ADD_TV(currData));
    // } else if (!tv) {
    //   dispatch(ADD_MOVIES(currData));
    // }
    if (tv === true) {
      dispatch(ADD_TV(currData));
    } else if (!tv) {
      dispatch(ADD_MOVIES(currData));
    }
    navigate('ViewListPage', {Genre, tv});
  };

  // console.log('--props-', props);

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <View style={styles.mainWrapper}>
      <Pressable onPress={navigateToViewAllPage}>
        <View>
          <Text style={styles.title}>{Genre} Movies</Text>
        </View>
      </Pressable>
      <SwiperFlatList
        data={currData}
        renderItem={({item}) => (
          <View>
            <Image
              style={styles.logo}
              alt="img"
              source={{
                uri: `http://image.tmdb.org/t/p/w500/${item.poster_path}`,
              }}
            />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    marginLeft: 10,
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 180,
    margin: 2,
    borderRadius: 8,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
    color: '#ffffff',
  },
});

export default MovieCardByGenre;
