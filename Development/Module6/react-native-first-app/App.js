import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]) // React Hook

  const addGoal = (addedGoal) => {
    setCourseGoals((currentGoals, idx) => [...courseGoals, { key: idx, value: addedGoal }])
  }

  return(
    <View style={styles.screen}>
      <GoalInput addGoal={addGoal} />
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
})
