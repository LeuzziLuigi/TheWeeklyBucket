import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

import NavBar from '../components/NavBar';
import { GOALSLIST } from '../data/dummy-data';
import GoalCard from '../components/GoalCard';

const Main = props => {

    const [refresh, setRefresh] = useState(false);

    const renderGrid = itemData => {
        return (
            <TouchableOpacity
                //style = {} THIS WON-T UPDATE, THATS WHERE WE ARE STUCK ATM
                onPress = {() => {
                    if( itemData.item.counter > 0 ) itemData.item.counter-- ; 
                    setRefresh(!refresh);
                }}
            >
                <View style={styles.goalContainer}>
                    <GoalCard category={itemData.item.img}>
                        <Text style={styles.text}>{itemData.item.title}</Text>
                        <Text style={styles.text}>{itemData.item.counter}</Text>
                    </GoalCard>
                </View>
            </TouchableOpacity>
        )
        
    };
    
    return (
        
        <View>
            
            <NavBar />
            <FlatList
                numColumns={2}
                data={GOALSLIST}
                renderItem={renderGrid}
            />

            
        </View>
        
    );
};

const styles = StyleSheet.create({
    goalContainer: {
        padding: 30,     
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 22,
        fontWeight: 'bold',
    },
    search: {
        alignSelf: 'center',
        backgroundColor: 'white',
        width: '100%',
        textAlign: 'center',
        borderWidth: 1,
    },
    grid: {
        flex: 1,
    }
});
export default Main;