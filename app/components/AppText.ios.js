import React from 'react'
import { Text, StyleSheet } from 'react-native'

//In this way you can create platform specific codes follow this naming convention for android and ios

export default function AppText({children}) {
    return (

        <Text style={styles.textw}>{children}</Text>

    )
}

const styles = StyleSheet.create({
    text : {
        color: 'tomato',
        fontSize: 20,
        fontFamily: 'Avenir'
    }
})
