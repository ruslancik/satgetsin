import React from 'react'
import { StyleSheet, Text, Platform } from 'react-native'

export default function AppText(props) {
    return (
       
            <Text style={styles.text}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text:{
        color: "tomato",
        marginTop: 10,
        ...Platform.select({
            android: {
                fontSize:20,
                fontFamily: "Roboto"
            },
            ios: {
                fontSize: "18",
                fontFamily: "Avenir"
            }
        })
    }
})
