import React from 'react'
import {Text,StyleSheet,View,Image} from 'react-native';

const ImageDetail = (props) =>{
    return <View>
        <Image source={require('../../assets/forest.jpg')} />
    <Text>
        {props.title}
    </Text>
    </View>
}

const styles = StyleSheet.create({})

export default ImageDetail