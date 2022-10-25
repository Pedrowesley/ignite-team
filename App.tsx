import Loading from "@components/Loading";
import { Roboto_400Regular, Roboto_700Bold, useFonts } from "@expo-google-fonts/roboto";
import { Groups } from "@screens/Groups";
import theme from "@theme/index";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor="transparent" translucent />
      <ThemeProvider theme={theme}>{fontsLoaded ? <Groups /> : <Loading />}</ThemeProvider>
    </>
  );
}
