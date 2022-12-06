import React, { useCallback, useState } from 'react';

import { StyleSheet, View, Text,Image,  ImageBackground, ActivityIndicator,  SafeAreaView, SectionList, StatusBar, FlatList } from 'react-native';

const DATA = [
  {
    id:"1",
    image:"blog1",
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    id:"2",
    image:"blog2",
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps","French Fries", "Onion Rings", "Fried Shrimps","French Fries", "Onion Rings", "Fried Shrimps","French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    id:"3",
    image:"blog3",
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    id:"4",
    image:"blog4",
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <ImageBackground
        source={require('../assets/images/blog1.png')} style={styles.image} >
    <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  </View>
);

const Home = () => {

  const asdsd = '../assets/images/blog1.png'

  const blogRenderItem = ({ item, image }) => {
    console.log('ALANA',image); 
   const asdasd = 'blog4';
    return(
    <View style={styles.item}>
    <ImageBackground
        source={require('../assets/images/' + asdasd +'.png')} style={styles.image} >
    <Text style={styles.title}>{item.title}</Text>
    </ImageBackground>
  </View>
  )};


  return (
        <View style={{ backgroundColor: 'white'}}>
          <Text style={styles.heading}>Hi Alana, how's the garden growing?</Text>
          <Text>Oh hey! it's a blog!</Text>
          {/* <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    /> */}
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
  heading: {

    textAlign: 'center',
    color: 'black',
    fontSize: 30,
    paddingBottom: 100

  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    padding: 7,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    color:'red',
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24,
    border: '2px solid red'
  },
  image:{
    overflow: 'hidden',
    borderRadius:40,
    height: 400, width: 300 
  }
});

export default Home;
