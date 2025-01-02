import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Add from "./pages/add";
import Article from "./pages/article";
import NotFound from "./pages/notFound";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="dodaj" element={<Add />} />
        <Route path="article" element={<Article />} />
        <Route path="article/:id" element={<Article />} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
