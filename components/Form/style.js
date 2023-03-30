import { StyleSheet } from "react-native";

import color from "../../contains/color";

const styles = StyleSheet.create({
    addTask: {
        bottom: 30,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        height: 44,
        width: "80%",
        backgroundColor: color.white,
        borderWidth: 1,
        borderColor: color.primary,
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    iconWrapper: {
        width: 44,
        height: 44,
        backgroundColor: color.primary,
        borderRadius: 44,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: color.background
    },
    icon: {
        fontSize: 15,
        color: color.white,
        fontWeight: "bold"
    },
    centredView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#00000099"
    },
    modalContainer: {
        width: "90%",
        height: 320,
        backgroundColor: color.background,
        borderRadius: 20,
        borderWidth: 1
    },
    title: {
        marginTop: 20,
        marginHorizontal: 20,
        fontSize: 20,
        color: color.primary,
        fontWeight: "bold"
    },
    item: {
        flexDirection: "row",
        backgroundColor: "white",
        marginHorizontal: 20,
        marginTop: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: "center",
    },
    tierColor: [
        { backgroundColor: "#dc143c" },
        { backgroundColor: "#cd5c5c" },
        { backgroundColor: "#f08080" },
        { backgroundColor: "#e9967a" },
        { backgroundColor: "#db7093" },
    ],
    circle: {
        width: 20,
        height: 20,
        borderRadius: 20,
        marginRight: 10
    }
});

export default styles;