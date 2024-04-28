import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Navigation";
function AppLayout() {
  useEffect(() => {
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
