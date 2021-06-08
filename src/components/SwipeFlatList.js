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

const SwipeFlatList = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      imgUrl: require("../../assets/IMG2.png"),
      price: "$233",
      period: "/day",
      title: "Sunny Apartment",
      imgLocation: require("../../assets/Rectangle26.png"),
      location: "Los Angeles",
    },
    {
      id: "bd7acbea-w3e4-46c2-aed5-3ad53abb28ba",
      imgUrl: require("../../assets/IMG2.png"),
      price: "$233",
      period: "/day",
      title: "Sunny Apartment",
      imgLocation: require("../../assets/Rectangle26.png"),
      location: "Los Angeles",
    },
    {
      id: "bd7acbea-c1b1-i89u-aed5-3ad53abb28ba",
      imgUrl: require("../../assets/IMG2.png"),
      price: "$233",
      period: "/day",
      imgHeart: require("../../assets/whiteheart.jpg"),
      title: "Sunny Apartment",
      imgLocation: require("../../assets/Rectangle26.png"),
      location: "Los Angeles",
    },
  ];

  return (
    <ScrollView style={style.listContainer}>
      <FlatList
        style={{ flex: 1 }}
        keyExtractor={(DATA) => DATA.id}
        data={DATA}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <View>
              <ImageBackground style={style.image} source={item.imgUrl}>
                <View style={style.viewImg}>
                  <Image
                    style={style.dot}
                    source={require("../../assets/Ellipse3.png")}
                  />
                  <Image
                    style={style.dot}
                    source={require("../../assets/Ellipse3.png")}
                  />
                  <Image
                    style={style.dot}
                    source={require("../../assets/Ellipse3.png")}
                  />
                  <Image
                    style={style.dot}
                    source={require("../../assets/Ellipse3.png")}
                  />
                </View>
              </ImageBackground>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};
const style = StyleSheet.create({
  listContainer: {
    flex: 1,

    flexDirection: "column",
    marginBottom: scale(24),
  },
  image: {
    height: verticalScale(375),
    width: scale(350),
  },
  price: {
    color: colors.price,
  },
  period: {
    marginRight: scale(24),
  },
  periodContainer: {
    marginRight: scale(54),
    flexDirection: "row-reverse",
  },
  viewImg: {
    flex: 1,
    flexDirection: "row",
    marginLeft: scale(159),
    marginTop: scale(285),
    marginBottom: scale(24),
  },
  dot: {
    marginRight: scale(8),
  },
  text: {
    marginLeft: scale(24),
    marginTop: scale(80),
    fontSize: 17,
    color: colors.booking,
  },
  locationContainer: {
    flex: 1,

    alignSelf: "baseline",
    marginLeft: scale(28),

    marginTop: scale(40),
  },
  locationImage: {
    height: verticalScale(12),
    width: scale(7),
  },
  locationText: {
    fontSize: scale(12),
    marginLeft: scale(5),
    color: colors.booking,
    marginBottom: scale(8),
  },
  heart: {
    height: verticalScale(25),
    width: scale(22),
    marginTop: scale(15),
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

export default SwipeFlatList;
