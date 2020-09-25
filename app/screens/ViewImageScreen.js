import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons name="close" color={colors.primary} size={30} style={styles.closeIcon}/>
            <MaterialCommunityIcons name="delete" color={colors.secondary} size={30} style={styles.deleteIcon}/>
            <Image  resizeMode='contain'  source={require('../assets/chair.jpg')} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 20,
        left: 30
    },
    deleteIcon: {
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
