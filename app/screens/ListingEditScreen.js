import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppFormField, AppForm, AppFormPicker, SubmitButton } from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'

export default function ListingEditScreen() {

    const validationSchema = Yup.object().shape({
        title: Yup.string().required().min(1).label("Title"),
        price: Yup.number().required().min(1).max(10000).label("Price"),
        category: Yup.object().required().nullable().label("Category"),
        description: Yup.string().label("Description")
    })

    const categories = [
        {
            backgroundColor: "#fc5c65",
            icon: "floor-lamp",
            label: "Furniture",
            value: 1,
          },
          {
            backgroundColor: "#fd9644",
            icon: "car",
            label: "Cars",
            value: 2,
          },
          {
            backgroundColor: "#fed330",
            icon: "camera",
            label: "Cameras",
            value: 3,
          },
          {
            backgroundColor: "#26de81",
            icon: "cards",
            label: "Games",
            value: 4,
          },
          {
            backgroundColor: "#2bcbba",
            icon: "shoe-heel",
            label: "Clothing",
            value: 5,
          },
          {
            backgroundColor: "#45aaf2",
            icon: "basketball",
            label: "Sports",
            value: 6,
          },
          {
            backgroundColor: "#4b7bec",
            icon: "headphones",
            label: "Movies & Music",
            value: 7,
          },
          {
            backgroundColor: "#a55eea",
            icon: "book-open-variant",
            label: "Books",
            value: 8,
          },
          {
            backgroundColor: "#778ca3",
            icon: "application",
            label: "Other",
            value: 9,
          },
    ]

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{title: '', price: '', category: null, description:''}}
                onSubmit = {(values) => console.log(values)}
                validationSchema={validationSchema}>
                
                <AppFormField
                    maxLength={255} 
                    name="title"
                    placeholder="Title"/>

                <AppFormField
                    keyboardType="numeric"
                    name="price"
                    placeholder="Price"
                    maxLength={8}
                    width={120}/>

                <AppFormPicker
                    items = {categories}
                    name="category"
                    placeholder="Category"
                    width = "50%"
                    PickerItemComponent = {CategoryPickerItem}
                    numberOfColumns={3}/>

                <AppFormField
                    name="description"
                    multiline
                    numberOfLines={3}
                    placeholder="Description"/>    

                <SubmitButton title="POST"/>    
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    }
})
