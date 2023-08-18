import {FC, useEffect, useState} from 'react';
import {
  Text,
  TextInput,
  View,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';

import Icon from 'react-native-vector-icons/Ionicons';
import {API_KEY, baseURL} from '../../../api';
import axios from 'axios';

interface IProps {}

const SearchPage: FC<IProps> = (props: IProps) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [searchData, setSearchData] = useState<any[]>([]);
  const [search, setSearch] = useState<string>('');

  const getMovieData = async () => {
    try {
      const res = await axios(
        `${baseURL}/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
      );
      const resJson = await res.data;
      setMovies(resJson.results);
    } catch (e) {
      console.log('e', e);
    }
  };

  const searchMovie = async () => {
    try {
      const res = await axios(
        `${baseURL}/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1&include_adult=false`,
      );
      const resJson = await res.data;
      // console.log('resJson', resJson);
      setSearchData(resJson.results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);

  const FlatListComponent = (data: any) => {
    const mapData = data.data.item;
    // console.log(data);
    return (
      <View style={styles.flatListContainer}>
        <Image
          style={styles.flatListImage}
          alt="img"
          // resizeMode="cover"
          source={{
            uri: `http://image.tmdb.org/t/p/w500/${mapData.backdrop_path}`,
          }}
        />
        <Text style={styles.flatListTitle}>{mapData.title}</Text>
        <MIcon
          name="keyboard-arrow-right"
          color="white"
          style={styles.flatListarrowIcon}
        />
      </View>
    );
  };

  // console.log('searchData', searchData.length === 0 ? searchData : 'none');

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.searchBoxWrapper}>
        <Icon
          name="search"
          size={20}
          color="silver"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholderTextColor="silver"
          placeholder="Movies, shows and more"
          returnKeyType="search"
          value={search}
          onChangeText={text => setSearch(text)}
          onSubmitEditing={searchMovie}
          // onKeyPress={e => console.log('keypress', e.nativeEvent.key)}
        />
      </View>
      <View style={styles.popularBox}>
        <Icon
          color="white"
          name="trending-up"
          size={20}
          style={styles.trendinIcon}
        />
        <Text style={styles.popularText}>Popular Searches</Text>
      </View>
      <View style={{marginTop: 10}}>
        <FlatList
          data={searchData.length === 0 ? movies : searchData}
          renderItem={(item: any) => <FlatListComponent data={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#100f13',
    height: '100%',
  },
  searchBoxWrapper: {
    backgroundColor: 'grey',
    height: 40,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
  },
  searchIcon: {marginLeft: 10},
  textInputStyle: {
    marginLeft: 5,
    color: 'silver',
    fontWeight: '800',
    width: '80%',
  },
  popularBox: {
    flexDirection: 'row',
    marginTop: 10,
  },
  trendinIcon: {
    marginRight: 10,
  },
  popularText: {
    color: 'white',
    fontWeight: '800',
  },
  flatListTitle: {
    textAlign: 'left',
    color: 'white',
    marginLeft: 10,
    flex: 8,
  },
  flatListarrowIcon: {
    flex: 1,
    marginLeft: 5,
  },
  logo: {
    width: 120,
    height: 180,
    margin: 2,
    borderRadius: 8,
  },
  textContainer: {
    textAlign: 'left',
    color: 'white',
    marginLeft: 10,
    flex: 8,
  },
  flatListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  flatListImage: {
    flex: 4,
    width: 120,
    height: 60,
    margin: 2,
    borderRadius: 8,
  },
});

export default SearchPage;
