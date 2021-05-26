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

const FlatListVertical = () =>{
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
            imgHeart:require('../../assets/heart.png'),
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
            renderItem={({ item }) => {
                return  (
               <View > 
                <ImageBackground style={style.image} source={item.imgUrl}>
                  <View style={style.heartContainer}>
                  <Text style={style.miles}>2.3 miles</Text>
                 <Image
          style={style.heart}
          source={require("../../assets/heart.png")}
        />
        
        </View>
                  
                   </ImageBackground>
                <View style={style.periodContainer}>
               
                <Text style={style.period}>{item.period}</Text>
                <Text style={style.price}>{item.price}</Text>
                </View>
                <Text style={style.text}>{item.title}</Text>
                <View style={style.locationContainer}>
        <Image
          style={style.locationImage}
          source={require("../../assets/Vector.png")}
        />
        <Text style={style.locationText}>Los Angeles</Text>
      </View>
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
      marginTop:scale(12),
      fontSize:17
    },
    locationContainer: {
      flex: 1,
      flexDirection: "row",
     
      
              justifyContent: "space-between",
              alignSelf: "baseline",
      marginLeft:scale(28),
      marginBottom:verticalScale(10),
  
      //justifyContent:'space-evenly'
    },
    locationImage: {
      //flex:,
      height: verticalScale(8),
      width: scale(5),
    },
    locationText: {
      fontSize: scale(12),
      flexWrap: "wrap",
      marginLeft:scale(8),
      //flex:2
    },
    heart: {
      height: verticalScale(40),
      width: scale(40),

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
      // flex: 1,
      flexDirection: "row",
    }
    
});

export default FlatListVertical;