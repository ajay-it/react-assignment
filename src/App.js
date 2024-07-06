import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Header from "./components/Header";
import { ItemContext } from "./ItemContext";
import Checkout from "./Checkout";

function App() {
  const initialItems = { Hamburger: 0, Fries: 0, Coke: 0, Pepsi: 0 };
  const [items, setItems] = useState(initialItems);

  return (
    <div className="mb-5">
      <ItemContext.Provider value={{ items, setItems, initialItems }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </ItemContext.Provider>
    </div>
  );
}

export default App;
