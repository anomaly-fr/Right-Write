import React, { useEffect, useState } from 'react';
import {Text,View,StyleSheet,FlatList,BackHandler} from 'react-native';
import {StackActions,useFocusEffect} from '@react-navigation/native'
import firestore from '@react-native-firebase/firestore';
import { Styles, colours } from '../Constants';
import One from '../components/oneNote';
import { TouchableOpacity } from 'react-native-gesture-handler';



const Saved = ({navigation}) => {
    const [notes,setNotes] = useState([])
  //  const collectionRef = firestore().collection('notes');
  // useFocusEffect(
  //   React.useCallback(() => {
  //     const onBackPress = () => {
  //    //  console.log('Go to homescreen');
  //       navigation.dispatch(StackActions.popToTop());
  //         return true;
        
  //     };

  //     BackHandler.addEventListener('hardwareBackPress', onBackPress);

  //     return () =>
  //       BackHandler.removeEventListener('hardwareBackPress', onBackPress);
  //   },)
  // );


    const getNotes = async () => {
        firestore()
        .collection('Notes')
        .get()
        .then(querySnapshot => {
    //      console.log('Total notes: ', querySnapshot.size);
          const notesArray = [];
         
          querySnapshot.forEach(documentSnapshot => {
          //  console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            const {note} = documentSnapshot.data();
          //  console.log('The note is '+note)
            notesArray.push(note);
          });
          setNotes(notesArray)
          console.log(notesArray)
      
        });
    }

    useEffect(() => {
        getNotes();

    },[])
        
          
    
 

    return(<View style={Styles.container}>
        <Text style={styles.heading}>List of saved notes</Text>
        <FlatList
        data = {notes}
      
        renderItem = {({item}) => {
            //console.log(item);
            return(<View>
              <TouchableOpacity onPress={()=> {navigation.navigate('edit',{
                
                edit: item,
                 
              })}}>
              <One content={item} num={2}/>
              </TouchableOpacity>
             
            </View>)
        }} />
    </View>)
}

const styles = StyleSheet.create({
  heading: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default Saved;