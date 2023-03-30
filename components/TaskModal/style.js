import { StyleSheet } from "react-native";

import color from "../../contains/color";

const styles = StyleSheet.create({
    centredView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#00000099"
    },
    modalContainer: {
      width: "90%",
      height: 120,
      backgroundColor: color.background,
      borderRadius: 20,
      borderWidth: 1
    },
    textInput: {
      marginTop: 20,
      marginHorizontal: 10,
      height: 44,
      borderWidth: 1,
      borderRadius: 20,
      backgroundColor: color.white,
      borderColor: color.primary,
      paddingVertical: 10,
      paddingHorizontal: 20
    },
    buttonContainer: {
      marginTop: 10,
      marginHorizontal: 10,
      justifyContent: "space-between",
      flexDirection: "row"
    },
    button: {
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      width: 100,
      height: 30,
      borderRadius: 20,
      borderColor: color.background
    }, 
    saveButton: {
      backgroundColor: "blue"
    },
    deleteButton: {
      backgroundColor: "red"
    },
    cancelButton: {
      backgroundColor: "grey"
    },
    buttonText: {
      color: "white",
      fontWeight: "bold"
    }
  });

  export default styles;