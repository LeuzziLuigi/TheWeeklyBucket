import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Button } from 'react-native';

import NavBar from '../components/NavBar';
import { USERGOALS } from '../data/dummy-data';
import GoalCard from '../components/GoalCard';


const Main = props => {

    const [refresh, setRefresh] = useState(false);

    const [isVisible, setIsVisible] = useState(false);
    
    
    const renderGrid = itemData => {
        return (
            <TouchableOpacity
                onPress = {() => {
                    if( itemData.item.counter > 0 ) itemData.item.counter-- ; 
                    let i = 0;
                    while(i < USERGOALS.length && USERGOALS[i].counter === 0) i++;
                    if (i === USERGOALS.length ) setIsVisible(true);
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
            <Modal visible={isVisible}>
                <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={styles.card}>
                        <Text>Congratulations!</Text>
                        <Text>You completed all your goals!</Text>
                        <Button title="Noice" onPress={() => setIsVisible(false) } />
                    </View>
                </View>
            </Modal>
            <NavBar />
            <FlatList
                numColumns={2}
                data={USERGOALS}
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
});
export default Main;