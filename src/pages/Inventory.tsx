
import React from 'react';
import Layout from '../components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BarChart, Brain, LineChart, TrendingDown } from 'lucide-react';

const Inventory = () => {
  return (
    <Layout>
      <div className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">AI-Powered Inventory Management</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Revolutionary inventory management with artificial intelligence to optimize your restaurant operations.
            </p>
          </div>

          {/* AI Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <Brain className="h-10 w-10 text-farmfing-primary" />
                </div>
                <CardTitle>Predictive Analytics</CardTitle>
                <CardDescription>
                  Our AI algorithms analyze historical data to predict future inventory needs.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Forecast ingredient needs based on historical usage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Account for seasonal variations and special events</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Adapt to changing menu items and customer preferences</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <TrendingDown className="h-10 w-10 text-farmfing-primary" />
                </div>
                <CardTitle>Waste Reduction</CardTitle>
                <CardDescription>
                  Minimize food waste with intelligent recommendations and shelf-life tracking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Track ingredient shelf life and expiration dates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Suggest recipe ideas to utilize ingredients before spoilage</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Monitor waste patterns to improve ordering practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <BarChart className="h-10 w-10 text-farmfing-primary" />
                </div>
                <CardTitle>Automated Reordering</CardTitle>
                <CardDescription>
                  Set intelligent par levels for ingredients and automate your ordering process.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Smart par levels based on usage patterns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Automated purchase orders when inventory reaches threshold</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Order consolidation for maximum efficiency</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">
                  <LineChart className="h-10 w-10 text-farmfing-primary" />
                </div>
                <CardTitle>Performance Metrics</CardTitle>
                <CardDescription>
                  Comprehensive analytics to measure and improve your inventory management.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Inventory turnover rates and trends</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Food cost percentage monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Variance reports between actual and theoretical usage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">How Our AI Inventory System Works</h2>
            
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              
              <div className="grid md:grid-cols-4 gap-8 relative z-10">
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-farmfing-primary text-white flex items-center justify-center mb-4">
                    1
                  </div>
                  <h3 className="font-semibold mb-2">Data Collection</h3>
                  <p className="text-gray-600 text-sm">System collects data from sales, inventory counts, and vendor deliveries</p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-farmfing-primary text-white flex items-center justify-center mb-4">
                    2
                  </div>
                  <h3 className="font-semibold mb-2">AI Analysis</h3>
                  <p className="text-gray-600 text-sm">Machine learning algorithms process data to identify patterns</p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-farmfing-primary text-white flex items-center justify-center mb-4">
                    3
                  </div>
                  <h3 className="font-semibold mb-2">Recommendations</h3>
                  <p className="text-gray-600 text-sm">System generates actionable insights and ordering suggestions</p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-farmfing-primary text-white flex items-center justify-center mb-4">
                    4
                  </div>
                  <h3 className="font-semibold mb-2">Implementation</h3>
                  <p className="text-gray-600 text-sm">Easy-to-use dashboard for reviewing and implementing recommendations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-2xl font-bold mb-6">Ready to revolutionize your inventory management?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/signup">
                <Button size="lg">Get Started</Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg">See AI Demo</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Inventory;
