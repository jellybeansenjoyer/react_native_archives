import React from 'react'
import {View,StyleSheet,Button,Text} from 'react-native'

const ReusableComp = ({ name , increase ,decrease})=>{
    return (
        <View style={{marginTop:30 , marginBottom:30}}>
            <Text>{name}</Text>
            <Button title= {`Increase ${name}`} onPress={()=>{
                   increase()
            }}  />
            <Button title= {`Decraese ${name}`} onPress={()=>{
                    decrease()
            }}  />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ReusableComp