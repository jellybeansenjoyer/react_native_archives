import React,{useState} from 'react'
import {View,StyleSheet,Button,Text} from 'react-native'
import ReusableComp from './ReusableComp'

const screen = ()=>{
    const change = (value,factor)=>{
        switch (value) {
            case 'red': if(red + factor > 255 || red + factor < 0)
                        return
                        else 
                        setRed(red+factor)
                        return
            case 'blue': if (blue + factor > 255 || blue + factor < 0)
                return
            else
                setBlue(blue + factor)
                return
            case 'green': if (green + factor > 255 || green + factor < 0)
                return
            else
                setGreen(green + factor)
                return
        }
    }
    const FACTOR = 20
    const [red,setRed] = useState(0);
    const [blue,setBlue] = useState(0);
    const [green,setGreen] = useState(0);
return (<View>
        <ReusableComp name="Red" increase= {()=>{
            change('red',FACTOR)
        }} decrease={()=>{
            change('red',FACTOR*-1)
        }} />
    <ReusableComp name="Green" increase={() => {
        change("green",FACTOR)
    }} decrease={() => {
        change("green", FACTOR*-1) }}/>

    <ReusableComp name="Blue" increase={() => {
        change("blue",FACTOR)
    }} decrease={() => {
        change("blue", FACTOR*-1)
    }} />
    <View style={{height:100 , width:100, backgroundColor:`rgb(${red},${green},${blue})`}} />
    </View>)
}

const styles = StyleSheet.create({})

export default screen