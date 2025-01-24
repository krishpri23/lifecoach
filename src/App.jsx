
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import About from "./_components/About";
import Home from "./_components/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
