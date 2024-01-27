import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Details = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 25, color: 'black' }}>Details</Text>
            <Button onPress={() => navigation.navigate('sign-up')} title="Go to SignUp"></Button>
        </View>
    )
}

export default Details;