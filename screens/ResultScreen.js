import React from 'react';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { result, target } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.result}>
        {result === 'win' ? '🎉 You Won!' : '❌ You Lost'}
      </Text>
      <Text style={styles.target}>Correct Number was: {target}</Text>
      <Pressable style={styles.button} onPress={() => navigation.replace('Game')}>
        <Text style={styles.buttonText}>Play Again</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Back to Home</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  result: { 
    fontSize: 30, 
    marginBottom: 10 
  },
  target: { 
    fontSize: 20, 
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
