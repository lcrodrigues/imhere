import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event's name:</Text>
      <Text style={styles.eventDate}>Friday, November 4th, 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },

  eventName: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 48,
  },

  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
});
