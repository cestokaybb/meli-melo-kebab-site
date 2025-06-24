
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
    <div className="md:hidden min-h-screen bg-white">
      <Carousel setApi={setApi} className="w-full h-full">
        <CarouselContent className="h-full">
          {pages.map((page, index) => (
            <CarouselItem key={page.path} className="h-full">
              <div className="h-full overflow-y-auto">
                <page.component />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Navigation Indicators */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 flex items-center space-x-4 shadow-lg border border-gray-200">
          <button
            onClick={() => api?.scrollPrev()}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200 disabled:opacity-40"
            disabled={current === 0}
          >
            <ChevronLeft className="text-gray-600 w-4 h-4" />
          </button>
          
          <div className="flex space-x-2">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current 
                    ? "bg-red-600 scale-125 shadow-sm" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => api?.scrollNext()}
            className="p-1.5 rounded-full hover:bg-gray-100 transition-colors duration-200 disabled:opacity-40"
            disabled={current === pages.length - 1}
          >
            <ChevronRight className="text-gray-600 w-4 h-4" />
          </button>
        </div>

        {/* Page Name Indicator */}
        <div className="text-center mt-2">
          <span className="text-gray-700 text-sm font-medium bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm">
            {pages[current]?.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
