import { View, StyleSheet, StatusBar } from "react-native";

const Container = ({ children, style, statusColor }) => {
  return (
    <View style={[styles.container, style]}>
      <StatusBar
        backgroundColor={statusColor || "#0a0a0a"}
        barStyle="light-content"
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#0a0a0a",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});

export default Container;
