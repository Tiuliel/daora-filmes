import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  Vibration,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

export default function BuscarFilmes() {
  const [text, onChangeText] = React.useState("");

  const procurar = () => {
    if (text === "") {
      Vibration.vibrate(1000);
      Alert.alert("Ops! você deve digitar um filme!");
    } else Alert.alert("Você procurou por:", `${text}`);
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text>Star trek? O Poderoso Chefão? A Trilogia Senhor dos Anéis</Text>
        <Text>Localize um filme que você viu ou gostaria de ver!</Text>
        <View style={estilos.viewForm}>
          <Ionicons name="film-sharp" size={30} color="#5451a6" />
          <TextInput
            style={estilos.input}
            onChangeText={onChangeText}
            enterKeyHint="search"
            onSubmitEditing={procurar}
            value={text}
            placeholder="Digite o filme"
          />
        </View>
        <Button title="Procurar" color="#5154a6" onPress={procurar} />
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "80%",
    color: "#5451a6",
    borderColor: "#5451a6",
  },
  viewForm: {
    flexDirection: "row",
    alignItems: "center",
  },
});
