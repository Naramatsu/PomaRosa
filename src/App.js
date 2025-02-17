import { BrowserRouter, Route, Routes } from "react-router";
import Kitchen from "./layout/Kitchen";
import Bakery from "./layout/Bakery";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Kitchen />} />
      <Route path="/bakery" element={<Bakery />} />
    </Routes>
  </BrowserRouter>
);

export default App;
