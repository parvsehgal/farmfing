
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, ShieldCheck, Plus, Minus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  rating: number;
  source: string;
  price: number;
  unit: string;
  available: number;
}

interface ProductGridProps {
  products: Product[];
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductGrid = ({ products, onOpenDetail, onAddToCart }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onOpenDetail={onOpenDetail}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ 
  product, 
  onOpenDetail,
  onAddToCart
}: { 
  product: Product;
  onOpenDetail: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
}) => {
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-3 w-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

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

  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-md group">
      <div 
        className="h-48 relative cursor-pointer"
        onClick={() => onOpenDetail(product)}
      >
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
        />
        <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1">
          <span className="font-medium text-yellow-600 text-xs">{product.rating.toFixed(1)}</span>
          <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
        </div>
        {product.available <= 10 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
            Low Stock
          </div>
        )}
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <h3 
          className="font-medium text-base mb-1 cursor-pointer hover:text-primary"
          onClick={() => onOpenDetail(product)}
        >
          {product.name}
        </h3>
        
        <div className="flex items-center gap-1 mb-1 text-xs text-gray-600">
          <ShieldCheck className="h-3 w-3 text-green-600" />
          <span>Source: {product.source}</span>
        </div>
        
        <div className="flex items-center gap-1 mb-2">
          {renderStars(product.rating)}
        </div>
        
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold">
              ₹{product.price.toFixed(2)}<span className="text-gray-500 text-sm">/{product.unit}</span>
            </div>
            <div className="text-xs text-gray-600">
              {product.available} {product.unit} available
            </div>
          </div>
          
          {showQuantity ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center border rounded-md flex-1">
                <button
                  type="button"
                  className="px-2 py-1"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                </button>
                <input
                  type="number"
                  min="1"
                  max={product.available}
                  value={quantity}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (!isNaN(value) && value >= 1 && value <= product.available) {
                      setQuantity(value);
                    }
                  }}
                  className="w-10 text-center border-0 p-0 h-8 text-sm focus-visible:ring-0"
                />
                <button
                  type="button"
                  className="px-2 py-1"
                  onClick={increaseQuantity}
                  disabled={quantity >= product.available}
                >
                  <Plus className="h-3 w-3" />
                </button>
              </div>
              <Button
                size="sm"
                onClick={() => {
                  onAddToCart(product, quantity);
                  setShowQuantity(false);
                  setQuantity(1);
                }}
              >
                Add
              </Button>
            </div>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full"
              onClick={() => setShowQuantity(true)}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductGrid;
