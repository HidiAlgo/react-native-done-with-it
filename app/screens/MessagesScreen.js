import React, {useState} from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ListItem from '../components/lists/ListItem'


import Screen from '../components/Screen'
import ListItemSeperator from '../components/lists/ListItemSeperator'
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction'

let initialMessages = [
    {
        id: 1,
        title: "lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20",
        description: "lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20lorem20",
        image: require('../assets/Lisa.jpeg')
    },
    {
        id: 2,
        title: "T2",
        description: "D2",
        image: require('../assets/Lisa.jpeg')
    }
]


export default function MessagesScreen() {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const deleteMessage = message =>{
        setMessages(messages.filter(m => m.id !== message.id))
    }
    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()} 
            renderItem={({item}) => <ListItem 

                title={item.title}
                subTitle={item.description}
                image={item.image}
                onPress={() => console.log(item)}
                renderRightActions={() => <ListItemDeleteAction onPress={() => deleteMessage(item)}/>}
            />}
            ItemSeparatorComponent={() => <ListItemSeperator/>}
            refreshing = {refreshing}
            onRefresh = { () => {
                setMessages([
                    {
                        id: 2,
                        title: "T2",
                        description: "D2",
                        image: require('../assets/Lisa.jpeg')
                    }
                ])
            }}
        
        />
        </Screen>
        
    )
}
const styles = StyleSheet.create({

})

