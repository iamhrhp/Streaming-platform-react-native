import React, {FC, Fragment, useEffect, useState} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {moviesGenreId} from '../../Data/MoviesGenreId';
import {API_KEY, baseURL} from '../../api';
import axios from 'axios';
import SwiperFlatList from 'react-native-swiper-flatlist';
import Config from 'react-native-config';
interface IProps {
  Genre?: string;
  tv?: boolean;
}

const MovieCardByGenre: FC<IProps> = (props: IProps) => {
  const [currData, setCurrData] = useState<any[]>([]);
  const {Genre, tv} = props;

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

  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <View style={{marginLeft: 10}}>
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
  logo: {
    width: 120,
    height: 180,
    margin: 2,
    borderRadius: 8,
  },

  itemContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 10,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default MovieCardByGenre;
