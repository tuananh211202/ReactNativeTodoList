import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./style";

const Task = (props) => {
  const {number: taskNumber, content: taskContent, onPress: handleDeleteTask} = props;

  const formattenTaskNumber = (num) => {
    if(num < 9) return '0' + num
    return '' + num;
  }

  const itemBg = taskNumber % 2 == 0 ? styles.even : styles.odd;

  return (
      <TouchableOpacity onPress={() => handleDeleteTask(taskNumber - 1)}>          
          <View style={styles.item}>
            <View style={[styles.square, itemBg]}>
              <Text style={styles.number}>{formattenTaskNumber(taskNumber)}</Text>
            </View> 
            <Text style={styles.content}>{taskContent}</Text>
          </View>
        </TouchableOpacity>
  );
};

export default Task;