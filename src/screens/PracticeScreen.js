import React,{useState} from "react";
import {View,StyleSheet,Button} from 'react-native'
import { FlatList } from "react-native-gesture-handler";


const PracticeScreen = ()=>{
    const [colors,addColor] = useState([]);

    return (
    <View>
        <Button title="Press" onPress={()=>{
            addColor([...colors,getColor()])
            console.log(colors)
        }}/>
        <FlatList 
        keyExtractor={item => item }
        data={colors} 
        renderItem={({item})=>{
                return <View style={{ width: 100, height: 100, backgroundColor: item }} />
        }}/>
    </View>
    )
}

const getColor = ()=>{
    const red = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}
const styles = StyleSheet.create({});

export default PracticeScreen;