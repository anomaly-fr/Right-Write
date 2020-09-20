import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';


export const WIDTH = Dimensions.get('window').width;
export const HEIGHT = Dimensions.get('window').height;

export const colours = {
    lineGray: '#434446',
    blue: '#5197E4',
    yellow: '#EBAB5E',
    green: '#53B79A'
}

export const Styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor: '#141518',
        height: HEIGHT,
        width: WIDTH,
        padding: '3%'

    
        
    }
})


    
