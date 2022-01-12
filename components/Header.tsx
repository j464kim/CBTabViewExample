import React from "react";
import { Text, StyleSheet } from "react-native";

export const Header = () => (
  <>
    <Text style={styles.title}>Welcome, Rok</Text>
    <Text style={styles.subtitle}>Seattle Office.</Text>
  </>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 4,
  },
  subtitle: {
    fontSize: 12,
  },
});
