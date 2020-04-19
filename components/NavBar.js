import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';

const NavBar = props => {
    const navigation = useNavigation();
    return (
        <View style={styles.navBar}>
            <View style={styles.button}><TouchableOpacity onPress={() => { navigation.navigate('Add') }}><Text style={{ textAlign: 'center', }}>Add</Text></TouchableOpacity></View>
            <View style={styles.button}><TouchableOpacity onPress={() => { navigation.navigate('History') }}><Text style={{ textAlign: 'center', }}>History</Text></TouchableOpacity></View>
            <View style={styles.button}><TouchableOpacity onPress={() => { navigation.navigate('Account') }}><Text style={{ textAlign: 'center', }}>Account</Text></TouchableOpacity></View>
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