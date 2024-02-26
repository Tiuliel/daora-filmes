import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import logo from "../../assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  return (
    <SafeContainer>
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
        <Pressable
          style={estilos.botaoRodape}
          onPress={() => navigation.navigate("Privacidade")}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="lock-closed" size={16} color="white" />
            {""} Privacidade
          </Text>
        </Pressable>
        <Pressable
          style={estilos.botaoRodape}
          onPress={() => navigation.navigate("Sobre")}
        >
          <Text style={estilos.textoBotao}>
            <Ionicons name="information-circle" size={16} color="white" />
            {""} Sobre
          </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
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
