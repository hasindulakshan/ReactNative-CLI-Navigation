import React from 'react';
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 25, color: 'black' }}>Home</Text>
            <Button onPress={() => navigation.navigate('details')} title="Go to Details"></Button>
        </View>
    )
}

export default Home;