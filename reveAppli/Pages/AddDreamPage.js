import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


function AddDreamPage(props) {
    
        return (

            <View style={{position: 'absolute', top: 100}}>
                <Text>AddDream</Text>
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

  export default AddDreamPage;

