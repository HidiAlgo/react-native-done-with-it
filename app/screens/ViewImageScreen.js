import React from 'react'
import { StyleSheet, Image, View } from 'react-native'

import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}/>
            <View style={styles.deleteIcon}/>
            <Image  resizeMode='contain'  source={require('../assets/chair.jpg')} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 35,
        height: 35,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 20,
        left: 30
    },
    deleteIcon: {
        width: 35,
        height: 35,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 20,
        right: 30
    },
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    image: {
        width: '100%',
        height: '100%'
    }
})
