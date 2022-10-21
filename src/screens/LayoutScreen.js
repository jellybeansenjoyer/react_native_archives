import React from 'react'
import {View,StyleSheet} from 'react-native'

const LayoutScreen = ()=>{
    return (<View style={styles.parentStyle}>
        <View style={styles.child1Style} />
        <View style={styles.child2Style} />
        <View style={styles.child3Style} />
    </View>)    
}

const styles = StyleSheet.create({
    parentStyle:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    child1Style:{
        width:100,
        height:100,
        backgroundColor:`rgb(${100},${0},${0})`
    },
    child2Style:{
        width: 100,
        height: 100,
        marginTop:100,
        backgroundColor: `rgb(${0},${100},${0})`
    },
    child3Style: {
        width: 100,
        height: 100,
        backgroundColor: `rgb(${0},${100},${100})`
    }
})

export default LayoutScreen