import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import moment from "moment";

export default function Detalhes({ route }) {
  const { filme } = route.params;

  const { title, backdrop_path, release_date, vote_average, overview } = filme;
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ImageBackground
          style={estilos.imagemFundo}
          source={
            backdrop_path
              ? { uri: `https://image.tmdb.org/t/p/original/${backdrop_path}` }
              : imagemAlternativa
          }
        >
          <Text style={estilos.titulo}>{title}</Text>
        </ImageBackground>
        <View style={estilos.conteudo}>
          <ScrollView>
            <Text style={[estilos.texto, estilos.avaliacao]}>
              Avaliação: {vote_average}
            </Text>
            <Text style={[estilos.texto, estilos.lancamento]}>
              Lançamento:{" "}
              {release_date
                ? moment(release_date).format("DD/MM/yyyy")
                : "Indisponivel"}
            </Text>
            <Text style={[estilos.texto, estilos.descricao]}>
              {overview} ||{" "}
              <Text style={{ fontStyle: "italic" }}>Filme sem descrição</Text>
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: "100%",
    padding: 8,
  },
  imagemFundo: {
    height: 200,
    justifyContent: "center",
  },
  titulo: {
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "white",
    fontFamily: "NotoSans",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  conteudo: {
    padding: 16,
    flex: 1,
  },
  texto: {
    paddingVertical: 4,
    fontSize: 16,
  },
  avaliacao: { color: "blue" },
  lancamento: { color: "darkblue" },
  descricao: { color: "gray" },
});
