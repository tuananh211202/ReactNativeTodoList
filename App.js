import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Task from './components/Task';
import Form from './components/Form';
import styles from './App.component.style';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
      AsyncStorage.getItem("taskList", (err, result) => {
        const data = JSON.parse(result);
        setTaskList([...data]);
      });
    }
  ,[]);

  const saveData = (key, data) => {
    AsyncStorage.setItem(key, data);
  }

  const handleAddTask = (task) => {
    const newTaskList = [...taskList, task];
    setTaskList(newTaskList);
    saveData("taskList", JSON.stringify(newTaskList));
  }

  const handleDeleteTask = (index) => {
    Alert.alert(
      "Thông báo !!!",
      "Bạn có chắc chắn muốn xóa?",
      [
        {
          text: "OK",
          onPress: () => {
            const newTaskList = [...taskList];
            newTaskList.splice(index, 1);
            setTaskList(newTaskList);
            saveData("taskList", JSON.stringify(newTaskList));
          }
        },
        {
          text: "Cancel",
          onPress: () => {}
        }
      ]
    )
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return <Task 
                key={index} 
                content={item} 
                number={index + 1}
                onPress={handleDeleteTask} 
              />
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
    </View>
  );
}

export default App;


