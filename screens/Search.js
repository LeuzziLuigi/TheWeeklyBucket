import React, { useState, createFactory } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';


import { GOALSLIST } from '../data/dataGoals';
import { CommonActions } from '@react-navigation/native';

const Search = props => {

    const category = props.route.params.category;

    
    const renderGrid = itemData => {
        if(itemData.item.category === category || category === null){
        return (
            <TouchableOpacity
                //style = {}
                //onPress = 
            >
                <View style={{ backgroundColor: itemData.item.id[1] % 2 === 0 ? '#888888' : '#eee', alignItems: "center", paddingVertical: 5, marginVertical: -1} }>
                        <Text style={styles.text}>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    };

    return(
        <View>
            <TouchableOpacity style={styles.backContainer} onPress= {() => props.navigation.dispatch(CommonActions.goBack())}> 
                <Text>  Go Back to Select Category  </Text>    
            </TouchableOpacity>  
            <TextInput style={styles.search} placeholder="search by keyword" />
            <FlatList 
                data={GOALSLIST}
                renderItem={renderGrid}
            />
        </View>
    );
};

const styles = StyleSheet.create(
    {
        search: {
            alignSelf: 'center',
            backgroundColor: 'white',
            width: '100%',
            textAlign: 'center',
            borderWidth: 1,
        },
        backContainer:
        {
            alignSelf: 'center',
            backgroundColor: '#A8A8A8',
            borderRadius: 10,
            marginVertical: 10,

        },
        text: {
            fontSize: 15,
        }
    }
)


export default Search;