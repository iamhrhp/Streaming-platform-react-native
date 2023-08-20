import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

export const {navigate: NavigateHook}: NavigationProp<ParamListBase> =
  useNavigation<any>();
