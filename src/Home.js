import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);

  const handleAddNewSkill = () => {
    //setMySkills([...mySkills, newSkill]);
     setMySkills(oldState =>  [...oldState, newSkill]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Giselle</Text>
      <TextInput
        style={styles.input}
        placeholder={"New Skill"}
        placeholderTextColor={"#999"}
        onChangeText={setNewSkill}
        
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.7}
      onPress={handleAddNewSkill}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 20 }]}>My Skills</Text>

      {mySkills.map((skill) => {
        return (
          <TouchableOpacity key={skill} style={styles.buttonSkill}>
            <Text style={styles.textSkill}>{skill}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1f1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  button: {
    backgroundColor: "#a370f0",
    padding: 15,
    borderRadius: 7,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonSkill: {
    backgroundColor: "#1f1e25",
    borderRadius: 50,
    padding: 15,
    marginVertical:10,
    alignItems: "center",
  },
  textSkill: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
});
