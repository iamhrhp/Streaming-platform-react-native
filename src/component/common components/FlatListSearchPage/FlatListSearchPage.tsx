import {Text, View, Image, StyleSheet} from 'react-native';
import {FC} from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {imageConfig} from '../../../api';

// interface IProps {}

const FlatListSearchPage = (data: any) => (
  <View style={styles.flatListContainer}>
    <Image
      style={styles.flatListImage}
      alt="img"
      source={{
        uri: `${imageConfig}${data.data.item.backdrop_path}`,
      }}
    />
    <Text style={styles.flatListTitle}>{data.data.item.title}</Text>
    <MIcon
      name="keyboard-arrow-right"
      color="white"
      style={styles.flatListarrowIcon}
    />
  </View>
);

const styles = StyleSheet.create({
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

export default FlatListSearchPage;
