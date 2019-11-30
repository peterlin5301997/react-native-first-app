import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function AddCourse() {
  return(
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <TextInput placeholder="Course Goal" style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: '80%' }}/>
        <Button title="ADD" />
      </View>
    </View>
  )
}
