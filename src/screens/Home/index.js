import React from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";
import { useNavigation } from '@react-navigation/native'


export default function Home() {
    const { navigate } = useNavigation();

    const image = require('../../../assets/images/background.jpg')

    return (
        <ImageBackground source={image} style={styles.backgroud}>
            <View style={styles.container}>

                <View>
                    <Text style={styles.H1}>Escolha Como Será Seu Projeto:</Text>
                    <View style={styles.containers}>
                        <Button title="Front End" onPress={() => { navigate('FrontEnd') }} />
                        <Button title="Back End" onPress={() => { navigate('BackEnd') }} />
                    </View>

                </View>
            </View>
        </ImageBackground >
    )
}

const styles = StyleSheet.create({
    backgroud: {
        height: '93vh',
        backgroundSize: '100%'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    containers: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 30,
        backgroundColor: 'rgb(33, 150, 243)',
        borderRadius: 15
    },

    H1: {
        color: 'white',
        fontSize: 30,
        fontWeight: '900'
    },
});
