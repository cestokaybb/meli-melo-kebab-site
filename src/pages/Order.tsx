
import { useState } from "react";
import { ChefHat, CreditCard, ShoppingCart, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Order = () => {
  const [cart, setCart] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    notes: ""
  });
  const { toast } = useToast();

  const menuItems = [
    { id: 1, name: "Kebab Döner", price: 12, category: "Kebabs", description: "Viande marinée, salade, tomate, oignon" },
    { id: 2, name: "Big Meli Burger", price: 14, category: "Burgers", description: "Double steak, fromage, bacon, salade" },
    { id: 3, name: "Shawarma Libanais", price: 13, category: "Spécialités", description: "Agneau épicé, houmous, taboulé" },
    { id: 4, name: "Lahmacun", price: 10, category: "Kebabs", description: "Pizza turque aux épices" },
    { id: 5, name: "Cheese Burger", price: 11, category: "Burgers", description: "Steak, fromage, cornichons" },
    { id: 6, name: "Frites Maison", price: 5, category: "Accompagnements", description: "Frites croustillantes" }
  ];

  const addToCart = (item: any) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    toast({
      title: "Ajouté au panier",
      description: `${item.name} a été ajouté à votre commande`,
    });
  };

  const removeFromCart = (itemId: number) => {
    const existingItem = cart.find(cartItem => cartItem.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem => 
        cartItem.id === itemId 
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== itemId));
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      toast({
        title: "Panier vide",
        description: "Veuillez ajouter des articles à votre commande",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Commande confirmée !",
      description: `Votre commande de ${getTotalPrice()}€ a été enregistrée. Merci !`,
    });
    
    // Reset form and cart
    setCart([]);
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      notes: ""
    });
  };

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
              <Link to="/location" className="text-white hover:text-yellow-400 transition-colors">Où Sommes Nous</Link>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <ShoppingCart className="w-6 h-6" />
              <span className="font-bold">{cart.length}</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gradient-to-r from-red-800 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Commander en Ligne</h1>
          <p className="text-xl animate-fade-in">Composez votre commande et payez en ligne</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Menu Selection */}
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingCart className="w-6 h-6 text-red-600" />
                  <span>Sélectionnez vos plats</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {menuItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex-1">
                        <h4 className="font-bold text-red-800">{item.name}</h4>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <span className="text-lg font-bold text-red-600">{item.price}€</span>
                      </div>
                      <Button 
                        onClick={() => addToCart(item)}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        <Plus className="w-4 h-4 mr-1" />
                        Ajouter
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Cart Summary */}
            {cart.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Votre Commande</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <span className="text-sm text-gray-600 ml-2">×{item.quantity}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold">{item.price * item.quantity}€</span>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total:</span>
                        <span className="text-red-600">{getTotalPrice()}€</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="w-6 h-6 text-red-600" />
                  <span>Informations de Commande</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input 
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone *</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div>
                    <Label htmlFor="address">Adresse de livraison *</Label>
                    <Textarea 
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      required
                    />
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-bold text-red-800 mb-4">Informations de Paiement</h4>
                    
                    <div>
                      <Label htmlFor="cardNumber">Numéro de carte *</Label>
                      <Input 
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <Label htmlFor="expiryDate">Date d'expiration *</Label>
                        <Input 
                          id="expiryDate"
                          placeholder="MM/AA"
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV *</Label>
                        <Input 
                          id="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="notes">Notes spéciales</Label>
                    <Textarea 
                      id="notes"
                      placeholder="Allergies, préférences de cuisson, etc."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-bold"
                    disabled={cart.length === 0}
                  >
                    Confirmer la Commande - {getTotalPrice()}€
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
