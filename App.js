import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



import Header from './components/Header';
import Main from './screens/Main';
import Add from './screens/Add';
import Account from './screens/Account';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.screen}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              height: 80,
              backgroundColor: '#333',             
            },
            headerTitleAlign: "center",                 
            headerTitle: props => <Header />
          }}
        >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Account" component={Account} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'rgba(222, 222, 222, 1)'
  },
  
})