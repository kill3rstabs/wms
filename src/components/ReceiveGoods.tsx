import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const ReceiveGoods = ({ po }) => {
  
  const [receivedItems, setReceivedItems] = useState(po.items.map(item => ({ ...item, receivedQuantity: 0, notes: "" })));

  const handleReceivedQuantityChange = (itemId, quantity) => {
    setReceivedItems(receivedItems.map(item => 
      item.id === itemId ? { ...item, receivedQuantity: quantity } : item
    ));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Receive Goods for PO-{po.id}</CardTitle>
        <CardDescription>Confirm received quantities against the purchase order.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {receivedItems.map(item => (
            <div key={item.id} className="grid grid-cols-5 gap-4 items-center p-2 border rounded-lg">
              <div className="col-span-2">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">SKU: {item.sku}</p>
              </div>
              <div className="text-center">
                <p className="font-bold">{item.quantity}</p>
                <p className="text-xs text-gray-600">Ordered</p>
              </div>
              <div className="text-center">
                <Input 
                  type="number"
                  className="w-24 text-center"
                  value={item.receivedQuantity}
                  onChange={(e) => handleReceivedQuantityChange(item.id, parseInt(e.target.value) || 0)}
                />
              </div>
              <div className="text-center">
                 <Checkbox />
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end space-x-2">
          <Button variant="outline">Save Progress</Button>
          <Button>Confirm Receipt</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReceiveGoods; 