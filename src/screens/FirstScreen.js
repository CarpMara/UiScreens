import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  TextInput
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import FlatListVertical from "../components/FlatList";
import FlatListHorizontal from "../components/FlatListHorizontal";
const FirstScreen = () => {
    const [number, onChangeNumber] = React.useState(null);
  return (
    
    <ScrollView style={style.container}>
        <View style={style.inputContainer}>
        <Image
          style={style.blueCircle}
          source={require("../../assets/blueCirle.png")}
        />
        <View style={{  flex:1 , flexDirection: 'row', backgroundColor:'grey',paddingTop: 0,
    paddingRight: 0,
   
    marginHorizontal:scale(10),
    marginVertical:scale(40),
    marginBottom:scale(20),
    marginTop:scale(20),
    
    paddingLeft: 20,
     borderRadius:scale(40)}}>
        <Image
          style={style.search}
          source={require("../../assets/search.png")}
        />
        <TextInput
        style={style.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Search via City"
        // keyboardType="numeric"
      />
      </View>
        </View>
    <View style={style.horizScroll}>
     <ScrollView horizontal={true} >

<Text style={style.horizText}>3 Guest</Text>
<Text style={style.horizText}>Apartment</Text>
<Text style={style.horizText}>WIFI</Text>
<Text style={style.horizText}>Restaurant</Text>
<Text style={style.horizText}>Pool</Text>



</ScrollView>
</View> 
      
      <View style={style.flatListContainer}></View>
      <FlatListVertical />
      <Text style={{flex:1,marginLeft:scale(28),fontSize:scale(16)}}>Other Offers</Text>
      <FlatListHorizontal/>
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
    marginTop:scale(30),
    marginLeft:scale(2),
    marginBottom:scale(20),
   
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
  },
  horizScroll:{

    
    flex:1,
    marginLeft:scale(24),
    justifyContent:'space-around',
    
   
    flexDirection:'row'
    
  },
  horizText:{
      marginRight:scale(8),
     
      backgroundColor:'#E4E4E7',
      
      color:'#8F92A1',
      borderRadius:scale(4),
      fontSize:scale(14)
  },
  inputContainer:{
      flex:2,
      justifyContent:'space-around',
      flexDirection:'row',
      marginBottom:scale(10),
      

  },
  input: {
    
    height: 40,
    margin: 12,
  
    borderRadius:scale(40),
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  search:{
      marginLeft:scale(15),
      height:scale(8),
      width:scale(8),
      marginTop:scale(15),
      padding: 10,

  }
});

export default FirstScreen;
