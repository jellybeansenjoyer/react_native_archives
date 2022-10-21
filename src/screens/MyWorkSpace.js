import React from 'react'
import {StyleSheet,View,Button} from 'react-native'

const MyWorkSpace = (props)=>{
    return (
        <View>
            <View style={{ marginTop: 30, marginBottom: 30 }}>
            <Button title='Square Screen' onPress={()=>{
                props.navigation.navigate('Practice')
            }} />
            </View>
            <View style={{ marginBottom: 30 }}>
                <Button title='Color Counter' onPress={() => {
                    props.navigation.navigate('Practice2')
                }} />
            </View>
            <View style={{ marginBottom: 30 }}>
                <Button title='Counter' onPress={() => {
                    props.navigation.navigate('Count')
                }} />
            </View>
            <View style={{ marginBottom: 30 }}>
                <Button title='Password Input' onPress={() => {
                    props.navigation.navigate('TextInput')
                }} />
            </View>       
            <View style={{ marginBottom: 30 }}>
                <Button title='Layout Shift' onPress={() => {
                    props.navigation.navigate('Layout')
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default MyWorkSpace