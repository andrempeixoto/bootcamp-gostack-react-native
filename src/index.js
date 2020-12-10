import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

// View: div, footer, header, etc (containers)
// Text: p, span, strong, h1, h2...
// They don't possess any semantic meaning
// All components have display: flex

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="purple" />
      <View style={styles.container}>
        <Text style={styles.title}>Hi!</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
