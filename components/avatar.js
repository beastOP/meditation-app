import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Avatar = ({ name, size, backgroundColor }) => {
  const initials = name && name.trim().split(' ').map(word => word[0]).join('');
  
  const containerStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  };

  const initialsStyle = {
    fontSize: size / 3,
    color: 'white',
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.initials, initialsStyle]}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Avatar;
