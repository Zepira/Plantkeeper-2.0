import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports';
import Home from './src/pages/Home';
import LoadingScreen from './src/pages/LoadingScreen';

Amplify.configure(awsconfig);
const isloading =false;

export default function App() {


  return (
    <View style={styles.container}>
      <StatusBar />
      {isloading && <LoadingScreen/>}
      <SafeAreaView>
      <Home />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});