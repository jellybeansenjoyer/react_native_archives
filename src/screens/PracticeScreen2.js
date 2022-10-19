import React,{useState} from 'react'
import {View,StyleSheet,Button,Text} from 'react-native'
import ReusableComp from './ReusableComp'

const screen = ()=>{
    const [red,setRed] = useState(0);
    const [blue,setBlue] = useState(0);
    const [green,setGreen] = useState(0);
return (<View>
        <ReusableComp name="Red" increase= {()=>{
            setRed(red+20)
        }} decrease={()=>{
            setRed(red-20)
        }} />
    <ReusableComp name="Green" increase={() => {
        setGreen(green + 20)
    }} decrease={() => {
        setGreen(green - 20) }} />
    <ReusableComp name="Blue" increase={() => {
        setBlue(blue + 20)
    }} decrease={() => {
        setBlue(blue - 20)
    }} />
    <View style={{height:100 , width:100, backgroundColor:`rgb(${red},${green},${blue})`}} />
    </View>)
}

const styles = StyleSheet.create({})

export default screen