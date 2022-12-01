import { useState } from "react";
import AllPages from "./AllPages";

export default function Routes() {
  const [showHome, setShowHome] = useState("false");

  //recebo a condição completa
  //se o usuario ja
  return <>{showHome === "true" ? <HomePage /> : <AllPages />}</>;
}
