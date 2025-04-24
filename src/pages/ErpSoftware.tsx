
import React from 'react';
import Layout from '../components/layout/Layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Boxes,
  Calendar,
  ClipboardList,
  DollarSign,
  Package,
  Settings2,
  Truck,
  Users
} from 'lucide-react';

const ErpSoftware = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">ERP Control Panel</h1>
          <p className="text-gray-600">Manage your business operations from one place</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-card">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Package className="h-4 w-4" />
                    Total Inventory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2,345</div>
                  <p className="text-xs text-muted-foreground">units in stock</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <DollarSign className="h-4 w-4" />
                    Revenue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,345</div>
                  <p className="text-xs text-muted-foreground">last 30 days</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Truck className="h-4 w-4" />
                    Pending Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">to be delivered</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Active Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-xs text-muted-foreground">this month</p>
                </CardContent>
              </Card>
            </div>

            {/* Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Boxes className="h-5 w-5" />
                    Inventory Management
                  </CardTitle>
                  <CardDescription>
                    Track and manage your stock levels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Low Stock Items</span>
                      <span className="font-medium text-red-500">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Items to Reorder</span>
                      <span className="font-medium text-yellow-500">8</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Excess Stock</span>
                      <span className="font-medium text-green-500">3</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Schedule Overview
                  </CardTitle>
                  <CardDescription>
                    Upcoming deliveries and tasks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Today's Deliveries</span>
                      <span className="font-medium">5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Pending Tasks</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Week's Schedule</span>
                      <span className="font-medium">85% full</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                  <CardDescription>
                    Common tasks and operations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors">
                      Create New Order
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors">
                      Update Inventory
                    </button>
                    <button className="w-full text-left px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors">
                      Generate Reports
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="inventory" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
                <CardDescription>
                  Detailed inventory tracking and control
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Inventory management content coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
                <CardDescription>
                  Track and manage all orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Order management content coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduling" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Schedule Management</CardTitle>
                <CardDescription>
                  Manage delivery schedules and tasks
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Scheduling content coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
                <CardDescription>
                  Configure your ERP settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Settings content coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default ErpSoftware;
