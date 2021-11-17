import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';


function ViewDreamPage(props) {
    
        let item = JSON.stringify(props.dream[1]);

        // let dic  = {
        //   // title desc places[] objects[] themes[] peoples[]
        //   // title desc typeReve emotions[] date quality
        //   "title": "Bonjour",
        //   "":""
        // }

        //let item = JSON.stringify(dic);


        return (
            // 
            <View style={{position: 'absolute', top: 100}}>
                <Text>{item}</Text>
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

  export default ViewDreamPage;

