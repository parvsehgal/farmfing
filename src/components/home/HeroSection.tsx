import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Leaf, ShieldCheck, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-blue-50 to-amber-50 py-20 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <h1 className="font-montserrat text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                We Power the Backend <br/>
                <span className="text-green-600">So You Can Power the Kitchen</span>
              </h1>
              <p className="text-xl text-gray-600 font-opensans max-w-2xl">
                From fresh produce to modern logistics, Farmfing delivers speed
              </p>
              
              {/* Quality Badge - Small Version for Mobile */}
              <div className="flex items-center gap-3 p-3 bg-white/80 border border-green-100 rounded-lg shadow-sm lg:hidden">
                <ShieldCheck className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-green-700">Quality Verified</p>
                  <div className="flex items-center gap-0.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <Link to="/signup?type=restaurant" className="w-full sm:w-auto">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold rounded-full h-14">
                  <Users className="mr-2 h-5 w-5" />
                  For Restaurants
                </Button>
              </Link>
              <Link to="/signup?type=supplier" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full border-2 border-primary hover:bg-primary/10 text-primary font-semibold rounded-full h-14">
                  <Leaf className="mr-2 h-5 w-5" />
                  For Suppliers
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Image Section */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              {/* Main Image Container */}
              <div className="aspect-[4/3] w-full max-w-[600px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/ddf19c23-6ebf-4806-bee5-cd4ce348d5d2.png" 
                  alt="Farm to Restaurant Quality Ingredients" 
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40">
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-6 py-4">
                    <div className="flex justify-between items-end">
                      <div className="text-white space-y-1">
                        <p className="font-semibold text-base md:text-lg tracking-wide">Farmers & Suppliers</p>
                        <p className="text-xs md:text-sm text-gray-100 opacity-90">Quality Produce Network</p>
                      </div>
                      <div className="text-white text-right space-y-1">
                        <p className="font-semibold text-base md:text-lg tracking-wide">Restaurants & Chefs</p>
                        <p className="text-xs md:text-sm text-gray-100 opacity-90">Premium Ingredients Sourcing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Badge */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-[330px] bg-white border border-gray-200 shadow-xl p-5 rounded-xl flex flex-col items-center z-20 hidden lg:flex"
                   style={{
                     boxShadow: "0 4px 24px 0 rgba(34,34,34,0.08), 0 1.5px 9px 0 rgba(34,34,34,0.12)",
                   }}>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="h-5 w-5 text-green-600" />
                  <p className="font-bold text-green-700 text-lg">Quality Verified</p>
                </div>
                <div className="flex items-center gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-[13px] text-gray-700 leading-snug text-center font-medium">
                  Every product passes independent inspection <br />
                  following India FSSAI food safety standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
