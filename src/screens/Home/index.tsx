import { Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event's name</Text>
      <Text style={styles.eventDate}>Friday, November 4th, 2023</Text>

      <TextInput
        style={styles.input}
        placeholder="Participant's name:"
        placeholderTextColor="#6b6b6b"
      />
    </View>
  );
}
