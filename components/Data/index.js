import AsyncStorage from "@react-native-async-storage/async-storage";

const saveData = (key, data) => {
    AsyncStorage.setItem(key, data);
}

export default saveData;
