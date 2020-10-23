import React from 'react'
import { StyleSheet} from 'react-native'
import * as Yup from 'yup'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

export default function RegisterScreen() {

    const validationSchema = Yup.object().shape({
        name: Yup.string().required().min(2).label("Name"),
        email: Yup.string().email().required().label("Email"),
        password: Yup.string().required().min(8).label("Password")
    })

    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{name:'',email: '', password: ''}}
                onSubmit = {(values) => console.log(values)}
                validationSchema={validationSchema}>
                    <AppFormField
                        autoCorrect = {false}
                        icon = "account"
                        name = "name"
                        placeholder = "Name"/>
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect = {false}
                        keyboardType="email-address"
                        icon = "email"
                        name = "email"
                        placeholder = "Email"/>
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect = {false}
                        icon = "lock"
                        name = "password"
                        secureTextEntry
                        placeholder = "Password"/>  

                    <SubmitButton title="REGISTER" />          
                </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 15
    }
})
