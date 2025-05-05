import Layout from "../components/layout/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Activity,
  Package,
  Calendar,
  DollarSign,
  AlertTriangle,
} from "lucide-react";
import RecentOrdersCard from "../components/dashboard/RecentOrdersCard";
import InventoryLevelsCard from "../components/dashboard/InventoryLevelsCard";
import AIRecommendationsCard from "../components/dashboard/AIRecommendationsCard";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartTooltip,
} from "@/components/ui/chart";
import {
  Line,
  Bar,
  LineChart,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { name: "Jan", total: 12400 },
  { name: "Feb", total: 14250 },
  { name: "Mar", total: 18200 },
  { name: "Apr", total: 16800 },
  { name: "May", total: 22100 },
  { name: "Jun", total: 19800 },
  { name: "Jul", total: 24300 },
];

const inventoryData = [
  { name: "Vegetables", value: 65 },
  { name: "Fruits", value: 42 },
  { name: "Grains", value: 78 },
  { name: "Oils", value: 56 },
  { name: "Spices", value: 34 },
  { name: "Dairy", value: 48 },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-gray-600">
                Welcome back! Here's an overview of your restaurant supplies.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="text-sm font-medium text-gray-500">
                Last updated
              </div>
              <div className="text-lg font-semibold">Today, 10:30 AM</div>
            </div>
          </div>

          <Tabs defaultValue="overview" className="mb-8">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="inventory">Inventory</TabsTrigger>
              <TabsTrigger value="finances">Finances</TabsTrigger>
              <TabsTrigger value="scheduling">Scheduling</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Total Orders
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">124</div>
                    <p className="text-sm text-green-600 mt-1">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Pending Deliveries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">7</div>
                    <p className="text-sm text-gray-500 mt-1">
                      Expected within 3 days
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      Inventory Value
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">$24,389</div>
                    <p className="text-sm text-green-600 mt-1">
                      +2.5% from last week
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Low Stock Items
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">5</div>
                    <p className="text-sm text-red-500 mt-1">
                      Reorder required
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sales Performance</CardTitle>
                      <CardDescription>
                        Monthly revenue over time
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ChartContainer
                          config={{
                            sales: { color: "#2e7d32" },
                          }}
                        >
                          <LineChart data={salesData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip content={<ChartTooltipContent />} />
                            <Line
                              type="monotone"
                              dataKey="total"
                              name="Sales"
                              stroke="#2e7d32"
                              strokeWidth={2}
                            />
                          </LineChart>
                        </ChartContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Inventory Status</CardTitle>
                      <CardDescription>
                        Stock levels by category
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={inventoryData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#2e7d32" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div className="lg:col-span-2">
                  <RecentOrdersCard />
                </div>
                <div>
                  <AIRecommendationsCard />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="inventory" className="pt-4">
              <div className="mb-8">
                <InventoryLevelsCard />
              </div>
            </TabsContent>

            <TabsContent value="finances" className="pt-4">
              <div className="grid grid-cols-1 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Financial Overview</CardTitle>
                    <CardDescription>Daily financial accounts</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <p className="text-gray-500">
                      Financial data visualization coming soon
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="scheduling" className="pt-4">
              <div className="grid grid-cols-1 gap-6 mb-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Schedule</CardTitle>
                    <CardDescription>
                      Upcoming deliveries and pickups
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <p className="text-gray-500">
                      Scheduling calendar coming soon
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
