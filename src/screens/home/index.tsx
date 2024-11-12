import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import colors from '../../theme/color';
import strings from '../../theme/string';
import HomeHeader from '../../components/header';
import styles from './style';
import {Images} from '../../assets';
import HomeVideoItems from '../../components/card';
import videosData from '../../../videos.json';

const Home = () => {
  
  const navigation = useNavigation();

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(videosData);
  }, []);

  const renderItem = ({item}:any) => <HomeVideoItems video={item} onPress={() => handleVideo(item)} needProfileIcon needMoreIcon/>;
  const handleKeyExtractor = (item:any) => item.id.toString();

  const handleVideo = (video:any) => {
    navigation.navigate('PlayerScreen', { videoData: video});
  };

  return (
    <View style={styles.container}>
      <HomeHeader />
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={handleKeyExtractor}
        bounces={false}
        style={{marginTop: 20}}
      />
     
    </View>
  );
};
export default Home;
