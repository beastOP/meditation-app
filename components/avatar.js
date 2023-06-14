import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const Avatar = ({ name, size, backgroundColor, url }) => {
  const initials =
    name &&
    name
      .trim()
      .split(" ")
      .map((word) => word[0])
      .join("");

  const containerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    alignItems: "center",
    justifyContent: "center",
  };

  const initialsStyle = {
    fontSize: size / 3,
    color: "white",
  };

  const image = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return (
    <View
      style={[styles.container, containerStyle, url ? {} : { backgroundColor }]}
    >
      {url ? (
        <Image style={image} source={{ uri: url }} />
      ) : (
        <Text style={[styles.initials, initialsStyle]}>{initials}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "contain",
  },
});

export default Avatar;
