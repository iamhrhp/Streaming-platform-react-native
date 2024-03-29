import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {FC} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import BackHeaderTitle from '../common components/BackHeaderTitle/BackHeaderTitle';
import FastImage from 'react-native-fast-image';
import {imageConfig} from '../../api';

interface IProps {
  navigation?: any;
  route?: {
    key: string;
    name: string;
    params: {Genre: string; tv: boolean | string};
    path: undefined;
  };
  dispatch?: any;
}

const ViewListPage: FC<IProps> = (props: IProps) => {
  const {movies, tvSeries} = useSelector((state: any) => state.moviesSlice);
  // console.log('------props', props);
  const currData = props.route?.params?.tv === true ? tvSeries : movies;

  // console.log('------check', props.route?.params);
  const Genre = props.route?.params?.Genre;
  const Tv = props.route?.params?.tv;

  return (
    <View style={styles.mainWrapper}>
      <BackHeaderTitle Genre={Genre} Tv={Tv} />
      <SafeAreaView>
        <FlatList
          numColumns={3}
          data={currData}
          renderItem={({item}) => (
            <FastImage
              style={styles.logo}
              source={{
                uri: `${imageConfig}${item.poster_path}`,
              }}
            />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#100f13',
    padding: 10,
  },
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    padding: 5,
    fontWeight: '800',
  },
  logo: {
    width: 120,
    height: 180,
    margin: 2,
    borderRadius: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 10,
    width: 50,
  },
});

export default ViewListPage;
