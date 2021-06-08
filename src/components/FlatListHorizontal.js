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

const FlatListHorizontal = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      imgUrl: require("../../assets/Rectangle26.png"),
      price: "$233",
      period: "/day",
      title: "Sunny Apartment",
      imgLocation: require("../../assets/Rectangle26.png"),
      location: "Los Angeles",
    },
    {
      id: "bd7acbea-w3e4-46c2-aed5-3ad53abb28ba",
      imgUrl: require("../../assets/Rectangle26.png"),
      price: "$233",
      period: "/day",
      title: "Sunny Apartment",
      imgLocation: require("../../assets/Rectangle26.png"),
      location: "Los Angeles",
    },
    {
      id: "bd7acbea-c1b1-i89u-aed5-3ad53abb28ba",
      imgUrl: require("../../assets/Rectangle26.png"),
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
        style={style.flat}
        keyExtractor={(DATA) => DATA.id}
        data={DATA}
        horizontal={true}
        renderItem={({ item }) => {
          return (
            <View>
              <ImageBackground style={style.image} source={item.imgUrl} imageStyle={style.imgBack}>
                <View style={style.heartContainer}>
                  <Text style={style.miles}>3 night's</Text>
                  <Image
                    style={style.heart}
                    source={require("../../assets/whiteheart.jpg")}
                  />
                </View>

                <Text style={style.text}>{item.title}</Text>
                <View style={style.viewT}>
                  <Image
                    style={style.locationImage}
                    source={require("../../assets/Vector.png")}
                  />
                  <Text style={style.locationText}>Los Angeles</Text>
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
  flat: { flex: 1 },
  listContainer: {
    flex: 1,
    marginTop: verticalScale(24),
    flexDirection: "column",
    marginBottom: scale(24),
  },
  image: {
    height: verticalScale(185),
    width: scale(300),
    marginLeft: scale(24),
    marginRight: scale(24),
   
  },
  imgBack:{ borderRadius:scale(16)},
  price: {
    color: colors.price,
  },
  period: {
    marginRight: scale(24),
  },
  viewT: {
    flex: 1,
    marginLeft: scale(24),
    marginTop: scale(0),
    flexDirection: "row",
  },
  periodContainer: {
    marginRight: scale(54),
    flexDirection: "row-reverse",
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
    marginTop:scale(3)
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

export default FlatListHorizontal;
