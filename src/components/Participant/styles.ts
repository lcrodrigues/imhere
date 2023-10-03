import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
    flexDirection: "row",
    backgroundColor: "#1f1e25",
    alignItems: "center",
    marginBottom: 8,
  },

  name: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },

  unpressedButton: {
    backgroundColor: "#e23c44",
  },

  pressedButton: {
    backgroundColor: "#e23c4490",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
