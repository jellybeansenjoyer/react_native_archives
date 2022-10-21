import React,{useReducer, useState} from 'react'
import {View,StyleSheet,Button,Text} from 'react-native'
import ReusableComp from './ReusableComp'
const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'Red':  if(state.red+action.amount<0||state.red+action.amount>255)
                     return state
                     return { ...state, red: state.red + action.amount };
        case 'Green': if (state.red + action.amount < 0 || state.red + action.amount > 255)
                    return state 
                    return { ...state, green: state.green + action.amount };
        case 'Blue': if (state.red + action.amount < 0 || state.red + action.amount > 255)
                     return state
                    return { ...state, blue: state.blue + action.amount };
        default: return state;
    }
}
const screen = ()=>{
    const FACTOR = 20
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
   
    
return (<View>
    <ReusableComp name="Red" increase={() => { dispatch({ colorToChange: 'Red', amount: FACTOR }) }} decrease={() => { dispatch({ colorToChange: 'Red', amount: FACTOR*-1 }) }} />
    <ReusableComp name="Green" increase={() => { dispatch({ colorToChange: 'Green', amount: FACTOR }) }} decrease={() => { dispatch({ colorToChange: 'Green', amount: FACTOR*-1 }) }}/>
    <ReusableComp name="Blue" increase={() => { dispatch({ colorToChange: 'Blue', amount: FACTOR })  }} decrease={() => { dispatch({ colorToChange: 'Blue', amount: FACTOR*-1 }) }} />
    <View style={{height:100 , width:100, backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}} />
    </View>)
}

const styles = StyleSheet.create({})

export default screen