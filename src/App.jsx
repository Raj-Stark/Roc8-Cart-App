import { Container } from "@mui/material";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import CartPage from "./Pages/CartPage";
import SingleProductPage from "./Pages/SingleProductPage";
import Store from "./Pages/Store";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Container disableGutters maxWidth={"xl"}>
          <Routes>
            <Route path="/" element={<Store></Store>}></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route
              path="/products/:id"
              element={<SingleProductPage></SingleProductPage>}
            ></Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
