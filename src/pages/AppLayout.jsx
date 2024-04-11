import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";
function AppLayout() {
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = "crown.svg";
    document.title = "crwn Clothing";
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default AppLayout;
