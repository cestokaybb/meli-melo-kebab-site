
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Menu from "@/pages/Menu";
import About from "@/pages/About";
import Location from "@/pages/Location";
import Order from "@/pages/Order";
import NotFound from "@/pages/NotFound";

const DesktopNavigation = () => {
  return (
    <div className="hidden md:block">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Location />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default DesktopNavigation;
