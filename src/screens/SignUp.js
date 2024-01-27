import React from 'react';
import { View, Text, Button } from 'react-native';

const SignUp = ({ navigation }) => {
    return (
        <View>
            <Text style={{ fontSize: 25, color: 'black' }}>Sign Up</Text>
            <Button onPress={() => navigation.navigate('home')} title="Go to Home"></Button>
        </View>
    )
}

export default SignUp;