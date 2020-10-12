import React,{useState} from 'react'
import { Button, FlatList, Modal, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from './AppText'

import defaultStyle from '../config/styles'
import PickerItem from './PickerItem'

export default function AppPicker({icon,items,placeholder, selectedItem, onSelectedItem}) {
    const[modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons name={icon} 
                    style={styles.icon} size={24} 
                    color={defaultStyle.colors.medium}/>}

                    <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                    
                    <MaterialCommunityIcons name="chevron-down" size={24} 
                        color={defaultStyle.colors.medium}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Button title ="Close" onPress={() => setModalVisible(false)}/>
                <FlatList
                    data={items}
                    keyExtractor = {(item) => item.value.toString()}
                    renderItem = {({item}) => <PickerItem label={item.label} onPress={() => {
                        setModalVisible(false)
                        onSelectedItem(item)}}/>} />
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        borderRadius: 25,
        backgroundColor: defaultStyle.colors.light,
        width: '100%',
        marginVertical: 10, 
        padding: 15,
        overflow: 'hidden'
    },
    icon: {
        marginRight: 10
    },
    text:{
        flex:1
    }
})
