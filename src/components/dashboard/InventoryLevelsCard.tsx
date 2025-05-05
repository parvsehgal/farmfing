import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Mock data for inventory levels
const inventoryItems = [
  {
    id: 1,
    name: "Flour (All-Purpose)",
    category: "Baking",
    current: 75,
    max: 100,
    unit: "kg",
    status: "Good",
  },
  {
    id: 2,
    name: "Chicken Breast",
    category: "Meat",
    current: 12,
    max: 50,
    unit: "kg",
    status: "Low",
  },
  {
    id: 3,
    name: "Olive Oil",
    category: "Oils",
    current: 8,
    max: 20,
    unit: "liters",
    status: "Good",
  },
  {
    id: 4,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    current: 5,
    max: 30,
    unit: "kg",
    status: "Critical",
  },
];

const InventoryLevelsCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory Levels</CardTitle>
        <CardDescription>Current stock levels of key items</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {inventoryItems.map((item) => {
            const percentage = (item.current / item.max) * 100;
            let progressColor = "bg-green-500";

            if (percentage <= 20) {
              progressColor = "bg-red-500";
            } else if (percentage <= 40) {
              progressColor = "bg-yellow-500";
            }

            return (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">
                      {item.current} / {item.max} {item.unit}
                    </p>
                    <p
                      className={`text-sm ${item.status === "Critical"
                          ? "text-red-500"
                          : item.status === "Low"
                            ? "text-yellow-500"
                            : "text-green-500"
                        }`}
                    >
                      {item.status}
                    </p>
                  </div>
                </div>
                <Progress
                  value={percentage}
                  className={`h-2 ${percentage <= 20
                      ? "bg-gray-100 [&>div]:bg-red-500"
                      : percentage <= 40
                        ? "bg-gray-100 [&>div]:bg-yellow-500"
                        : "bg-gray-100 [&>div]:bg-green-500"
                    }`}
                />
              </div>
            );
          })}
          <a
            href="/inventory"
            className="block text-center text-sm text-farmfing-primary hover:underline"
          >
            View full inventory →
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryLevelsCard;
