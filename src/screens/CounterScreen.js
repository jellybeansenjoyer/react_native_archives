import React,{useState} from 'react';
import { View, Button, Text, StyleSheet} from 'react-native';

const CounterScreen = ()=>{
     let [counter,setsCounter] = useState(0); 
    return (
        <View>
        <Button title="Increase" onPress={()=>{
            setsCounter(counter+1);
            console.log(counter);
        }}/>
            <Button title="Decrease" onPress={()=>{
                setsCounter(counter-1);
            }}  />
        <Text>Counter Count:{counter}</Text>
        </View>
        );
};

const style = StyleSheet.create({});

export default CounterScreen;
