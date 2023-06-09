import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, Alert, Modal, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Task from './components/Task';
import Form from './components/Form';
import styles from './App.component.style';
import TaskModal from './components/TaskModal';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState({number: 0, content: "", type: 0});

  useEffect(() => {
      AsyncStorage.getItem("taskList1", (err, result) => {
        const data = JSON.parse(result) ?? [];
        setTaskList(data);
      });
    }
  ,[]);

  const saveData = (key, data) => {
    AsyncStorage.setItem(key, data);
  }

  const handleAddTask = (task, type) => {
    const newTaskList = [...taskList, {content: task, type: type}];
    newTaskList.sort((a,b) => {return a.type - b.type;})
    setTaskList(newTaskList);
    saveData("taskList1", JSON.stringify(newTaskList));
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
            saveData("taskList1", JSON.stringify(newTaskList));
            setVisible(false);
          }
        },
        {
          text: "Cancel",
          onPress: () => {}
        }
      ]
    )
  }

  const handleToggleModal = (ind, it) => {
    setVisible(true);
    setValue({number: ind, content: it.content, type: it.type});
  }

  const handleDeletePress = () => {
    handleDeleteTask(value.number);
  }

  const handleSavePress = () => {
    const newTaskList = [...taskList];
    newTaskList[value.number] = {content: value.content, type: value.type};
    setTaskList(newTaskList);
    setVisible(false);
    saveData("taskList1", JSON.stringify(newTaskList));
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <ScrollView style={styles.items}>
          {taskList.map((item, index) => {
            return <Task 
                key={index} 
                content={item.content} 
                number={index + 1}
                onPress={() => handleToggleModal(index, item)} 
              />
          })}
        </ScrollView>
      </View>
      <Form onAddTask={handleAddTask} />
      <TaskModal 
        visible={visible}
        setVisible={setVisible}
        value={value}
        setValue={setValue}
        handleDeletePress={handleDeletePress}
        handleSavePress={handleSavePress}
      />
    </View>
  );
}

export default App;


