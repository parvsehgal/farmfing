
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// Mock data for AI recommendations
const recommendations = [
  {
    id: 1,
    type: 'Reorder',
    title: 'Reorder Fresh Tomatoes',
    description: 'Current stock is low based on your usage patterns. Recommended order: 25kg.',
    action: 'Place Order',
    urgent: true,
  },
  {
    id: 2,
    type: 'Waste Reduction',
    title: 'Use Avocados Within 2 Days',
    description: '8 avocados are nearing ripeness and should be used soon to prevent waste.',
    action: 'Mark Used',
    urgent: true,
  },
  {
    id: 3,
    type: 'Cost Saving',
    title: 'Bulk Discount Available',
    description: 'Order 50kg of rice to receive a 15% discount from your supplier.',
    action: 'View Deal',
    urgent: false,
  },
  {
    id: 4,
    type: 'Forecast',
    title: 'Increase Protein Orders',
    description: 'Based on seasonal trends, increase protein orders by 20% for next month.',
    action: 'Adjust Orders',
    urgent: false,
  },
];

const AIRecommendationsCard = () => {
  const { toast } = useToast();

  const handleAction = (recommendation: typeof recommendations[0]) => {
    toast({
      title: `Action taken: ${recommendation.action}`,
      description: `For recommendation: ${recommendation.title}`,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Recommendations</CardTitle>
        <CardDescription>Smart insights to optimize your inventory</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((recommendation) => (
            <div 
              key={recommendation.id} 
              className={`p-3 border rounded-lg ${recommendation.urgent ? 'border-red-200 bg-red-50' : 'border-gray-100 hover:bg-gray-50'}`}
            >
              <div className="flex justify-between">
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  recommendation.type === 'Reorder' ? 'bg-blue-100 text-blue-800' :
                  recommendation.type === 'Waste Reduction' ? 'bg-red-100 text-red-800' :
                  recommendation.type === 'Cost Saving' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}>
                  {recommendation.type}
                </span>
                {recommendation.urgent && (
                  <span className="text-xs font-medium px-2 py-1 rounded bg-red-100 text-red-800">
                    Urgent
                  </span>
                )}
              </div>
              <h4 className="font-medium mt-2">{recommendation.title}</h4>
              <p className="text-sm text-gray-500 mt-1 mb-3">{recommendation.description}</p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleAction(recommendation)}
              >
                {recommendation.action}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AIRecommendationsCard;
