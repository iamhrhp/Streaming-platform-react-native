import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState, FC, useEffect, Fragment} from 'react';
import {baseURL} from '../../api';
import axios from 'axios';
import CustomButton from './Buttons/CustomButton';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {hs, ws} from '../../Theme/ResponsiveDesign';

interface IProps {
  route: any;
}

const DetailsPage: FC<IProps> = (props: IProps) => {
  const {movieId} = props.route.params;
  const [movieDetails, setMovieDetails] = useState<any[]>([]);
  const [movieGenre, setMoiveGenre] = useState<any[]>([]);

  const options = {
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YzQzNmE0YjdlMGFmMWZjNzMxMTAwYjQwNDQwMjYwNyIsInN1YiI6IjYwMWQ5MzQ4Yzg2YjNhMDAzZmY3YWMwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FtXiv9doDTqh1LQTA-1GdK7B9IXjEzRtKziJFJYapJY',
    },
  };

  const handleMovieDetails = async () => {
    try {
      const res = await axios.get(
        `${baseURL}/3/movie/${movieId}?language=en-US`,
        options,
      );
      const resJson = await res.data;
      console.log('resJson', resJson.spoken_languages);
      setMoiveGenre(resJson.genres);
      setMovieDetails([resJson]);
    } catch (e) {
      console.log('e', e);
    }
  };

  useEffect(() => {
    handleMovieDetails();
  }, []);

  return (
    <ScrollView style={styles.mainWrapper}>
      <View>
        {movieDetails?.map((item: any) => {
          return (
            <Fragment key={item.id}>
              <View style={styles.container}>
                {/* <Video
                  source={{
                    uri: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
                  }}
                  style={styles.video}
                /> */}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  marginBottom: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{color: 'white', fontWeight: '800', marginRight: 5}}>
                  {item.release_date.slice(0, 4)} •
                </Text>
                <Text
                  style={{color: 'white', fontWeight: '800', marginRight: 5}}>
                  {item.runtime}m •
                </Text>
                <Text
                  style={{color: 'white', fontWeight: '800', marginRight: 5}}>
                  Hindi •
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '800',
                    backgroundColor: 'silver',
                    paddingHorizontal: 5,
                    borderRadius: 5,
                  }}>
                  {item.adult ? '18+' : 'U/A 16+'}
                </Text>
              </View>
              <CustomButton
                title="Watch Now"
                buttonBackgroundColor="#ffffff"
                textColor="black"
                width={ws(340)}
                icon={
                  <Ionicon
                    style={{
                      marginHorizontal: 5,
                    }}
                    name="play"
                    size={16}
                    color="black"
                  />
                }
              />
              <View style={{flexDirection: 'row', marginTop: 20}}>
                {movieGenre.map((item: any) => {
                  return (
                    <Fragment key={item.id}>
                      <Text style={{color: 'white', fontWeight: '800'}}>
                        {item.name}
                      </Text>
                      <Text style={{color: 'white', fontWeight: '800'}}>
                        {' '}
                        |{' '}
                      </Text>
                    </Fragment>
                  );
                })}
              </View>
              <View>
                <Text style={{color: 'silver'}}>
                  {item.overview.slice(0, 180)}
                </Text>
              </View>
              <View style={styles.btnWrapper}>
                <TouchableOpacity style={styles.btnTouch}>
                  <MIcon name="add" size={30} color="white" />
                  <Text style={styles.btnText}>WatchList</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTouch}>
                  <MCIcon name="share-outline" size={30} color="white" />
                  <Text style={styles.btnText}>Share</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnTouch}>
                  <MIcon name="file-download" size={30} color="white" />
                  <Text style={styles.btnText}>Download</Text>
                </TouchableOpacity>
              </View>
            </Fragment>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#100f13',
    padding: 10,
  },
  btnWrapper: {flexDirection: 'row', marginTop: 20},
  btnTouch: {alignItems: 'center', marginRight: 20},
  btnText: {color: 'white', fontWeight: '800'},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: 450,
    height: 200,
  },
  youtubePlayer: {
    alignSelf: 'stretch',
    height: 300,
  },
});

export default DetailsPage;
