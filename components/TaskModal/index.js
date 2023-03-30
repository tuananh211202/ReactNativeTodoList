import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Modal } from "react-native";

import styles from "./style";

const TaskModal = (props) => {
    const {
      visible,
      setVisible,
      value,
      setValue,
      handleSavePress,
      handleDeletePress
    } = props;

    return (
      <Modal transparent={true} onRequestClose={() => setVisible(false)} visible={visible}>
        <View style={styles.centredView}>
          <View style={styles.modalContainer}>
            <TextInput style={styles.textInput} value={value.content} onChangeText={(text) => setValue({...value, content: text})} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.saveButton, styles.button]} onPress={() => handleSavePress()}>
                <Text style={styles.buttonText}>Lưu</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.deleteButton, styles.button]} onPress={() => handleDeletePress()}>
                <Text style={styles.buttonText}>Xóa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.cancelButton, styles.button]} onPress={() => setVisible(false)}>
                <Text style={styles.buttonText}>Hủy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
};

export default TaskModal;