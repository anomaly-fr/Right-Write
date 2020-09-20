import React, { useState } from 'react';
import {Text,View,StyleSheet,TextInput} from 'react-native';
import { Styles, HEIGHT, colours } from '../Constants';
import firestore from '@react-native-firebase/firestore';
import { TouchableOpacity } from 'react-native-gesture-handler';




const Write = ({navigation}) => {

 //   const {textnote} = route.params;
   // console.log('con ' + textnote)

    const collectionRef = firestore().collection('Notes');

   
    const [text,setText] = useState('');
    const [title,setTitle] = useState('')
    const [numberWords,setNumberWords] = useState(0);
    const [numberChars,setNumberChars] = useState(0);
    const [numberCharsSpace,setNumberCharsSpace] = useState(0);
   // console.log(text);

   const saveNote = async () => {
    await(collectionRef.doc(title).set({
        
        title : title,
        note : text,
        key : Math.floor(Math.random())
        
    }));
    
    setText('')
    setTitle('')
 
   console.log('new note saved:  '+title + " "+note)
   }
    return(<View style = {Styles.container}>
      
    <Text style={{...styles.text,color: colours.blue}}>Number of words: {numberWords} </Text>
    <Text style={{...styles.text,color: colours.yellow}}>Number of characters (without spaces): {numberCharsSpace} </Text>
    <Text style={{...styles.text,color: colours.green}}>Number of total characters: {numberChars} </Text>

        <TextInput 
        style={styles.title}
        placeholder = 'Title' 
        focusable = {false}
        value = {title}
        onChangeText = {(text) => {
            setTitle(text);

        }}
        />


        <TextInput
        multiline
        value = {text}
        selectionColor = {colours.lineGray}
        onChangeText = { (text) => {
          

            
            setText(text);
            setNumberWords(text.length == 0 ? 0 :  text.trim().split(' ').length);
            setNumberCharsSpace(text.replace(/ /g,"").length);
            setNumberChars(numberWords == 0 ? 0 :text.length)
           // console.log(text);

        }}
        style={styles.input} />
        <TouchableOpacity onPress={saveNote}>
        <View style={{marginTop: '10%',backgroundColor : colours.lineGray,justifyContent: 'center', alignItems: 'center', borderRadius: 10,height: HEIGHT/18,color: 'white',fontWeight: 'bold',textAlign: 'center'}}>
        <Text style={{fontWeight: 'bold',color: 'white'}}>Save</Text>
        
      
        </View>
  </TouchableOpacity>
    </View>)
};

const styles = StyleSheet.create({
    input: {
       
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: 'blue',
        borderRightWidth: 1,
        borderLeftWidth : 1,
        borderBottomWidth: 1,
        backgroundColor: 'white',
        
       
        
    },
    text: {
        fontWeight: '900',
        margin: '1%',
        
    },
    title : {
        marginTop: '5%',
        borderTopWidth: 1,
        borderLeftWidth : 1,
        borderRightWidth: 1,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor: '#f9f9f9',
        height: HEIGHT/20,
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default Write;