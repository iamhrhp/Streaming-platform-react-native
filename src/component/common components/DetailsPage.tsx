import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import WatchNowBtn from './Buttons/WatchNowBtn';
import {useState, FC, useEffect, Fragment} from 'react';
import {baseURL} from '../../api';
import axios from 'axios';

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
      // console.log('resJson', resJson.genres);
      setMoiveGenre(resJson.genres);
      setMovieDetails([resJson]);
    } catch (e) {
      console.log('e', e);
    }
  };

  useEffect(() => {
    handleMovieDetails();
  }, []);

  console.log('movieDetails', movieDetails);

  return (
    <ScrollView style={styles.mainWrapper}>
      <WatchNowBtn />
      <View>
        {movieDetails?.map((item: any) => {
          return (
            <Fragment key={item.id}>
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
                <Text style={{color: 'silver'}}>{item.overview}</Text>
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
});

export default DetailsPage;
