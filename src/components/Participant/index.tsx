import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { Pressable } from "react-native";

type ParticipantProps = {
  name: string;
  onRemove: () => void;
};

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressedButton : styles.unpressedButton,
        ]}
        onPress={onRemove}
      >
        <Text style={styles.buttonText}>-</Text>
      </Pressable>
    </View>
  );
}
