import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Shield, Zap, Box, Star, X, Trash2, Plus, Minus } from "lucide-react";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

// Import images
import img79k from "@/assets/buy/79k.webp";
import img59k from "@/assets/buy/59k.webp";
import img14k from "@/assets/buy/14.5k.webp";
import imgClamp from "@/assets/buy/0.9k.webp";
import imgMount from "@/assets/buy/0.9k too.webp";

export const MAIN_KITS = [
  {
    id: "pro-kit",
    name: "SPOT – Professional Kit",
    price: "₹79,000.00",
    image: img79k,
    description: "The ultimate clinical setup for high-volume practices.",
    features: [
      "Set of 6 SPOT units",
      "6 Magnetic Clamps & 6 Floor Mounts (w/ screws)",
      "6 Velcro & 6 Wall Mount Stickers",
      "6 Suction Holders",
      "Type-C Charger & Premium Carry Case"
    ],
    popular: true
  },
  {
    id: "starter-kit",
    name: "SPOT – Starter Kit",
    price: "₹59,000.00",
    image: img59k,
    description: "Perfect for independent practitioners and small rooms.",
    features: [
      "Set of 4 SPOT units",
      "4 Magnetic Clamps & 4 Floor Mounts (w/ screws)",
      "4 Velcro & 4 Wall Mount Stickers",
      "4 Suction Holders",
      "Type-C Charger & Premium Carry Case"
    ]
  }
];

export const ACCESSORIES = [
  {
    id: "single-spot",
    name: "Single SPOT",
    price: "₹14,500.00",
    image: img14k,
    description: "Add an extra sensor node to your existing ecosystem."
  },
  {
    id: "clamp",
    name: "Clamp",
    price: "₹900.00",
    image: imgClamp,
    description: "Secure mounting clamp for versatile staging."
  },
  {
    id: "floor-mount",
    name: "Floor mount",
    price: "₹900.00",
    image: imgMount,
    description: "Sturdy floor mount with screw for permanent fixture."
  }
];

export default function BuyNow() {
  const navigate = useNavigate();
  const [cart, setCart] = useState<Record<string, number>>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAdded, setLastAdded] = useState<string | null>(null);

  const allProducts = useMemo(() => [...MAIN_KITS, ...ACCESSORIES], []);

  const handleAddToCart = (id: string) => {
    setCart(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    setLastAdded(id);
    setTimeout(() => setLastAdded(null), 2000);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => {
      const newQty = (prev[id] || 0) + delta;
      if (newQty <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: newQty };
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const cartItems = useMemo(() => {
    return Object.entries(cart).map(([id, quantity]) => {
      const product = allProducts.find(p => p.id === id);
      return { ...product, quantity };
    }).filter(item => item.id);
  }, [cart, allProducts]);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const priceNum = parseFloat(item.price?.replace(/[^\d.]/g, '') || '0');
      return sum + (priceNum * (item.quantity || 0));
    }, 0);
  }, [cartItems]);

  const totalItemCount = useMemo(() => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  }, [cart]);

  return (
    <PageLayout>
      <div className="relative min-h-screen pb-24 overflow-hidden -mt-8">

        {/* Ambient Dark Background Details */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#fe019a]/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/4" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#00fd7a]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/4 translate-y-1/4" />

        <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10">

          {/* Store Header */}
          <div className="text-center mb-16 md:mb-2">
            <span className="text-[#00fd7a] text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">Official Store</span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6">
              Choose Your <span className="text-[#fe019a]">SPOT</span> Setup
            </h1>
            <p className="text-lg text-white/50 max-w-3xl mx-auto font-medium">
              Equip your clinic with professional-grade bio-kinetic AI sensors. Select a bundle below to get started, or expand your existing ecosystem with individual hardware.
            </p>
          </div>

          {/* MAIN KITS TIER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-10 mb-20">
            {MAIN_KITS.map((kit) => (
              <div key={kit.id} className={`relative flex flex-col bg-[#060b19]/60 backdrop-blur-2xl border ${kit.popular ? 'border-[#00fd7a]/40 shadow-[0_0_30px_rgba(0,253,122,0.1)]' : 'border-white/10'} rounded-[24px] overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:border-white/30 hover:shadow-2xl pb-8`}>


                {/* Kit Title & Subtitle (Top Left) */}
                <div className="p-6 lg:p-10 lg:pb-0 z-20 relative text-left mb-10">
                  <h2 className="text-xl lg:text-3xl font-black text-white pr-20 mb-2">{kit.name}</h2>
                  <p className="text-white/50 font-medium text-[13px] max-w-sm leading-snug">{kit.description}</p>
                </div>

                {/* Inner Side-by-Side Area */}
                <div className="flex flex-col xl:flex-row flex-1 w-full">
                  {/* Kit Image Area */}
                  <div className="w-full xl:w-[45%] min-h-[300px] p-6 lg:px-12 flex items-center justify-center bg-gradient-to-b xl:bg-gradient-to-r from-white/5 to-transparent relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
                    <img src={kit.image} alt={kit.name} className="max-w-full max-h-[335px] xl:max-h-[375px] object-contain filter drop-shadow-xl relative z-10 hover:scale-[1.03] transition-transform duration-700" />
                  </div>

                  {/* Kit Details */}
                  <div className="p-6 md:p-6 lg:p-10 lg:pt-8 xl:pl-0 flex flex-col flex-1 justify-center z-20 text-left">
                    <div className="text-3xl font-black text-white tracking-tighter mb-4">
                      {kit.price}
                    </div>

                    <div className="space-y-3 mb-8 flex-1">
                      {kit.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="mt-1 flex-shrink-0 w-3 h-3 rounded-full bg-[#00fd7a]/20 flex items-center justify-center">
                            <Check className="w-2 h-2 text-[#00fd7a]" />
                          </div>
                          <span className="text-white/70 text-[12px] font-medium leading-tight">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      {cart[kit.id] > 0 ? (
                        <div className="flex items-center gap-2">
                          <div className="flex-1 h-12 bg-[#00fd7a] text-[#060b19] rounded-xl flex items-center justify-center gap-2 font-black text-xs shadow-[0_0_20px_rgba(0,253,122,0.3)] min-w-0 px-2 lg:px-4">
                            <Check className="w-3.5 h-3.5" /> <span className="truncate uppercase tracking-tight">Added to Cart</span>
                          </div>
                          <div className="flex items-center bg-[#00fd7a]/10 rounded-xl border border-[#00fd7a]/20 p-1 h-12 shadow-inner px-1 gap-2 shrink-0">
                            <button 
                              onClick={() => updateQuantity(kit.id, -1)}
                              className="w-8 h-8 flex items-center justify-center text-[#00fd7a] hover:bg-[#00fd7a]/20 rounded-lg transition-colors"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-white font-black text-base min-w-[1.2rem] text-center">{cart[kit.id]}</span>
                            <button 
                              onClick={() => updateQuantity(kit.id, 1)}
                              className="w-8 h-8 flex items-center justify-center text-[#00fd7a] hover:bg-[#00fd7a]/20 rounded-lg transition-colors"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <Button 
                          onClick={() => handleAddToCart(kit.id)}
                          className={`w-full h-12 rounded-xl font-bold text-sm shadow-xl transition-all duration-300 hover:scale-[1.02] ${lastAdded === kit.id ? 'bg-white text-black' : kit.popular ? 'bg-[#00fd7a] text-[#060b19] hover:bg-[#FF5F1F] hover:text-white' : 'bg-[#fe019a] text-white hover:bg-[#FF5F1F]'}`}
                        >
                          {lastAdded === kit.id ? (
                            <span className="flex items-center justify-center gap-2">
                              <Check className="w-4 h-4" /> Added
                            </span>
                          ) : (
                            <span className="flex items-center justify-center gap-2">
                              <ShoppingCart className="w-4 h-4" /> Add to Cart
                            </span>
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ACCESSORIES TIER */}
          <div className="mb-8">
            <h3 className="text-2xl font-black text-white mb-8 border-b border-white/10 pb-4">Hardware & Accessories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACCESSORIES.map((item) => (
                <div key={item.id} className="bg-white/5 border border-white/5 rounded-[24px] p-5 flex flex-col transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                  <div className="h-[170px] w-full mb-4 p-4 flex items-center justify-center bg-black/20 rounded-2xl relative overflow-hidden group">
                    <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                  <p className="text-white/50 text-xs font-medium mb-4 flex-1">{item.description}</p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <div className="text-xl font-black text-white">{item.price}</div>
                    {cart[item.id] > 0 ? (
                      <div className="flex items-center bg-[#00fd7a]/10 rounded-xl border border-[#00fd7a]/20 p-1">
                        <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center text-[#00fd7a] hover:bg-[#00fd7a]/20 rounded-lg"><Minus className="w-3 h-3" /></button>
                        <span className="w-6 text-center text-white font-bold text-sm">{cart[item.id]}</span>
                        <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center text-[#00fd7a] hover:bg-[#00fd7a]/20 rounded-lg"><Plus className="w-3 h-3" /></button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => handleAddToCart(item.id)}
                        className={`rounded-xl font-bold transition-all duration-300 ${lastAdded === item.id ? 'bg-white text-black' : 'bg-white/10 text-white hover:bg-[#00fd7a] hover:text-black'}`}
                      >
                        {lastAdded === item.id ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Badges Footer */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-16 pt-10 border-t border-white/10">
            <div className="flex items-center gap-3 text-white/50 text-sm font-semibold">
              <Shield className="w-5 h-5 text-[#00fd7a]" /> 1-Year Secure Warranty
            </div>
            <div className="flex items-center gap-3 text-white/50 text-sm font-semibold">
              <Zap className="w-5 h-5 text-[#fe019a]" /> Lightning Fast Shipping
            </div>
            <div className="flex items-center gap-3 text-white/50 text-sm font-semibold">
              <Box className="w-5 h-5 text-blue-400" /> Premium Packaging
            </div>
          </div>

        </div>

        {/* Floating Cart Button */}
        {totalItemCount > 0 && (
          <button
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#00fd7a] text-[#060b19] rounded-full shadow-[0_0_30px_rgba(0,253,122,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group"
          >
            <ShoppingCart className="w-7 h-7" />
            <span className="absolute -top-1 -right-1 bg-[#fe019a] text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-[#060b19]">
              {totalItemCount}
            </span>
          </button>
        )}

        {/* Cart Drawer Overlay */}
        <div className={`fixed inset-0 z-[60] transition-opacity duration-500 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsCartOpen(false)} />
          
          <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-[#060b19] border-l border-white/10 shadow-2xl transition-transform duration-500 flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            
            {/* Drawer Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00fd7a]/10 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-[#00fd7a]" />
                </div>
                <h2 className="text-xl font-bold text-white">Your Cart</h2>
              </div>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/5 rounded-full text-white/50 hover:text-white transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <Box className="w-16 h-16 mb-4" />
                  <p className="text-lg font-medium">Your cart is empty</p>
                  <button onClick={() => setIsCartOpen(false)} className="mt-4 text-[#00fd7a] text-sm font-bold hover:underline">Continue Shopping</button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="bg-white/5 border border-white/10 rounded-2xl p-4 w-full group">
                    <div className="flex items-center gap-4 w-full">
                      <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center p-2 shrink-0">
                        <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      
                      <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <h3 className="text-white font-bold text-sm leading-tight mb-1">{item.name}</h3>
                          <p className="text-[#00fd7a] font-bold text-sm">{item.price}</p>
                        </div>
                        
                        <div className="flex items-center gap-3 self-end sm:self-auto">
                          <div className="flex items-center bg-black/30 rounded-lg border border-white/10 px-1">
                            <button 
                              onClick={() => updateQuantity(item.id!, -1)}
                              className="w-7 h-7 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-white font-black text-xs">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id!, 1)}
                              className="w-7 h-7 flex items-center justify-center text-white/50 hover:text-white transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          
                          <button onClick={() => removeFromCart(item.id!)} className="p-2 text-white/20 hover:text-[#fe019a] transition-colors rounded-full hover:bg-white/5">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer */}
            {cartItems.length > 0 && (
              <div className="p-8 bg-[#0a101f] border-t border-white/10 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-white/50 text-sm">
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-white/50 text-sm">
                    <span>Shipping</span>
                    <span className="text-[#00fd7a]">Calculated at checkout</span>
                  </div>
                  <div className="pt-4 flex justify-between text-white text-xl font-black">
                    <span>Total</span>
                    <span>₹{cartTotal.toLocaleString()}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => navigate('/checkout', { state: { cart } })}
                  className="w-full h-14 bg-gradient-to-r from-[#00fd7a] to-[#fe019a] text-[#060b19] font-black text-lg rounded-xl shadow-[0_0_30px_rgba(0,253,122,0.2)] hover:scale-[1.02] transition-all"
                >
                  Secure Checkout
                </Button>
                <p className="text-center text-white/30 text-[10px] uppercase font-bold tracking-widest">
                  SSL Secured • Guaranteed Delivery
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
