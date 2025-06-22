import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Package, 
  Search, 
  Truck, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  MapPin,
  Smartphone,
  User,
  Calendar,
  Box
} from "lucide-react";
import PackingStation from "./PackingStation";
import { useState } from "react";

const OrderFulfillment = () => {
  const [selectedOrderForPacking, setSelectedOrderForPacking] = useState(null);
  const orders = [
    {
      id: "ORD-789456",
      customer: "John Smith",
      channel: "Amazon",
      status: "picking",
      priority: "high",
      items: 3,
      value: "$1,247.99",
      created: "2024-01-15 10:30",
      deadline: "2024-01-16 16:00",
      picker: "Mike Johnson",
      location: "Zone A"
    },
    {
      id: "ORD-789457",
      customer: "Sarah Wilson",
      channel: "Shopify",
      status: "packed",
      priority: "medium",
      items: 1,
      value: "$299.99",
      created: "2024-01-15 09:15",
      deadline: "2024-01-16 14:00",
      picker: "Lisa Chen",
      location: "Zone B"
    },
    {
      id: "ORD-789458",
      customer: "David Brown",
      channel: "eBay",
      status: "shipped",
      priority: "low",
      items: 2,
      value: "$567.50",
      created: "2024-01-14 16:45",
      deadline: "2024-01-15 18:00",
      picker: "Tom Davis",
      location: "Zone C"
    },
    {
      id: "ORD-789459",
      customer: "Emma Johnson",
      channel: "Walmart",
      status: "pending",
      priority: "high",
      items: 5,
      value: "$2,134.75",
      created: "2024-01-15 11:20",
      deadline: "2024-01-16 12:00",
      picker: "Unassigned",
      location: "Multiple"
    }
  ];

  const pickingTasks = [
    { item: "iPhone 15 Pro Max", sku: "IPH15PM-128", location: "A1-B2-C3", quantity: 1, picked: false },
    { item: "AirPods Pro 2", sku: "APP2-WHT", location: "B2-A1-C2", quantity: 2, picked: true },
    { item: "Samsung Galaxy S24", sku: "SGS24-256", location: "A1-B3-C1", quantity: 1, picked: false },
    { item: "MacBook Air M3", sku: "MBA-M3-13", location: "C1-D2-A1", quantity: 1, picked: true }
  ];

  const performanceMetrics = [
    { metric: "Orders per Hour", value: "45", target: "40", performance: 112 },
    { metric: "Pick Accuracy", value: "99.2%", target: "98%", performance: 101 },
    { metric: "Avg. Fulfillment Time", value: "2.3h", target: "3h", performance: 123 },
    { metric: "On-Time Shipments", value: "96.8%", target: "95%", performance: 102 }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-gray-100 text-gray-800", text: "Pending" },
      picking: { color: "bg-blue-100 text-blue-800", text: "Picking" },
      packed: { color: "bg-purple-100 text-purple-800", text: "Packed" },
      shipped: { color: "bg-green-100 text-green-800", text: "Shipped" },
      delivered: { color: "bg-green-100 text-green-800", text: "Delivered" }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.color}>{config.text}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    const priorityConfig = {
      high: { color: "bg-red-100 text-red-800", text: "High" },
      medium: { color: "bg-yellow-100 text-yellow-800", text: "Medium" },
      low: { color: "bg-green-100 text-green-800", text: "Low" }
    };
    const config = priorityConfig[priority as keyof typeof priorityConfig];
    return <Badge variant="outline" className={config.color}>{config.text}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Order Fulfillment</h2>
          <p className="text-gray-600">Optimized pick, pack, and ship workflows with mobile support</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Smartphone className="h-4 w-4 mr-2" />
            Mobile App
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Box className="h-4 w-4 mr-2" />
            New Batch
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Orders Today</p>
                <p className="text-2xl font-bold">247</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-2">
              <p className="text-xs text-green-600">+15.3% from yesterday</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Progress</p>
                <p className="text-2xl font-bold">34</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-2">
              <p className="text-xs text-blue-600">12 picking, 22 packing</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Shipped</p>
                <p className="text-2xl font-bold">189</p>
              </div>
              <Truck className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-2">
              <p className="text-xs text-green-600">98.2% on-time delivery</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Urgent Orders</p>
                <p className="text-2xl font-bold">8</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <div className="mt-2">
              <p className="text-xs text-red-600">Requires immediate attention</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="orders" className="space-y-4">
        <TabsList>
          <TabsTrigger value="orders">Order Queue</TabsTrigger>
          <TabsTrigger value="picking">Pick Lists</TabsTrigger>
          <TabsTrigger value="packing">Packing Station</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-4">
          {/* Search and Filter */}
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search orders by ID, customer, or channel..." className="pl-10" />
            </div>
            <Button variant="outline">Priority Sort</Button>
            <Button variant="outline">Batch Create</Button>
          </div>

          {/* Orders List */}
          <Card>
            <CardHeader>
              <CardTitle>Order Queue</CardTitle>
              <CardDescription>Orders awaiting fulfillment, sorted by priority and deadline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orders.map((order, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{order.id}</h3>
                            {getStatusBadge(order.status)}
                            {getPriorityBadge(order.priority)}
                          </div>
                          <p className="text-sm text-gray-600">
                            {order.customer} • {order.channel} • {order.items} items
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-lg">{order.value}</p>
                        <p className="text-sm text-gray-600">Deadline: {order.deadline.split(' ')[1]}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>Created: {order.created.split(' ')[1]}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span>Picker: {order.picker}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>Location: {order.location}</span>
                      </div>
                      <div className="text-right">
                        <Button 
                          variant={order.status === 'pending' ? 'default' : 'outline'} 
                          size="sm"
                        >
                          {order.status === 'pending' ? 'Start Picking' : 'View Details'}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="picking" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Pick List */}
            <Card>
              <CardHeader>
                <CardTitle>Active Pick List - ORD-789456</CardTitle>
                <CardDescription>Optimized picking route for current order</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">Progress: 2 of 4 items picked</span>
                    <Progress value={50} className="w-32 h-2" />
                  </div>
                  
                  {pickingTasks.map((task, index) => (
                    <div key={index} className={`p-3 border rounded-lg ${task.picked ? 'bg-green-50 border-green-200' : 'bg-white'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <CheckCircle className={`h-4 w-4 ${task.picked ? 'text-green-600' : 'text-gray-300'}`} />
                            <h4 className="font-medium">{task.item}</h4>
                          </div>
                          <p className="text-sm text-gray-600">SKU: {task.sku}</p>
                          <p className="text-sm text-gray-600">Location: {task.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">Qty: {task.quantity}</p>
                          <Button 
                            variant={task.picked ? "outline" : "default"} 
                            size="sm"
                            disabled={task.picked}
                          >
                            {task.picked ? "Picked" : "Pick Item"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Warehouse Map */}
            <Card>
              <CardHeader>
                <CardTitle>Optimized Pick Route</CardTitle>
                <CardDescription>Shortest path through warehouse zones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-2 h-64">
                  {/* Simplified warehouse layout visualization */}
                  {['A1', 'A2', 'A3', 'B1', 'B2', 'B3', 'C1', 'C2', 'C3'].map((location, index) => (
                    <div 
                      key={index} 
                      className={`border rounded-lg flex items-center justify-center text-sm font-medium ${
                        ['A1', 'B2', 'C1'].includes(location) 
                          ? 'bg-blue-100 border-blue-300 text-blue-800' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      {location}
                      {['A1', 'B2', 'C1'].includes(location) && (
                        <div className="ml-1 w-2 h-2 bg-blue-600 rounded-full"></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>🔵 Items to pick • Route: A1 → B2 → C1</p>
                  <p>Estimated walk time: 8 minutes</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="packing" className="space-y-4">
          {selectedOrderForPacking ? (
            <PackingStation order={selectedOrderForPacking} />
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Packing Station</CardTitle>
                <CardDescription>
                  Select an order from the 'Pick Lists' tab to start packing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>No order selected for packing.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Performance</CardTitle>
              <CardDescription>
                Monitor fulfillment team efficiency
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {performanceMetrics.map((metric, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">
                      {metric.metric}
                    </span>
                    <span className="text-sm font-bold">
                      {metric.value} / {metric.target}
                    </span>
                  </div>
                  <Progress
                    value={metric.performance > 100 ? 100 : metric.performance}
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrderFulfillment;
