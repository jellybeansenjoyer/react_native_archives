import React,{useReducer} from 'react'
import {View,Button,Text, StyleSheet} from 'react-native'
const reducer = (state,action)=>{
    switch(action.change_count){
        case 'change_increase':return {...state,count:state.count+1}
        case 'change_decrease': if(state.count-1<0)
                                return state;
                                return {...state,count:state.count-1}
        default:return state
    }
}
const Counter = ()=>{
    const [state,dispatch] = useReducer(reducer,{count:0})
    return (
        <View>
            <Text style={{ fontSize:30 }}>Counter</Text>
            <View style={{ marginTop:30, marginBottom:30}}  >
            <Button title='Increase' onPress={()=>{
                dispatch({change_count:'change_increase'})
            }}/>
            </View>
            <View style={{marginBottom:30}}>
            <Button title='Decrease' onPress={()=>{
                dispatch({ change_count: 'change_decrease' })
            }} />
            </View>
            <Text style={{fontSize:30 }}>{state.count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default Counter