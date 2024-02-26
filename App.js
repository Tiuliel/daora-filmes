import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";
import BuscarFilmes from "./src/screens/BuscarFilmes";

//Criação/inicialização do mecanismo Stack

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#5451a6" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShow: false }}
          />
          <Stack.Screen
            name="Sobre"
            component={Sobre}
            options={{ title: "Conheça nosso App" }}
          />

          <Stack.Screen
            name="BuscarFilmes"
            component={BuscarFilmes}
            options={{ title: "Qual filme quer pesquisar ?" }}
          />
          <Stack.Screen name="Privacidade" component={Privacidade} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
