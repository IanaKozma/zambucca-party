import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Events } from "./pages/Events/Events";
import { Gallery } from "./pages/Gallery/Gallery";
import { Contact } from "./pages/Contact/Contact";
import { SharedLayout } from "./components/SharedLayout";
import './App.css';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};