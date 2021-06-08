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
import images from "../theme/images";
import colors from "../theme/colors";
const FourScreen = () => {
  return (
    <ScrollView style={style.container}>
      <ImageBackground
        style={[style.image]}
        source={require("../../assets/Rectangle47.png")}
      >
        <Image style={style.blueCircle} source={images.fourBlueIcon} />
        <View style={style.profContainer}>
          <Image
            style={style.profile}
            source={require("../../assets/Mask4.png")}
          />
          <Text style={style.name}>Jack Nicolson</Text>
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
      <View style={style.starContainer}>
        <Image style={style.star} source={require("../../assets/star.png")} />
        <Image style={style.star} source={require("../../assets/star.png")} />
        <Image style={style.star} source={require("../../assets/star.png")} />
        <Image style={style.star} source={require("../../assets/star.png")} />
        <Image style={style.star} source={require("../../assets/star.png")} />
        <Text style={style.rev}>433 Reviews</Text>
      </View>
      <View style={style.lanContainer}>
        <Image style={style.mess} source={require("../../assets/mess.png")} />
        <Text style={style.lang}>Speaks in Deutsch, English, Russian</Text>
      </View>
      <View style={style.switchMenu}>
        <Image
          style={style.messG}
          source={require("../../assets/messGreen.png")}
        />
        <Image style={style.phone} source={require("../../assets/phone.png")} />
      </View>
      <View style={style.descriptionContainer}>
        <Image
          style={style.descriptionImage}
          source={require("../../assets/Line.png")}
        />
        <Text style={style.descriptionText}>
          I am a Jack and I have 6 apartments for rent short and long term, I
          invite tenants who appreciate the convenience of use and nice
          aesthetic interiors.
        </Text>
      </View>
      <Text style={style.apart}>My apartments for rent</Text>
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
    height: verticalScale(64),
    width: scale(54),
    marginLeft: scale(24),
    marginTop: scale(24),
  },
  profContainer: { alignSelf: "baseline" },
  profile: {
    height: verticalScale(112),
    width: scale(98),
    marginBottom: -verticalScale(39),
    marginLeft: scale(12),
    marginTop: scale(50),
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
    marginLeft: scale(25),
    marginTop: verticalScale(46),
    fontWeight: "bold",
  },
  locationContainer: {
    flex: 1,
    flexDirection: "row",

    justifyContent: "space-between",
    alignSelf: "baseline",
    marginLeft: scale(28),
    marginTop: verticalScale(126),
  },
  locationImage: {
    height: verticalScale(12),
    width: scale(7),
    marginTop: scale(3),
  },
  locationText: {
    fontSize: scale(12),
    flexWrap: "wrap",
    marginLeft: scale(8),
    color: "#8F92A1",
  },
  descriptionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",

    marginTop: verticalScale(24),
    marginLeft: scale(24),
  },
  rev: { color: colors.horizText, fontSize: scale(12) },
  lang: { color: colors.horizText, fontSize: scale(14) },
  descriptionImage: {
    width: scale(27),
  },
  descriptionText: {
    fontSize: scale(12),
    lineHeight: 25,
    color: colors.horizText,
    marginTop: verticalScale(8),
    flexWrap: "wrap",
  },
  switchMenu: {
    flex: 1,
    flexDirection: "row",

    marginTop: verticalScale(32),
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
    marginTop: scale(10),
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
    height: verticalScale(18),
    width: scale(16),
    marginTop: scale(4),
  },
  messG: {
    height: verticalScale(56),
    width: scale(48),
    marginRight: scale(12),
  },
  phone: {
    height: verticalScale(56),
    width: scale(48),
  },
  apart: {
    fontSize: scale(16),
    marginLeft: scale(24),
    fontWeight: "bold",
    marginTop: scale(16),
  },
});

export default FourScreen;
