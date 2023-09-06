import {View, StyleSheet, Image, Text} from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';
import {SliderData} from '../../../Data/SliderData';

const SliderPage = () => {
  return (
    <View style={{padding: 0}}>
      <SwiperFlatList
        data={SliderData}
        renderItem={({item}) => (
          <View>
            <Image style={styles.logo} alt="img" source={item.image} />
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 408,
    height: 320,
    margin: 2,
    borderRadius: 8,
    resizeMode: 'center',
  },
});

export default SliderPage;
