import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Switch, View, ScrollView, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider'


function AddDreamPage(props) {
    
      const [isLucid, setisLucid] = useState(false);
      const [title, onChangeTitle] = useState('');
      const [desc, onChangeDesc] = useState('');
      const [date, onChangeDate] = useState('');
      const [quality, onChangeQuality] = useState(3);
      const toggleSwitch = () => setisLucid(previousState => !previousState);


        return (

            <ScrollView style={{position: 'absolute', top: 100}}>
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
                  <Text style={styles.title}>Titre</Text>
                  <TextInput
                    style={styles.input}
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
                  <Text style={styles.title}>Quality</Text>
                  <Slider
                    minimumValue={1}
                    maximumValue={5}
                    step={1}
                    value={3}
                    onValueChange={onChangeQuality}
                    value={quality}
                    style={{width:200}}
                  />
                </View>

            </ScrollView>
        )
    }



const styles = StyleSheet.create({
    categorie: {
      backgroundColor: 'lightgray',
      marginRight:'auto',
      marginTop:20,
      marginLeft:'auto',
    },
    title: {
        fontSize: 25,
        marginLeft: 10,
        color: 'black',
        marginBottom: 20,
      },
    input: {
      minWidth: '95%',
      maxWidth: '95%',
      fontSize: 12,
      color: 'black',
    }
  })

  export default AddDreamPage;

