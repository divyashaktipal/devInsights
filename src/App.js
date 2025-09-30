import "./App.css";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />

        <div id="page-body">
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
              errorElement={<NotFoundPage />}
            />
            <Route
              path="/about"
              element={<AboutPage />}
              errorElement={<NotFoundPage />}
            />
            <Route
              path="/articles"
              element={<ArticleListPage />}
              errorElement={<NotFoundPage />}
            />
            <Route
              path="/articles/:articleId"
              element={<ArticlePage />}
              errorElement={<NotFoundPage />}
            />
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;


const response = await axios.get('http://localhost:8000/api/articles/learn-react');
const data = response.data;
