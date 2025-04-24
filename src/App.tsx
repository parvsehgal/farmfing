
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./hooks/useCart";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Demo from "./pages/Demo";
import RawMaterials from "./pages/RawMaterials";
import ErpSoftware from "./pages/ErpSoftware";
import FreshProduce from "./pages/FreshProduce"; 
import Inventory from "./pages/Inventory";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/raw-materials" element={<RawMaterials />} />
            <Route path="/erp-software" element={<ErpSoftware />} />
            <Route path="/fresh-produce" element={<FreshProduce />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/cart" element={<Cart />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
