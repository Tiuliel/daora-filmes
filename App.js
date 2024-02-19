import { StatusBar } from "react-native";
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <Home /> */}
      {/* <Sobre /> */}
      <Privacidade />
    </>
  );
}
