import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Separador() {
  return (
    <View style={estilos.viewSeparador}>
      <MaterialCommunityIcons name="movie-roll" size={12} color="#5451a6" />
      <MaterialCommunityIcons name="movie-roll" size={12} color="#5451a6" />
      <MaterialCommunityIcons name="movie-roll" size={12} color="#5451a6" />
    </View>
  );
}

const estilos = StyleSheet.create({
  viewSeparador: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    opacity: 0.5,
  },
});
