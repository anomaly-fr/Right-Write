import React from 'react';
import {Text,View,StyleSheet,Image,TouchableOpacity,TouchableHighlight} from 'react-native';
import { Styles,WIDTH,HEIGHT, } from '../Constants';




const MainScreen = ({navigation}) => {

    const words = {
        new: 'New',
        saved: 'Saved',
        todo: 'Todo'
    };

    const goTo = (title) => {
        return(<View style={{alignItems:'center'}} >
      <View style={styles.goTo1}>
      <Text style={{...styles.heading,fontSize: 16}}>{title}</Text>

      </View>
        </View>)
    }


    return(<View style={{...Styles.container,justifyContent: 'center'}}>

   
    <TouchableHighlight activeOpacity={0.2} 
  underlayColor="transparent" onPress={() => {console.log(navigation.navigate('write'))}}>
   <Text style={{color: '#5197E4',fontWeight: '900',fontSize: 18,marginHorizontal: '5%'}}>{words.new}</Text>
  </TouchableHighlight>
   <View style={{borderWidth: 0.4,borderColor: '#434446',margin: '5%'}} />
   <TouchableHighlight onPress={() => {navigation.navigate('saved')}}>
   <Text style={{color: '#EBAB5E',fontWeight: '900',fontSize: 18,marginHorizontal: '5%'}}>{words.saved}</Text>
   </TouchableHighlight>
   <View style={{borderWidth: 0.4,borderColor: '#434446',margin: '5%'}} />
   <TouchableOpacity activeOpacity={0.2} 
  underlayColor="transparent">
   <Text style={{color: '#53B79A',fontWeight: '900',fontSize: 18,marginHorizontal: '5%'}}>{words.todo}</Text>
   </TouchableOpacity>
   <View style={{borderWidth: 0.4,borderColor: '#434446',margin: '5%'}} />
 

    </View>)
};

const styles = StyleSheet.create({
    goTo1 : {
        
        borderRadius: 10,
        backgroundColor: 'white' ,
        height: HEIGHT/6,
        width : WIDTH/3,
        marginTop: HEIGHT/5,
        padding: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    
    },
   
    heading: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        margin: '2%'
       
       
    }
});


export default MainScreen;