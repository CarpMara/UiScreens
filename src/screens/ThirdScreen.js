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
import colors from "../theme/colors";
import images from "../theme/images";

const ThirdScreen = () => {
  return (
    <ScrollView style={style.container}>
      <ImageBackground
        style={style.image}
        source={require("../../assets/IMG.png")}
      >
        <Image style={style.blueCircle} source={images.thirdBlueIcon} />
        <View style={style.profContainer}>
          <Image
            style={style.profile}
            source={require("../../assets/Mask.png")}
          />
          <Text style={style.name}>Margaret Novakowska</Text>
        </View>
      </ImageBackground>

      <Image
        style={style.rectangle}
        source={require("../../assets/check.png")}
      />
      <View style={style.locationContainer}>
        <Image
          style={style.locationImage}
          source={require("../../assets/Vector1.png")}
        />
        <Text style={style.locationText}>Los Angeles</Text>
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
        <Text style={style.rentHistory}>Rent History</Text>
        <Text style={style.settings}>Settings</Text>
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
    justifyContent: "space-between",
  },
  blueCircle: {
    height: verticalScale(58),
    width: scale(48),
    marginLeft: scale(24),
    marginTop: scale(34),
  },
  profContainer: { flexDirection: "row" },
  profile: {
    height: verticalScale(112),
    width: scale(98),
    marginBottom: -verticalScale(39),
    marginLeft: scale(12),
    marginTop: scale(45),
  },
  rectangle: {
    height: verticalScale(30),
    width: scale(26),
    marginLeft: scale(80),
    marginTop: -verticalScale(82),
  },
  name: {
    fontSize: scale(22),
    fontFamily: "SF Pro Display",
    marginLeft: -scale(85),
    marginTop: verticalScale(170),
    fontWeight: "bold",
  },
  locationContainer: {
    flex: 1,
    flexDirection: "row",

    justifyContent: "space-between",
    alignSelf: "baseline",
    marginLeft: scale(28),
    marginTop: verticalScale(120),
  },
  locationImage: {
    height: verticalScale(12),
    width: scale(7),
  },
  locationText: {
    fontSize: scale(12),
    flexWrap: "wrap",
    marginLeft: scale(8),
    color: colors.horizText,
  },
  descriptionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",

    marginTop: verticalScale(14),
    marginLeft: scale(24),
  },
  descriptionImage: {
    width: scale(27),
  },
  descriptionText: {
    fontSize: scale(12),
    color: colors.horizText,
    marginTop: verticalScale(8),
    flexWrap: "wrap",
    lineHeight: 25,
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
});

export default ThirdScreen;
