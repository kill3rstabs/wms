import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  Download, 
  Calendar, 
  Target,
  Clock,
  DollarSign,
  Package
} from "lucide-react";
import { 
  BarChart, 
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line
} from "recharts";

const AnalyticsReporting = () => {
  const kpiMetrics = [
    {
      title: "Inventory Turnover",
      current: "4.2x",
      previous: "3.8x",
      change: "+10.5%",
      trend: "up",
      target: "4.0x",
      status: "above"
    },
    {
      title: "Order Cycle Time",
      current: "2.3 hrs",
      previous: "2.8 hrs",
      change: "-17.9%",
      trend: "down",
      target: "3.0 hrs",
      status: "above"
    },
    {
      title: "Pick Accuracy",
      current: "99.2%",
      previous: "98.8%",
      change: "+0.4%",
      trend: "up",
      target: "98.5%",
      status: "above"
    },
    {
      title: "Cost per Order",
      current: "$4.23",
      previous: "$4.67",
      change: "-9.4%",
      trend: "down",
      target: "$4.50",
      status: "above"
    }
  ];

  const reports = [
    {
      name: "Daily Operations Summary",
      description: "Complete daily warehouse operations overview",
      frequency: "Daily",
      lastRun: "2 hours ago",
      format: "PDF",
      status: "automated"
    },
    {
      name: "Inventory Aging Report",
      description: "Products by age and turnover rates",
      frequency: "Weekly",
      lastRun: "Yesterday",
      format: "Excel",
      status: "scheduled"
    },
    {
      name: "Channel Performance Analysis",
      description: "Sales channel comparison and metrics",
      frequency: "Monthly",
      lastRun: "3 days ago",
      format: "Dashboard",
      status: "manual"
    },
    {
      name: "Supplier Performance Scorecard",
      description: "Vendor delivery and quality metrics",
      frequency: "Monthly",
      lastRun: "1 week ago",
      format: "PDF",
      status: "automated"
    }
  ];

  const stockAnalysis = [
    { category: "Smartphones", value: 1250000, percentage: 35, movement: "high", items: 245 },
    { category: "Laptops", value: 890000, percentage: 25, movement: "medium", items: 156 },
    { category: "Audio", value: 534000, percentage: 15, movement: "high", items: 387 },
    { category: "Accessories", value: 445000, percentage: 12, movement: "medium", items: 892 },
    { category: "Tablets", value: 378000, percentage: 8, movement: "low", items: 123 },
    { category: "Wearables", value: 203000, percentage: 5, movement: "high", items: 267 }
  ];

  const performanceTrendData = [
    { date: "7 days ago", "Order Volume": 1100, "Fulfillment Rate": 97.5 },
    { date: "6 days ago", "Order Volume": 1150, "Fulfillment Rate": 98.1 },
    { date: "5 days ago", "Order Volume": 1200, "Fulfillment Rate": 98.2 },
    { date: "4 days ago", "Order Volume": 1180, "Fulfillment Rate": 97.9 },
    { date: "3 days ago", "Order Volume": 1250, "Fulfillment Rate": 98.5 },
    { date: "2 days ago", "Order Volume": 1350, "Fulfillment Rate": 98.7 },
    { date: "Yesterday", "Order Volume": 1400, "Fulfillment Rate": 99.1 },
    { date: "Today", "Order Volume": 1247, "Fulfillment Rate": 98.2 }
  ];
  
  const forecastData = [
    { month: "Jan", "Historical Sales": 4000, "Forecasted Sales": 4200 },
    { month: "Feb", "Historical Sales": 3000, "Forecasted Sales": 3300 },
    { month: "Mar", "Historical Sales": 5000, "Forecasted Sales": 5250 },
    { month: "Apr", "Historical Sales": 4500, "Forecasted Sales": 4800 },
    { month: "May", "Historical Sales": 6000, "Forecasted Sales": 6300 },
    { month: "Jun", "Historical Sales": 5500, "Forecasted Sales": 5800 },
  ];

  const getTrendIcon = (trend: string) => {
    return trend === 'up' ? (
      <TrendingUp className="h-4 w-4 text-green-600" />
    ) : (
      <div className="h-4 w-4 text-green-600 rotate-180">
        <TrendingUp className="h-4 w-4" />
      </div>
    );
  };

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      automated: { color: "bg-green-100 text-green-800", text: "Automated" },
      scheduled: { color: "bg-blue-100 text-blue-800", text: "Scheduled" },
      manual: { color: "bg-yellow-100 text-yellow-800", text: "Manual" }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.color}>{config.text}</Badge>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics & Reporting</h2>
          <p className="text-gray-600">Comprehensive performance metrics and automated reporting</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule Report
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiMetrics.map((kpi, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-600">{kpi.title}</CardTitle>
                <div className="flex items-center space-x-1">
                  {getTrendIcon(kpi.trend)}
                  <Badge className={kpi.status === 'above' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                    vs Target
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{kpi.current}</div>
                <div className="flex items-center justify-between text-sm">
                  <span className={`font-medium ${kpi.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                    {kpi.change}
                  </span>
                  <span className="text-gray-500">Target: {kpi.target}</span>
                </div>
                <div className="text-xs text-gray-500">vs {kpi.previous} last period</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="dashboards" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboards">Performance Dashboards</TabsTrigger>
          <TabsTrigger value="reports">Automated Reports</TabsTrigger>
          <TabsTrigger value="analysis">Stock Analysis</TabsTrigger>
          <TabsTrigger value="forecasting">Demand Forecasting</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboards" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Operations Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle>Operations Dashboard</CardTitle>
                <CardDescription>Real-time warehouse operations metrics</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { metric: "Orders Processed Today", value: "1,247", icon: Package, color: "text-blue-600" },
                  { metric: "Average Pick Time", value: "3.2 min", icon: Clock, color: "text-green-600" },
                  { metric: "Fulfillment Rate", value: "98.2%", icon: Target, color: "text-purple-600" },
                  { metric: "Revenue Today", value: "$284,750", icon: DollarSign, color: "text-orange-600" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <item.icon className={`h-8 w-8 ${item.color}`} />
                      <div>
                        <p className="font-medium">{item.metric}</p>
                        <p className="text-2xl font-bold">{item.value}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Channel Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Channel Performance</CardTitle>
                <CardDescription>Sales performance by channel</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart 
                    data={[
                      { channel: "Amazon", orders: 847, revenue: 156234 },
                      { channel: "Shopify", orders: 234, revenue: 45678 },
                      { channel: "Walmart", orders: 156, revenue: 32456 },
                      { channel: "Direct", orders: 98, revenue: 21890 },
                    ]}
                    margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="channel" />
                    <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                    <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                    <Tooltip formatter={(value: number, name) => name === 'revenue' ? `$${value.toLocaleString()}` : value.toLocaleString()} />
                    <Legend />
                    <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue" />
                    <Bar yAxisId="right" dataKey="orders" fill="#82ca9d" name="Orders" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Performance Trends Chart Placeholder */}
          <Card>
            <CardHeader>
              <CardTitle>Performance Trend</CardTitle>
              <CardDescription>7-day order volume and fulfillment rate</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={performanceTrendData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" domain={[95, 100]} tickFormatter={(tick) => `${tick}%`}/>
                  <Tooltip formatter={(value: number, name) => name === 'Fulfillment Rate' ? `${value}%` : value} />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="Order Volume" stroke="#8884d8" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="Fulfillment Rate" stroke="#82ca9d" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Automated Reports</CardTitle>
              <CardDescription>Manage and generate scheduled reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div>
                      <h4 className="font-semibold text-gray-800">{report.name}</h4>
                      <p className="text-sm text-gray-600">{report.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500 mt-2">
                        <span>Frequency: {report.frequency}</span>
                        <span>Last run: {report.lastRun}</span>
                        {getStatusBadge(report.status)}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download ({report.format})
                      </Button>
                      <Button variant="secondary" size="sm">
                        Generate
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Report Templates */}
          <Card>
            <CardHeader>
              <CardTitle>Report Templates</CardTitle>
              <CardDescription>Pre-built report templates for common use cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Stock Movement Report", category: "Inventory" },
                  { name: "Order Accuracy Report", category: "Quality" },
                  { name: "Supplier Performance", category: "Procurement" },
                  { name: "Cost Analysis Report", category: "Finance" },
                  { name: "Channel Comparison", category: "Sales" },
                  { name: "Workforce Productivity", category: "Operations" }
                ].map((template, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-2">{template.name}</h4>
                      <Badge variant="secondary" className="mb-3">{template.category}</Badge>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">Preview</Button>
                        <Button size="sm" className="flex-1">Use Template</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stock Value by Category</CardTitle>
              <CardDescription>Current inventory value distribution</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={stockAnalysis} layout="vertical" margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `$${(value as number / 1000000).toFixed(1)}M`} />
                  <YAxis dataKey="category" type="category" width={100} />
                  <Tooltip formatter={(value) => `$${(value as number).toLocaleString()}`} />
                  <Legend />
                  <Bar dataKey="value" name="Stock Value" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="forecasting" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sales Forecast vs. Historical</CardTitle>
              <CardDescription>Monthly sales data and future demand predictions</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={forecastData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => (value as number).toLocaleString()} />
                  <Legend />
                  <Bar dataKey="Historical Sales" fill="#8884d8" />
                  <Bar dataKey="Forecasted Sales" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsReporting;
