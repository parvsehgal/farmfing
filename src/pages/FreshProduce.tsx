
import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar, Leaf, Truck } from 'lucide-react';

const FreshProduce = () => {
  const seasonalProduce = [
    {
      name: "Spring",
      items: ["Asparagus", "Artichokes", "Peas", "Radishes", "Spring Onions", "Strawberries"]
    },
    {
      name: "Summer",
      items: ["Tomatoes", "Zucchini", "Corn", "Bell Peppers", "Eggplant", "Peaches", "Berries"]
    },
    {
      name: "Fall",
      items: ["Pumpkins", "Butternut Squash", "Apples", "Pears", "Brussels Sprouts", "Cauliflower"]
    },
    {
      name: "Winter",
      items: ["Kale", "Sweet Potatoes", "Citrus", "Cabbage", "Potatoes", "Winter Squash"]
    }
  ];

  return (
    <Layout>
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Fresh Produce Supply</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Farm-fresh vegetables and fruits delivered directly to your restaurant.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-8 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Why Choose Our Fresh Produce?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Seasonal Availability</h3>
                <p className="text-gray-600">
                  We source produce according to natural growing seasons for peak flavor and nutrition.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Organic Options</h3>
                <p className="text-gray-600">
                  Sustainably grown produce with organic certification options available.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Truck className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Farm to Restaurant</h3>
                <p className="text-gray-600">
                  Complete traceability from farm to your kitchen with minimal transit time.
                </p>
              </div>
            </div>
          </div>

          {/* Seasonal Produce */}
          <h2 className="text-2xl font-bold mb-8 text-center">Seasonal Produce Guide</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {seasonalProduce.map((season, idx) => (
              <Card key={idx} className="h-full">
                <CardHeader>
                  <CardTitle>{season.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1">
                    {season.items.map((item, i) => (
                      <li key={i} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                  <Button variant="outline" className="mt-4 w-full">
                    View {season.name} Produce
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-green-50 p-8 rounded-lg border border-green-100 mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">Quality Grading System</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center mr-2">A</span>
                  Premium Grade
                </h3>
                <p className="text-gray-600">Exceptional quality, perfect appearance, ideal for display and premier dishes.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-400 text-white flex items-center justify-center mr-2">B</span>
                  Standard Grade
                </h3>
                <p className="text-gray-600">Excellent quality with minor imperfections, perfect for most cooking applications.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-green-300 text-white flex items-center justify-center mr-2">C</span>
                  Processing Grade
                </h3>
                <p className="text-gray-600">Good quality but irregular appearance, ideal for soups, sauces, and processing.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-6">Ready to source the freshest produce for your restaurant?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg">Request Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FreshProduce;
