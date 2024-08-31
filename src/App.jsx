// React import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles import
import "./index.css";

// Components and Pages Input
import Homepage from "./pages/Homepage";
import { ArticlesProvider } from "./contexts/ArticlesContext";
import Post from "./pages/Post";

function App() {
  return (
    <ArticlesProvider>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,300,0,-25"
      />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
          <Route path="/post" element={<Post />}></Route>
        </Routes>
      </BrowserRouter>
    </ArticlesProvider>
  );
}

export default App;
