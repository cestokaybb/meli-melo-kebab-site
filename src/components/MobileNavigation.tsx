
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselApi } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Index from "@/pages/Index";
import Menu from "@/pages/Menu";
import About from "@/pages/About";
import Location from "@/pages/Location";
import Order from "@/pages/Order";

const MobileNavigation = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { path: "/", component: Index, name: "Accueil" },
    { path: "/menu", component: Menu, name: "Menu" },
    { path: "/about", component: About, name: "À Propos" },
    { path: "/location", component: Location, name: "Localisation" },
    { path: "/order", component: Order, name: "Commander" }
  ];

  useEffect(() => {
    if (!api) return;

    // Synchroniser avec l'URL actuelle
    const currentPageIndex = pages.findIndex(page => page.path === location.pathname);
    if (currentPageIndex !== -1 && currentPageIndex !== current) {
      setCurrent(currentPageIndex);
      api.scrollTo(currentPageIndex);
    }

    api.on("select", () => {
      const selectedIndex = api.selectedScrollSnap();
      setCurrent(selectedIndex);
      navigate(pages[selectedIndex].path);
    });
  }, [api, location.pathname, navigate]);

  return (
    <div className="md:hidden min-h-screen">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {pages.map((page, index) => (
            <CarouselItem key={page.path}>
              <page.component />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Indicators */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/70 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-3">
          <ChevronLeft 
            className="text-white w-5 h-5 opacity-60" 
            onClick={() => api?.scrollPrev()}
          />
          
          <div className="flex space-x-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-yellow-400 scale-125" 
                    : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          <ChevronRight 
            className="text-white w-5 h-5 opacity-60"
            onClick={() => api?.scrollNext()}
          />
        </div>

        {/* Page Name Indicator */}
        <div className="text-center mt-2">
          <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
            {pages[current]?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
