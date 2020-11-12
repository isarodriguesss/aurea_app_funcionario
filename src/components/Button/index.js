import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button(props) {
    
    return (
   <View style={styles.container} >
       <TouchableOpacity style={styles.btnContainer} onPress={props.onClick} >
           <Text style={styles.title}>Entrar</Text>
       </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnContainer:{
        width: 300,
        height: 50,
        backgroundColor: '#000',
        borderRadius: 50,
        marginVertical: '20%',
        justifyContent: 'center',
        alignItems:'center',
        
    },
    title:{
        fontSize: 17,
        color: '#FFF'
    }
});