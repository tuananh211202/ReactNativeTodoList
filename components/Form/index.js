import React from "react";
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./style";

const Form = () => {
    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.addTask}
            keyboardVerticalOffset={10}
        >
            <TextInput placeholder="Your task" style={styles.input} />
            <TouchableOpacity>
                <View style={styles.iconWrapper}>
                    <Text style={styles.icon}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
};

export default Form;