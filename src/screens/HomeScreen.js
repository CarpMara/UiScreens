

      import React from 'react';
import { View, TextInput , StyleSheet, Button} from 'react-native';
import FlatListVertical from '../components/FlatList';
const ThirdScreen = ({navigation}) => {
return     (//<FlatListVertical />
 <View>
       <Button
title="First Screen"
onPress={() => navigation.navigate('First')}
/> 
<Button
 title="Second Screen"
 onPress={() => navigation.navigate('Second')}
 /> 
 <Button
title="Third Screen"
onPress={() => navigation.navigate('Third')}
/> 
 <Button
 title="Four Screen"
 onPress={() => navigation.navigate('Four')}
 /> 

</View>


);
};


const style =  StyleSheet.create({
});

export default ThirdScreen;