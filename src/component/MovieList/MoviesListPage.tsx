import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {FC} from 'react';
import {useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

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
  const {navigate}: NavigationProp<ParamListBase> = useNavigation<any>();
  const {movies, tvSeries} = useSelector((state: any) => state.moviesSlice);
  console.log('------props', props);
  const currData = props.route?.params?.tv === true ? tvSeries : movies;

  console.log('------check', props.route?.params?.Genre);
  const Genre = props.route?.params?.Genre;
  const Tv = props.route?.params?.tv;

  const handleBack = () => {
    navigate('Home');
  };

  // const Item = ({poster}: any) => (
  //   <View>
  //     <Image
  //       style={styles.logo}
  //       alt="img"
  //       source={{
  //         uri: `http://image.tmdb.org/t/p/w500/${item.poster_path}`,
  //       }}
  //     />
  //   </View>
  // );

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.headerWrapper}>
        <TouchableOpacity style={styles.button} onPress={handleBack}>
          <Icon name="arrow-back" size={20} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>
          {Genre} {Tv === true ? 'Shows' : 'Movies'}
        </Text>
      </View>
      <View>
        <SafeAreaView>
          <FlatList
            numColumns={3}
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
            keyExtractor={item => item.id}
          />
        </SafeAreaView>
      </View>
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
