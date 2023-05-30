import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import { Layout } from "./Layout/Layout";
import Catalog from "../pages/Catalog";
import Hero from "../pages/Hero";
import AddHero from "../pages/AddHero";
import UpdateHero from "../pages/EditHero";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/hero/:id" element={<Hero />} />
        <Route path="/new" element={<AddHero />} />
        <Route path="/update/:id" element={<UpdateHero />} />
      </Route>
    </Routes>
  );
}

export default App;
