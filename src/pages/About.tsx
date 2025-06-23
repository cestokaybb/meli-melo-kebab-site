
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
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
              <Link to="/about" className="text-yellow-400 font-bold">À Propos</Link>
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

      {/* Header */}
      <section className="bg-gradient-to-r from-red-800 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">À Propos de Nous</h1>
          <p className="text-xl animate-fade-in">Rencontrez nos chefs passionnés</p>
        </div>
      </section>

      {/* Chefs Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            {/* Chef 1 - Mehmet */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-red-200 to-red-300 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-72 h-72 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center text-white">
                    <span className="text-8xl">👨‍🍳</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-6 py-2 rounded-full">
                  <Star className="w-6 h-6 text-red-800 mx-auto" />
                </div>
              </div>
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-red-800 mb-2">Mehmet Özkan</h2>
                <p className="text-xl text-red-600 mb-4 font-semibold">Chef Spécialiste Turc</p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Né à Istanbul, Mehmet baigne dans l'univers de la cuisine turque depuis son plus jeune âge. 
                    Formé dans les meilleures cuisines d'Anatolie, il maîtrise à la perfection l'art du kebab authentique.
                  </p>
                  <p className="text-lg">
                    Sa passion pour les épices traditionnelles et les techniques de cuisson ancestrales lui permet 
                    de créer des plats qui transportent directement nos clients au cœur d'Istanbul. 
                    Chaque marinade, chaque geste est pensé pour révéler les saveurs authentiques de la Turquie.
                  </p>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 mt-6">
                    <Heart className="w-6 h-6 text-red-600" />
                    <span className="text-red-600 font-semibold">15 ans d'expérience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Chef 2 - Sarah */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left lg:order-2">
                <h2 className="text-4xl font-bold text-red-800 mb-2">Sarah Johnson</h2>
                <p className="text-xl text-red-600 mb-4 font-semibold">Chef Spécialiste Américaine</p>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Originaire de New York, Sarah a grandi entourée de la culture culinaire américaine. 
                    Diplômée du Culinary Institute of America, elle excelle dans l'art du burger gourmet 
                    et des spécialités américaines revisitées.
                  </p>
                  <p className="text-lg">
                    Sa créativité et son amour pour les produits frais lui permettent de réinventer 
                    les classiques américains. De ses burgers aux steaks, chaque plat raconte une histoire 
                    de tradition et d'innovation, mariant parfaitement authenticité et modernité.
                  </p>
                  <div className="flex items-center justify-center lg:justify-start space-x-2 mt-6">
                    <Heart className="w-6 h-6 text-red-600" />
                    <span className="text-red-600 font-semibold">12 ans d'expérience</span>
                  </div>
                </div>
              </div>
              <div className="relative lg:order-1">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-72 h-72 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-full flex items-center justify-center text-white">
                    <span className="text-8xl">👩‍🍳</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 px-6 py-2 rounded-full">
                  <Star className="w-6 h-6 text-red-800 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-8">Notre Philosophie</h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl leading-relaxed mb-8">
              Chez Meli Melo, nous croyons que la cuisine est un pont entre les cultures. 
              L'union de nos deux chefs symbolise parfaitement notre vision : 
              marier les traditions culinaires turques et américaines pour créer une expérience unique.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="bg-white text-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌍</div>
                  <h4 className="font-bold text-lg mb-2">Fusion Culturelle</h4>
                  <p>Deux traditions culinaires exceptionnelles réunies sous un même toit</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🔥</div>
                  <h4 className="font-bold text-lg mb-2">Passion Authentique</h4>
                  <p>Chaque plat préparé avec amour selon les recettes traditionnelles</p>
                </CardContent>
              </Card>
              <Card className="bg-white text-gray-800">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">⭐</div>
                  <h4 className="font-bold text-lg mb-2">Excellence</h4>
                  <p>Des ingrédients de qualité pour une expérience culinaire inoubliable</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
