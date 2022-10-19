import React from 'react';
import { Text,View,StyleSheet} from 'react-native';
import ImageDetail from './ImageDetails';
const ImageScreen = ()=>{
    return <View>
        <ImageDetail title="Norway"/>
        <ImageDetail title="Denmark"/>
        <ImageDetail title="Switzerland"/>
    </View>
}

const styles = StyleSheet.create({})

export default ImageScreen;