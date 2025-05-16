import { createContext, useState } from "react";
import { baseUrl } from "../api.js";

// Create a context for the app
export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  console.log(page);

  const fetchBlogsData = async (page = 1) => {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    // console.log(url);

    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log("data is printing", data);
      setPage(data.page);
      // console.log("printing pages", data.page);

      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch {
      console.log("somthing went wrong");
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
  };
  // fetchBlogsData();

  const handlePageChange = (page) => {
    setPage(page);
    fetchBlogsData(page);
  };
  // console.log(posts);

  const value = {
    posts,
    setPosts,
    loading,
    setLoading,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogsData,
    handlePageChange,
  };

  // create Provider for the context
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
