import { ThemeProvider } from "styled-components/native";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import main from "@theme/main";
import { Loading } from "@components/index";
import { StatusBar } from "expo-status-bar";
import Routes from "@routes/index";

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={main}>
      <StatusBar style="light" translucent backgroundColor="transparent" />
      {fontsLoader ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
