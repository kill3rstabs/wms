import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Package, 
  Search, 
  Scan, 
  AlertTriangle, 
  TrendingUp, 
  TrendingDown,
  BarChart3,
  QrCode,
  MapPin,
  Clock
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const ScanItemDialog = () => (
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Scan Item</DialogTitle>
    </DialogHeader>
    <div className="flex flex-col items-center justify-center p-8">
      <QrCode className="w-32 h-32 text-gray-400 mb-4" />
      <p className="text-gray-600">
        Hold the item's barcode or QR code up to the camera.
      </p>
      <Button className="mt-4">Simulate Scan</Button>
    </div>
  </DialogContent>
);

const InventoryTracker = () => {
  const [isScanItemOpen, setScanItemOpen] = useState(false);
  const inventoryItems = [
    {
      sku: "IPH15PM-128",
      name: "iPhone 15 Pro Max 128GB",
      category: "Smartphones",
      stock: 45,
      reserved: 12,
      available: 33,
      reorderPoint: 20,
      location: "A1-B2-C3",
      lastUpdated: "2 min ago",
      status: "normal",
      batchNumber: "B240115001"
    },
    {
      sku: "SGS24-256",
      name: "Samsung Galaxy S24 256GB",
      category: "Smartphones",
      stock: 15,
      reserved: 8,
      available: 7,
      reorderPoint: 25,
      location: "A1-B3-C1",
      lastUpdated: "5 min ago",
      status: "low",
      batchNumber: "B240115002"
    },
    {
      sku: "APP2-WHT",
      name: "AirPods Pro 2 White",
      category: "Audio",
      stock: 78,
      reserved: 15,
      available: 63,
      reorderPoint: 30,
      location: "B2-A1-C2",
      lastUpdated: "1 min ago",
      status: "normal",
      batchNumber: "B240115003"
    },
    {
      sku: "MBA-M3-13",
      name: "MacBook Air M3 13-inch",
      category: "Laptops",
      stock: 3,
      reserved: 2,
      available: 1,
      reorderPoint: 10,
      location: "C1-D2-A1",
      lastUpdated: "12 min ago",
      status: "critical",
      batchNumber: "B240115004"
    }
  ];

  const stockMovements = [
    { type: "inbound", item: "iPhone 15 Pro Max", quantity: 50, time: "10 min ago", po: "PO-2024-001" },
    { type: "outbound", item: "Samsung Galaxy S24", quantity: -5, time: "25 min ago", order: "ORD-789456" },
    { type: "adjustment", item: "AirPods Pro 2", quantity: 2, time: "1 hour ago", reason: "Stock count correction" },
    { type: "transfer", item: "MacBook Air M3", quantity: 0, time: "2 hours ago", from: "A1", to: "C1" }
  ];

  const batchDetails = {
    "B240115001": [
        { serial: "SN-IPH15-001", status: "Available", location: "A1-B2-C3" },
        { serial: "SN-IPH15-002", status: "Available", location: "A1-B2-C3" },
    ],
    "B240115002": [
        { serial: "SN-SGS24-001", status: "Reserved", location: "A1-B3-C1" },
    ]
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      normal: { color: "bg-green-100 text-green-800", text: "Normal" },
      low: { color: "bg-yellow-100 text-yellow-800", text: "Low Stock" },
      critical: { color: "bg-red-100 text-red-800", text: "Critical" },
      out: { color: "bg-gray-100 text-gray-800", text: "Out of Stock" }
    };
    const config = statusConfig[status as keyof typeof statusConfig];
    return <Badge className={config.color}>{config.text}</Badge>;
  };

  const getMovementIcon = (type: string) => {
    switch (type) {
      case 'inbound':
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case 'outbound':
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      case 'adjustment':
        return <BarChart3 className="h-4 w-4 text-blue-600" />;
      case 'transfer':
        return <MapPin className="h-4 w-4 text-purple-600" />;
      default:
        return <Package className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Inventory Tracker</h2>
          <p className="text-gray-600">Real-time inventory visibility with barcode/RFID tracking</p>
        </div>
        <div className="flex space-x-2">
          <Dialog open={isScanItemOpen} onOpenChange={setScanItemOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">
                <QrCode className="h-4 w-4 mr-2" />
                Scan Item
              </Button>
            </DialogTrigger>
            <ScanItemDialog />
          </Dialog>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Package className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Items</p>
                <p className="text-2xl font-bold">1,247</p>
              </div>
              <Package className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-2">
              <p className="text-xs text-green-600">+5.2% from last week</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Low Stock Alerts</p>
                <p className="text-2xl font-bold">23</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mt-2">
              <p className="text-xs text-red-600">-2 from yesterday</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Value</p>
                <p className="text-2xl font-bold">$2.8M</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <div className="mt-2">
              <p className="text-xs text-green-600">+12.3% from last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Turnover Rate</p>
                <p className="text-2xl font-bold">4.2x</p>
              </div>
              <BarChart3 className="h-8 w-8 text-purple-600" />
            </div>
            <div className="mt-2">
              <p className="text-xs text-green-600">+0.3x improvement</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="inventory" className="space-y-4">
        <TabsList>
          <TabsTrigger value="inventory">Inventory Items</TabsTrigger>
          <TabsTrigger value="movements">Stock Movements</TabsTrigger>
          <TabsTrigger value="locations">Warehouse Locations</TabsTrigger>
          <TabsTrigger value="compliance">Batch & Serial Tracking</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-4">
          {/* Search and Filter */}
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search by SKU, name, or barcode..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Scan className="h-4 w-4 mr-2" />
              Scan to Search
            </Button>
          </div>

          {/* Inventory Table */}
          <Card>
            <CardHeader>
              <CardTitle>Inventory Items</CardTitle>
              <CardDescription>Real-time stock levels and item details</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {inventoryItems.map((item, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{item.name}</h3>
                            {getStatusBadge(item.status)}
                          </div>
                          <p className="text-sm text-gray-600">SKU: {item.sku} • {item.category}</p>
                          <p className="text-xs text-gray-500">
                            Location: {item.location} • Batch: {item.batchNumber}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Last updated</p>
                        <p className="text-xs text-gray-500">{item.lastUpdated}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-blue-600">{item.stock}</p>
                        <p className="text-xs text-gray-600">Total Stock</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-yellow-600">{item.reserved}</p>
                        <p className="text-xs text-gray-600">Reserved</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-600">{item.available}</p>
                        <p className="text-xs text-gray-600">Available</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-red-600">{item.reorderPoint}</p>
                        <p className="text-xs text-gray-600">Reorder Point</p>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Stock Level</span>
                        <span>{Math.round((item.available / item.reorderPoint) * 100)}%</span>
                      </div>
                      <Progress 
                        value={Math.min((item.available / item.reorderPoint) * 100, 100)} 
                        className="h-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="movements" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Stock Movements</CardTitle>
              <CardDescription>Real-time inventory transactions and adjustments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stockMovements.map((movement, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 border rounded-lg">
                    <div className="flex-shrink-0">
                      {getMovementIcon(movement.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold capitalize">{movement.type}</h3>
                        <Badge variant="outline">{movement.item}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {movement.type === 'transfer' 
                          ? `Moved from ${movement.from} to ${movement.to}`
                          : movement.po ? `PO: ${movement.po}` 
                          : movement.order ? `Order: ${movement.order}`
                          : movement.reason
                        }
                      </p>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${
                        movement.quantity > 0 ? 'text-green-600' : 
                        movement.quantity < 0 ? 'text-red-600' : 'text-gray-600'
                      }`}>
                        {movement.quantity !== 0 ? (movement.quantity > 0 ? '+' : '') + movement.quantity : 'Transfer'}
                      </p>
                      <p className="text-xs text-gray-500">{movement.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="locations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Warehouse Locations</CardTitle>
              <CardDescription>Physical storage locations and capacity management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { zone: "Zone A", sections: 12, capacity: "85%", items: 145 },
                  { zone: "Zone B", sections: 8, capacity: "92%", items: 98 },
                  { zone: "Zone C", sections: 6, capacity: "67%", items: 78 },
                  { zone: "Zone D", sections: 4, capacity: "45%", items: 34 }
                ].map((location, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{location.zone}</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Sections</span>
                          <span>{location.sections}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Items</span>
                          <span>{location.items}</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Capacity</span>
                            <span>{location.capacity}</span>
                          </div>
                          <Progress value={parseInt(location.capacity)} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Batch & Serial Tracking</CardTitle>
              <CardDescription>Track items by batch or serial number for compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(batchDetails).map(([batch, serials]) => (
                  <div key={batch}>
                    <h3 className="font-semibold text-lg mb-2">{inventoryItems.find(i => i.batchNumber === batch)?.name} - Batch: {batch}</h3>
                    <div className="grid grid-cols-3 gap-4 font-semibold text-sm p-2 bg-gray-100 rounded-t-lg">
                      <div>Serial Number</div>
                      <div>Status</div>
                      <div>Location</div>
                    </div>
                    <div className="space-y-2">
                      {serials.map(s => (
                        <div key={s.serial} className="grid grid-cols-3 gap-4 p-2 border-b border-x">
                          <div>{s.serial}</div>
                          <div><Badge variant={s.status === "Available" ? "default" : "secondary"}>{s.status}</Badge></div>
                          <div>{s.location}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InventoryTracker;
