import { useState } from "react";
import ChangeNavigationService from "../Services/ChangeNavigationService";
import AllPages from "./AllPages";
import HomePage from "./HomePage";

export default function Routes() {
  const [showHome, setShowHome] = useState("false");

  ChangeNavigationService.checkShowHome(1)
    .then((showHome) => {
      setShowHome(showHome.showHome);
    })
    .catch((err) => console.log(err));

  //recebo a condição completa
  //se o usuario ja
  return <>{showHome === "true" ? <HomePage /> : <AllPages />}</>;
}
