import { Text, StyleSheet, Platform } from "react-native";
import React from "react";

const Title = ({ children }) => {
  return <Text style={styles.mainTitle}>{children}</Text>;
};

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: Platform.OS === "ios" ? 48 : 28,
    alignSelf: "center",
    fontFamily: "Inter_600SemiBold",
    color: "white",
  },
});

export default Title;
