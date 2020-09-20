import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';
import { HEIGHT, WIDTH, colours } from '../Constants';
import { useNavigation } from '@react-navigation/native';



let Num;


const colourArray = [colours.blue,colours.yellow,colours.green];
const One = ({content,num}) => {
 Num = num;
 const navigation = useNavigation();
  // console.log('num' + num)

    return(<View style={styles.note}>
    <Text style={styles.text}>{content}</Text>
    </View>)
};
const styles = StyleSheet.create({
    note: {
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: colourArray[0],
       
       
        flex: 1,
        margin: '1%'

    },
    text:{
        color: 'white',
        margin: '1%'
    }
})
export default One;