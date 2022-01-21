import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const ActivityOrder = () => {
    return (
        <View>
            <Text>displays a circular loading indicator</Text>
            <ActivityIndicator size="small" color = "black">

            </ActivityIndicator>
        </View>
    )
}

export default ActivityOrder

const styles = StyleSheet.create({})
