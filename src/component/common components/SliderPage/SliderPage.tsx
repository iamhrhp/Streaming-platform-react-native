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
        showPagination={true}
        data={topRated}
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
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
      <CustomButton
        title="Watch Now"
        width={ws(170)}
        buttonBackgroundColor="#252833"
        icon={
          <Ionicon
            style={{
              marginHorizontal: 5,
            }}
            name="play"
            size={16}
            color="white"
          />
        }
      />
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
});

export default SliderPage;
