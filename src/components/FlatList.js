import React from "react";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import colors from "../theme/colors";

const FlatListVertical = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      imgUrl: require("../../assets/house.png"),
      price: "$233  ",
      period: "/per day",
      title: "Suny Apartment",
      imgLocation: require("../../assets/Vector.png"),
      location: "Los Angeles",
    },
    {
      id: "bd7acbea-w3e4-46c2-aed5-3ad53abb28ba",
      imgUrl: require("../../assets/house.png"),
      price: "$233  ",
      period: "/per day",
      title: "Suny Apartment",
      imgLocation: require("../../assets/Vector.png"),
      location: "Los Angeles",
    },
    {
      id: "bd7acbea-c1b1-i89u-aed5-3ad53abb28ba",
      imgUrl: require("../../assets/house.png"),
      price: "$233  ",
      period: "/per day",
      imgHeart: require("../../assets/heart.png"),
      title: "Suny Apartment",
      imgLocation: require("../../assets/Vector.png"),
      location: "Los Angeles",
    },
  ];

  return (
    <ScrollView style={style.listContainer}>
      <FlatList
        style={style.flat}
        keyExtractor={(DATA) => DATA.id}
        data={DATA}
        renderItem={({ item }) => {
          return (
            <View>
              <ImageBackground
                style={style.image}
                imageStyle={style.imgBack}
                source={item.imgUrl}
              >
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
                <Text style={style.text}>{item.title}</Text>
              </View>

              <View style={style.locationContainer}>
                <Image
                  style={style.locationImage}
                  source={require("../../assets/Vector1.png")}
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
const style = StyleSheet.create({
  flat: { flex: 1 },
  listContainer: {
    flex: 1,
    marginTop: verticalScale(24),
    flexDirection: "column",
  },
  imgBack: { borderRadius: 25 },
  image: {
    height: verticalScale(185),
    width: scale(300),
    marginLeft: scale(24),

    marginRight: scale(24),
  },
  price: {
    color: colors.price,
    fontWeight: "bold",
  },
  period: {
    marginRight: scale(24),
    color: colors.horizText,
  },
  periodContainer: {
    marginRight: scale(54),
    flexDirection: "row-reverse",
    flex: 1,
    marginTop: scale(12),
  },
  text: {
    marginLeft: scale(24),

    fontSize: 17,
    fontWeight: "bold",
    marginRight: scale(116),
  },
  locationContainer: {
    flex: 1,
    flexDirection: "row",

    justifyContent: "space-between",
    alignSelf: "baseline",
    marginLeft: scale(28),
    marginBottom: verticalScale(25),
  },
  locationImage: {
    height: verticalScale(12),
    width: scale(7),
    marginTop: scale(4),
  },
  locationText: {
    fontSize: scale(12),
    flexWrap: "wrap",
    marginLeft: scale(5),
    color: colors.horizText,
  },
  heart: {
    height: verticalScale(25),
    width: scale(22),
    marginTop: scale(20),
    marginRight: scale(24),
  },
  miles: {
    width: 87,
    height: 24,
    marginTop: scale(15),
    borderRadius: scale(4),
    backgroundColor: colors.miles,
    color: colors.booking,
    textAlign: "center",
    marginLeft: scale(24),
  },
  heartContainer: {
    justifyContent: "space-between",

    flexDirection: "row",
  },
});

export default FlatListVertical;
