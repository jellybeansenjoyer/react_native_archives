import React from 'react'
import {View,StyleSheet,Button,Text} from 'react-native'

const ReusableComp = (props)=>{
    
    return (
        <View style={{marginTop:30 , marginBottom:30}}>
            <Text>{name}</Text>
            <Button title= {`Increase ${props.name}`} onPress={()=>{
                   props.increase()
            }}  />
            <Button title= {`Decraese ${name}`} onPress={()=>{
                    props.decrease()
            }}  />
        </View>
    )
}

const styles = StyleSheet.create({})

export default ReusableComp