import React,{useState} from 'react'
import { Button, FlatList, Modal, Platform, StyleSheet, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import AppText from './AppText'

import defaultStyle from '../config/styles'
import PickerItem from './PickerItem'

export default function AppPicker({icon,items, placeholder,PickerItemComponent = PickerItem, selectedItem, onSelectedItem, width="100%", numberOfColumns=1}) {
    const[modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={[styles.container,{width}]}>
                    {icon && <MaterialCommunityIcons name={icon} 
                    style={styles.icon} size={24} 
                    color={defaultStyle.colors.medium}/>}

                    {selectedItem ? <AppText style={styles.text}>{selectedItem.label}</AppText> : <AppText style={styles.placeholder}>{placeholder}</AppText>}
                                        
                    <MaterialCommunityIcons name="chevron-down" size={24} 
                        color={defaultStyle.colors.medium}/>
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <TouchableOpacity style={styles.close_icon} onPress={() => setModalVisible(false)}>
                        <MaterialCommunityIcons  name ="close-circle" size={50} color="red"  />
                </TouchableOpacity>
                <FlatList
                    numColumns={numberOfColumns}
                    data={items}
                    keyExtractor = {(item) => item.value.toString()}
                    renderItem = {({item}) => <PickerItemComponent item={item} onPress={() => {
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
    placeholder: {
        flex: 1,
        color: defaultStyle.colors.medium
    },
    text:{
        flex:1,
    },
    close_icon: {
        alignItems: 'center'
    }
})
