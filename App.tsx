import { StyleSheet } from "react-native";
import { Groups } from "./src/screens/Groups";

export default function App() {
  return <Groups />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
