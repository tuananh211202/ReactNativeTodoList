import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Modal } from "react-native";

import styles from "./style";

export const TaskTypeModal = () => {
    const data = [1, 2, 3];
    return (
        <Modal transparent={true}>
            <View style={styles.centredView}>
                <View style={styles.modalContainer}>
                    <Text style={styles.title}>Mức độ công việc</Text>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <View style={[styles.circle, styles.tier1]}></View>
                            <Text style={styles.tierText}>Quan trọng và khẩn cấp</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <View style={[styles.circle, styles.tier2]}></View>
                            <Text style={styles.tierText}>Quan trọng nhưng không khẩn cấp</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <View style={[styles.circle, styles.tier3]}></View>
                            <Text style={styles.tierText}>Không quan trọng nhưng khẩn cấp</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <View style={[styles.circle, styles.tier4]}></View>
                            <Text style={styles.tierText}>Không quan trọng và không khẩn cấp</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <View style={[styles.circle, styles.none]}></View>
                            <Text style={styles.tierText}>Lựa chọn sau</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

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
            <TaskTypeModal />
        </>
    )
};

export default Form;