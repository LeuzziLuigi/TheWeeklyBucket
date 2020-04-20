import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList } from 'react-native';


import { GOALS } from '../data/dataCategories';
import GoalCard from '../components/GoalCard';

const Add = props => {

    const renderGrid = itemData => {
        return (
            <TouchableOpacity
                //style = {}
                onPress={() => {props.navigation.navigate('Search', {category: itemData.item.category})}}
            >
                <View style={styles.goalContainer}>
                    <GoalCard category={itemData.item.img}>
                        <Text style={styles.text}>{itemData.item.title}</Text>
                    </GoalCard>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View>
            <TouchableOpacity style={styles.searchContainer} onPress={() => props.navigation.navigate('Search', {category: null})}>
                <Text style={styles.search}>  Search by Keyword Instead  </Text>    
            </TouchableOpacity> 
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
    searchContainer: {
        alignSelf: 'center',
        backgroundColor: '#A8A8A8',
        borderRadius: 10,
        marginTop: 10,
    },
    grid: {
        flex: 1,
    }
});
export default Add;