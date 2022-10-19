import React from 'react';
import { Text, StyleSheet , Button , View,TouchableOpacity, Image} from 'react-native';

const HomeScreen = (props) => {
  return <View>
    <Image source={ require('../../assets/beach.jpg')} ></Image>
    <Text style={styles.text}>Raghav</Text>
    <Button title='Press' onPress={()=>{
      props.navigation.navigate('Color')
    }} style = {styles.button}/>
    <TouchableOpacity onPress={()=>{
      props.navigation.navigate('Image')
    }}>
      <Text>Touchable text</Text>
    </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default HomeScreen;
