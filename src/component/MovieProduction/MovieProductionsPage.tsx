import {FC} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {ws} from '../../Theme/ResponsiveDesign';

interface IProps {}

const MovieProductionsPage: FC<IProps> = () => {
  return (
    <View style={styles.mainView}>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: 2,
            height: 80,
            borderRadius: 6,
          }}>
          <Image
            style={styles.prodImage}
            source={require('../../../assets/Images/disney.png')}
            resizeMode="center"
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: 2,
            height: 80,
            borderRadius: 6,
          }}>
          <Image
            source={require('../../../assets/Images/pixar.png')}
            resizeMode="center"
            style={styles.prodImage}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: 2,
            height: 80,
            borderRadius: 6,
          }}>
          <Image
            source={require('../../../assets/Images/marvel.png')}
            resizeMode="center"
            style={styles.prodImage}
          />
        </View>
      </View>
      <View
        style={{
          flexWrap: 'wrap',
          flexDirection: 'row',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: 2,
            height: 80,
            borderRadius: 6,
          }}>
          <Image
            style={styles.prodImage}
            source={require('../../../assets/Images/starwars.png')}
            resizeMode="center"
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: 2,
            height: 80,
            borderRadius: 6,
          }}>
          <Image
            source={require('../../../assets/Images/natgeo.png')}
            resizeMode="center"
            style={styles.prodImage}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            margin: 2,
            height: 80,
            borderRadius: 6,
          }}>
          <Image
            source={require('../../../assets/Images/hotstar.png')}
            resizeMode="center"
            style={styles.prodImage}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {},
  wrapperImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191c23',
    // backgroundColor: 'blue',
    // margin: 20,
  },
  prodImage: {
    width: ws(80),
    marginLeft: 20,
  },
});

export default MovieProductionsPage;
