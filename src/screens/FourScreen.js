import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import FlatListVertical from "../components/FlatList";

const FourScreen = () => {
  return (
    <ScrollView style={style.container}>
      <ImageBackground
        style={[style.image, {justifyContent:'space-between'}]}
        source={require("../../assets/IMG.png")}
      >
        <Image
          style={style.blueCircle}
          source={require("../../assets/blueCirle.png")}
        />
        <View
          style={{
           
            alignSelf: "baseline",
          }}
        >
            <Image
            style={style.profile}
            source={require("../../assets/profile.png")}
          />
          <Text style={style.name}>Jack Nicolson</Text>
        </View>
      </ImageBackground>

      <Image
        style={style.rectangle}
        source={require("../../assets/Rectangle.png")}
      />
      <View style={style.locationContainer}>
        <Image
          style={style.locationImage}
          source={require("../../assets/Vector.png")}
        />
        <Text style={style.locationText}>Los Angeles</Text>
      </View>
      <View style={style.starContainer}>
      <Image
            style={style.star}
            source={require("../../assets/star.png")}
          />
        <Image
            style={style.star}
            source={require("../../assets/star.png")}
          />
            <Image
            style={style.star}
            source={require("../../assets/star.png")}
          />
            <Image
            style={style.star}
            source={require("../../assets/star.png")}
          />
            <Image
            style={style.star}
            source={require("../../assets/star.png")}
          />
          <Text>433 Reviews</Text>
      </View>
      <View style={style.lanContainer}>
      <Image
            style={style.mess}
            source={require("../../assets/mess.jpg")}
          />
        <Text>Speaks in Deutsch, English, Russian</Text>
      </View>
      <View style={style.descriptionContainer}>
      <Image
          style={style.descriptionImage}
          source={require("../../assets/Line.png")}
        />
      <Text style={style.descriptionText}>
          Hi! I am a Margaret, I really like traveling to really different
          countries, most often I am looking for flats that have very friendly
          landlords in a good location.
        </Text>
       
      
      </View>
      <View style={style.switchMenu}>
      <Image
          style={style.messG}
          source={require("../../assets/messGreen.jpg")}
        />
         <Image
          style={style.phone}
          source={require("../../assets/phone.png")}
        />
      
      </View>
      <View style={style.flatListContainer}></View>
      <FlatListVertical />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: verticalScale(235),
    width: scale(375),
  },
  blueCircle: {
    height: verticalScale(40),
    width: scale(40),
    marginLeft:scale(24),
    marginTop:scale(64)
  },
  profile: {
     
    height: verticalScale(78),
    width: scale(78),
    marginBottom: -verticalScale(29),
    marginLeft:scale(12),
    marginTop:scale(50)

  },
  rectangle: {
    height: verticalScale(22),
    width: scale(22),
    marginLeft:scale(80),
    marginTop:-verticalScale(52)
  },
  name: {
    fontSize: scale(22),
    fontFamily: "SF Pro Display",
    marginLeft:scale(25),
    marginTop:verticalScale(40),
    
  },
  locationContainer: {
    flex: 1,
    flexDirection: "row",
  
    
            justifyContent: "space-between",
            alignSelf: "baseline",
    marginLeft:scale(28),
    marginTop:verticalScale(100),

    
  },
  locationImage: {
    
    height: verticalScale(8),
    width: scale(5),
  },
  locationText: {
    fontSize: scale(12),
    flexWrap: "wrap",
    marginLeft:scale(8),
    
  },
  descriptionContainer: {
 
    flexDirection: "row",
    flexWrap: "wrap",
   
    marginTop:verticalScale(24),
    marginLeft:scale(24)

    
  },
  descriptionImage: {
  
    width: scale(27),
  },
  descriptionText: {
    fontSize: scale(12),
  
    marginTop:verticalScale(8),
    flexWrap: "wrap",
  },
  switchMenu: {
    flex: 1,
    flexDirection: "row",
 
    marginTop:verticalScale(22),
    marginLeft:scale(24),
    
  },
  rentHistory: {
    
    fontSize: scale(14),
    fontFamily: "SF Pro Display",
    fontWeight: "bold",
    flexWrap: "wrap",
    marginRight:scale(24)
  },
  settings: {
    
    fontSize: scale(14),
    fontFamily: "SF Pro Display",
    flexWrap: "wrap",
  },
  flatListContainer: {
    flex: 1,
   
    flexDirection: "column",
    
    alignItems: "flex-start",

  },
  starContainer:{
    flexDirection:'row',
    flex:1,
    marginLeft:scale(24),
  },
  star:{
      height:scale(18),
      width:scale(18),
      marginRight:scale(8)  
  },
  lanContainer:{
    flexDirection:'row',
    flex:1,
    marginLeft:scale(24),
   
    marginTop:scale(10)
  },
  mess:{
    marginRight:scale(8),
    height:verticalScale(12),
    width:scale(12)
  },
  messG:{
    height:verticalScale(32),
    width:scale(32),
    marginRight:scale(8)
  },
  phone:{
    height:verticalScale(32),
    width:scale(32)
  }
});

export default FourScreen;
