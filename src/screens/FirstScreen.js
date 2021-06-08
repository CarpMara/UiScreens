import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import FlatListVertical from "../components/FlatList";
import FlatListHorizontal from "../components/FlatListHorizontal";
import images from "../theme/images";
import colors from "../theme/colors";
const FirstScreen = () => {
  const [number, onChangeNumber] = useState(null);
  return (
    <ScrollView style={style.container}>
      <View style={style.inputContainer}>
        <Image style={style.blueCircle} source={images.firstBlueIcon} />
        <View style={style.searchContainer}>
          <Image style={style.search} source={images.searchIcon} />
          <TextInput
            style={style.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Search via City"
          />
        </View>
      </View>
      <View style={style.horizScroll}>
        <ScrollView horizontal={true}>
          <Text style={style.horizText}>3 Guest</Text>
          <Text style={style.horizText}>Apartment</Text>
          <Text style={style.horizText}>WIFI</Text>
          <Text style={style.horizText}>Restaurant</Text>
          <Text style={style.horizText}>Pool</Text>
        </ScrollView>
      </View>

      <View style={style.flatListContainer}></View>
      <FlatListVertical />
      <Text style={style.offer}>Other Offers</Text>
      <FlatListHorizontal />
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
    height: verticalScale(66),
    width: scale(58),
    marginTop: scale(30),
    marginLeft: scale(22),
    marginBottom: scale(20),
  },
  profile: {
    height: verticalScale(78),
    width: scale(78),
    marginBottom: -verticalScale(29),
    marginLeft: scale(12),
    marginTop: scale(50),
  },
  rectangle: {
    height: verticalScale(22),
    width: scale(22),
    marginLeft: scale(80),
    marginTop: -verticalScale(52),
  },
  name: {
    fontSize: scale(22),
    fontFamily: "SF Pro Display",
    marginLeft: scale(25),
    marginTop: verticalScale(40),
  },
  locationContainer: {
    flex: 1,
    flexDirection: "row",

    justifyContent: "space-between",
    alignSelf: "baseline",
    marginLeft: scale(28),
    marginTop: verticalScale(100),
  },
  locationImage: {
    height: verticalScale(8),
    width: scale(5),
  },
  locationText: {
    fontSize: scale(12),
    flexWrap: "wrap",
    marginLeft: scale(8),
  },
  offer: {
    flex: 1,
    marginLeft: scale(28),
    fontSize: scale(16),
    fontWeight: "bold",
  },
  descriptionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",

    marginTop: verticalScale(24),
    marginLeft: scale(24),
  },
  descriptionImage: {
    width: scale(27),
  },
  descriptionText: {
    fontSize: scale(12),

    marginTop: verticalScale(8),
    flexWrap: "wrap",
  },
  switchMenu: {
    flex: 1,
    flexDirection: "row",

    marginTop: verticalScale(22),
    marginLeft: scale(24),
  },
  rentHistory: {
    fontSize: scale(14),
    fontFamily: "SF Pro Display",
    fontWeight: "bold",
    flexWrap: "wrap",
    marginRight: scale(24),
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
  starContainer: {
    flexDirection: "row",
    flex: 1,
    marginLeft: scale(24),
  },
  star: {
    height: scale(18),
    width: scale(18),
    marginRight: scale(8),
  },
  lanContainer: {
    flexDirection: "row",
    flex: 1,
    marginLeft: scale(24),

    marginTop: scale(10),
  },
  mess: {
    marginRight: scale(8),
    height: verticalScale(12),
    width: scale(12),
  },
  messG: {
    height: verticalScale(32),
    width: scale(32),
    marginRight: scale(8),
  },
  phone: {
    height: verticalScale(32),
    width: scale(32),
  },
  horizScroll: {
    flex: 1,
    marginLeft: scale(24),
    justifyContent: "space-around",

    flexDirection: "row",
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
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    marginTop: scale(10),
    height: 40,
    margin: 12,

    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.search,
    paddingRight: 0,

    marginRight: scale(24),
    marginBottom: scale(20),
    marginTop: scale(34),

    paddingLeft: 10,
    borderRadius: scale(40),
  },
  search: {
    marginLeft: scale(15),
    height: scale(8),
    width: scale(8),
    marginTop: scale(18),
    padding: 10,
  },
});

export default FirstScreen;
