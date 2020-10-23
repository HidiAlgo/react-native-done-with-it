import React from 'react'
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from '../AppText'
import colors from '../../config/colors'

export default function ListItem({image, title, subTitle, onPress, renderRightActions, IconComponent}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source = {image} style={styles.image}/>}
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                    </View>
                    <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems: "center",
        padding: 15,
        backgroundColor: colors.white
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    subTitle:{
        color: colors.mediuma
    },
    title: {
        fontWeight: 'bold'
    }
})

// 0740435577