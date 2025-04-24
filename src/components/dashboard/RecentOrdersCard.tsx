
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Mock data for recent orders
const recentOrders = [
  {
    id: 'ORD-12345',
    date: '2023-04-20',
    supplier: 'Fresh Farms Co.',
    total: '$423.50',
    status: 'Delivered',
    statusColor: 'green',
  },
  {
    id: 'ORD-12346',
    date: '2023-04-19',
    supplier: 'Organic Greens',
    total: '$198.75',
    status: 'Processing',
    statusColor: 'blue',
  },
  {
    id: 'ORD-12347',
    date: '2023-04-18',
    supplier: 'Meat Masters',
    total: '$657.20',
    status: 'Shipping',
    statusColor: 'yellow',
  },
  {
    id: 'ORD-12348',
    date: '2023-04-17',
    supplier: 'Dairy Direct',
    total: '$124.30',
    status: 'Delivered',
    statusColor: 'green',
  },
];

const statusColors = {
  Delivered: 'bg-green-100 text-green-800',
  Processing: 'bg-blue-100 text-blue-800',
  Shipping: 'bg-yellow-100 text-yellow-800',
  Cancelled: 'bg-red-100 text-red-800',
};

const RecentOrdersCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Orders</CardTitle>
        <CardDescription>Your latest purchase orders</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg hover:bg-gray-50">
              <div>
                <p className="font-medium">{order.id}</p>
                <p className="text-sm text-gray-500">{order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium">{order.total}</p>
                <p className="text-sm text-gray-500">{order.supplier}</p>
              </div>
              <Badge className={
                order.status === 'Delivered' ? 'bg-green-100 text-green-800 hover:bg-green-200' :
                order.status === 'Processing' ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' :
                order.status === 'Shipping' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200' :
                'bg-red-100 text-red-800 hover:bg-red-200'
              }>
                {order.status}
              </Badge>
            </div>
          ))}
          <a href="/orders" className="block text-center text-sm text-farmfing-primary hover:underline">
            View all orders →
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentOrdersCard;
