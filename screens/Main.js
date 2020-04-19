import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import NavBar from '../components/NavBar';
import GoalCard from '../components/GoalCard';
import Images from '../constants/Images';

const Main = props => {
    return (
        <View>
            <NavBar />
            <View style={styles.rowContainer}>
                <View>
                    <GoalCard category={Images.health}>
                        <Text style={styles.text}>Gym</Text>
                        <Text style={styles.text}>3</Text>
                    </GoalCard>
                </View>
                <View>
                    <GoalCard category={Images.home} >
                        <Text style={styles.text}>Cleaning</Text>
                        <Text style={styles.text}>1</Text>
                    </GoalCard>
                </View>
            </View>

            <View style={styles.rowContainer}>
                <View>
                    <GoalCard category={Images.school}>
                        <Text style={styles.text}>Calculus</Text>
                        <Text style={styles.text}>4</Text>
                    </GoalCard>
                </View>
                <View>
                    <GoalCard category={Images.work} >
                        <Text style={styles.text}>Code</Text>
                        <Text style={styles.text}>5</Text>
                    </GoalCard>
                </View>
            </View>

            <View style={styles.rowContainer}>
                <View>
                    <GoalCard category={Images.health}>
                        <Text style={styles.text}>Cook</Text>
                        <Text style={styles.text}>5</Text>
                    </GoalCard>
                </View>
                <View>
                    <GoalCard category={Images.relations} >
                        <Text style={styles.text}>Call Dad</Text>
                        <Text style={styles.text}>3</Text>
                    </GoalCard>
                </View>
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    rowContainer: {
        marginVertical: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text: {
        backgroundColor: 'transparent',
        fontSize: 22,
        fontWeight: 'bold',
    }
});

export default Main;