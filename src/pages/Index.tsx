
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  AlertTriangle, 
  BarChart3, 
  Scan,
  Truck,
  Users,
  RefreshCw,
  Search,
  Plus,
  FileText,
  Zap
} from "lucide-react";
import DashboardOverview from "@/components/DashboardOverview";
import MultichannelHub from "@/components/MultichannelHub";
import PurchaseOrderManager from "@/components/PurchaseOrderManager";
import InventoryTracker from "@/components/InventoryTracker";
import OrderFulfillment from "@/components/OrderFulfillment";
import AnalyticsReporting from "@/components/AnalyticsReporting";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Package className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-gray-900">WMS Pro</h1>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                Multichannel Edition
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search inventory, orders..." 
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Sync
              </Button>
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Users className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          {/* Navigation Tabs */}
          <TabsList className="grid w-full grid-cols-6 lg:w-fit lg:grid-cols-6">
            <TabsTrigger value="dashboard" className="flex items-center space-x-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="multichannel" className="flex items-center space-x-2">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">Channels</span>
            </TabsTrigger>
            <TabsTrigger value="purchase-orders" className="flex items-center space-x-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Purchase Orders</span>
            </TabsTrigger>
            <TabsTrigger value="inventory" className="flex items-center space-x-2">
              <Package className="h-4 w-4" />
              <span className="hidden sm:inline">Inventory</span>
            </TabsTrigger>
            <TabsTrigger value="fulfillment" className="flex items-center space-x-2">
              <Truck className="h-4 w-4" />
              <span className="hidden sm:inline">Fulfillment</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center space-x-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
          </TabsList>

          {/* Tab Content */}
          <TabsContent value="dashboard" className="space-y-6">
            <DashboardOverview />
          </TabsContent>

          <TabsContent value="multichannel" className="space-y-6">
            <MultichannelHub />
          </TabsContent>

          <TabsContent value="purchase-orders" className="space-y-6">
            <PurchaseOrderManager />
          </TabsContent>

          <TabsContent value="inventory" className="space-y-6">
            <InventoryTracker />
          </TabsContent>

          <TabsContent value="fulfillment" className="space-y-6">
            <OrderFulfillment />
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <AnalyticsReporting />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
