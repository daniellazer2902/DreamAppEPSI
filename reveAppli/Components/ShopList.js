import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

function ShopList(props){

    const navigation = useNavigation();
    let [objects, setObjects] = useState("");

    useEffect(() => {


        let mock = [
            {
                "title":"Reve 1",
                "date":"01-12-2021",
                "desc":"",
                "places":["Chambre","Campus"],
                "objects":["ordi","batterie"],
                "themes":["cours","soleil"],
                "peoples":["Daniel.G"],
                "quality":3,
                "type":"Normal",
                "lucidity":false,
                "actions":["travailler","rigoler","amuser"],
                "image":""
            },
            {
                "title":"Reve 2",
                "date":"02-12-2021",
                "desc":"xt ever since the 1500s, when an unknown printer took a ",
                "places":["Chambre","Campus"],
                "objects":["ordi","batterie"],
                "themes":["cours"],
                "peoples":["Daniel.G"],
                "quality":1,
                "type":"Normal",
                "lucidity":true,
                "actions":[],
                "image":""
            },
            {
                "title":"Reve 3",
                "date":"02-12-2021",
                "desc":"xt ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially uncha",
                "places":["Chambre","Campus"],
                "objects":["ordi","batterie"],
                "themes":["cours","soleil"],
                "peoples":["Daniel.G"],
                "quality":3,
                "type":"Normal",
                "lucidity":false,
                "actions":["rigoler","amuser"],
                "image":""
            }
        ];

        // recupere les items
        let mounted = true;
           
        fetch('https://hugocabaret.onthewifi.com/Deminotron/API/requetes/Objet/GetAllObjets.php')
        .then((response) => response.json())
        .then((data) => {
            if(mounted){
                // change mock to data after
                setObjects(mock)
            }
        }); 
    
        return () => mounted = false;
    }, []);

    // VISUEL DE CHAQUE OBJET

    let renderItem = ({item}) => {
        return(
            <TouchableOpacity onPress={()=>buyItem(item)} style={{height:100, width:100,margin:1}}>
                <View>
                    {/* <Image style={{width:75,height:75 }} source={{uri:item[1].image}}></Image> */}
                    <Text style={{zIndex:'1',}}>{item[1].title}</Text>
                    <Text style={{zIndex:'1'}}>{item[1].date}</Text>
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
        <FlatList style={{padding:15}} data={Object.entries(objects)} renderItem={renderItem} keyExtractor = {item => item.id_obj} numColumns={1}/>
    )

}

export default ShopList

