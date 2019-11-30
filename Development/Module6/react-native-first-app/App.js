import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem.js';
import GoalInput from './components/GoalInput.js';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]) // React Hook
  const [modal, changeModal] = useState(false)

  const addGoal = (addedGoal) => {
    setCourseGoals((currentGoals) => [...courseGoals, { key: Math.random().toString(), value: addedGoal }])
    changeModal(false)
  }

  const deleteGoal = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.key !== goalId)
    })
  }

  const cancelAddGoal = () => {
    changeModal(false)
  }

  return(
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => changeModal(true)} />
      <GoalInput visible={modal} addGoal={addGoal} cancel={cancelAddGoal} />
      <FlatList
        keyExtractor={(item, idx) => item.key}
        data={courseGoals}
        renderItem={goal => <GoalItem id={goal.item.key} goal={goal.item.value} deleteGoal={deleteGoal}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
})
