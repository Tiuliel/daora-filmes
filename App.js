import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Text>@TiuLiel Movies 🎞🎥📽🎬📺</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Button title="Buscar Filmes" />
          <Button title="Favoritos" />
        </View>
        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    flex: 1,
  },

  viewLogo: {
    width: "90%",
    backgroundColor: "green",
    flex: 0.5,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  viewBotoes: {
    width: "90%",
    backgroundColor: "orange",
    justifyContent: "space-around",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 0.4,
  },

  viewRodape: {
    width: "90%",
    backgroundColor: "red",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    alignItems: "center",
    flex: 0.1,
  },
});
