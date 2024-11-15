import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import styles from './style';
import FooterItems from '../../components/footer';
import videos from '../../../videos.json'
import HomeVideoItems from '../../components/card';
import { SafeAreaView } from 'react-native-safe-area-context';

const PlayerScreen = ({route}: any) => {
  const {videoData} = route?.params;
//   const {videoData} = useRoute()?.params

// const handleVideo = (video) => {
//     navigation.navigate('PlayerScreen', { videoData: video });
//   };


  const renderItem = ({item}:any) => <HomeVideoItems video={item} needProfileIcon needMoreIcon/>;
  const handleKeyExtractor = (item:any) => item.id.toString();

  return (
     <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{uri: videoData.videoImage}} style={styles.imageSize} />
        <View style={styles.videoTimeContainer}>
          <Text style={styles.timeText}>{videoData.videoTime}</Text>
        </View>
      </View>
      <TouchableOpacity>
      <FooterItems video={videoData} needProfileIcon={false} needMoreIcon={false}/>
      </TouchableOpacity>
      <FlatList
        data={videos}
        renderItem={renderItem}
        keyExtractor={handleKeyExtractor}
        bounces={false}
        style={{marginTop: 30}}
      />

    </View>
     </SafeAreaView>
  );
};

export default PlayerScreen;
