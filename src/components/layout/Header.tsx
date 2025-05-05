import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { itemCount } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-farmfing-primary">
                Farm<span className="text-farmfing-secondary">fing</span>
              </span>
            </Link>

            <nav className="hidden md:flex space-x-6">
              <Link
                to="/raw-materials"
                className="text-gray-600 hover:text-farmfing-primary font-medium"
              >
                Items
              </Link>
              <Link
                to="/erp-software"
                className="text-gray-600 hover:text-farmfing-primary font-medium"
              >
                ERP Software
              </Link>
              <Link
                to="/fresh-produce"
                className="text-gray-600 hover:text-farmfing-primary font-medium"
              >
                Scheduling
              </Link>
              <Link
                to="/inventory"
                className="text-gray-600 hover:text-farmfing-primary font-medium"
              >
                Inventory Management
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart
                size={24}
                className="text-gray-600 hover:text-farmfing-primary"
              />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-farmfing-primary text-white">
                  {itemCount}
                </Badge>
              )}
            </Link>
            <Link to="/login">
              <Button variant="outline">Log In</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingCart size={24} className="text-gray-600" />
              {itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-farmfing-primary text-white">
                  {itemCount}
                </Badge>
              )}
            </Link>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/raw-materials"
                className="text-gray-600 hover:text-farmfing-primary font-medium py-2"
              >
                Items
              </Link>
              <Link
                to="/erp-software"
                className="text-gray-600 hover:text-farmfing-primary font-medium py-2"
              >
                ERP Software
              </Link>
              <Link
                to="/fresh-produce"
                className="text-gray-600 hover:text-farmfing-primary font-medium py-2"
              >
                Scheduling
              </Link>
              <Link
                to="/inventory"
                className="text-gray-600 hover:text-farmfing-primary font-medium py-2"
              >
                Inventory Management
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
                <Link to="/login">
                  <Button variant="outline" className="w-full">
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="w-full">Sign Up</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
