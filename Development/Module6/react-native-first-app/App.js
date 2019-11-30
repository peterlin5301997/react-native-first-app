import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('') // React Hook
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputChange = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoal = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal])
  }

  return(
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalInputChange} />
        <Button title="ADD" onPress={addGoal} />
      </View>
      <View>
        {courseGoals.map((goal) => <Text>{goal}</Text>)}
      </View>
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
