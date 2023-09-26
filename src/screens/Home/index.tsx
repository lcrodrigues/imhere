import { Text, View } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event's name:</Text>
      <Text style={styles.eventDate}>Friday, November 4th, 2023</Text>
    </View>
  );
}
