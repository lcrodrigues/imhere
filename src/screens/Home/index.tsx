import { Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./styles";

export function Home() {
  const handleAddParticipant = () => {
    console.log("Add participant");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event's name</Text>
      <Text style={styles.eventDate}>Friday, November 4th, 2023</Text>

      <TextInput
        style={styles.input}
        placeholder="Participant's name:"
        placeholderTextColor="#6b6b6b"
      />

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressedButton : styles.unpressedButton,
        ]}
        onPress={handleAddParticipant}
      >
        <Text style={styles.buttonText}>+</Text>
      </Pressable>
    </View>
  );
}
