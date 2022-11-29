import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function DefaultButton({
  //parâmetros
  buttonText,
  handlePress,
  width,
  height,
}) {
  return (
    //propriedade que mostra opacidade
    <TouchableOpacity
      style={[styles.button, { width: width, height: height }]}
      activeOpacity={0.7}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
  },
});
