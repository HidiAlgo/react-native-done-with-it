import React from 'react'
import { StyleSheet, TouchableOpacity} from 'react-native'
import AppText from './AppText'

export default function PickerItem({item,onPress}) {
    return (
        <TouchableOpacity onPress = {onPress}>
            <AppText style={styles.container}>{item.label}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    }
})
