import React,{useState} from 'react'
import { Text, StyleSheet, View, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const TextInputScreen = ()=>{
const [text,changeText] = useState(' ')
 return (<View>
        <Text style={{fontSize:30}}>Enter the Password</Text>
        <TextInput style={styles.textInputStyle} 
                   value={text}
                   onChangeText={(newText)=>{
                        changeText(newText)        
                   }}
                   autoCorrect={false}
                   autoCapitalize='none'            
        />
        <Text style={{fontSize:30}}>{text}</Text>
        {text.length<5?<Text>The length of the password must be atleast 5 letters.</Text>:null}
    </View>)
}

const styles = StyleSheet.create({ textInputStyle:{
    marginTop:15,
    fontSize:20,
    borderColor:'black',
    borderWidth:1
}})

export default TextInputScreen