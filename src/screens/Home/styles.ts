import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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

  input: {
    height: 56,
    backgroundColor: "#1f1e25",
    borderRadius: 8,
    color: "#fff",
    padding: 16,
    fontSize: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  unpressedButton: {
    backgroundColor: "#31cf67",
  },

  pressedButton: {
    backgroundColor: "#31cf6790",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
