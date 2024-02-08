import {
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import logo from "./assets/images/logo.png";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text>@TiuLiel Movies 🎞🎥📽🎬📺</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Pressable>
            <Text>Buscar Filmes</Text>
          </Pressable>
          <Pressable>
            <Text>Favoritos</Text>
          </Pressable>
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
    backgroundColor: "white",
    flex: 1,
  },

  viewLogo: {
    width: "90%",
    flex: 0.5,
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  logo: {
    width: 128,
    height: 128,
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
