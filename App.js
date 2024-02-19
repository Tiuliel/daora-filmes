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
import { Ionicons } from "@expo/vector-icons";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

/* manter a tela splash visível enquanto não programarmos a ação de ocultar */
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("./assets/fonts/Monoton-Regular.ttf"),
    NotoSans: require("./assets/fonts/NotoSans-VariableFont.ttf"),
  });

  /* Função atrelada ao hook useCallback.
  Quando uma função estã conectada ao useCallback, garantimos que a referência dela é armazenada na memória somente uma vez */
  const aoAtualizarLayout = useCallback(async () => {
    /* Se estiver tudo ok com o carregamento */
    if (fontsLoaded || fontError) {
      /* Escondemos a splashscreen */
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
        <View style={estilos.viewLogo}>
          <Image source={logo} style={estilos.logo} />
          <Text style={estilos.titulo}>@TiuLiel Movies 🎥</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="search-sharp" size={12} color="white" />
              Buscar Filmes
            </Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="star" size={12} color="gold" />
              Favoritos
            </Text>
          </Pressable>
        </View>
        <View style={estilos.viewRodape}>
          <Pressable style={estilos.botaoRodape}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="lock-closed" size={16} color="white" />
              {""} Privacidade
            </Text>
          </Pressable>
          <Pressable style={estilos.botaoRodape}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="information-circle" size={16} color="white" />
              {""} Sobre
            </Text>
          </Pressable>
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

  titulo: {
    fontFamily: "Monoton-Regular",
    fontSize: 30,
    color: "#5a51a6",
  },
  viewBotoes: {
    width: "90%",
    justifyContent: "space-around",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 0.4,
  },

  botao: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: "#5451a6",
  },
  textoBotao: {
    fontFamily: "NotoSans",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  viewRodape: {
    width: "100%",
    backgroundColor: "#5451a6",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    alignItems: "center",
    flex: 0.1,
  },

  botaoRodape: {
    padding: 16,
  },
});
