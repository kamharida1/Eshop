import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";
import { colors } from "../src/styles/constants";

export default function NewGuest() {
  const [firstName, onFirstName] = useState('');
  const [lastName, onLastName] = useState('');
  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onFirstName}
        placeholder="First Name"
        value={firstName}
      />
      <TextInput
        style={styles.input}
        onChangeText={onLastName}
        placeholder="Last Name"
        value={lastName}
      />
      <Link
        style={styles.button}
        href={`/?firstName=${firstName}&lastName=${lastName}`}
      >
        Add
      </Link>
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    width: "100%",
  },
  button: {
    marginTop: 30,
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    textAlign: "center",
    backgroundColor: colors.cardBackground,
    fontSize: 24,
  },
});