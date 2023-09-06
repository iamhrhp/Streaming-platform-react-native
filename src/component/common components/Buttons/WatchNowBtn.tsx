import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigateHook} from '../../../helper/NavigateHook';
import Icon from 'react-native-vector-icons/Ionicons';

const WatchNowBtn = () => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => NavigateHook('HomePage')}>
      <Icon name="play" size={20} color="black" />
      <Text style={styles.WatchBtnText}> Watch Now</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  WatchBtnText: {
    marginLeft: 10,
    fontWeight: '800',
    color: 'black',
  },
});

export default WatchNowBtn;
