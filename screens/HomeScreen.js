import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 Guessing Game</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Game')}>
        <Text style={styles.buttonText}>Start Game</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  title: { 
    fontSize: 30, 
    marginBottom: 20 
  },
  button: { 
    width: '40%', 
    marginTop: 20, 
    backgroundColor: 'green', 
    borderRadius: 20, 
    alignItems: 'center' 
  },
  buttonText: { 
    color: 'white', 
    textAlign: 'center', 
    padding: 10 
  }
});
