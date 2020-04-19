import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList, Button } from 'react-native';


import { GOALS } from '../data/dataCategories';
import GoalCard from '../components/GoalCard';

const Add = props => {

    const renderGrid = itemData => {
        return (
            <TouchableOpacity
                //style = {}
                //onPress = {() => {}}
            >
                <View style={styles.goalContainer}>
                    <GoalCard category={itemData.item.category}>
                        <Text style={styles.text}>{itemData.item.title}</Text>
                    </GoalCard>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View>
            <TextInput style={styles.search} placeholder="search by keyword" />
            <FlatList
                numColumns={2}
                data={GOALS}
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
export default Add;