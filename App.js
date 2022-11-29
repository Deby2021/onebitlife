import React from "react";
import { StatusBar } from "react-native";

import Routes from "./src/Routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"auto"} />
      <Routes />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
