import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

import colors from '../config/colors'
import AppText from '../components/AppText'

export default function Card({title, subTitle, image}) {
    return (
        <View style={styles.card}>
            <Image source = {image} style={styles.image}/>
            <View style={styles.description}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 20,
        overflow: "hidden"
    },
    description: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 200,
    },
    title:{
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})
