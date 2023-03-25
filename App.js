import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.header}>Todo List</Text>
        <View style={styles.items}>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>01</Text>
              </View> 
              <Text style={styles.content}>Lau nhà</Text>
            </View>
            <View style={styles.item}>
              <View style={styles.square}>
                <Text style={styles.number}>01</Text>
              </View> 
              <Text style={styles.content}>Lau nhà</Text>
            </View> 
        </View>
      </View>
      <View style={styles.input}></View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff7f8"
  },
  body: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20
  },
  header: {
    fontSize: 24,
    color: "#21a3d0",
    fontWeight: "bold"
  },
  items: {
    margin: 15
  },
  item: {
    flexDirection: "row",
    backgroundColor: "white",
    marginBottom: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-between"
  },
  square: {
    width: 48,
    height: 36,
    borderRadius: 10,
    backgroundColor: "#53d6f2",
    alignItems: "center",
    justifyContent: "center"
  },
  number: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },
  content: {
    width: "80%",
    fontSize: 16
  }
});
