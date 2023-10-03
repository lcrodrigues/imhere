import {
  Alert,
  FlatList,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { styles } from "./styles";
import { Participant } from "../../components/Participant";
import { useState } from "react";

export function Home() {
  const [inputParticipant, setInputParticipant] = useState<string>("");
  const [participants, setParticipants] = useState<string[]>([]);

  const handleAddParticipant = (rawName: string) => {
    const name = rawName.trim();

    if (participants.includes(name)) {
      return Alert.alert("It's already there!", `${name} is in the list.`);
    }

    if (name === "") {
      return Alert.alert("Empty name!", "Please, type a name.");
    }

    setParticipants((previousParticipants) => [...previousParticipants, name]);
    setInputParticipant("");
  };

  const handleRemoveParticipant = (name: string) => {
    Alert.alert(
      "Remove participant",
      `Are you sure you want to remove ${name}?`,
      [
        {
          text: "No",
          onPress: () => console.log("Cancel"),
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            setParticipants((previousParticipants) =>
              previousParticipants.filter((item) => item !== name)
            );
            Alert.alert("Removed!", `${name} was removed.`);
          },
        },
      ]
    );

    console.log(`Remove participant ${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event's name</Text>
      <Text style={styles.eventDate}>Friday, November 4th, 2023</Text>

      <View style={styles.form}>
        <TextInput
          value={inputParticipant}
          onChangeText={setInputParticipant}
          style={styles.input}
          placeholder="Participant's name:"
          placeholderTextColor="#6b6b6b"
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.pressedButton : styles.unpressedButton,
          ]}
          onPress={() => handleAddParticipant(inputParticipant)}
        >
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            onRemove={() => handleRemoveParticipant(item)}
            name={item}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>No participants yet.</Text>
        )}
      />
    </View>
  );
}
