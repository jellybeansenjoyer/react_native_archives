import React from 'react';
import {Text,StyleSheet,View , FlatList} from 'react-native';

const flatListComponent = () =>{
    const countries=[
        {name:'Norway' , rank: '4'},
        { name: 'Denmark',rank:'9' },
        { name: 'Switzerland',rank:'10' },
        { name: 'Peru',rank:'8' },
        { name: 'Germany' , rank:'3' },
        { name: "Sweden",rank:'6'},
        { name: "Italy" , rank:'5' },
        { name: "Belgium" ,rank:'7'},
        { name: "France" , rank:'2'},
        { name: "Britain" , rank:'1'}
]
    return <FlatList data={countries} renderItem={({item})=>{
        return <Text style={styles.textStyle}>{item.name} Rank- {item.rank}</Text>
    }} keyExtractor = {item=>item.name} />
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:50,
        marginVertical:40,
        marginHorizontal:30
    }
})

export default flatListComponent