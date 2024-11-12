import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Text,SafeAreaView, TouchableOpacity } from 'react-native';
import colors from '../../theme/color';
import strings from '../../theme/string';

const Subscription = () => {
  const navigation = useNavigation();

  const handleVideo = () => {
    navigation.navigate('VideoPlayer');
  };

return(
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <TouchableOpacity onPress={handleVideo}>
    <View style={{backgroundColor:colors.buttonGreen,borderRadius:9}}>
    <Text style={{color:colors.white,textAlign:'center',fontWeight:'600',fontSize:16,padding:15}}>{strings.Shorts}</Text>
  </View>
    </TouchableOpacity>
  </View>
)
}
export default Subscription
