import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.Tela}>

            <Text style={styles.H1}>
                Quiz Conhecimento Gerais
            </Text>
                
           <View style={styles.Botao}>

             <Button
                title='Comece o Quiz'
                onPress={() => {navigation.navigate("Conhecimentos Gerais")}}
                color='#778899'
            />

           </View>
           

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

    Tela:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E0FFFF'
    },

    H1:{
        fontSize: 24,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 10
    },

    Negrito:{
        fontWeight: 'bold'
    },

    Botao:{

        borderRadius: 8,
        backgroundColor: '#778899',
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 50
    },
    TextoBotao:{
        fontSize: 15,
        color: 'white'
    }

})
