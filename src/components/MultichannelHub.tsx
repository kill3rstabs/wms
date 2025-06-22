import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  Plus, 
  Settings, 
  RefreshCw, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap
} from "lucide-react";

const MultichannelHub = () => {
  const dropshipSources = [
    { name: "eBay", logo: "🛒", status: "connected", lastSync: "3 min ago", orders: 125, syncRate: 99.7, enabled: true, color: "bg-blue-100 text-blue-800" },
    { name: "Amazon", logo: "📦", status: "connected", lastSync: "5 min ago", orders: 342, syncRate: 99.5, enabled: true, color: "bg-orange-100 text-orange-800" },
    { name: "Dropshipzone", logo: "🚚", status: "syncing", lastSync: "10 min ago", orders: 76, syncRate: 98.2, enabled: true, color: "bg-purple-100 text-purple-800" },
    { name: "Idropship", logo: "💧", status: "warning", lastSync: "1 hour ago", orders: 45, syncRate: 92.0, enabled: true, color: "bg-yellow-100 text-yellow-800" },
    { name: "Costco", logo: "🏬", status: "connected", lastSync: "12 min ago", orders: 89, syncRate: 99.8, enabled: true, color: "bg-red-100 text-red-800" },
    { name: "Shopify Websites", logo: "🛍️", status: "disconnected", lastSync: "Never", orders: 0, syncRate: 0, enabled: false, color: "bg-gray-100 text-gray-800" },
  ];

  const marketplaces = [
    { name: "Amazon.au", logo: "🇦🇺", status: "connected", lastSync: "2 min ago", orders: 453, syncRate: 99.9, enabled: true, color: "bg-orange-100 text-orange-800" },
    { name: "eBay.au", logo: "🇦🇺", status: "connected", lastSync: "4 min ago", orders: 231, syncRate: 99.6, enabled: true, color: "bg-blue-100 text-blue-800" },
    { name: "MyDeal", logo: "🏷️", status: "connected", lastSync: "8 min ago", orders: 112, syncRate: 99.1, enabled: true, color: "bg-cyan-100 text-cyan-800" },
    { name: "Catch", logo: "🎣", status: "syncing", lastSync: "15 min ago", orders: 98, syncRate: 97.5, enabled: true, color: "bg-teal-100 text-teal-800" },
    { name: "Kogan", logo: "⚫", status: "connected", lastSync: "7 min ago", orders: 154, syncRate: 99.3, enabled: true, color: "bg-gray-200 text-gray-900" },
    { name: "Woolworth/Marketplacer", logo: "🛒", status: "warning", lastSync: "3 hours ago", orders: 32, syncRate: 90.5, enabled: true, color: "bg-green-100 text-green-800" },
    { name: "Lasoo/Marketplacer", logo: "📄", status: "connected", lastSync: "20 min ago", orders: 56, syncRate: 98.8, enabled: true, color: "bg-red-100 text-red-800" },
    { name: "Virtual Stock - Harvey Norman", logo: "🛋️", status: "disconnected", lastSync: "1 day ago", orders: 0, syncRate: 0, enabled: false, color: "bg-yellow-100 text-yellow-800" },
  ];

  const integrationTemplates = [
    { name: "WooCommerce", category: "E-commerce", difficulty: "Easy" },
    { name: "BigCommerce", category: "E-commerce", difficulty: "Easy" },
    { name: "Magento", category: "E-commerce", difficulty: "Medium" },
    { name: "Square POS", category: "Retail", difficulty: "Easy" },
    { name: "Custom API", category: "Custom", difficulty: "Advanced" }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'syncing':
        return <Clock className="h-4 w-4 text-blue-600" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Multichannel Integration Hub</h2>
          <p className="text-gray-600">Manage all your sales channels and inventory synchronization</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Channel
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Channels</p>
                <p className="text-2xl font-bold">{dropshipSources.length + marketplaces.length}</p>
              </div>
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Active Channels</p>
                <p className="text-2xl font-bold">{[...dropshipSources, ...marketplaces].filter(c => c.enabled).length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Orders Today</p>
                <p className="text-2xl font-bold">{[...dropshipSources, ...marketplaces].reduce((acc, c) => acc + c.orders, 0)}</p>
              </div>
              <RefreshCw className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Sync Health</p>
                <p className="text-2xl font-bold">96.4%</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Channel Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Dropshipping Sources</CardTitle>
            <CardDescription>Manage your vendor and dropshipping integrations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {dropshipSources.map((channel, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{channel.logo}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{channel.name}</h3>
                      {getStatusIcon(channel.status)}
                    </div>
                    <p className="text-sm text-gray-600">
                      Last sync: {channel.lastSync} • {channel.orders} orders
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className={channel.color}>
                    {channel.syncRate}% sync rate
                  </Badge>
                  <Switch checked={channel.enabled} />
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Marketplaces</CardTitle>
            <CardDescription>Manage your sales channel integrations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {marketplaces.map((channel, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="text-2xl">{channel.logo}</div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{channel.name}</h3>
                      {getStatusIcon(channel.status)}
                    </div>
                    <p className="text-sm text-gray-600">
                      Last sync: {channel.lastSync} • {channel.orders} orders
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className={channel.color}>
                    {channel.syncRate}% sync rate
                  </Badge>
                  <Switch checked={channel.enabled} />
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Integration Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Available Integrations</CardTitle>
          <CardDescription>Add new sales channels to your warehouse</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {integrationTemplates.map((template, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
              <div>
                <h3 className="font-semibold">{template.name}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="secondary">{template.category}</Badge>
                  <Badge 
                    variant={template.difficulty === 'Easy' ? 'default' : 
                            template.difficulty === 'Medium' ? 'secondary' : 'destructive'}
                  >
                    {template.difficulty}
                  </Badge>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Connect
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Real-time Sync Monitor */}
      <Card>
        <CardHeader>
          <CardTitle>Real-time Sync Monitor</CardTitle>
          <CardDescription>Live inventory synchronization across all channels</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { item: "iPhone 15 Pro Max", sku: "IPH15PM-128", amazon: 453, ebay: 231, mydeal: 112, kogan: 154, total: 950 },
              { item: "Samsung Galaxy S24", sku: "SGS24-256", amazon: 342, ebay: 125, mydeal: 98, kogan: 45, total: 610 },
              { item: "AirPods Pro 2", sku: "APP2-WHT", amazon: 89, ebay: 76, mydeal: 56, kogan: 32, total: 253 },
              { item: "MacBook Air M3", sku: "MBA-M3-13", amazon: 112, ebay: 98, mydeal: 32, kogan: 89, total: 331 }
            ].map((item, index) => (
              <div key={index} className="grid grid-cols-6 gap-4 items-center p-3 bg-gray-50 rounded-lg">
                <div className="col-span-2">
                  <p className="font-medium">{item.item}</p>
                  <p className="text-sm text-gray-600">{item.sku}</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-orange-600">{item.amazon}</p>
                  <p className="text-xs text-gray-600">Amazon.au</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-blue-600">{item.ebay}</p>
                  <p className="text-xs text-gray-600">eBay.au</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-cyan-600">{item.mydeal}</p>
                  <p className="text-xs text-gray-600">MyDeal</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-800">{item.kogan}</p>
                  <p className="text-xs text-gray-600">Kogan</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-gray-900">{item.total}</p>
                  <p className="text-xs text-gray-600">Total</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultichannelHub;
