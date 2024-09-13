import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { NotFound } from "./pages/NotFound";
import { Products } from "./pages/Products";
import { SharedLayout } from "./others/Sharedayout";

import { Mission } from "./pages/Mission";
import { Team } from "./pages/Team";
import { Feedback } from "./pages/Feedback";


import { Route, Routes } from "react-router-dom";
export const App = () => {
  return (

      <Routes>
        <Route path="/" element={<SharedLayout />} >
          <Route index element={<Home />}/>
          <Route path="about" element={<About />} >
           <Route path="mission" element={ <Mission />}/>
           <Route path="team" element={<Team />}/>
           <Route path="feedback" element={<Feedback/>}/>
          </Route>
          <Route path="products" element={ <Products />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

  );
};
