import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CreatePurchaseOrder from "./CreatePurchaseOrder";
import ReceiveGoods from "./ReceiveGoods";
import { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertTriangle,
  Truck,
  Eye,
  Edit,
  Download
} from "lucide-react";

const PurchaseOrderManager = () => {
  const [isCreatePoOpen, setCreatePoOpen] = useState(false);
  const [isReceiveGoodsOpen, setReceiveGoodsOpen] = useState(false);
  const [selectedPo, setSelectedPo] = useState(null);
  const purchaseOrders = [
    {
      id: "PO-2024-001",
      supplier: "Tech Components Ltd",
      status: "pending_approval",
      items: [
        { id: 1, name: "Item 1", sku: "SKU1", quantity: 10 },
        { id: 2, name: "Item 2", sku: "SKU2", quantity: 5 },
      ],
      total: "$12,450.00",
      createdDate: "2024-01-15",
      expectedDate: "2024-01-30",
      priority: "high"
    },
    {
      id: "PO-2024-002",
      supplier: "Mobile Accessories Co",
      status: "approved",
      items: [
        { id: 3, name: "Item 3", sku: "SKU3", quantity: 8 },
      ],
      total: "$3,280.00",
      createdDate: "2024-01-14",
      expectedDate: "2024-01-28",
      priority: "medium"
    },
    {
      id: "PO-2024-003",
      supplier: "Electronics Wholesale",
      status: "partially_received",
      items: [
        { id: 4, name: "Item 4", sku: "SKU4", quantity: 12 },
        { id: 5, name: "Item 5", sku: "SKU5", quantity: 10 },
      ],
      total: "$18,750.00",
      createdDate: "2024-01-12",
      expectedDate: "2024-01-25",
      priority: "low"
    },
    {
      id: "PO-2024-004",
      supplier: "Global Tech Supply",
      status: "overdue",
       items: [
        { id: 6, name: "Item 6", sku: "SKU6", quantity: 7 },
        { id: 7, name: "Item 7", sku: "SKU7", quantity: 5 },
      ],
      total: "$7,920.00",
      createdDate: "2024-01-10",
      expectedDate: "2024-01-20",
      priority: "high"
    }
  ];

  const recentActivity = [
    { action: "PO Created", po: "PO-2024-005", user: "John Smith", time: "10 min ago" },
    { action: "Approval Required", po: "PO-2024-001", user: "System", time: "1 hour ago" },
    { action: "Goods Received", po: "PO-2024-003", user: "Mike Johnson", time: "2 hours ago" },
    { action: "PO Approved", po: "PO-2024-002", user: "Sarah Wilson", time: "4 hours ago" }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending_approval: { color: "bg-yellow-100 text-yellow-800", text: "Pending Approval" },
      approved: { color: "bg-green-100 text-green-800", text: "Approved" },
      partially_received: { color: "bg-blue-100 text-blue-800", text: "Partially Received" },
      overdue: { color: "bg-red-100 text-red-800", text: "Overdue" },
      completed: { color: "bg-gray-100 text-gray-800", text: "Completed" }
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
          <h2 className="text-2xl font-bold text-gray-900">Purchase Order Management</h2>
          <p className="text-gray-600">Create, track, and manage purchase orders with automated workflows</p>
        </div>
        <Dialog open={isCreatePoOpen} onOpenChange={setCreatePoOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Create PO
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px]">
            <CreatePurchaseOrder />
          </DialogContent>
        </Dialog>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total POs</p>
                <p className="text-2xl font-bold">247</p>
              </div>
              <FileText className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pending Approval</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Clock className="h-8 w-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">In Transit</p>
                <p className="text-2xl font-bold">34</p>
              </div>
              <Truck className="h-8 w-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Overdue</p>
                <p className="text-2xl font-bold">5</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList>
          <TabsTrigger value="active">Active POs</TabsTrigger>
          <TabsTrigger value="templates">PO Templates</TabsTrigger>
          <TabsTrigger value="suppliers">Supplier Management</TabsTrigger>
          <TabsTrigger value="analytics">PO Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {/* Search and Filter */}
          <div className="flex space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search purchase orders..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          {/* PO Table */}
          <Card>
            <CardHeader>
              <CardTitle>Purchase Orders</CardTitle>
              <CardDescription>Manage all purchase order lifecycle stages</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {purchaseOrders.map((po, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center space-x-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-semibold">{po.id}</h3>
                          {getStatusBadge(po.status)}
                          {getPriorityBadge(po.priority)}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{po.supplier}</p>
                        <p className="text-xs text-gray-500">
                          {po.items.length} items • Created: {po.createdDate} • Expected: {po.expectedDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-bold">{po.total}</p>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" onClick={() => { setSelectedPo(po); setReceiveGoodsOpen(true); }}>
                          <Truck className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>PO Templates</CardTitle>
              <CardDescription>Standardized templates for different supplier types</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "Electronics Standard", items: 25, usage: "High" },
                  { name: "Accessories Quick", items: 10, usage: "Medium" },
                  { name: "Bulk Order Template", items: 50, usage: "Low" },
                  { name: "Seasonal Items", items: 15, usage: "Medium" }
                ].map((template, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2">{template.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{template.items} default items</p>
                      <Badge variant="secondary">{template.usage} Usage</Badge>
                      <div className="mt-4 flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          Edit
                        </Button>
                        <Button size="sm" className="flex-1">
                          Use Template
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Supplier Management</CardTitle>
              <CardDescription>Manage supplier relationships and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Tech Components Ltd", rating: 4.8, orders: 45, onTime: "96%", contact: "john@techcomp.com" },
                  { name: "Mobile Accessories Co", rating: 4.5, orders: 32, onTime: "89%", contact: "sales@mobileacc.com" },
                  { name: "Electronics Wholesale", rating: 4.2, orders: 28, onTime: "82%", contact: "orders@elecwhole.com" },
                  { name: "Global Tech Supply", rating: 4.0, orders: 18, onTime: "78%", contact: "support@globaltech.com" }
                ].map((supplier, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-semibold">{supplier.name}</h3>
                      <p className="text-sm text-gray-600">{supplier.contact}</p>
                    </div>
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <p className="font-bold text-yellow-600">★ {supplier.rating}</p>
                        <p className="text-xs text-gray-600">Rating</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold">{supplier.orders}</p>
                        <p className="text-xs text-gray-600">Orders</p>
                      </div>
                      <div className="text-center">
                        <p className="font-bold text-green-600">{supplier.onTime}</p>
                        <p className="text-xs text-gray-600">On Time</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>PO Performance Metrics</CardTitle>
                <CardDescription>Key performance indicators for purchase orders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { metric: "Average Processing Time", value: "3.2 days", change: "-0.5 days" },
                  { metric: "On-Time Delivery Rate", value: "87.5%", change: "+2.3%" },
                  { metric: "Cost Accuracy", value: "94.2%", change: "+1.1%" },
                  { metric: "Approval Cycle Time", value: "1.8 days", change: "-0.3 days" }
                ].map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{metric.metric}</span>
                    <div className="text-right">
                      <span className="font-bold">{metric.value}</span>
                      <span className="text-xs text-green-600 ml-2">{metric.change}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest purchase order activities</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.po} • {activity.user}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={isReceiveGoodsOpen} onOpenChange={setReceiveGoodsOpen}>
        <DialogContent className="sm:max-w-[800px]">
          {selectedPo && <ReceiveGoods po={selectedPo} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PurchaseOrderManager;
