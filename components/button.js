import { Text, StyleSheet, Pressable } from "react-native";

const Button = ({ children, buttonStyle, textStyle, onPress }) => {
  return (
    <Pressable onPress={onPress || {}} style={[styles.button, , buttonStyle]}>
      <Text style={[styles.button_text, , textStyle]}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    display: "flex",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 8,
    width: Platform.OS === "ios" ? 300 : 200,
    alignSelf: "center",
    backgroundColor: "#ffffff",
  },
  button_text: {
    fontSize: Platform.OS === "ios" ? 24 : 16,
    fontFamily: "Inter_600SemiBold",
    color: "#0a0a0a",
  },
});

export default Button;
