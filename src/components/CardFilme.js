import {
  Alert,
  Image,
  Pressable,
  StyleSheet,
  Text,
  Vibration,
  View,
} from "react-native";
import React from "react";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardFilme({ filme }) {
  const { title, poster_path } = filme;
  const navigation = useNavigation();
  const salvar = async () => {
    /* Alert.alert("Favoritos", "Salvando..."); */

    try {
      /* 1) Verificar/carregar os favoritos armazenados no AsyncStorage. Usamos o getItem do AsyncStorage para analisar se existe um armazenamento com o nome indicado (@favoritosdaora). Existindo, ele é carregado para a const filmeFavoritos. Se não existir, será criado posteriormente*/
      const filmesFavoritos = await AsyncStorage.getItem("@favoritosdaora");

      /*2) Verificar/criar uma lista de filmes favoritos (dados)
      Se filmesFavoritos existir (ou seja, tem dados no storage), pegamos dados (string) e convertemos em objeto (JSON.parse). Caso contrário, listaDeFilmes será um array vazio*/
      const listaDeFilmes = filmesFavoritos ? JSON.parse(filmesFavoritos) : [];

      /*3) VerificAR se já tem algum filme na lista.
      Usamos a função some() para avaliar se o ID do filme dentro da
      listaDeFilmes é o mesmo de um filme exibido na tela do app (nos
      Cards). Se for, retorna TRUE indicando que o filme já foi salvo
      em algum momento. Caso contrário, retorna FALSE indicando que o
      filme ainda não foi salvo.*/
      const jaTemFilme = listaDeFilmes.some((filmeNalista) => {
        return filmeNalista.id === filme.id;
      });

      /*4) se o filme não estiver na lista, então vamos colocá-lo*/

      /* 4.1) se ja tem filme, avisaremos ao usuário*/
      if (jaTemFilme) {
        Alert.alert("Ops!", "Você já salvou este filme!");
        Vibration.vibrate(500);
        return;
      }
      /* 4.2) senão, vamos colocar na lista */
      listaDeFilmes.push(filme);

      /*5) Usamos o AsyncStorage para gravar no armazenamento offline do dispositivo
       */
      await AsyncStorage.setItem(
        "@favoritosdaora",
        JSON.stringify(listaDeFilmes)
      );
      Alert.alert("Favoritos", `${title} foi salvo com sucesso!`);
    } catch (error) {
      console.log("Erro: " + error);
      Alert.alert("Erro", "Ocorreu um erro ao salvar o filme...");
    }
  };
  return (
    <View style={estilos.card}>
      <Image
        resizeMode="cover"
        style={estilos.imagem}
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
            : imagemAlternativa
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> {title} </Text>
        <View style={estilos.botoes}>
          <Pressable
            style={estilos.botao}
            onPress={() => navigation.navigate("Detalhes", { filme })}
          >
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} />
              Leia mais
            </Text>
          </Pressable>
          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>
              {" "}
              <Ionicons name="add-circle" size={12} /> Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  card: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#5451a6",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagem: {
    height: 150,
    width: 100,
    flex: 1,
  },
  corpo: { flex: 2 },
  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 16,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  botao: {
    borderColor: "#5451a6",
    borderWidth: 1,
    padding: 8,
  },
  textoBotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
