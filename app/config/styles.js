import { Platform } from "react-native"

import colors from './colors'

export default {
    colors,
    text: {
        fontSize: 15,
        fontFamily: Platform.os === 'android'?'Roboto' : "Roboto", //Use Avenir instead for apple devices
        color: colors.dark
    }
}


