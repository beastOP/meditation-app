import { View, StyleSheet, Platform } from "react-native";

const Header = ({ children, style }) => {
  return <View style={[styles.header, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: Platform.OS === "ios" ? 40 : 20,
  },
});

export default Header;
