import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";
import FlatListVertical from "../components/FlatList";
import SwipeFlatList from "../components/SwipeFlatList";
const ThirdScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="First Screen"
        onPress={() => navigation.navigate("First")}
      />
      <Button
        title="Second Screen"
        onPress={() => navigation.navigate("Second")}
      />
      <Button
        title="Third Screen"
        onPress={() => navigation.navigate("Third")}
      />
      <Button title="Four Screen" onPress={() => navigation.navigate("Four")} />
    </View>
  );
};

const style = StyleSheet.create({});

export default ThirdScreen;
