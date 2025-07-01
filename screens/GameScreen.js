import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';

export default function GameScreen({ navigation }) {
  const [guess, setGuess] = useState('');
  const [target] = useState(Math.floor(Math.random() * 10) + 1); // 1 to 10

  const handleGuess = () => {
    const userGuess = parseInt(guess);
    if (userGuess === target) {
      navigation.replace('Result', { result: 'win', target });
    } else {
      navigation.replace('Result', { result: 'lose', target });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Guess a number between 1 and 10</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
        placeholder="Enter your guess"
      />
      <Pressable style={styles.button} onPress={handleGuess}>
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20, 
    alignItems: 'center' },
  text: { 
    fontSize: 20, 
    marginBottom: 10 
  },
  input: { 
    borderWidth: 1, 
    padding: 10, 
    marginBottom: 10, 
    width: '80%', 
    borderColor: 'gray', 
    borderRadius: 20 
  },
  button: { 
    width: '40%', 
    marginTop: 20, 
    backgroundColor: 'green', 
    alignContent: 'center', 
    borderRadius: 20 
  },
  buttonText: { 
    color: 'white', 
    textAlign: 'center', 
    padding: 10 
  }
});
