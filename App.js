import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

import Task from './components/Task';
import Form from './components/Form';
import styles from './App.component.style';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          <Task />
        </ScrollView>
      </View>
      <Form />
    </View>
  );
}

export default App;


