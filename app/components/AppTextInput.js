import React from 'react'
import { Platform, StyleSheet, TextInput, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'


import defaultStyle from '../config/styles'

export default function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} style={styles.icon} size={24} color={defaultStyle.colors.medium}/>}
            <TextInput style={defaultStyle.text} {...otherProps}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 25,
        backgroundColor: defaultStyle.colors.light,
        width: '100%',
        marginVertical: 10,
        padding: 15,
        overflow: 'hidden'
    },
    icon: {
        marginRight: 10
    }
})
