// React import
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles import
import "./index.css";

// Components and Pages Input
import Homepage from "./pages/Homepage";
import { ArticlesProvider } from "./contexts/ArticlesContext";

function App() {
  return (
    <ArticlesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />}></Route>
        </Routes>
      </BrowserRouter>
    </ArticlesProvider>
  );
}

export default App;
