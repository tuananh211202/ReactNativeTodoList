import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Modal } from "react-native";

import styles from "./style";

export const TaskTypeModal = (props) => {
    const {visible, setVisible, task, addTask, setTask} = props;

    const data = ["Quan trọng và khẩn cấp", "Quan trọng nhưng không khẩn cấp", "Không quan trọng nhưng khẩn cấp", "Không quan trọng và không khẩn cấp", "Lựa chọn sau"];
    
    const handlePress = (index) => {
        setVisible(false);
        addTask(task, index);
        setTask("");
    }

    return (
        <Modal transparent={true} visible={visible}>
            <View style={styles.centredView}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Mức độ công việc</Text>
                    {data.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => handlePress(index)}>
                                <View style={styles.item}>
                                    <View style={[styles.circle, styles.tierColor[index]]}></View>
                                    <Text style={styles.tierText}>{item}</Text>
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </View>
        </Modal>
    );
};

const Form = (props) => {
    const [visible, setVisible] = useState(false);
    const {onAddTask: addTask} = props;
    const [task, setTask] = useState("");
    const handlePress = () => {
        if(task.length === 0){
            alert("Hãy nhập công việc!!!");
            return ;
        }
        setVisible(true);
        Keyboard.dismiss();
    }

    return (
        <>
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
            <TaskTypeModal visible={visible} setVisible={setVisible} task={task} addTask={addTask} setTask={setTask} />
        </>
    )
};

export default Form;