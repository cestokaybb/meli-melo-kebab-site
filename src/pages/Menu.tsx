import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChefHat } from "lucide-react";
import { Link } from "react-router-dom";

const Menu = () => {
  const menuSections = [
    {
      title: "Kebabs Turcs",
      background: "bg-gradient-to-br from-red-600 to-red-800",
      icon: "🥙",
      items: ["Kebab Döner", "Adana Kebab", "Iskender Kebab", "Lahmacun"]
    },
    {
      title: "Hamburgers",
      background: "bg-gradient-to-br from-yellow-600 to-orange-600",
      icon: "🍔",
      items: ["Big Meli", "Cheese Burger", "Bacon Burger", "Veggie Burger"]
    },
    {
      title: "Spécialités Libanaises",
      background: "bg-gradient-to-br from-green-600 to-green-800",
      icon: "🌯",
      items: ["Shawarma", "Falafel", "Houmous", "Taboulé", "Fattoush", "Manakish"]
    },
    {
      title: "Accompagnements",
      background: "bg-gradient-to-br from-purple-600 to-purple-800",
      icon: "🍟",
      items: ["Frites Maison", "Salade Turque", "Riz Pilaf", "Bulgur"]
    },
    {
      title: "Boissons & Desserts",
      background: "bg-gradient-to-br from-pink-600 to-red-600",
      icon: "🥤",
      items: ["Thé Turc", "Ayran", "Baklava", "Künefe", "Lokum", "Soda", "Jus Frais"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header Navigation - Hidden on mobile */}
      <nav className="bg-red-800 shadow-lg sticky top-0 z-50 hidden md:block">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ChefHat className="text-yellow-400 w-8 h-8" />
              <h1 className="text-2xl font-bold text-white">Meli Melo</h1>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-white hover:text-yellow-400 transition-colors">Accueil</Link>
              <Link to="/menu" className="text-yellow-400 font-bold">Menu</Link>
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
      <div className="md:hidden bg-red-800 shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 text-center">
          <div className="flex items-center justify-center space-x-2">
            <ChefHat className="text-yellow-400 w-8 h-8" />
            <h1 className="text-2xl font-bold text-white">Menu</h1>
          </div>
          <p className="text-yellow-400 text-sm mt-1">Glissez pour naviguer →</p>
        </div>
      </div>

      {/* Header */}
      <section className="bg-gradient-to-r from-red-800 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Notre Menu</h1>
          <p className="text-xl animate-fade-in">Découvrez nos spécialités turques et américaines</p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Row 1: Two cards side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard section={menuSections[0]} />
              <MenuCard section={menuSections[1]} />
            </div>
            
            {/* Row 2: One long card */}
            <div className="w-full">
              <LongMenuCard section={menuSections[2]} />
            </div>
            
            {/* Row 3: Two cards side by side */}
            <div className="grid md:grid-cols-2 gap-8">
              <MenuCard section={menuSections[3]} />
              <MenuCard section={menuSections[4]} />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-red-800 text-white py-12 text-center">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-4">Prêt à Commander ?</h3>
          <p className="text-xl mb-8">Passez votre commande en ligne dès maintenant</p>
          <Link to="/order">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-red-800 font-bold px-8 py-4 rounded-lg transform hover:scale-105 transition-all text-lg">
              Commander Maintenant
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

const MenuCard = ({ section }: { section: any }) => {
  return (
    <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
      <div className={`${section.background} h-32 flex items-center justify-center relative`}>
        <div className="text-6xl opacity-20 absolute">{section.icon}</div>
        <h3 className="text-2xl font-bold text-white z-10">{section.title}</h3>
      </div>
      <CardContent className="p-6">
        <ul className="space-y-2">
          {section.items.map((item: string, index: number) => (
            <li key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-800 font-medium">{item}</span>
              <span className="text-red-600 font-bold">€ 8-15</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

const LongMenuCard = ({ section }: { section: any }) => {
  return (
    <Card className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
      <div className={`${section.background} h-32 flex items-center justify-center relative`}>
        <div className="text-6xl opacity-20 absolute">{section.icon}</div>
        <h3 className="text-3xl font-bold text-white z-10">{section.title}</h3>
      </div>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {section.items.map((item: string, index: number) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
              <span className="text-gray-800 font-medium">{item}</span>
              <span className="text-red-600 font-bold">€ 6-12</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Menu;
