import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';

import { StyleSheet, View, Text, Image, ImageBackground, ActivityIndicator, SafeAreaView, SectionList, StatusBar, FlatList } from 'react-native';

const DATA = [
  {
    id: "1",
    image: "https://plantkeeper-images103726-dev.s3.ap-southeast-2.amazonaws.com/blog1.png",
    title: "Carrot",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    id: "2",
    image: "https://plantkeeper-images103726-dev.s3.ap-southeast-2.amazonaws.com/blog2.png",
    title: "Potato",
    data: ["French Fries", "Onion Rings", "Fried Shrimps", "French Fries", "Onion Rings", "Fried Shrimps", "French Fries", "Onion Rings", "Fried Shrimps", "French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    id: "3",
    image: "https://plantkeeper-images103726-dev.s3.ap-southeast-2.amazonaws.com/blog3.png",
    title: "Mint",
    data: ["Water", "Coke", "Beer"]
  },
  {
    id: "4",
    image: "https://plantkeeper-images103726-dev.s3.ap-southeast-2.amazonaws.com/blog4.png",
    title: "Rosemary",
    data: ["Cheese Cake", "Ice Cream"]
  }
];


const GardenSection = () => {

  const gardenRenderItem = ({ item, image }) => {
    return (
      <View style={styles.item}>
       
       <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
        
        </View>
      </View>
    )
  };


  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text style={{ marginLeft: 8, fontSize: 38, fontWeight: 'bold' }}>What's Growing</Text>
      <FlatList
      
        data={DATA}
        renderItem={(item) => gardenRenderItem(item, item.image)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 100,
    width: '100%',
   
    justifyContent: "center",
    alignItems: "center",
    marginVertical:7
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  textContainer: {
    margin:7, borderRadius: 30,
    backgroundColor:'#f1f1f1',
    height: '100%', 
    width: '95%', 
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    overflow: 'hidden',
    borderRadius: 40,
    height: 400, width: 300
  }
});

export default GardenSection;
