import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./style";

const Form = (props) => {
    const {onAddTask: addTask} = props;
    const [task, setTask] = useState("");
    const handlePress = () => {
        if(task.length === 0){
            alert("Hãy nhập công việc!!!");
            return ;
        }
        addTask(task);
        setTask("");
        Keyboard.dismiss();
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.addTask}
            keyboardVerticalOffset={10}
        >
            <TextInput 
                placeholder="Your task" 
                style={styles.input}
                onChangeText={(text) => setTask(text)} 
                value={task}
            />
            <TouchableOpacity
                onPress={handlePress}
            >
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
};

export default Form;