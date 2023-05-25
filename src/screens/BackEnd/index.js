import React, { useEffect, useRef } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { useNavigation } from '@react-navigation/native';

const imageNode = require('../../../assets/images/Node.png');
const imageExpress = require('../../../assets/images/Express.jpg');
const imageDjango = require('../../../assets/images/Django.png');
const imageRubyOnRails = require('../../../assets/images/Ruby-on-Rails.jpg');

export default function BackEnd() {
  const { goBack } = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleGoBack = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      goBack();
    });
  };

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.content}>
        <Text style={styles.heading}>Back End</Text>
        <Text style={styles.subHeading}>Disponibilidade Tecnológicas</Text>
        <View style={styles.containerImages}>
          <Image source={imageNode} style={styles.images} />
          <Image source={imageExpress} style={styles.images} />
          <Image source={imageDjango} style={styles.images} />
          <Image source={imageRubyOnRails} style={styles.images} />
        </View>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  heading: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subHeading: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },

  images: {
    width: 100,
    height: 100,
  },

  containerImages: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginBottom: 20,
  },

  backButton: {
    backgroundColor: 'rgb(33, 150, 243)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
