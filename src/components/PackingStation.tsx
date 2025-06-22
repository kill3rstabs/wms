import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { QrCode, Printer, PackageCheck } from "lucide-react";
import { useState } from "react";

const PackingStation = ({ order }) => {

  const [scannedItems, setScannedItems] = useState([]);

  const handleScanItem = (item) => {
    if (scannedItems.find(i => i.sku === item.sku)) return;
    setScannedItems([...scannedItems, item]);
  };

  const allItemsScanned = order.items.length === scannedItems.length;

  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader>
        <CardTitle>Packing Station - Order {order.id}</CardTitle>
        <CardDescription>Scan items to pack them and prepare for shipment.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item Scanning Section */}
          <div>
            <h3 className="font-semibold mb-2">Items to Pack</h3>
            <div className="space-y-2">
              {order.items.map(item => (
                <div key={item.sku} className={`flex items-center justify-between p-2 rounded-lg ${scannedItems.find(i => i.sku === item.sku) ? 'bg-green-100' : 'bg-gray-50'}`}>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">SKU: {item.sku} | Qty: {item.quantity}</p>
                  </div>
                  <Button size="sm" onClick={() => handleScanItem(item)} disabled={scannedItems.find(i => i.sku === item.sku)}>
                    <QrCode className="h-4 w-4 mr-2" />
                    Scan
                  </Button>
                </div>
              ))}
            </div>
          </div>
          {/* Shipping Section */}
          <div>
            <h3 className="font-semibold mb-2">Shipping Details</h3>
            <div className="space-y-4">
              <Select disabled={!allItemsScanned}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Shipping Carrier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ups">UPS</SelectItem>
                  <SelectItem value="fedex">FedEx</SelectItem>
                  <SelectItem value="usps">USPS</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Tracking Number (optional)" disabled={!allItemsScanned} />
              <Button className="w-full" disabled={!allItemsScanned}>
                <Printer className="h-4 w-4 mr-2" />
                Print Shipping Label
              </Button>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          {allItemsScanned ? (
            <div className="flex items-center justify-center text-green-600">
              <PackageCheck className="h-6 w-6 mr-2" />
              <p className="font-semibold">All items packed. Ready to ship.</p>
            </div>
          ) : (
            <p>{scannedItems.length} of {order.items.length} items packed.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PackingStation; 