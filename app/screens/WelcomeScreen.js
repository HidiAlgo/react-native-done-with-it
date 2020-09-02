import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

import AppButton from '../components/AppButton'
import colors from '../config/colors'


export default function WelcomeScreen() {
    return (
        <ImageBackground 
            style={styles.background} 
            source={require('../assets/background.jpg')}
            blurRadius={10}>

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
                <Text style={styles.tagline}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonContainer}>

                <AppButton title="Login" onPress={() => console.log("Login Button Tapped")} />
                <AppButton title="Register" onPress={() => console.log("Register Button Tapped")} color="secondary"/>

            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    
    buttonContainer:{
        width: "100%",
        padding: 20
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        marginVertical: 20
    }
})
