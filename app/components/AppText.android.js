import React from 'react'
import { Text, StyleSheet } from 'react-native'

//In this way you can create platform specific codes follow this naming convention for android and ios

export default function AppText({children, style}) {
    return (

        <Text style={[styles.text, style]}>{children}</Text>

    )
}

const styles = StyleSheet.create({
    text : {
        fontSize: 18,
        fontFamily: 'Roboto'
    }
})
