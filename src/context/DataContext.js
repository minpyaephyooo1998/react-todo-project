import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import api from "../api/postAPI";
import UseAxiosFetch from "../UseAxiosFetch";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const { data, fetchError, isLoading } = UseAxiosFetch(
    "http://localhost:3500/posts"
  );
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     try {
  //       const response = await api.get("/posts");
  //       // const data = await response.json();
  //       setPosts(response.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchPost();
  // }, []);

  useEffect(() => {
    setPosts(data);
  }, [data]);

  useEffect(() => {
    const filterResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResult(filterResults);
  }, [posts, search]);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };



  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <DataContext.Provider
      value={{
        search,
        setSearch,
        searchResult,
        fetchError,
        isLoading,
        posts,
        setPosts,
        handleEdit,
        editBody,
        setEditBody,
        editTitle,
        setEditTitle,
        handleDelete
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
