import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Memo from './Routes/Memo.jsx'
import Map from './Routes/Map.jsx'
import Nav from './Nav.jsx'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Memo" element={<Memo />} />
      <Route path="/Map" element={<Map />} />
    </Routes>
  </BrowserRouter>,
);
