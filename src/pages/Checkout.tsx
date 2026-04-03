import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Check, Shield, Zap, ArrowLeft, CreditCard, Truck, Mail, User, MapPin } from "lucide-react";
import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MAIN_KITS, ACCESSORIES } from "./BuyNow";

export default function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || {};
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form fields
  const [fields, setFields] = useState({
    fullName: "", email: "", phone: "",
    street: "", city: "", zip: "",
    cardNumber: "", expiry: "", cvc: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const allProducts = useMemo(() => [...MAIN_KITS, ...ACCESSORIES], []);
  const cartItems = useMemo(() => {
    return Object.entries(cart as Record<string, number>).map(([id, quantity]) => {
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

  const validate = (name: string, value: string) => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required.";
        if (!/^[a-zA-Z\s'-]+$/.test(value)) return "Name must contain only letters.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        return "";
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Enter a valid email address.";
        return "";
      case "phone":
        if (!value.trim()) return "Phone number is required.";
        if (!/^\d{10}$/.test(value)) return "Phone must be exactly 10 digits.";
        return "";
      case "street":
        if (!value.trim()) return "Street address is required.";
        if (value.trim().length < 5) return "Enter a complete street address.";
        return "";
      case "city":
        if (!value.trim()) return "City is required.";
        if (!/^[a-zA-Z\s'-]+$/.test(value)) return "City must contain only letters.";
        return "";
      case "zip":
        if (!value.trim()) return "ZIP / Postal code is required.";
        if (!/^[a-zA-Z0-9\s-]{4,10}$/.test(value)) return "Enter a valid postal code (4–10 characters).";
        return "";
      case "cardNumber":
        if (!value.trim()) return "Card number is required.";
        if (value.replace(/\s/g, "").length !== 16) return "Card number must be 16 digits.";
        return "";
      case "expiry":
        if (!value.trim()) return "Expiry date is required.";
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) return "Use MM/YY format.";
        return "";
      case "cvc":
        if (!value.trim()) return "CVC is required.";
        if (!/^\d{3,4}$/.test(value)) return "CVC must be 3 or 4 digits.";
        return "";
      default: return "";
    }
  };

  const handleChange = (name: string, raw: string) => {
    let value = raw;
    // Input masking / restricting
    if (name === "fullName" || name === "city") value = raw.replace(/[^a-zA-Z\s'-]/g, "");
    if (name === "phone") value = raw.replace(/\D/g, "").slice(0, 10);
    if (name === "zip") value = raw.replace(/[^a-zA-Z0-9\s-]/g, "").slice(0, 10);
    if (name === "cardNumber") {
      value = raw.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
    }
    if (name === "expiry") {
      value = raw.replace(/\D/g, "").slice(0, 4);
      if (value.length >= 3) value = value.slice(0, 2) + "/" + value.slice(2);
    }
    if (name === "cvc") value = raw.replace(/\D/g, "").slice(0, 4);

    setFields(prev => ({ ...prev, [name]: value }));
    if (touched[name]) setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, fields[name as keyof typeof fields]) }));
  };

  const inputClass = (name: string, focusColor = "#00fd7a") =>
    `w-full bg-white/5 backdrop-blur-xl border rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none transition-colors ${
      touched[name] && errors[name]
        ? "border-red-500 focus:border-red-400"
        : `border-white/10 focus:border-[${focusColor}]`
    }`;

  const ErrorMsg = ({ name }: { name: string }) =>
    touched[name] && errors[name]
      ? <p className="text-red-400 text-xs mt-1 pl-1">{errors[name]}</p>
      : null;

  const handleCompletePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    // Touch all fields to show errors
    const allTouched = Object.keys(fields).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const allErrors = Object.keys(fields).reduce((acc, k) => ({
      ...acc, [k]: validate(k, fields[k as keyof typeof fields])
    }), {} as Record<string, string>);
    setErrors(allErrors);
    if (Object.values(allErrors).some(e => e)) return;
    setIsProcessing(true);
    setTimeout(() => { setIsProcessing(false); setIsSuccess(true); }, 2500);
  };

  if (isSuccess) {
    return (
      <PageLayout>
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
          <div className="w-24 h-24 bg-[#00fd7a]/20 rounded-full flex items-center justify-center mb-8 animate-pulse">
            <Check className="w-12 h-12 text-[#00fd7a]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter">Order Confirmed!</h1>
          <p className="text-white/50 text-xl max-w-xl mb-12">
            Thank you for your purchase. Your SPOT units are being prepared for shipment. You will receive a confirmation email shortly.
          </p>
          <Button
            onClick={() => navigate('/')}
            className="h-14 px-10 bg-[#00fd7a] text-[#060b19] font-black rounded-xl hover:bg-[#fe019a] hover:text-white hover:scale-105 transition-all text-lg shadow-[0_0_30px_rgba(0,253,122,0.3)]"
          >
            Return to Dashboard
          </Button>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="relative min-h-screen pb-24 overflow-hidden pt-10">
        <div className="w-full max-w-[1200px] mx-auto px-6 relative z-10">
          <button
            onClick={() => navigate('/buy')}
            className="flex items-center gap-2 text-white/50 hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold uppercase tracking-widest text-[10px]">Back to Store</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Checkout Form */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <h1 className="text-4xl font-black text-white tracking-tight mb-2">Secure Checkout</h1>
                <p className="text-white/50 font-medium">Please provide your shipping and payment details.</p>
              </div>

              <form onSubmit={handleCompletePurchase} noValidate className="space-y-10">
                {/* Contact + Shipping — single box */}
                <section className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 space-y-8">
                  {/* Contact */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#00fd7a]">
                      <User className="w-5 h-5" />
                      <h2 className="text-lg font-bold uppercase tracking-wider">Contact Information</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text" placeholder="Full Name" value={fields.fullName}
                          onChange={e => handleChange("fullName", e.target.value)}
                          onBlur={() => handleBlur("fullName")}
                          className={inputClass("fullName")}
                        />
                        <ErrorMsg name="fullName" />
                      </div>
                      <div>
                        <input
                          type="email" placeholder="Email Address" value={fields.email}
                          onChange={e => handleChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          className={inputClass("email")}
                        />
                        <ErrorMsg name="email" />
                      </div>
                    </div>
                    <div>
                      <input
                        type="tel" placeholder="Phone Number (10 digits)" value={fields.phone}
                        onChange={e => handleChange("phone", e.target.value)}
                        onBlur={() => handleBlur("phone")}
                        className={inputClass("phone")}
                      />
                      <ErrorMsg name="phone" />
                    </div>
                  </div>

                  <div className="border-t border-white/10" />

                  {/* Shipping */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[#fe019a]">
                      <MapPin className="w-5 h-5" />
                      <h2 className="text-lg font-bold uppercase tracking-wider">Shipping Address</h2>
                    </div>
                    <div>
                      <input
                        type="text" placeholder="Street Address" value={fields.street}
                        onChange={e => handleChange("street", e.target.value)}
                        onBlur={() => handleBlur("street")}
                        className={inputClass("street", "#fe019a")}
                      />
                      <ErrorMsg name="street" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text" placeholder="City" value={fields.city}
                          onChange={e => handleChange("city", e.target.value)}
                          onBlur={() => handleBlur("city")}
                          className={inputClass("city", "#fe019a")}
                        />
                        <ErrorMsg name="city" />
                      </div>
                      <div>
                        <input
                          type="text" placeholder="ZIP / Postal Code" value={fields.zip}
                          onChange={e => handleChange("zip", e.target.value)}
                          onBlur={() => handleBlur("zip")}
                          className={inputClass("zip", "#fe019a")}
                        />
                        <ErrorMsg name="zip" />
                      </div>
                    </div>
                  </div>
                </section>

                {/* Payment */}
                <section className="space-y-6 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-3 text-blue-400">
                    <CreditCard className="w-5 h-5" />
                    <h2 className="text-lg font-bold uppercase tracking-wider">Payment Details</h2>
                  </div>
                  <div className="bg-[#00fd7a]/5 backdrop-blur-3xl border border-[#00fd7a]/20 rounded-2xl p-6 space-y-4">
                    <div className="flex items-center gap-4 mb-2">
                      <div className="bg-white/10 p-2 rounded-md">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white font-bold">Credit or Debit Card</span>
                    </div>
                    <div>
                      <input
                        type="text" placeholder="Card Number (16 digits)" value={fields.cardNumber}
                        onChange={e => handleChange("cardNumber", e.target.value)}
                        onBlur={() => handleBlur("cardNumber")}
                        className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00fd7a] transition-colors"
                      />
                      <ErrorMsg name="cardNumber" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text" placeholder="MM/YY" value={fields.expiry}
                          onChange={e => handleChange("expiry", e.target.value)}
                          onBlur={() => handleBlur("expiry")}
                          className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00fd7a] transition-colors"
                        />
                        <ErrorMsg name="expiry" />
                      </div>
                      <div>
                        <input
                          type="text" placeholder="CVC" value={fields.cvc}
                          onChange={e => handleChange("cvc", e.target.value)}
                          onBlur={() => handleBlur("cvc")}
                          className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#00fd7a] transition-colors"
                        />
                        <ErrorMsg name="cvc" />
                      </div>
                    </div>
                  </div>
                </section>

                <Button
                  type="submit"
                  disabled={isProcessing || cartItems.length === 0}
                  className="w-full h-16 bg-gradient-to-r from-[#00fd7a] to-[#fe019a] text-[#060b19] font-black text-xl rounded-2xl shadow-[0_0_40px_rgba(0,253,122,0.3)] hover:scale-[1.02] transition-all disabled:opacity-50"
                >
                  {isProcessing ? "Processing Security Protocol..." : `Complete Purchase — ₹${cartTotal.toLocaleString()}`}
                </Button>

                <p className="text-center text-white/30 text-[10px] uppercase font-bold tracking-[0.3em] flex items-center justify-center gap-4">
                  <Shield className="w-3 h-3 text-[#00fd7a]" /> 256-BIT SSL ENCRYPTED CONNECTION
                </p>
              </form>
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[32px] p-8 space-y-8">
                <h3 className="text-xl font-bold text-white mb-4">Order Summary</h3>

                <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-black/40 rounded-xl flex items-center justify-center p-2 shrink-0 border border-white/5">
                        <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-bold text-sm truncate">{item.name}</h4>
                        <p className="text-white/40 text-xs mt-1">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[#00fd7a] font-bold text-sm">{item.price}</p>
                      </div>
                    </div>
                  ))}
                  {cartItems.length === 0 && (
                    <p className="text-white/30 text-center py-8">Your cart is empty.</p>
                  )}
                </div>

                <div className="pt-8 border-t border-white/10 space-y-4">
                  <div className="flex justify-between text-white/50">
                    <span>Subtotal</span>
                    <span>₹{cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#00fd7a] font-bold">
                    <span>Shipping</span>
                    <span>FREE</span>
                  </div>
                  <div className="flex justify-between text-white/50">
                    <span>Estimated Tax</span>
                    <span>₹0.00</span>
                  </div>
                  <div className="pt-4 flex justify-between text-white text-3xl font-black tracking-tighter">
                    <span>Total</span>
                    <span>₹{cartTotal.toLocaleString()}</span>
                  </div>
                </div>

                <div className="p-4 bg-white/5 backdrop-blur-2xl rounded-2xl flex items-center gap-4 text-white/50 text-[11px] leading-relaxed">
                  <Truck className="w-8 h-8 text-[#fe019a] shrink-0" />
                  Free white-glove delivery included for all SPOT professional equipment. Arrives in 3-5 business days.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageLayout>
  );
}
