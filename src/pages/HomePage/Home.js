import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';

import { StyleSheet, View, Text, Image, ImageBackground, ActivityIndicator, SafeAreaView, SectionList, StatusBar, FlatList } from 'react-native';
import ActivitySection from './sections/activitySection';
import BlogSection from './sections/blogSection';
import GardenSection from './sections/gardenSection';

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
const Home = () => {

  return (
    <View style={{ backgroundColor: 'white' }}>
      {/* <ScrollView>
      <Text style={styles.heading}>Hi Alana, how's the garden growing?</Text>
      <GardenSection/>
  <BlogSection/>
 
      </ScrollView> */}
 
<SectionList
      sections={[
        {type: 'Header', data:[{}] },
        {type: 'Activity', data:[{}] },
        {type: 'Garden', data:[{}] }, // Static sections.
        {type: 'Blog', data:[{}]} // Dynamic section data replaces the FlatList.
      ]}
      keyExtractor={(item, index) => index}
      renderItem={({item, section}) => {
        switch (section.type) {
          // Different components for each section type.
          case 'Header':
            return<Text style={styles.heading}>Hi Alana, how's the garden growing?</Text>;
            case 'Activity':
              return <ActivitySection />;
          case 'Garden':
            return <GardenSection />;
          case 'Blog':
            return <BlogSection  />;
          default:
            return null;
        }
      }}
    
    />
     
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {

    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    paddingBottom: 100

  },
});

export default Home;
