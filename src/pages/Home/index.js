import React from 'react';
import { View, Text, StyleSheet, Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button'
import { TextInput } from 'react-native-gesture-handler';

export default function Home() {
        
    const navigation = useNavigation();

    navigation.setOptions({
      headerTitle: 'Início'
    })
      
 return (
   <KeyboardAvoidingView style={styles.container}>
       <Image style={styles.image} source={require('../../assets/orion2.png')}/>
       <View style={styles.box}>
           <TextInput style={styles.textContainer}
           placeholder= 'exemplo@email.com'
           autoCorrect={false}
           onChangeText={()=>{}}
           />
       </View>

       <View style={styles.box}>
           <TextInput style={styles.textContainer}
           placeholder='••••••••'
           autoCorrect={false}
           onChangeText={()=>{}}
           />
       </View>

       <Button onClick={()=> navigation.navigate('Adm')}/>
       
   </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },   
    image:{
        width: 250,
        height: 200,
        marginVertical: '5%',
        marginTop:'5%'
    },
    box:{
        backgroundColor: '#f5f5f5',
        borderRadius: 50,
        width: 300,
        height: 50,
        marginVertical: '5%',
        alignItems:'center',
        justifyContent: 'center'
    },    
    textContainer:{
        fontSize: 18
    }

});