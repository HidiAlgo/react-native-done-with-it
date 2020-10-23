import React from 'react'
import { StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'


import Screen from '../components/Screen'

import {AppFormField, AppForm, SubmitButton} from '../components/forms'





export default function LoginScreen() {

    const validationSchema = Yup.object().shape({
        email: Yup.string().required().email().label("Email"),
        password: Yup.string().required().min(4).label("Password")
    })
    return (
        <Screen style={styles.container}>
            <Image source={require("../assets/logo-red.png")} style={styles.logo} />
            <AppForm
                initialValues={{email:'', password: ''}}
                onSubmit={(values) => console.log(values)}
                validationSchema = {validationSchema}>

                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address" 
                        icon="email" 
                        name="email"
                        placeholder="email"
                        textContentType="emailAddress"
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="password"
                        secureTextEntry
                        textContentType="password"
                    />    
                    <SubmitButton title="Login"/>

            </AppForm>
           
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    logo: {
        alignSelf:'center',
        width: 80,
        height: 80,
        marginTop:50,
        marginBottom: 20
    }
})
