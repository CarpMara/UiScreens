import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

const FlatListHorizontal = () =>{
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          imgUrl:require('../../assets/house.png'),
          price: '$233',
          period:'/day',
          title: 'Sunny Apartment',
          imgLocation:require('../../assets/Vector.png'),
          location:'Los Angeles'
        },
        {
            id: 'bd7acbea-w3e4-46c2-aed5-3ad53abb28ba',
            imgUrl:require('../../assets/house.png'),
            price: '$233',
            period:'/day',
            title: 'Sunny Apartment',
            imgLocation:require('../../assets/Vector.png'),
            location:'Los Angeles'
          },
          {
            id: 'bd7acbea-c1b1-i89u-aed5-3ad53abb28ba',
            imgUrl:require('../../assets/house.png'),
            price: '$233',
            period:'/day',
            imgHeart:require('../../assets/whiteheart.jpg'),
            title: 'Sunny Apartment',
            imgLocation:require('../../assets/Vector.png'),
            location:'Los Angeles'
          },
        
       
      ];
      
      return (
       <ScrollView style={style.listContainer} >
        <FlatList
             style={{flex:1}}
            keyExtractor={(DATA) => DATA.id}
            data={DATA} 
            horizontal={true}
            renderItem={({ item }) => {
                return  (
               <View > 
                <ImageBackground style={style.image} source={item.imgUrl}>
                  <View style={style.heartContainer}>
                  <Text style={style.miles}>2.3 miles</Text>
                 <Image
          style={style.heart}
          source={require("../../assets/whiteheart.jpg")}
        />
        
        </View>
       
                <Text style={style.text}>{item.title}</Text>
                <View style={{flex:1,marginLeft:scale(24),marginTop:scale(5),flexDirection:'row'
             
              }}>
        <Image
          style={style.locationImage}
          source={require("../../assets/Vector.png")}
        />
        <Text style={style.locationText}>Los Angeles</Text>
   
      </View>
                  
                   </ImageBackground>
       
                </View>
                
                );


            }}
          />
           </ScrollView>
        );
      
};
const style =  StyleSheet.create({
    listContainer:{
        flex:1,
      marginTop:verticalScale(24),
         flexDirection:'column',
         
       
    },
    image:{
      
        height:verticalScale(185),
        width:scale(300),
        marginLeft:scale(24),
        marginRight:scale(24)
        
    },
    price:{
      color:'#049FFF',
   
     
    },
    period:{
      
      marginRight:scale(24)
    },
    periodContainer:{
      marginRight:scale(54),
      flexDirection:"row-reverse"

    },
    text:{
      marginLeft:scale(24),
      marginTop:scale(50),
      fontSize:17,
      color:'white'
    },
    locationContainer: {
      flex: 1,
      
              alignSelf: "baseline",
      marginLeft:scale(28),
      
       marginTop:scale(60) 
     
    },
    locationImage: {
   
      height: verticalScale(8),
      width: scale(5),
    },
    locationText: {
      fontSize: scale(12),
    
      color:'white',
      marginBottom:scale(8),
      
    },
    heart: {
      height: verticalScale(40),
      width: scale(40),
    color:'white',
      marginTop:scale(15)
    },
    miles:{
      width:87,
      height:24,
      marginTop:scale(15),
      borderRadius:scale(4),
      backgroundColor:'#EC6B6C',
      color:'white',
      textAlign:'center'
    },
    heartContainer:{
     justifyContent:'space-around',
     
      flexDirection: "row",
    }
    
});

export default FlatListHorizontal;