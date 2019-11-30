import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ChangeText from './components/ChangeText.js';
import AddCourse from './components/AddCourse.js';

export default function App() {
  return(
    <AddCourse />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
