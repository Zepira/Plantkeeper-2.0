import React, { useCallback, useState } from 'react';

import { StyleSheet, View, Text, ImageBackground, ActivityIndicator, StatusBar } from 'react-native';

const LoadingScreen = () => {

  const styles = StyleSheet.create({
    heading: {

      textAlign: 'center',
      color: 'white',
      fontSize: 50,
      paddingBottom: 100

    }
  });


  return (
    <View >
      <ImageBackground
        source={require('../assets/images/card.png')} style={{ height: '100%' }} >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'black', }}>
          <Text style={styles.heading}>Plantkeeper</Text>
          <ActivityIndicator size="large"></ActivityIndicator>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LoadingScreen;
