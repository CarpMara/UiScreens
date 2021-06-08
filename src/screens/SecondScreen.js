import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { FlatListSlider } from "react-native-flatlist-slider";

import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import FlatListVertical from "../components/FlatList";
import SwipeFlatList from "../components/SwipeFlatList";
import colors from "../theme/colors";
import images from "../theme/images";

const SecondScreen = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    //setVisible(!visible);
    setVisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <View style={style.vContainer}>
      <ScrollView style={style.container}>
        <SwipeFlatList />

        <View style={style.iContainer}>
          <Text style={style.title}>Luxury Apartments</Text>
          <Image
            style={style.profileImg}
            source={require("../../assets/profile.png")}
          />
        </View>
        <View style={style.starContainer}>
          <Image style={style.star} source={images.starIcon} />
          <Image style={style.star} source={images.starIcon} />
          <Image style={style.star} source={images.starIcon} />
          <Image style={style.star} source={images.starIcon} />
          <Image style={style.star} source={images.starIcon} />
        </View>

        <Text style={style.spec}>Specifications</Text>
        <View style={style.horizScroll}>
          <ScrollView horizontal={true}>
            <Text style={style.horizText}>3 Bathrooms</Text>
            <Text style={style.horizText}>WIFI</Text>
            <Text style={style.horizText}>3 Bathrooms</Text>
            <Text style={style.horizText}>3 Bathrooms</Text>
          </ScrollView>
        </View>

        <View style={style.descriptionContainer}>
          <Text style={style.desc}>Description</Text>
          <Text style={style.descriptionText}>
            Nullam hendrerit lectus non pretium fermentum. Donec faucibus
            sodales ante, nec finibus quam lacinia sit amet. Nunc ut posuere
            erat. Proin convallis odio elementum sem vestibulum
          </Text>
        </View>
        <View>
          <Text style={style.about}>About this space</Text>
        </View>
      </ScrollView>
      <View style={style.fContainer}>
        <View style={style.fButton}>
          <Text style={style.fPrice}>150$</Text>
          <Text style={style.fPeriod}>/night</Text>
        </View>
        <TouchableOpacity style={style.btn}>
          <Text style={style.booking}>Booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  vContainer: {
    flex: 1,
  },

  image: {
    flex: 1,
  },
  desc: {
    flex: 1,
    fontSize: scale(16),
    fontWeight: "bold",
    marginTop: scale(18),
  },
  iContainer: {
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageContainer: {},
  btn: {
    backgroundColor: colors.btn,
    borderRadius: scale(35),
    flex: 1,
    marginVertical: scale(15),
    marginHorizontal: scale(15),
  },
  fPeriod: { color: colors.fText, marginTop: scale(10) },
  fPrice: { color: colors.fText, fontSize: scale(22), fontWeight: "bold" },
  about: {
    flex: 1,
    marginLeft: scale(24),
    marginTop: scale(8),
    fontSize: scale(16),
    fontWeight: "bold",
  },
  profileImg: {
    alignSelf: "flex-end",
    marginTop: scale(30),
    marginRight: scale(24),
    height: scale(40),
    width: scale(40),
  },
  starContainer: {
    flexDirection: "row",
    flex: 1,
    marginLeft: scale(24),
  },
  booking: { color: colors.booking, textAlign: "center", marginTop: scale(6) },
  star: {
    height: scale(18),
    width: scale(18),
    marginRight: scale(8),
  },
  fContainer: {
    backgroundColor: colors.booking,
    marginBottom: scale(0),
    flexDirection: "row",
  },
  fButton: {
    flexDirection: "row",
    flex: 1,
    marginVertical: scale(15),
    marginHorizontal: scale(15),
  },
  spec: {
    flex: 1,
    marginLeft: scale(24),
    marginTop: scale(18),
    marginBottom: scale(8),
    fontSize: scale(16),
    fontWeight: "bold",
  },
  horizScroll: {
    flex: 1,
    marginLeft: scale(24),
    justifyContent: "space-around",

    flexDirection: "row",
  },
  title: {
    color: colors.title,
    marginLeft: scale(24),
    fontSize: scale(24),
    marginTop: scale(24),
    fontWeight: "bold",
  },
  horizText: {
    marginRight: scale(8),
    paddingRight: scale(8),
    paddingLeft: scale(8),
    paddingBottom: scale(2),
    paddingTop: scale(2),
    backgroundColor: colors.search,

    color: colors.horizText,
    borderRadius: scale(4),
    fontSize: scale(14),
  },
  descriptionContainer: {
    flex: 1,

    marginTop: verticalScale(14),
    marginLeft: scale(24),
  },

  descriptionText: {
    fontSize: scale(12),
    flex: 1,
    marginTop: verticalScale(8),
    color: colors.horizText,
    lineHeight: 25,
  },
});

export default SecondScreen;
