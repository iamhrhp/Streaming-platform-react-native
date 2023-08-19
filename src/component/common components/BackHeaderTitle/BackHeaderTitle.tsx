import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FC} from 'react';

interface IProps {
  Genre?: string;
  Tv?: boolean | string;
}

const BackHeaderTitle: FC<IProps> = (props: IProps) => {
  const {navigate}: NavigationProp<ParamListBase> = useNavigation<any>();
  const {Genre, Tv} = props;
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigate('HomePage')}>
        <Icon name="arrow-back" size={20} color="white" />
      </TouchableOpacity>
      <Text style={styles.title}>
        {Genre} {Tv === true ? 'Shows' : 'Movies'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#000000',
    padding: 10,
    width: 50,
  },
  title: {
    color: '#ffffff',
    padding: 5,
    fontWeight: '800',
  },
});

export default BackHeaderTitle;
