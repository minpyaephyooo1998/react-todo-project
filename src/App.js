import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import Missing from "./Missing";
// import { format } from "date-fns";
// import { useState, useEffect } from "react";
// import api from "./api/postAPI";
import EditPost from "./EditPost";
// import UseAxiosFetch from "./UseAxiosFetch";
import { DataProvider } from "./context/DataContext";

function App() {
  // const [posts, setPosts] = useState([]);
  // const [search, setSearch] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  // const [postTitle, setPostTitle] = useState("");
  // const [postBody, setPostBody] = useState("");
  // const [editTitle, setEditTitle] = useState("");
  // const [editBody, setEditBody] = useState("");
  // const { data, fetchError, isLoading } = UseAxiosFetch(
  //   "http://localhost:3500/posts"
  // );
  // const navigate = useNavigate();

  // // useEffect(() => {
  // //   const fetchPost = async () => {
  // //     try {
  // //       const response = await api.get("/posts");
  // //       // const data = await response.json();
  // //       setPosts(response.data);
  // //     } catch (err) {
  // //       console.log(err);
  // //     }
  // //   };

  // //   fetchPost();
  // // }, []);

  // useEffect(() => {
  //   setPosts(data);
  // }, [data]);

  // useEffect(() => {
  //   const filterResults = posts.filter(
  //     (post) =>
  //       post.body.toLowerCase().includes(search.toLowerCase()) ||
  //       post.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   setSearchResult(filterResults);
  // }, [posts, search]);

  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/posts/${id}`);
  //     const postList = posts.filter((post) => post.id !== id);
  //     setPosts(postList);
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
  //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
  //   const newPost = { id, title: postTitle, datetime, body: postBody };
  //   try {
  //     const response = await api.post("/posts", newPost);
  //     const allPosts = [...posts, response.data];
  //     setPosts(allPosts);
  //     setPostTitle("");
  //     setPostBody("");
  //     navigate("/");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // const handleEdit = async (id) => {
  //   const datetime = format(new Date(), "MMMM dd, yyyy pp");
  //   const updatedPost = { id, title: editTitle, datetime, body: editBody };
  //   try {
  //     const response = await api.put(`/posts/${id}`, updatedPost);
  //     setPosts(
  //       posts.map((post) => (post.id === id ? { ...response.data } : post))
  //     );
  //     setEditTitle("");
  //     setEditBody("");
  //     navigate("/");
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // };

  return (
    <div className="App">
      <DataProvider>
        <Header title="Todo" />
        <Nav />
        <Routes>
          {/* filter => no filter posts */}
          {/* posts={searchResult}
                fetchError={fetchError}
                isLoading={isLoading} */}
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route path="about" element={<About />} />
          <Route
            path="post"
            element={
              <NewPost
                // handleSubmit={handleSubmit}
                // postTitle={postTitle}
                // setPostTitle={setPostTitle}
                // postBody={postBody}
                // setPostBody={setPostBody}
              />
            }
          />
          {/* <Route path="/edit/:id">
          <EditPost
            posts={posts}
            handleEdit={handleEdit}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            editBody={editBody}
            setEditBody={setEditBody}
          />
        </Route> */}
          <Route
            path="/edit/:id"
            element={
              <EditPost
                // posts={posts}
                // handleEdit={handleEdit}
                // editTitle={editTitle}
                // editBody={editBody}
                // setEditTitle={setEditTitle}
                // setEditBody={setEditBody}
              />
            }
          />
          <Route
            path="post/:id"
            element={<PostPage />}
          />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
