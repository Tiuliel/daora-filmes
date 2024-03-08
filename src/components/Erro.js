import { Image, StyleSheet, Text, View } from "react-native";
import imagemFilme from "../../assets/images/filme.jpg";

export default function Erro() {
  return (
    <View style={estilos.viewErro}>
      <Image resizeMode="cover" style={estilos.imagem} source={imagemFilme} />
      <Text>Não encontrado</Text>
    </View>
  );
}

const estilos = StyleSheet.create({});
