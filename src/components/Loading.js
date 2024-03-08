import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={estilos.viewLoading}>
      <ActivityIndicator size="large" color="#5451a6" />
    </View>
  );
}

const estilos = StyleSheet.create({
  viewLoading: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
