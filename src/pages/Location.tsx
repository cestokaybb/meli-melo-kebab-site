
import { ChefHat, MapPin, Phone, Clock, Car, Train } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Location = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header Navigation */}
      <nav className="bg-red-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="text-yellow-400 w-8 h-8" />
              <h1 className="text-2xl font-bold text-white">Meli Melo</h1>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-yellow-400 transition-colors">Accueil</Link>
              <Link to="/menu" className="text-white hover:text-yellow-400 transition-colors">Menu</Link>
              <Link to="/about" className="text-white hover:text-yellow-400 transition-colors">À Propos</Link>
              <Link to="/location" className="text-yellow-400 font-bold">Où Sommes Nous</Link>
            </div>
            <Link to="/order">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold px-6 py-2 rounded-lg transform hover:scale-105 transition-all">
                Prendre Commande
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-red-800 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Où Nous Trouver</h1>
          <p className="text-xl animate-fade-in">Venez nous rendre visite dans notre restaurant chaleureux</p>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Map Placeholder */}
            <div className="order-2 lg:order-1">
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <div className="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <MapPin className="w-16 h-16 mx-auto mb-4" />
                      <p className="text-xl font-semibold">Carte Google Maps</p>
                      <p className="text-sm mt-2">Intégration à venir</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="order-1 lg:order-2 space-y-8">
              <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-800">Adresse</h3>
                    </div>
                  </div>
                  <div className="ml-16">
                    <p className="text-gray-700 text-lg">123 Rue de la Gastronomie</p>
                    <p className="text-gray-700 text-lg">75001 Paris, France</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-800">Téléphone</h3>
                    </div>
                  </div>
                  <div className="ml-16">
                    <p className="text-gray-700 text-lg">01 23 45 67 89</p>
                    <p className="text-sm text-gray-500 mt-1">Réservations et commandes</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-red-800">Horaires d'Ouverture</h3>
                    </div>
                  </div>
                  <div className="ml-16 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Lundi - Jeudi</span>
                      <span className="text-gray-700 font-semibold">11h30 - 22h30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Vendredi - Samedi</span>
                      <span className="text-gray-700 font-semibold">11h30 - 23h30</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Dimanche</span>
                      <span className="text-gray-700 font-semibold">12h00 - 22h00</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Transport Info */}
              <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Comment Venir</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Train className="w-6 h-6 text-blue-600" />
                      <div>
                        <p className="font-semibold text-gray-700">Métro</p>
                        <p className="text-sm text-gray-600">Ligne 1, 4, 7 - Station Châtelet</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Car className="w-6 h-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-gray-700">Parking</p>
                        <p className="text-sm text-gray-600">Parking Rivoli à 200m</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-800 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Venez Nous Rendre Visite !</h3>
          <p className="text-xl mb-8">Découvrez l'ambiance chaleureuse de notre restaurant</p>
          <div className="flex justify-center space-x-4">
            <Link to="/order">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold px-8 py-4 rounded-lg transform hover:scale-105 transition-all text-lg">
                Commander en Ligne
              </Button>
            </Link>
            <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-800 font-bold px-8 py-4 rounded-lg transform hover:scale-105 transition-all text-lg">
              Réserver une Table
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
