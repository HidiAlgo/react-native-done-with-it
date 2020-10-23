import React from 'react'
import { StyleSheet } from 'react-native'

import AppText from '../AppText'

export default function AppErrorMessage({error, visible}) {
    if (!error || !visible) return null;
    return (
        <AppText style={styles.error_text}>{error}</AppText>
    )
}

const styles = StyleSheet.create({
    error_text:{
        color: 'red',
        fontSize: 12,
    }
})
