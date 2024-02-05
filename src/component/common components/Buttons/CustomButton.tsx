import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigateHook} from '../../../helper/NavigateHook';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {hs, ms, ws} from '../../../Theme/ResponsiveDesign';
import {FC} from 'react';

interface IProps {
  title: string;
  buttonBackgroundColor?: string;
  textColor?: string;
  icon?: any;
  iconColor?: string;
  width?: number;
  height?: number;
}

const CustomButton: FC<IProps> = (props: IProps) => {
  console;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: props.buttonBackgroundColor
              ? props.buttonBackgroundColor
              : 'black',
            width: props.width ? props.width : ws(100),
            height: props.height ? props.height : hs(34),
          },
        ]}>
        {props.icon}
        <Text
          style={
            (styles.buttonText,
            {
              color: props.textColor ? props.textColor : 'white',
            })
          }>
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: hs(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: ms(4),
    flexDirection: 'row',
  },
  buttonText: {
    textTransform: 'capitalize',
    fontWeight: '800',
    fontSize: 14,
  },
});

export default CustomButton;
