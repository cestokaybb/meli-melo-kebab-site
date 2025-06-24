
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
      <nav className="bg-red-800 shadow-lg sticky top-0 z-50 hidden md:block">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ChefHat className="text-yellow-400 w-8 h-8" />
              <h1 className="text-2xl font-bold text-white">Meli Melo</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-yellow-400 transition-colors">Accueil</Link>
              <Link to="/menu" className="text-white hover:text-yellow-400 transition-colors">Menu</Link>
              <Link to="/about" className="text-white hover:text-yellow-400 transition-colors">À Propos</Link>
              <Link to="/location" className="text-white hover:text-yellow-400 transition-colors">Où Sommes Nous</Link>
            </div>
            <Link to="/order">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold px-6 py-2 rounded-lg transform hover:scale-105 transition-all">
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
          <p className="text-yellow-400 text-xs mt-1">Glissez pour naviguer →</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-800 to-orange-600 flex items-center justify-center overflow-hidden px-4 py-16 md:py-24">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Bienvenue chez Meli Melo
          </h2>
          <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 animate-fade-in px-4">
            Spécialités Turques & Américaines Authentiques
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4">
            <Link to="/menu">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold px-6 py-2.5 md:px-8 md:py-3 rounded-lg transform hover:scale-105 transition-all w-full sm:w-auto">
                Découvrir le Menu
              </Button>
            </Link>
            <Link to="/order">
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-800 font-bold px-6 py-2.5 md:px-8 md:py-3 rounded-lg transform hover:scale-105 transition-all w-full sm:w-auto">
                Commander Maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Spécialités Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-red-800 mb-8 md:mb-12">
            Nos Spécialités
          </h3>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl md:text-3xl">🥙</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-red-800 mb-2">Kebab Authentique</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Viande grillée à la perfection, marinée selon nos recettes traditionnelles turques
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl md:text-3xl">🍔</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-red-800 mb-2">Hamburgers Américains</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Burgers gourmands avec des ingrédients frais et des sauces maison
                </p>
              </CardContent>
            </Card>

            <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl md:text-3xl">🌯</span>
                </div>
                <h4 className="text-lg md:text-xl font-bold text-red-800 mb-2">Kebab Libanais</h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Saveurs du Moyen-Orient avec nos épices sélectionnées et légumes frais
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-red-800 text-white py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="flex flex-col items-center">
              <Clock className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 mb-3 md:mb-4" />
              <h4 className="text-lg md:text-xl font-bold mb-2">Horaires</h4>
              <p className="text-sm md:text-base">Lun-Dim: 11h30 - 23h00</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 mb-3 md:mb-4" />
              <h4 className="text-lg md:text-xl font-bold mb-2">Téléphone</h4>
              <p className="text-sm md:text-base">01 23 45 67 89</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-10 h-10 md:w-12 md:h-12 text-yellow-400 mb-3 md:mb-4" />
              <h4 className="text-lg md:text-xl font-bold mb-2">Adresse</h4>
              <p className="text-sm md:text-base">123 Rue de la Gastronomie<br />75001 Paris</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 md:py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm md:text-base">&copy; 2024 Meli Melo Restaurant. Tous droits réservés.</p>
          <p className="mt-2 text-gray-400 text-xs md:text-sm">Spécialités Turques & Américaines Authentiques</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
