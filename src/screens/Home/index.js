import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ImageBackground, Button, Animated } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const { navigate } = useNavigation();
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim1 = useRef(new Animated.Value(-300)).current;
    const slideAnim2 = useRef(new Animated.Value(300)).current;
    const image = require('../../../assets/images/background.jpg');

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim1, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim2, {
                toValue: 0,
                duration: 800,
                useNativeDriver: true,
            }),
        ]).start();
    }, [fadeAnim, slideAnim1, slideAnim2]);

    return (
        <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
            <ImageBackground source={image} style={styles.background}>
                <View style={styles.content}>
                    <Text style={styles.title}>Escolha Como Será Seu Projeto:</Text>
                    <Animated.View style={[styles.buttons, { transform: [{ translateX: slideAnim1 }] }]}>
                        <Button title="Front End" onPress={() => { navigate('FrontEnd') }} />
                    </Animated.View>
                    <Animated.View style={[styles.buttons, { transform: [{ translateX: slideAnim2 }] }]}>
                        <Button title="Back End" onPress={() => { navigate('BackEnd') }} />
                    </Animated.View>
                    <View style={styles.watermarkContainer}>
                        <Text style={styles.watermarkText}>Projeto Criado por Robert</Text>
                    </View>
                </View>
            </ImageBackground>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    background: {
        flex: 1,
        resizeMode: 'cover',
    },

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },

    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: '900',
        marginBottom: 20,
    },

    buttons: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(33, 150, 243)',
        borderRadius: 15,
        padding: 30,
        marginVertical: 10,
    },

    watermarkContainer: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
    },

    watermarkText: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
});
