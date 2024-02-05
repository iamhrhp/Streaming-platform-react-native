import {
  View,
  StyleSheet,
  Image,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import FastImage from 'react-native-fast-image';
import {hs, ms, ws} from '../../../Theme/ResponsiveDesign';
import axios from 'axios';
import {API_KEY, baseURL, imageConfig} from '../../../api';
import {useEffect, useState} from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {
  languageFilter,
  movieGenreFilter,
  movieYear,
} from '../../../helper/filterId';
import Ionicon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../Buttons/CustomButton';

const SliderPage = () => {
  const [topRated, setTopRated] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getMovieData = async () => {
    try {
      const res = await axios.get(
        `${baseURL}/3/movie/popular?api_key=${API_KEY}`,
      );
      const resJson = await res.data;
      setTopRated(resJson.results);
    } catch (e) {
      console.log('e', e);
    }
  };
  useEffect(() => {
    getMovieData();
  }, []);

  return (
    <>
      <SwiperFlatList
        autoplay
        autoplayDelay={2}
        autoplayLoop
        index={1}
        data={topRated.slice(0, 9)}
        paginationStyle={{top: hs(370), width: ws(50)}}
        onChangeIndex={index => setCurrentIndex(index.index)}
        renderItem={({item}) => (
          <View>
            <FastImage
              style={styles.logo}
              source={{
                uri: `${imageConfig}${item.backdrop_path}`,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <View style={styles.logoContainer}>
              <Image
                style={styles.logoImage}
                source={require('../../../../assets/png/DisneyHotstar.png')}
                resizeMode="cover"
              />
              <TouchableOpacity>
                <FeatherIcon name={'cast'} size={25} color="white" />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.textDetails}>
                {movieYear(item.release_date)} •{'  '}
                {languageFilter(item.original_language)} •{'  '}
                {movieGenreFilter(item.genre_ids[0])}
              </Text>
            </View>
            <View
              style={[styles.slide, {backgroundColor: item.backgroundColor}]}>
              <Text>{item.title}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Watch Now"
          width={ws(170)}
          buttonBackgroundColor="#252833"
          icon={
            <Ionicon
              style={styles.iconStyle}
              name="play"
              size={16}
              color="white"
            />
          }
        />
        <CustomButton
          title=""
          width={ws(30)}
          buttonBackgroundColor="#252833"
          customStyle={{padding: 10}}
          icon={
            <Ionicon
              style={styles.iconStyle}
              name="add"
              size={22}
              color="white"
            />
          }
        />
      </View>
      <View style={styles.paginationContainer}>
        {Array.from(Array(topRated.slice(0, 9).length), (e, i) => (
          <TouchableOpacity
            key={i}
            style={[
              styles.paginationDot,
              {backgroundColor: i === currentIndex ? 'white' : 'grey'},
            ]}
          />
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: ws(360),
    height: hs(320),
  },
  logoContainer: {
    width: ws(350),
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoImage: {width: ws(60), height: hs(60)},
  textDetails: {
    color: 'white',
    fontSize: 12,
    position: 'absolute',
    bottom: ms(0),
    left: ms(130),
    fontWeight: '800',
  },
  iconStyle: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationDot: {
    width: 8, // Default width for inactive dots
    height: 8,
    borderRadius: 4,
    marginHorizontal: 2,
    backgroundColor: '#999',
  },
});

export default SliderPage;
