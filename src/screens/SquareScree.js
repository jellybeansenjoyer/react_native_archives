import React,{ useState} from 'react';
import {View, Text,Button,StyleSheet} from 'react-native';
import CounterScreen from './CounterScreen';
import ColorCounter from './ColorCounter';
const SquareScreen = () =>{
    const [red,setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const COLOR_CONSTANT = 100;
    const changeColor = (colr,color,change) =>{
        if(color>=0&&color<=256){
            console.log(color)
        }else{
            console.log(color)
        } 
        switch (colr) {
                case 'Red':
                    setRed(color+change)  
                    return;                  
                case 'Blue':
                        setBlue(color + change)
                    return;
                case 'Green':
                        setGreen(color + change)
                    return;
                default:
                    return;
           
        }
    };
    return (
        <View>
            <ColorCounter color="Red" onIncrease={()=>{
                changeColor("Red",red,COLOR_CONSTANT);
            }} onDecrease={()=>{
                changeColor("Red",red,COLOR_CONSTANT*-1);
            }}/>
            <ColorCounter color="Green" onIncrease={() => {
                changeColor("Green",green,COLOR_CONSTANT);
            }} onDecrease={() => {
                changeColor("Green",green,COLOR_CONSTANT*-1);}} />
            <ColorCounter color="Blue" 
            onIncrease = {()=>{
                changeColor("Blue",blue, COLOR_CONSTANT);
            }} onDecrease={() => {
                changeColor("Blue",blue ,COLOR_CONSTANT*-1);}} />
            <View style = {{height:150 , width:150,backgroundColor:`rgb(${red},${green},${blue})`}}/>
        </View>
    );
};

const style = StyleSheet.create({});
export default SquareScreen;