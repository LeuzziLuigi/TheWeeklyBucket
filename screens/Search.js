import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Modal, Button } from 'react-native';


import { GOALSLIST } from '../data/dataGoals';
import { CommonActions } from '@react-navigation/native';
import { USERGOALS } from '../data/dummy-data';
import Goal from '../models/Goal';


const Search = props => {

    

    const category = props.route.params.category;

    const [word, setWord] = useState("");

    const [userInput, setUserInput] = useState();
    
    const [userItem, setUserItem] = useState();

    const [isVisible, setIsVisible] = useState(false);
    

    const compare = (title) => {
        title = title.toLowerCase();
        let userWord = word.value.toLowerCase();
        let i = 0;
        
        while(title[i] == userWord[i]){
            i++;
            if (title.length === i) return true;
        } 
        
        if(userWord.length === i) return true;
        else return false;
    }

    const addGoal = () => {
        let g = USERGOALS[USERGOALS.length-1].id; g = g[1]; g++;
        let image;
        switch(userItem.category){
            case 'custom': image = require('../images/custom.jpeg'); break;
            case 'exercise': image = require('../images/exercise.jpeg'); break;
            case 'relations': image = require('../images/relations.jpeg'); break;
            case 'health': image = require('../images/health.jpeg'); break;
            case 'home': image = require('../images/home.jpeg'); break;
            case 'school': image = require('../images/school.jpeg'); break;
            case 'work': image = require('../images/work.jpeg'); break;
        }
            
    
        const obj = new Goal("g"+g, userItem.title, userItem.category, image, userInput);
        USERGOALS.push(obj);
        setIsVisible(false);
        setUserInput();
        setUserItem();
    }


    const renderGrid = itemData => {
        if((itemData.item.category === category || category === null)&&(word.value === undefined || compare(itemData.item.title))){
        return (
            <TouchableOpacity
                onPress = {() => {setUserItem(itemData.item); setIsVisible(true)}}
            >
                <View style={{ backgroundColor: itemData.item.id[1] % 2 === 0 ? '#888888' : '#eee', alignItems: "center", paddingVertical: 5, marginVertical: -1} }>
                        <Text style={styles.text}>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    };

    return(
        <View>
            <Modal visible={isVisible}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.card}>
                        <Text>How many times?</Text>
                        <TextInput style={styles.input} keyboardType="number-pad" maxLength={2} onChangeText={(value) => setUserInput(value)} />
                        <Button title="Ok" onPress={() => addGoal() } />
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.backContainer} onPress= {() => props.navigation.dispatch(CommonActions.goBack())}> 
                <Text>  Go Back to Select Category  </Text>    
            </TouchableOpacity>  
            <TextInput style={styles.search} placeholder="search by keyword" autoCapitalize="none" onChangeText={(value) => setWord({value})} />
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
        },
        card: {
            padding: 20,
            shadowColor: 'black',
            backgroundColor: 'white',
            elevation: 3,                             // just for android
            shadowRadius: 6,                         // just iOS
            shadowOpacity: 0.3,                     // just iIOS
            shadowOffset: { width: 0, height: 2 }, // just iIOS     
            borderRadius: 10,  
            alignItems: "center"
        },
        input: {
            height: 30,
            width: 50,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
            marginTop: 10,
            marginBottom: 15,
            height: 30,
            textAlign: "center",
        }
    }
)


export default Search;