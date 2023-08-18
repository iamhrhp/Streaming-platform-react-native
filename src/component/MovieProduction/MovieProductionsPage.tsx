import {FC} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

interface IProps {}

const MovieProductionsPage: FC<IProps> = () => {
  const imageWidth = wp('100%'); // 50% of the screen width
  const imageHeight = hp('30%'); // 30% of the screen height

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
            //   style={{width: imageWidth, height: imageHeight}}
            style={{width: 80, marginLeft: 22}}
            source={require('../../Images/disney.png')}
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
            //   style={{width: imageWidth, height: imageHeight}}
            source={require('../../Images/pixar.png')}
            resizeMode="center"
            style={{width: 80, marginLeft: 22}}
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
            //   style={{width: imageWidth, height: imageHeight}}
            source={require('../../Images/marvel.png')}
            resizeMode="center"
            style={{width: 80, marginLeft: 22}}
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
            //   style={{width: imageWidth, height: imageHeight}}
            style={{width: 80, marginLeft: 22}}
            source={require('../../Images/starwars.png')}
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
            //   style={{width: imageWidth, height: imageHeight}}
            source={require('../../Images/natgeo.png')}
            resizeMode="center"
            style={{width: 80, marginLeft: 22}}
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
            //   style={{width: imageWidth, height: imageHeight}}
            source={require('../../Images/hotstar.png')}
            resizeMode="center"
            style={{
              width: 80,
              marginLeft: 22,
            }}
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
    // width: imageWidth,
    // height: imageHeight,
  },
});

export default MovieProductionsPage;
