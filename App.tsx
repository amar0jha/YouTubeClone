import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import RootNavigator from './src/navigator';

const App = () => {
  return (
    <View style={styles.container}>
      <RootNavigator />
    </View>
  )
}
export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

})