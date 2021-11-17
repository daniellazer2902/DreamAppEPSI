import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useEffect, useState } from 'react';
import * as SecureStore from 'expo-secure-store';

import TopBarre from '../Components/TopBarre';
import DemineurPage from '../Pages/DemineurPage';
import HomePage from './HomePage';
import StatPage from '../Pages/StatPage';
import ProfilPage from '../Pages/ProfilPage';
import AddDreamPage from '../Pages/AddDreamPage';
import ViewDreamPage from '../Pages/ViewDreamPage';


function MainPage({ navigation, route }) {

    var { _isConnected } = ""
    try {
        _isConnected = route.params._isConnected;
    } catch (error) {
        _isConnected = false;
    }
    

    var [utilisateurId, setUtilisateurId] = useState("");
    var [demineur, setDemineur] = useState(false);
    var [stat, setStat] = useState(false);
    var [home, setHome] = useState(true);
    var [profil, setProfil] = useState(false);
    var [addDream, setAddDream] = useState(false);
    var [viewDream, setViewDream] = useState(false);
    var [toLoad, setToLoad] = useState("home");
    var [dreamObject, setDreamObject] = useState("");

    useEffect(() => {
        if(toLoad == "demineur"){
            LoadDemineur()
        }
        else if(toLoad == "home"){
            LoadHome()
        }
        else if(toLoad == "stat"){
            LoadStat()
            
        }else if(toLoad == "profil"){
            LoadProfil()
        }
        else if(toLoad == "addDream"){
            LoadAddDream()
        }
        else if(toLoad == "viewDream"){
            LoadViewDream()
        }
    }, [toLoad])
    

    

    async function getValue(){
        var _resultId = await SecureStore.getItemAsync('UtilisateurId')
        if(_resultId){
            setUtilisateurId(_resultId)
        }else{
            setUtilisateurId("")
        }
    }


    useEffect(() => {
        //getValue()

    }, [utilisateurId]);


    var Content = () => {
        if(demineur){
            return(
                <DemineurPage navigation={navigation}></DemineurPage>
            );
        }
        else if(home){
            return(
                <HomePage navigation={navigation} toLoad = {setToLoad} dreamObject = {setDreamObject}></HomePage>
            );
        }
        else if(stat){
            return(
                <StatPage navigation={navigation}></StatPage>
            );
            
        }else if(profil){
            return(
                <ProfilPage/>
            );
        }else if(addDream){
            return(
                <AddDreamPage navigation={navigation}></AddDreamPage>
            );
        }else if(viewDream){
            return(
                <ViewDreamPage navigation={navigation} dream = {dreamObject}></ViewDreamPage>
            );
        }else{
            return(
                <View></View>
            )
        }

        
    }
    
        return (
            <View>

                <View style={styles.container}>
                    <TopBarre navigation={navigation}/>
                </View>

                <Content/>  


                {/* NAV BAR AVEC LES STYLES */}

                <View style={styles.containerNavBarre}>
                    <TouchableOpacity activeOpacity={1} onPress={() => LoadHome()}>
                        <Image style={{height: 40, width: 40, opacity: 0.6, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/ShopLogo.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => LoadAddDream()}>
                        <Image style={{transform: [{ rotate: '30deg' }],height: 40, width: 42, opacity: 0.6, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/BombeLogo.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => LoadStat()}>
                        <Image style={{height: 40, width: 40, opacity: 0.6, backgroundColor: 'rgba(255, 255, 255, 0)', marginTop: 'auto', marginBottom: 'auto'}} source={require('../Images/StatLogo.png')}/>
                    </TouchableOpacity>
                </View>
            </View>
            
    
        )

        function LoadHome(){
            setToLoad("")
            setHome(true)
            setDemineur(false)
            setStat(false)
            setProfil(false)
            setAddDream(false)
            setViewDream(false)

        }

        function LoadDemineur(){
            setHome(false)
            setDemineur(true)
            setStat(false)
            setProfil(false)
            setAddDream(false)
            setViewDream(false)


        }
        function LoadStat(){
            setHome(false)
            setDemineur(false)
            setStat(true)
            setProfil(false)
            setAddDream(false)
            setViewDream(false)


        }

        function LoadProfil(){
            setHome(false)
            setDemineur(false)
            setStat(false)
            setProfil(true)
            setAddDream(false)
            setViewDream(false)


        }
        function LoadAddDream(){
            setHome(false)
            setDemineur(false)
            setStat(false)
            setProfil(false)
            setAddDream(true)
            setViewDream(false)

        }
        function LoadViewDream(){
            setHome(false)
            setDemineur(false)
            setStat(false)
            setProfil(false)
            setAddDream(false)
            setViewDream(true)
        }
    }


const styles = StyleSheet.create({
    container: {
      height: '100%',
      width: '100%',
      backgroundColor: '#eee',
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
      containerNavBarre: {
        width: '100%',
        height: 80,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopRightRadius: 19,
        borderTopLeftRadius: 19,
        elevation: 8,
    },
    containerAffiches: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
  })

  export default MainPage;

