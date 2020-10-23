import { useFormikContext } from 'formik'
import React from 'react'
import { StyleSheet} from 'react-native'

import AppPicker from '../AppPicker'
import AppErrorMessage from './AppErrorMessage'

export default function AppFormPicker({items, name, placeholder, PickerItemComponent, width, numberOfColumns}) {
    const {errors, setFieldValue, touched, values } = useFormikContext()

    return (
        <>
            <AppPicker 
                items = {items}
                onSelectedItem={(item) => setFieldValue(name, item)}
                numberOfColumns = {numberOfColumns}
                placeholder = {placeholder}
                selectedItem = {values[name]}
                width={width}
                PickerItemComponent = {PickerItemComponent}
            />

            <AppErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    )
}

const styles = StyleSheet.create({})
