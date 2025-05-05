import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface CategorySidebarProps {
  categories: Category[];
  activeCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

const CategorySidebar = ({
  categories,
  activeCategory,
  onSelectCategory,
}: CategorySidebarProps) => {
  return (
    <div className="w-full md:w-64 mb-6 md:mb-0">
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-semibold text-lg mb-4">Categories</h2>
        <div className="space-y-1">
          <Button
            variant={activeCategory === null ? "default" : "ghost"}
            className={cn(
              "w-full justify-start text-left",
              activeCategory === null ? "bg-primary" : "",
            )}
            onClick={() => onSelectCategory("all")}
          >
            <span className="mr-2">🏷️</span>
            All Products
          </Button>

          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start text-left",
                activeCategory === category.id ? "bg-primary" : "",
              )}
              onClick={() => onSelectCategory(category.id)}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="font-medium text-sm mb-3">Quality Standards</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="organic" />
              <label htmlFor="organic">Organic Certified</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="fairtrade" />
              <label htmlFor="fairtrade">Fair Trade</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="pesticide-free" />
              <label htmlFor="pesticide-free">Pesticide-Free</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="non-gmo" />
              <label htmlFor="non-gmo">Non-GMO</label>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-medium text-sm mb-3">Price Range</h3>
          <div className="flex items-center space-x-2 mb-4">
            <input
              type="number"
              placeholder="Min"
              className="w-full px-2 py-1 border rounded text-sm"
            />
            <span>to</span>
            <input
              type="number"
              placeholder="Max"
              className="w-full px-2 py-1 border rounded text-sm"
            />
          </div>
          <Button size="sm" variant="outline" className="w-full">
            Apply Filter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
