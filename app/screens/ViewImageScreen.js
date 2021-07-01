import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import colors from "../config/colors.js"

export default function ViewImageScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")} />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height:50,
        position:"absolute",
        top: 40,
        left:30,
        backgroundColor: colors.primary,
        zIndex:1
    },
    container : {
        flex:1,
        backgroundColor: colors.black
    },
    deleteIcon: {
        width: 50,
        height:50,
        position:"absolute",
        top: 40,
        right:30,
        backgroundColor: colors.secondary,
        zIndex:1
    },
    image:{
        width: "100%",
        height: "100%"
    }
})
