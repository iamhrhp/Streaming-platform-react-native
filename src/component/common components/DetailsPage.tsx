import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import WatchNowBtn from './Buttons/WatchNowBtn';

const DetailsPage = () => {
  return (
    <ScrollView style={styles.mainWrapper}>
      <WatchNowBtn />
      <View style={{flexDirection: 'row'}}>
        {/* Genre List */}
        <Text style={{color: 'white', fontWeight: '800'}}>Genre</Text>
        <Text style={{color: 'white', fontWeight: '800'}}> | </Text>
        <Text style={{color: 'white', fontWeight: '800'}}>Genre</Text>
        <Text style={{color: 'white', fontWeight: '800'}}> | </Text>
      </View>
      <View>
        {/* Paragraph-- */}
        <Text style={{color: 'silver'}}>
          two brothers vibhooti and chiraunji have fought thier two brothers
          vibhooti and chiraunji have fought thier two brothers vibhooti and
          chiraunji have fought thier
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity style={{alignItems: 'center', marginRight: 20}}>
          <MIcon name="add" size={30} color="white" />
          <Text style={{color: 'white', fontWeight: '800'}}>WatchList</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center', marginRight: 20}}>
          <MCIcon name="share-outline" size={30} color="white" />
          <Text style={{color: 'white', fontWeight: '800'}}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems: 'center', marginRight: 20}}>
          <MIcon name="file-download" size={30} color="white" />
          <Text style={{color: 'white', fontWeight: '800'}}>Download</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    backgroundColor: '#100f13',
    padding: 10,
  },
});

export default DetailsPage;
