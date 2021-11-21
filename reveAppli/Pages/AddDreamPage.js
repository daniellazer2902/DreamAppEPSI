import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Switch, View, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import dreamList from '../data.json';


function AddDreamPage(props) {
    
      const [isLucid, setisLucid] = useState(false);
      const [isCauch, setisCauch] = useState(false);
      const [title, onChangeTitle] = useState('');
      const [desc, onChangeDesc] = useState('');
      const [date, onChangeDate] = useState('');
      const [quality, onChangeQuality] = useState(3);

      const [peoples, onChangePeoples] = useState("");
      const [themes, onChangeThemes] = useState("");
      const [actions, onChangeActions] = useState("");
      const [lieux, onChangeLieux] = useState("");
      const [objets, onChangeObjets] = useState("");

      
      const toggleSwitch = () => setisLucid(previousState => !previousState);
      const toggleSwitchN = () => setisCauch(previousState => !previousState);
      function onPressSubmit() {
        

        let pList = [];
        let tList = [];
        let oList = [];
        let lList = [];
        let aList = [];

        if (typeof(peoples) == "string" && peoples != "") {
          pList = peoples.split(" ");

        } else {
          pList = [""];
        }

        if (typeof(themes) == "string" && themes != "") {
          tList = themes.split(" ");

        } else {
          tList = [""];
        }

        if (typeof(objets) == "string" && objets != "") {
          oList = objets.split(" ");

        } else {
          oList = [""];
        }

        if (typeof(lieux) == "string" && lieux != "") {
          lList = lieux.split(" ");

        } else {
          lList = [""];
        }

        if (typeof(actions) == "string" && actions != "") {
          aList = actions.split(" ");

        } else {
          aList = [""];
        }

        let dreamJs = {
          "title":title,
          "date":date,
          "desc":desc,
          "places":lList,
          "objects":oList,
          "themes":tList,
          "peoples":pList,
          "quality":quality,
          "type":isCauch,
          "lucidity":isLucid,
          "actions":aList,
          "image":""
        }

        let newJSON = [...dreamList, dreamJs];
        //alert(newJSON);

        // // create a path you want to write to
        // var path = RNFS.DocumentDirectoryPath + '/data/dreamlist.json';

        // RNFS.writeFile(path, newJSON, 'utf8')
        // .then((success) => {
        // alert('FILE WRITTEN!');
        // })
        // .catch((err) => {
        // console.log(err.message);
        // });
      }


        return (
          <View style={{position:'absolute', top:100, height:'100%'}}>
              <ScrollView style={{height:3000}}>

                <Text>AddDream</Text>

                <View style={styles.categorie}>
                  <Text style={styles.title}>Reve Lucide ?</Text>
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isLucid ? "#f5dd4e" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isLucid}
                    style={{marginLeft:'auto',marginRight:'auto'}} />
                </View>

                <View style={styles.categorie}>
                  <Text style={styles.title}>Cauchemar ?</Text>
                  <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isCauch ? "#f5dd4e" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitchN}
                    value={isCauch}
                    style={{marginLeft:'auto',marginRight:'auto'}} />
                </View>

                <View style={styles.categorie}>
                  <Text style={styles.title}>Titre</Text>
                  <TextInput
                    style={{marginLeft:'auto',marginRight:'auto'}}
                    onChangeText={onChangeTitle}
                    value={title}
                    placeholder="Titre d reve"
                  />
                </View>

                <View style={styles.categorie}>
                  <Text style={styles.title}>Description</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeDesc}
                    value={desc}
                    placeholder="Description reve"
                  />
                </View>

                <View style={styles.categorie}>
                  <Text style={styles.title}>Date</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeDate}
                    value={date}
                    placeholder="Date"
                    // keyboardType='number-pad'
                  />
                </View>

                <View style={styles.categorie}>
                  <Text style={styles.title}>Qualite</Text>
                  <Slider
                    minimumValue={1}
                    maximumValue={5}
                    step={1}
                    onValueChange={onChangeQuality}
                    value={quality}
                    style={{width:200}}
                  />
                </View>

                <View style={styles.categorie}>
                  <Text style={styles.title}>Personnes</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangePeoples}
                    value={peoples}
                    placeholder="Personnes"
                  />
                </View>

                <View style={styles.categorie}>
                  <Text style={styles.title}>Themes</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeThemes}
                    value={themes}
                    placeholder="Themes"
                  />
                </View>

                <View style={styles.categorie}>
                  <Text style={styles.title}>Objets</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeObjets}
                    value={objets}
                    placeholder="Objets"
                  />
                </View>

                <View style={styles.categorie}>
                  <Text style={styles.title}>Lieux</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeLieux}
                    value={lieux}
                    placeholder="Lieux"
                  />
                </View>

                <View style={styles.categorie}>
                  <Text style={styles.title}>Actions</Text>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeActions}
                    value={actions}
                    placeholder="Actions"
                  />
                </View>

                <TouchableOpacity onPress={onPressSubmit} style={styles.button}>
                    <Text style={styles.title}>Ajouter</Text>
                </TouchableOpacity>

                <View style={{height:200}}></View>

              </ScrollView>
          </View>
        )
    }

const styles = StyleSheet.create({
    categorie: {
      backgroundColor: 'lightgray',
      marginRight:'auto',
      marginTop:20,
      marginLeft:'auto',
    },
    button: {
      backgroundColor: 'lightblue',
      marginRight:'auto',
      marginTop:20,
      marginLeft:'auto',
    },
    title: {
        fontSize: 25,
        padding:5,
        color: 'black',
      },
    input: {
      minWidth: '95%',
      maxWidth: '95%',
      fontSize: 18,
      height:40,
      color: 'black',
      marginLeft:'auto',
      marginRight:'auto',

    }
  })

  export default AddDreamPage;
