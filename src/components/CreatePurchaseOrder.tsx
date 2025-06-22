import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "./ui/datepicker";
import { Plus, Trash2 } from "lucide-react";

const CreatePurchaseOrder = () => {

  const [items, setItems] = useState([{ id: 1, name: "", quantity: 1, price: 0 }]);

  const handleAddItem = () => {
    setItems([...items, { id: items.length + 1, name: "", quantity: 1, price: 0 }]);
  };

  const handleRemoveItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleItemChange = (id: number, field: string, value: string | number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };
  
  const totalAmount = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="space-y-6">
       <Card>
        <CardHeader>
          <CardTitle>Create New Purchase Order</CardTitle>
          <CardDescription>Fill in the details to create a new PO.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="supplier">Supplier</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a supplier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech-components">Tech Components Ltd</SelectItem>
                  <SelectItem value="mobile-accessories">Mobile Accessories Co</SelectItem>
                  <SelectItem value="electronics-wholesale">Electronics Wholesale</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="expectedDate">Expected Delivery Date</label>
              <DatePicker />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium">Items</h3>
            <div className="space-y-2 mt-2">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-2 p-2 border rounded-lg">
                  <Input 
                    placeholder="Item Name" 
                    className="flex-1" 
                    value={item.name}
                    onChange={(e) => handleItemChange(item.id, 'name', e.target.value)}
                  />
                  <Input 
                    type="number" 
                    placeholder="Quantity" 
                    className="w-24" 
                    value={item.quantity}
                    onChange={(e) => handleItemChange(item.id, 'quantity', parseInt(e.target.value) || 0)}
                  />
                  <Input 
                    type="number" 
                    placeholder="Price" 
                    className="w-24" 
                    value={item.price}
                    onChange={(e) => handleItemChange(item.id, 'price', parseFloat(e.target.value) || 0)}
                  />
                  <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(item.id)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" size="sm" className="mt-2" onClick={handleAddItem}>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </div>
          
          <div className="text-right">
            <p className="text-lg font-bold">Total: ${totalAmount.toFixed(2)}</p>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button variant="outline">Save as Draft</Button>
            <Button>Submit for Approval</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePurchaseOrder; 