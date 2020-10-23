import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

import Icon from './Icon'
import AppText from './AppText'
import colors from '../config/colors'

export default function CategoryPickerItem({item, onPress}) {
    return(
     <View style={styles.container}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} iconColor={colors.light}/>
        <AppText style={styles.label}>{item.label}</AppText>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%'
    },
    label:{
        marginTop: 5,
        textAlign: 'center'
    }
})
