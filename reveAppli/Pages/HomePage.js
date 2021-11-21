import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ShopList from '../Components/ShopList';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

function HomePage(props) {
    
        return (
            <View style={{position:'absolute',top:100}}>

                <ShopList toLoad = {props.toLoad} dreamObject = {props.dreamObject}/>

            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
    },
    image: {
        height: '100%',
      width: '100%',
      resizeMode: 'cover',
      justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        marginLeft: 10,
        color: 'black',
      },
  })

  export default HomePage;

