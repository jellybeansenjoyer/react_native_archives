import React,{useState} from 'react'
import {View,StyleSheet,Button,Text} from 'react-native'
import ReusableComp from './ReusableComp'

const screen = ()=>{
    const FACTOR = 20
    const [red,setRed] = useState(0);
    const [blue,setBlue] = useState(0);
    const [green,setGreen] = useState(0);
return (<View>
        <ReusableComp name="Red" increase= {()=>{
            setRed(red+FACTOR)
        }} decrease={()=>{
            setRed(red-FACTOR)
        }} />
    <ReusableComp name="Green" increase={() => {
        setGreen(green + FACTOR)
    }} decrease={() => {
        setGreen(green - FACTOR) }} />
    <ReusableComp name="Blue" increase={() => {
        setBlue(blue + FACTOR)
    }} decrease={() => {
        setBlue(blue - FACTOR)
    }} />
    <View style={{height:100 , width:100, backgroundColor:`rgb(${red},${green},${blue})`}} />
    </View>)
}

const styles = StyleSheet.create({})

export default screen