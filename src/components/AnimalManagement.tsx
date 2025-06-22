
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const AnimalManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHerd, setSelectedHerd] = useState('all');

  const animals = [
    { id: 1, name: 'Bessie', type: 'Dairy Cow', herd: 'Herd A', age: '3 years', health: 'Excellent', lastVaccination: '2024-03-15' },
    { id: 2, name: 'Charlie', type: 'Bull', herd: 'Breeding', age: '5 years', health: 'Good', lastVaccination: '2024-02-20' },
    { id: 3, name: 'Daisy', type: 'Dairy Cow', herd: 'Herd A', age: '4 years', health: 'Fair', lastVaccination: '2024-04-10' },
    { id: 4, name: 'Max', type: 'Calf', herd: 'Young Stock', age: '6 months', health: 'Excellent', lastVaccination: '2024-05-01' },
  ];

  const herds = ['all', 'Herd A', 'Herd B', 'Breeding', 'Young Stock'];

  const filteredAnimals = animals.filter(animal => 
    animal.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedHerd === 'all' || animal.herd === selectedHerd)
  );

  const getHealthColor = (health: string) => {
    switch (health) {
      case 'Excellent': return 'bg-green-100 text-green-800';
      case 'Good': return 'bg-blue-100 text-blue-800';
      case 'Fair': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Herd Management</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">Add New Animal</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Animal</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="animal-name">Animal Name</Label>
                <Input id="animal-name" placeholder="Enter animal name" />
              </div>
              <div>
                <Label htmlFor="animal-type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select animal type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dairy-cow">Dairy Cow</SelectItem>
                    <SelectItem value="beef-cow">Beef Cow</SelectItem>
                    <SelectItem value="bull">Bull</SelectItem>
                    <SelectItem value="calf">Calf</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="herd">Herd</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select herd" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="herd-a">Herd A</SelectItem>
                    <SelectItem value="herd-b">Herd B</SelectItem>
                    <SelectItem value="breeding">Breeding</SelectItem>
                    <SelectItem value="young-stock">Young Stock</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Add Animal</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search animals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Select value={selectedHerd} onValueChange={setSelectedHerd}>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {herds.map(herd => (
                  <SelectItem key={herd} value={herd}>
                    {herd === 'all' ? 'All Herds' : herd}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Animals Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAnimals.map((animal) => (
          <Card key={animal.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{animal.name}</CardTitle>
                <Badge variant="outline">{animal.type}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Herd:</span>
                <span className="text-sm font-medium">{animal.herd}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Age:</span>
                <span className="text-sm font-medium">{animal.age}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Health:</span>
                <Badge className={getHealthColor(animal.health)}>{animal.health}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Last Vaccination:</span>
                <span className="text-sm font-medium">{animal.lastVaccination}</span>
              </div>
              <div className="pt-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full">View Details</Button>
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">Schedule Vaccination</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
