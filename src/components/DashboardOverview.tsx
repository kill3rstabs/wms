
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  AlertTriangle, 
  Clock,
  CheckCircle,
  XCircle,
  Truck
} from "lucide-react";

const DashboardOverview = () => {
  const metrics = [
    {
      title: "Total Inventory Value",
      value: "$2,847,320",
      change: "+12.3%",
      trend: "up",
      icon: Package,
      color: "text-blue-600"
    },
    {
      title: "Orders Today",
      value: "1,247",
      change: "+8.7%",
      trend: "up",
      icon: ShoppingCart,
      color: "text-green-600"
    },
    {
      title: "Fulfillment Rate",
      value: "98.2%",
      change: "+1.2%",
      trend: "up",
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      title: "Critical Stock Alerts",
      value: "23",
      change: "-5",
      trend: "down",
      icon: AlertTriangle,
      color: "text-red-600"
    }
  ];

  const recentActivity = [
    { type: "order", message: "New order #12847 from Amazon", time: "2 min ago", status: "new" },
    { type: "stock", message: "Low stock alert: iPhone Cases", time: "5 min ago", status: "warning" },
    { type: "shipment", message: "Shipment #5429 delivered", time: "12 min ago", status: "success" },
    { type: "po", message: "PO #8293 requires approval", time: "18 min ago", status: "pending" },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome to WMS Pro</h2>
        <p className="text-blue-100">
          Your multichannel warehouse operations at a glance. All systems operational.
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
              <metric.icon className={`h-5 w-5 ${metric.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{metric.value}</div>
              <p className={`text-xs ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change} from last period
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Channel Performance */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Channel Performance</CardTitle>
            <CardDescription>Orders and inventory sync status by channel</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Amazon", orders: 847, sync: 99.8, color: "bg-orange-500" },
              { name: "Shopify", orders: 234, sync: 98.5, color: "bg-green-500" },
              { name: "eBay", orders: 123, sync: 97.2, color: "bg-blue-500" },
              { name: "Walmart", orders: 43, sync: 96.8, color: "bg-yellow-500" }
            ].map((channel, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${channel.color}`}></div>
                  <span className="font-medium">{channel.name}</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">{channel.orders} orders</span>
                  <div className="flex items-center space-x-2">
                    <Progress value={channel.sync} className="w-16 h-2" />
                    <span className="text-sm font-medium">{channel.sync}%</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest warehouse operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.status === 'success' ? 'bg-green-500' :
                  activity.status === 'warning' ? 'bg-yellow-500' :
                  activity.status === 'pending' ? 'bg-blue-500' : 'bg-gray-500'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.message}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common warehouse operations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Scan Item", icon: Package, color: "bg-blue-500" },
              { name: "Create PO", icon: CheckCircle, color: "bg-green-500" },
              { name: "Process Orders", icon: Truck, color: "bg-purple-500" },
              { name: "Stock Take", icon: Clock, color: "bg-orange-500" }
            ].map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center p-4 rounded-lg border-2 border-dashed border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <action.icon className={`h-8 w-8 ${action.color.replace('bg-', 'text-')} mb-2`} />
                <span className="text-sm font-medium">{action.name}</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardOverview;
