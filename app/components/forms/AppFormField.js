import React from 'react'
import { StyleSheet} from 'react-native'
import {useFormikContext} from 'formik'

import AppErrorMessage from './AppErrorMessage'
import AppTextInput from '../AppTextInput'

export default function AppFormField({name, ...otherProps}) {
    const {handleChange, setFieldTouched, errors, touched} = useFormikContext()
    return (
        <>
            <AppTextInput

                onChangeText={handleChange(name)}
                onBlur = {() => setFieldTouched(name)}
                {...otherProps}
            />
            <AppErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

const styles = StyleSheet.create({})
