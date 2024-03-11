import { useEffect } from "react";
import Categories from "./Categories";
import Navbar from "./Navbar";
function App() {
  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = "https://stackoverflow.com/favicon.ico";
    document.title = "crwn Clothing";
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Categories />
    </div>
  );
}

export default App;
