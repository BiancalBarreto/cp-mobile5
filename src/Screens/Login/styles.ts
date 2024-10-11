import { StyleSheet } from "react-native";
import { container } from "@/styles";

export const styles = StyleSheet.create({
  ...container,
  login: {
    marginTop: 10,
  },
  register: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
  },
});
