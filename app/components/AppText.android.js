import React from 'react'
import { Text, StyleSheet } from 'react-native'

import colors from '../config/colors'

//In this way you can create platform specific codes follow this naming convention for android and ios

export default function AppText({children, style}) {
    return (

        <Text style={[styles.text, style]}>{children}</Text>

    )
}

const styles = StyleSheet.create({
    text : {
        fontSize: 15,
        fontFamily: 'Roboto',
        color: colors.dark
    }
})
