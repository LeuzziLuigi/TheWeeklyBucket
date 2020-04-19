import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';


const GoalCard = props => {
        return (
                <ImageBackground source={props.category} style={styles.icon}>
                        <View style={styles.textContainer}>
                                {props.children}
                        </View>
                </ImageBackground >
        )
};

const styles = StyleSheet.create({
        icon: {
                width: 130,
                height: 130,
        },
        textContainer: {
                flex: 1,
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'stretch',
                backgroundColor: 'rgba(222,222,222,0.5)',
                paddingVertical: 30,
        },        
});

export default GoalCard;