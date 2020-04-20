import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';

const NavBar = props => {
    const navigation = useNavigation();
    return (
        <View style={styles.navBar}>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Add') }}><Text style={{ textAlign: 'center', }}>Add</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('History') }}><Text style={{ textAlign: 'center', }}>History</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Account') }}><Text style={{ textAlign: 'center', }}>Account</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '110%',
        alignSelf: 'center'
    },
    button: {
        flex: 1,
        backgroundColor: Colors.blue,
        paddingVertical: 15,
        borderWidth: 0.8,
    }
})

export default NavBar;