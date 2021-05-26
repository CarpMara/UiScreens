import React ,  { useState }  from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  
  ScrollView,
} from "react-native";


import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import FlatListVertical from "../components/FlatList";

const SecondScreen = () => {
    const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
};
  return (
      <View style={{flex:1}}>
    <ScrollView style={style.container}>
<View style={style.imageContainer}>
<ImageBackground
        style={[style.image, {justifyContent:'space-between', }]}
        source={require("../../assets/IMG2.png")}
      >
          <View style={{flex:1,flexDirection:'row',   marginLeft:scale(159), marginTop:scale(313)}}>
        <Image
        style={{ marginRight:scale(8)}}
          source={require("../../assets/Ellipse3.png")}
        /> 
         <Image
         style={{ marginRight:scale(8)}}
          source={require("../../assets/Ellipse3.png")}
        /> 
         <Image
          style={{ marginRight:scale(8)}}
          source={require("../../assets/Ellipse3.png")}
        /> 
         <Image
          style={{ marginRight:scale(8)}}
          source={require("../../assets/Ellipse3.png")}
        /> 
        </View>
        </ImageBackground> 
        </View>
        <View style={{flex:3}}>
            <Text style={{flex:1,color:'#2E3034',marginLeft:scale(24), fontSize:scale(24),marginTop:scale(24)}}>Luxury Apartments</Text>
            <Image
          style={{ alignSelf:'flex-end',flex:1, marginRight:scale(24)}}
          source={require("../../assets/profile.png")}
        /> 
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
         
      </View>
        </View>
        <Text style={{flex:1,marginLeft:scale(24),marginTop:scale(8), marginBottom:scale(8),fontSize:scale(16)}}>Specifications</Text>
        <View style={style.horizScroll}>
     <ScrollView horizontal={true} >

<Text style={style.horizText}>3 Guest</Text>
<Text style={style.horizText}>Apartment</Text>
<Text style={style.horizText}>WIFI</Text>
<Text style={style.horizText}>Restaurant</Text>
<Text style={style.horizText}>Pool</Text>


</ScrollView>
</View> 

<View style={style.descriptionContainer}>
        
<Text style={{flex:1,fontSize:scale(16)}}  >Description</Text>
      <Text style={style.descriptionText}>
          Hi! I am a Margaret, I really like traveling to really different
          countries, most often I am looking for flats that have very friendly
          landlords in a good location.
        </Text>
       
      
      </View>
      <View>
          <Text  style={{flex:1,marginLeft:scale(24), marginTop:scale(8),fontSize:scale(16)}}>About this space</Text>
      </View>
      
        
    </ScrollView>
    <View style={{backgroundColor:'white',  marginBottom:scale(0) ,  flexDirection:'row' }}>
            <View style={{flexDirection:'row', flex:1 , marginVertical:scale(15) , marginHorizontal:scale(15)}}>
            <Text style={{color:'black', fontSize:scale(22)}}>150$</Text>
            <Text style={{color:'black'}}>/night</Text>
            </View>
            <TouchableOpacity
        style={{backgroundColor:'blue', borderRadius:scale(35) ,flex:1 ,  marginVertical:scale(15) , marginHorizontal:scale(15) }}
        
      >
        <Text style={{color:'white', textAlign:'center'}}>Booking</Text>
      </TouchableOpacity>
        </View>
    </View>
  );
};

const style = StyleSheet.create({
image:{
    borderBottomLeftRadius:scale(45),
    borderBottomRightRadius:scale(45),
    width:scale(375),
    height:scale(345)
},
imageContainer:{
   

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
  descriptionContainer: {
     flex: 1,
    
     marginTop:verticalScale(14),
     marginLeft:scale(24)
 
     
   },
  
   descriptionText: {
     fontSize: scale(12),
     flex:1,
     marginTop:verticalScale(8),
     
     
   },
});

export default SecondScreen;