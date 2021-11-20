import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, h1 } from 'react-native';


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
              <Text style={{fontSize : 25, marginLeft : 20, fontWeight : 'bold'}}>Informations sur ton rêve : {"\n"} </Text>
              <Text style={styles.text}>Titre : </Text>
              <Text style={styles.text}>Date : </Text>
              <Text style={styles.text}>Description : </Text>
              <Text style={styles.text}>Lieu : </Text>
              <Text style={styles.text}>Objets : </Text>
              <Text style={styles.text}>Thèmes : </Text>
              <Text style={styles.text}>Personnages présents : </Text>
              <Text style={styles.text}>Qualité du rêve : </Text>
              <Text style={styles.text}>Type : </Text>
              <Text style={styles.text}>Lucidité : </Text>
              <Text style={styles.text}>Actions : </Text>              
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
      text : {
        marginLeft : 15,
        textDecorationLine : 'underline',
      }
  })

  export default ViewDreamPage;

