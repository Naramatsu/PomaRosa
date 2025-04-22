import { BrowserRouter, Route, Routes } from "react-router";
import Kitchen from "./layout/Kitchen";
import Bakery from "./layout/Bakery";
import FloatPagesMenu from "./components/FloatPagesMenu";

const App = () => (
  <BrowserRouter>
    <FloatPagesMenu />
    <Routes>
      <Route path="/" element={<Kitchen />} />
      <Route path="/bakery" element={<Bakery />} />
    </Routes>
  </BrowserRouter>
);

export default App;
