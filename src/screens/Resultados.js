import { FlatList, StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-mviedb";
import { useEffect, useState, usuState } from "react";
import CardFilme from "../components/CardFilme";
import Separador from "../components/Separador";
import Erro from "../components/Erro";

export default function Resultados({ route }) {
  const [resultados, setResultados] = useState([]);
  const { filme } = route.params;

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get(`/search/movie`, {
          params: {
            include_adult: false,
            language: "pt-BR",
            query: filme,
            api_key: apiKey,
          },
        });

        setResultados(resposta.data.results);
      } catch (error) {
        console.error("Deu ruim: " + error.message);
      }
    }
    buscarFilmes();
  }, []);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você buscou por: {filme}</Text>
        <View style={estilos.viewFilmes}>
          <FlatList
            data={resultados}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <CardFilme filme={item} />;
            }}
            ListEmptyComponent={Erro}
            ItemSeparatorComponent={Separador}
          />
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  viewFilmes: { marginVertical: 8 },
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  subtitulo: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    marginVertical: 12,
    fontSize: 18,
  },
});
