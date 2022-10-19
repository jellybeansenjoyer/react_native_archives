import React from 'react'
import {StyleSheet,View,Button} from 'react-native'

const MyWorkSpace = (props)=>{
    return (
        <View>
            <View style={{ marginTop: 30, marginBottom: 30 }}>
            <Button title='Go to Practice' onPress={()=>{
                props.navigation.navigate('Practice')
            }} />
            </View>
            <View style={{ marginBottom: 30 }}>
                <Button title='Go to Practice2' onPress={() => {
                    props.navigation.navigate('Practice2')
                }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default MyWorkSpace