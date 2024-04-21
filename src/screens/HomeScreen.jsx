import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import {useNavigation} from '@react-navigation/native'

const HomeScreen = ({ navigation }) => {
    navigation = useNavigation();
    return (
        <View>

            <Text>Quiz Conhecimento Gerais</Text>

            <Button
                title='Comece o Quiz'
                onPress={() => {navigation.navigate("Conhecimentos Gerais")}}
                />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
