import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';

import { StyleSheet, View, Text, Image, ImageBackground, ActivityIndicator, SafeAreaView, SectionList, StatusBar, FlatList } from 'react-native';

const DATA = [
  {
    id: "1",
    image: "https://plantkeeper-images103726-dev.s3.ap-southeast-2.amazonaws.com/blog1.png",
    title: "How to garden",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    id: "2",
    image: "https://plantkeeper-images103726-dev.s3.ap-southeast-2.amazonaws.com/blog2.png",
    title: "Plant things",
    data: ["French Fries", "Onion Rings", "Fried Shrimps", "French Fries", "Onion Rings", "Fried Shrimps", "French Fries", "Onion Rings", "Fried Shrimps", "French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    id: "3",
    image: "https://plantkeeper-images103726-dev.s3.ap-southeast-2.amazonaws.com/blog3.png",
    title: "Veggies, hey?",
    data: ["Water", "Coke", "Beer"]
  },
  {
    id: "4",
    image: "https://plantkeeper-images103726-dev.s3.ap-southeast-2.amazonaws.com/blog4.png",
    title: "Seeds!!",
    data: ["Cheese Cake", "Ice Cream"]
  }
];


const BlogSection = () => {

  const blogRenderItem = ({ item, image }) => {
    return (
      <View style={styles.item}>
        <ImageBackground
          source={{ uri: item.image }} style={styles.image} >
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </ImageBackground>
      </View>
    )
  };


  return (
    <View style={{ backgroundColor: 'white' }}>
      <Text style={{ marginLeft: 8, fontSize: 38, fontWeight: 'bold' }}>Blog</Text>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={(item) => blogRenderItem(item, item.image)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 7,
    marginVertical: 8
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  textContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)', height: '100%', width: '100%', justifyContent: "center",
    alignItems: "center"
  },
  image: {
    overflow: 'hidden',
    borderRadius: 30,
    height: 400, width: 300
  }
});

export default BlogSection;
