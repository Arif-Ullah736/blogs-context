import "./App.css";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/Appcontext";

function App() {
  const { fetchBlogsData } = useContext(AppContext);

  useEffect(() => {
    fetchBlogsData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
