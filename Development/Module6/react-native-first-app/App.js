import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem.js';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('') // React Hook
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputChange = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoal = () => {
    setCourseGoals((currentGoals, idx) => [...courseGoals, { key: idx, value: enteredGoal }])
  }

  return(
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputChange} />
        <Button title="ADD" onPress={addGoal} />
      </View>
      <FlatList
        keyExtractor={(item, idx) => item.key}
        data={courseGoals}
        renderItem={goal => <GoalItem goal={goal.item.value} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: '80%'
  }
})
