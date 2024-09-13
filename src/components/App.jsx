import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Navigation } from "./pages/Navigation";
import { Route, Routes } from "react-router-dom";
import { Products } from "./pages/Products";
export const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={ <Products />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
