import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import NeonLive from "./pages/NeonLive";

import "./styles/index.css";

function App(){

  return(

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/neon-live"
          element={<NeonLive />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;