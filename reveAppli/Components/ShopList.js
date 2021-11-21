import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import dreamList from '../data.json';

function ShopList(props){

    const navigation = useNavigation();
    let [objects, setObjects] = useState("");

    // useEffect(() => {

    //     // recupere les items
    //     let mounted = true;
           
    //     fetch('https://hugocabaret.onthewifi.com/Deminotron/API/requetes/Objet/GetAllObjets.php')
    //     .then((response) => response.json())
    //     .then((data) => {
    //         if(mounted){
    //             // change mock to data after
    //             setObjects(data)
    //         }
    //     }); 
    
    //     return () => mounted = false;
    // }, []);

    // VISUEL DE CHAQUE OBJET

    let renderItem = ({item}) => {
        return(
            <TouchableOpacity onPress={()=>buyItem(item)} style={{height:100, width:100,margin:1}}>
                <View style={{marginLeft:'auto'}}>
                    {/* <Image style={{width:75,height:75 }} source={{uri:item[1].image}}></Image> */}
                    <Text>{item[1].title}</Text>
                    <Text>{item[1].date}</Text>
                </View>
            </TouchableOpacity>
        )
    };


    function buyItem(dream) {
        //alert(JSON.stringify(item[1]))
        props.dreamObject(dream);
        props.toLoad("viewDream");
    }

    // genere la liste a partir des donnes donne
    return (
        <FlatList style={{padding:15}} data={Object.entries(dreamList)} renderItem={renderItem} keyExtractor = {item => item.title} numColumns={1}/>
    )

}

export default ShopList