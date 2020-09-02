import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'

import colors from '../config/colors'

export default function AppButton({title, onPress, color = 'primary'}) {
    return (
        <TouchableOpacity style={[styles.button,{ backgroundColor: colors[color]}]} onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )

}
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 25,
        padding: 10,
        marginVertical: 10
    },
    title: {
        color: colors.white,
        textTransform: "uppercase",
        fontSize: 18,
        fontWeight: 'bold'
    }
})


