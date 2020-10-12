
import React from "react";
import {TextInput, Text, Switch} from 'react-native'
import {useState} from 'react'

import Screen from './app/components/Screen';
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

const categories = [
  {label: "Furniture", value:1},
  {label: "Clothing", value:2},
  {label: "Cameras", value:3}
]

export default function App() {

  const [category, setCategory] = useState();
  return(
     <Screen>
       <AppPicker items={categories} placeholder="Category" icon="apps" selectedItem={category} onSelectedItem={(item) => setCategory(item)}/>
       <AppTextInput placeholder="Email" icon="email"/>
     </Screen> 
     )
}