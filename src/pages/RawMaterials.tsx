import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Minus,
  Filter,
  ShieldCheck,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import ProductGrid from "../components/rawmaterials/ProductGrid";
import CategorySidebar from "../components/rawmaterials/CategorySidebar";
import { Badge } from "@/components/ui/badge";
import { useCart } from "../hooks/useCart";

interface CategoryItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  source: string;
  description: string;
  price: number;
  unit: string;
  available: number;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  headerImage: string;
  items: CategoryItem[];
}

const RawMaterials = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<CategoryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { toast } = useToast();

  const categories: Category[] = [
    {
      id: "grains",
      name: "Grains & Flours",
      icon: <i className="text-amber-600">🌾</i>,
      headerImage:
        "https://images.unsplash.com/photo-1586444248174-b256493b3b4c?q=80&w=1170&auto=format&fit=crop",
      items: [
        {
          id: "wheat-flour",
          name: "Premium Wheat Flour",
          image:
            "https://images.unsplash.com/photo-1574323347407-f5e1c5a6ec21?q=80&w=1000&auto=format&fit=crop",
          rating: 4.8,
          source: "Himalayan Farms Cooperative",
          description:
            "Stone-ground premium wheat flour from organically grown wheat varieties. Perfect for artisanal breads and pastries.",
          price: 45.0,
          unit: "kg",
          available: 500,
        },
        {
          id: "basmati-rice",
          name: "Basmati Rice",
          image:
            "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?q=80&w=1035&auto=format&fit=crop",
          rating: 4.9,
          source: "Punjab Valley Producers",
          description:
            "Aged, aromatic basmati rice with superior elongation and fragrance. Sourced from heritage farms.",
          price: 120.0,
          unit: "kg",
          available: 350,
        },
        {
          id: "quinoa",
          name: "Organic Quinoa",
          image:
            "https://images.unsplash.com/photo-1614961233913-a5113a4a34ed?q=80&w=1167&auto=format&fit=crop",
          rating: 4.7,
          source: "Andean Organic Collective",
          description:
            "Nutrient-rich, organic white quinoa with perfect texture and mild flavor. Ideal for health-focused menus.",
          price: 180.0,
          unit: "kg",
          available: 200,
        },
        {
          id: "corn-meal",
          name: "Stone-ground Corn Meal",
          image:
            "https://images.unsplash.com/photo-1654155460347-d4d63eafcc64?q=80&w=1180&auto=format&fit=crop",
          rating: 4.6,
          source: "Heritage Grain Works",
          description:
            "Coarse-ground yellow cornmeal with exceptional flavor for traditional polenta and cornbread.",
          price: 65.0,
          unit: "kg",
          available: 250,
        },
      ],
    },
    {
      id: "oils",
      name: "Oils & Fats",
      icon: <i className="text-yellow-600">🫒</i>,
      headerImage:
        "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1178&auto=format&fit=crop",
      items: [
        {
          id: "olive-oil",
          name: "Extra Virgin Olive Oil",
          image:
            "https://images.unsplash.com/photo-1565999113218-75cc2628880b?q=80&w=1170&auto=format&fit=crop",
          rating: 4.9,
          source: "Mediterranean Groves",
          description:
            "Cold-pressed, single-origin olive oil with fruity notes and peppery finish. First harvest quality.",
          price: 850.0,
          unit: "L",
          available: 100,
        },
        {
          id: "ghee",
          name: "Grass-Fed Clarified Butter",
          image:
            "https://images.unsplash.com/photo-1589985270826-4d9b2276ed3d?q=80&w=1187&auto=format&fit=crop",
          rating: 4.8,
          source: "Himalayan Dairy Cooperative",
          description:
            "Traditional ghee made from A2 milk from grass-fed cows. Rich flavor with high smoke point.",
          price: 750.0,
          unit: "kg",
          available: 80,
        },
        {
          id: "coconut-oil",
          name: "Cold-Pressed Coconut Oil",
          image:
            "https://images.unsplash.com/photo-1575386667256-75590c165038?q=80&w=1170&auto=format&fit=crop",
          rating: 4.7,
          source: "Kerala Organic Farms",
          description:
            "Unrefined, virgin coconut oil with natural coconut aroma. Perfect for high-heat cooking and baking.",
          price: 520.0,
          unit: "L",
          available: 120,
        },
        {
          id: "avocado-oil",
          name: "Avocado Oil",
          image:
            "https://images.unsplash.com/photo-1610014650070-4cd3aa9ea47b?q=80&w=1587&auto=format&fit=crop",
          rating: 4.6,
          source: "Mexican Highland Farms",
          description:
            "Premium, cold-pressed avocado oil with mild flavor and exceptionally high smoke point.",
          price: 950.0,
          unit: "L",
          available: 60,
        },
      ],
    },
    {
      id: "spices",
      name: "Spices & Seasonings",
      icon: <i className="text-red-600">🌶️</i>,
      headerImage:
        "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=1374&auto=format&fit=crop",
      items: [
        {
          id: "turmeric",
          name: "Single-Origin Turmeric",
          image:
            "https://images.unsplash.com/photo-1607220442972-3045ea6e57d1?q=80&w=1170&auto=format&fit=crop",
          rating: 4.9,
          source: "Kerala Spice Collective",
          description:
            "High-curcumin turmeric rhizomes, sun-dried and ground fresh. Vibrant color and potent aroma.",
          price: 240.0,
          unit: "kg",
          available: 150,
        },
        {
          id: "black-pepper",
          name: "Tellicherry Black Pepper",
          image:
            "https://images.unsplash.com/photo-1599900554895-5e0fc7aeef16?q=80&w=1170&auto=format&fit=crop",
          rating: 4.8,
          source: "Malabar Coast Growers",
          description:
            "Premium black peppercorns harvested at perfect ripeness with complex flavor and exceptional heat.",
          price: 380.0,
          unit: "kg",
          available: 90,
        },
        {
          id: "pink-salt",
          name: "Himalayan Pink Salt",
          image:
            "https://images.unsplash.com/photo-1626697556651-67ebdcb8ffd8?q=80&w=1170&auto=format&fit=crop",
          rating: 4.7,
          source: "Himalayan Rock Salt Cooperative",
          description:
            "Hand-harvested ancient sea salt with trace minerals. Available in various grinds.",
          price: 150.0,
          unit: "kg",
          available: 200,
        },
        {
          id: "saffron",
          name: "Saffron Threads",
          image:
            "https://images.unsplash.com/photo-1607110392177-5a9a3eac5d38?q=80&w=1170&auto=format&fit=crop",
          rating: 5.0,
          source: "Kashmir Valley Producers",
          description:
            "Premium-grade, handpicked saffron stamens with intense color, aroma and flavor.",
          price: 5000.0,
          unit: "g",
          available: 1000,
        },
      ],
    },
    {
      id: "dairy",
      name: "Dairy & Alternatives",
      icon: <i className="text-blue-100">🥛</i>,
      headerImage:
        "https://images.unsplash.com/photo-1628088062854-d1870b4553da?q=80&w=1170&auto=format&fit=crop",
      items: [
        {
          id: "cheese-cultures",
          name: "Artisanal Cheese Cultures",
          image:
            "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=1169&auto=format&fit=crop",
          rating: 4.8,
          source: "European Culture Collective",
          description:
            "Professional-grade cultures for creating authentic artisanal cheeses. Various strains available.",
          price: 450.0,
          unit: "pack",
          available: 50,
        },
        {
          id: "plant-milk",
          name: "Plant-Based Milk Base",
          image:
            "https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=1160&auto=format&fit=crop",
          rating: 4.6,
          source: "Modern Plant Foods",
          description:
            "Concentrated almond, oat, and soy bases for creating custom plant-based milks in-house.",
          price: 380.0,
          unit: "L",
          available: 80,
        },
        {
          id: "milk-powder",
          name: "Grass-Fed Milk Powder",
          image:
            "https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1374&auto=format&fit=crop",
          rating: 4.7,
          source: "Alpine Dairy Cooperative",
          description:
            "Spray-dried whole milk powder from grass-fed cows. Perfect for baking and beverage applications.",
          price: 290.0,
          unit: "kg",
          available: 100,
        },
        {
          id: "yogurt-cultures",
          name: "Yogurt Starter Cultures",
          image:
            "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1587&auto=format&fit=crop",
          rating: 4.9,
          source: "Probiotic Sciences Lab",
          description:
            "Professional strength probiotic cultures for creating artisanal yogurt with consistent results.",
          price: 320.0,
          unit: "pack",
          available: 70,
        },
      ],
    },
  ];

  // Find all products across all categories
  const allProducts = categories.flatMap((category) => category.items);

  // Function to handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setActiveCategory(categoryId === activeCategory ? null : categoryId);
  };

  // Function to open item dialog
  const openItemDialog = (item: CategoryItem) => {
    setSelectedItem(item);
  };

  // Function to close item dialog
  const closeItemDialog = () => {
    setSelectedItem(null);
  };

  // Function to handle adding product to cart
  const handleAddToCart = (item: CategoryItem, quantity: number) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity,
      image: item.image,
      unit: item.unit,
    });

    toast({
      title: "Added to cart",
      description: `${quantity} ${item.unit} of ${item.name} added to your cart`,
    });
  };

  // Render stars for ratings
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ));
  };

  return (
    <Layout>
      <div className="py-6 md:py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold">
              Premium Raw Material Supply
            </h1>
            <p className="text-gray-600 mt-2">
              High-quality, traceable raw materials sourced directly from
              producers.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Category Sidebar */}
            <CategorySidebar
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={handleCategorySelect}
            />

            {/* Main Content */}
            <div className="flex-1">
              {/* Filters and Sort */}
              <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">Filter by</span>
                  <Badge variant="outline" className="cursor-pointer">
                    In Stock
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    Organic
                  </Badge>
                  <Badge variant="outline" className="cursor-pointer">
                    Fair Trade
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Sort by:</span>
                  <select className="text-sm border rounded px-2 py-1">
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Rating</option>
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              <ProductGrid
                products={
                  activeCategory
                    ? categories.find((c) => c.id === activeCategory)?.items ||
                    []
                    : allProducts
                }
                onOpenDetail={openItemDialog}
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Item Detail Dialog */}
      <Dialog open={selectedItem !== null} onOpenChange={closeItemDialog}>
        <DialogContent className="sm:max-w-[600px]">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedItem.name}</DialogTitle>
                <DialogDescription>
                  Source: {selectedItem.source}
                </DialogDescription>
              </DialogHeader>
              <div className="mb-4">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-64 object-cover rounded-md"
                />
              </div>
              <div className="flex items-center gap-1 mb-4">
                {renderStars(selectedItem.rating)}
                <span className="ml-2 text-sm text-gray-600">
                  ({selectedItem.rating.toFixed(1)})
                </span>
              </div>
              <p className="text-gray-700 mb-4">{selectedItem.description}</p>

              <div className="flex justify-between items-center mb-4">
                <div className="font-semibold text-lg">
                  ₹{selectedItem.price.toFixed(2)}/{selectedItem.unit}
                </div>
                <div className="text-sm text-gray-600">
                  Available: {selectedItem.available} {selectedItem.unit}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <ProductQuantitySelector
                  product={selectedItem}
                  onAddToCart={(quantity) => {
                    handleAddToCart(selectedItem, quantity);
                    closeItemDialog();
                  }}
                />
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

// Product Quantity Selector Component
const ProductQuantitySelector = ({
  product,
  onAddToCart,
}: {
  product: CategoryItem;
  onAddToCart: (quantity: number) => void;
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    if (quantity < product.available) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= product.available) {
      setQuantity(value);
    }
  };

  return (
    <div className="flex items-center gap-4 w-full">
      <div className="flex items-center border rounded-md">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          min="1"
          max={product.available}
          value={quantity}
          onChange={handleInputChange}
          className="w-16 text-center border-0 focus-visible:ring-0"
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={increaseQuantity}
          disabled={quantity >= product.available}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button onClick={() => onAddToCart(quantity)} className="flex-1">
        Add to Cart - ₹{(product.price * quantity).toFixed(2)}
      </Button>
    </div>
  );
};

export default RawMaterials;
