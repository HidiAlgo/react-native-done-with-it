import React from 'react'
import { StyleSheet, View } from 'react-native'

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function Icon({
    name,
    size = 50,
    backgroundColor = "#fff",
    iconColor = "#000"
}) {
    return (
        <View style = {{
            width: size,
            height: size,
            backgroundColor,
            borderRadius: size/2,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <MaterialCommunityIcons name={name} size={0.5 * size} color={iconColor}/>
        </View>
    )
}

const styles = StyleSheet.create({})
