import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'
export default function ListingDetailsScreen() {
    return (
        <View>
            <Image source={require('../assets/jacket.jpg')} style={styles.image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>100$</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require('../assets/Lisa.jpeg')}
                        title="Lisa Ferninand"
                        subTitle="5 Listings"
                        />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer:{
        padding: 20
    },
    image: {
        width:"100%",
        height: 300
    }, 
    title:{
        fontSize: 24,
        fontWeight: '500'
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.secondary,
        marginVertical: 10
    },
    userContainer:{
        marginVertical: 40
    }
})
