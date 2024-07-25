// React import
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Styles import
import './index.css'

// Components and Pages Input
import Homepage from './pages/Homepage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
