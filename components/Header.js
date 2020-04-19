import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';

const Header = props => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('Main') }}>
            <View style={styles.header}>
                <Text style={styles.headerText}>The Weekly Bucket</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    header: {
        height: '100%',
        width: Dimensions.get('window').width,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',

    },
    headerText: {
        color: 'black',
        fontSize: 30,
    },
});

export default Header;
