import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';



function ViewDreamPage(props) {
    
        let item = props.dream[1];

        // let dic  = {
        //   // title desc places[] objects[] themes[] peoples[]
        //   // title desc typeReve emotions[] date quality
        //   "title": "Bonjour",
        //   "":""
        // }

        //let item = JSON.stringify(dic);


        return (
            // 
            <View style={{position:'absolute', top:100, height:'100%'}}>
            <ScrollView style={{height:3000}}>
              <Text style={{fontSize : 30, marginLeft : 'auto', marginRight:'auto', fontWeight : 'bold', textDecorationLine : 'underline'}}>{"\n"} Informations sur ton rêve : {"\n"} </Text>

              <View style={styles.rectangle}>
                <Text style={styles.text}>Titre : {item.title}</Text> 
              </View>

              <View style={styles.rectangle}>             
                <Text style={styles.text}>Date : {item.date}</Text>
              </View> 

              <View style={styles.rectangle}>
                <Text style={styles.text}>Description : {item.desc}</Text>
              </View>

              <View style={styles.rectangle}>
                <Text style={styles.text}>Lieu : {item.places}</Text>
              </View>

              <View style={styles.rectangle}>
                <Text style={styles.text}>Objets : {item.objects}</Text>
              </View>

              <View style={styles.rectangle}>
                <Text style={styles.text}>Thèmes : {item.themes}</Text>
              </View>

              <View style={styles.rectangle}>
                <Text style={styles.text}>Personnages présents : {item.peoples}</Text>
              </View>

              <View style={styles.rectangle}>
                <Text style={styles.text}>Qualité du rêve : {item.quality}</Text>
              </View>

              <View style={styles.rectangle}>
                <Text style={styles.text}>Type : {item.type}</Text>
              </View>

              <View style={styles.rectangle}>
                <Text style={styles.text}>Lucidité : {item.lucidity}</Text>
              </View>

              <View style={styles.rectangle}>
                <Text style={styles.text}>Actions : {item.actions}</Text>  
              </View>

              <View style={{height:200}}></View>

            </ScrollView>
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
      height: '100%',
      width: '100%',
      fontSize: 25,
      marginLeft: 10,
      color: 'black',
      },
      text : {
        height:35,
        width: '100%',
        marginLeft : 15,
        fontSize : 18,
        textAlign : 'center',
      },
      rectangle : {
        textAlign : 'center',
        backgroundColor: 'lightgray',
        marginRight: 5,
        marginTop: 30,
        height : 30,
        borderRadius : 20,
      }
      
  })

  export default ViewDreamPage;