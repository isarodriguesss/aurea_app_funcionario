import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Adm({ navigation }) {

    navigation.setOptions({
        headerTitle: null
      })

    return (
   <View style={styles.container}>
       <View style={styles.title}>
            <Text style={styles.textTitle}>PAINEL DE CONTROLE</Text>
        </View>
        
        <View style={styles.text}>
            <View style={styles.box}>
                <Text style={styles.textContainer}>Categorias</Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.textContainer}>Produtos</Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.textContainer}>Dados da loja</Text>
            </View>

            <View style={styles.box}>
                <Text style={styles.textContainer}>Sair</Text>
            </View>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
        backgroundColor: '#FFF',
    },
    title:{
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '10%',
        marginTop: '13%'
    },
    textTitle:{
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginBottom: '10%',
        justifyContent: 'center'
    },
    text:{
        alignItems: 'center',
        
    },
    box:{
        backgroundColor: '#000',
        borderRadius: 50,
        width: 300,
        height: 50,
        marginVertical: '2%',
        alignItems:'center',
        justifyContent: 'center',
    },    
    textContainer:{
        fontSize: 16,
        marginHorizontal: '1%',
        color: '#FFF'
    }
    
});