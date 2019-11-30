import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

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
        renderItem={goal => (
          <View style={styles.listItem}>
            <Text>{goal.item.value}</Text>
          </View>
        )}
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10, // React Native Only, N/A in CSS
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})
