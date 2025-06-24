
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header Navigation - Hidden on mobile */}
      <nav className="bg-red-800 shadow-xl sticky top-0 z-50 hidden md:block backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 group">
              <ChefHat className="text-yellow-400 w-8 h-8 transition-transform duration-300 group-hover:rotate-12" />
              <h1 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-yellow-400">Meli Melo</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-yellow-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Accueil</Link>
              <Link to="/menu" className="text-white hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-yellow-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Menu</Link>
              <Link to="/about" className="text-white hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-yellow-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">À Propos</Link>
              <Link to="/location" className="text-white hover:text-yellow-400 transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-yellow-400 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">Où Sommes Nous</Link>
            </div>
            <Link to="/order">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold px-6 py-2 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Prendre Commande
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Header - Only visible on mobile */}
      <div className="md:hidden bg-red-800 shadow-lg">
        <div className="container mx-auto px-4 py-3 text-center">
          <div className="flex items-center justify-center space-x-2">
            <ChefHat className="text-yellow-400 w-6 h-6" />
            <h1 className="text-xl font-bold text-white">Meli Melo</h1>
          </div>
          <p className="text-yellow-400 text-xs mt-1 animate-pulse">Glissez pour naviguer →</p>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-4 py-16 md:py-24">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/85 via-red-800/80 to-orange-800/85"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-orange-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-red-400/20 rounded-full animate-pulse delay-500"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <div className="backdrop-blur-sm bg-black/20 rounded-2xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
              Bienvenue chez Meli Melo
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 animate-fade-in px-4 text-orange-100 font-medium">
              Spécialités Turques & Américaines Authentiques
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 px-4">
              <Link to="/menu">
                <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-red-900 font-bold px-8 py-3 md:px-10 md:py-4 rounded-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-xl hover:shadow-2xl border-2 border-yellow-400/50">
                  Découvrir le Menu
                </Button>
              </Link>
              <Link to="/order">
                <Button className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-red-900 font-bold px-8 py-3 md:px-10 md:py-4 rounded-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto shadow-xl hover:shadow-2xl backdrop-blur-sm">
                  Commander Maintenant
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spécialités Section */}
      <section className="py-16 md:py-20 px-4 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="container mx-auto max-w-6xl relative">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-red-800 mb-12 md:mb-16 animate-fade-in">
            Nos Spécialités
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
          </h3>
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {/* Kebab Authentique */}
            <Card className="group transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-0 overflow-hidden relative">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <CardContent className="relative p-8 text-center h-80 flex flex-col justify-end">
                <div className="w-20 h-20 bg-red-100/90 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border-2 border-white/20 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🥙</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-lg">Kebab Authentique</h4>
                <p className="text-gray-200 text-sm md:text-base drop-shadow-md">
                  Viande grillée à la perfection, marinée selon nos recettes traditionnelles turques
                </p>
              </CardContent>
            </Card>

            {/* Hamburgers Américains */}
            <Card className="group transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-0 overflow-hidden relative">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <CardContent className="relative p-8 text-center h-80 flex flex-col justify-end">
                <div className="w-20 h-20 bg-yellow-100/90 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border-2 border-white/20 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🍔</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-lg">Hamburgers Américains</h4>
                <p className="text-gray-200 text-sm md:text-base drop-shadow-md">
                  Burgers gourmands avec des ingrédients frais et des sauces maison
                </p>
              </CardContent>
            </Card>

            {/* Kebab Libanais */}
            <Card className="group transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl border-0 overflow-hidden relative">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')`,
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <CardContent className="relative p-8 text-center h-80 flex flex-col justify-end">
                <div className="w-20 h-20 bg-orange-100/90 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border-2 border-white/20 group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-3xl">🌯</span>
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-lg">Kebab Libanais</h4>
                <p className="text-gray-200 text-sm md:text-base drop-shadow-md">
                  Saveurs du Moyen-Orient avec nos épices sélectionnées et légumes frais
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-gradient-to-r from-red-800 via-red-700 to-red-800 text-white py-12 md:py-16 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/10 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-orange-400/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-400/10 rounded-full animate-pulse delay-500"></div>
        </div>
        
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10 text-center">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-yellow-400/30 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-yellow-400">Horaires</h4>
              <p className="text-base md:text-lg text-gray-200">Lun-Dim: 11h30 - 23h00</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-yellow-400/30 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-yellow-400">Téléphone</h4>
              <p className="text-base md:text-lg text-gray-200">01 23 45 67 89</p>
            </div>
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-sm border border-yellow-400/30 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 text-yellow-400">Adresse</h4>
              <p className="text-base md:text-lg text-gray-200">123 Rue de la Gastronomie<br />75001 Paris</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-10 text-center relative">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 mb-4 group">
            <ChefHat className="text-yellow-400 w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
            <h3 className="text-xl font-bold">Meli Melo</h3>
          </div>
          <p className="text-base md:text-lg mb-2">&copy; 2024 Meli Melo Restaurant. Tous droits réservés.</p>
          <p className="text-gray-400 text-sm md:text-base">Spécialités Turques & Américaines Authentiques</p>
          <div className="w-16 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
