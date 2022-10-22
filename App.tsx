import { Groups } from "@screens/Groups";
import { StyleSheet } from "react-native";

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
