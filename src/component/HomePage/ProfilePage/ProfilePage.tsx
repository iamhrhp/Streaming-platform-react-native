import {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ws} from '../../../Theme/ResponsiveDesign';

interface IProps {}

const ProfilePage: FC<IProps> = (props: IProps) => {
  return (
    <View style={styles.mainWrapper}>
      <Text ellipsizeMode="tail" numberOfLines={1} style={{width: 200}}>
        Profile Profile Profile Profile Profile Profile Profile Profile Profile
        Profile
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    width: ws(360),
    padding: ws(10),
  },
});

export default ProfilePage;
