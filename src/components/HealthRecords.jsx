
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const HealthRecords = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const healthRecords = [
    {
      id: 1,
      animal: 'Bessie',
      date: '2024-06-20',
      type: 'Vaccination',
      description: 'Annual Booster Shot',
      vet: 'Dr. Smith',
      notes: 'Animal responded well, no adverse reactions',
      status: 'completed'
    },
    {
      id: 2,
      animal: 'Charlie',
      date: '2024-06-15',
      type: 'Health Check',
      description: 'Routine Health Examination',
      vet: 'Dr. Johnson',
      notes: 'Good overall health, slight weight gain noted',
      status: 'completed'
    },
    {
      id: 3,
      animal: 'Daisy',
      date: '2024-06-10',
      type: 'Treatment',
      description: 'Hoof trimming and care',
      vet: 'Farm Staff',
      notes: 'Minor infection treated, follow-up in 2 weeks',
      status: 'follow-up-needed'
    }
  ];

  const vaccinationHistory = [
    { animal: 'Bessie', vaccine: 'Annual Booster', date: '2024-06-20', nextDue: '2025-06-20' },
    { animal: 'Charlie', vaccine: 'Flu Vaccine', date: '2024-05-15', nextDue: '2024-11-15' },
    { animal: 'Daisy', vaccine: 'Deworming', date: '2024-04-10', nextDue: '2024-10-10' },
    { animal: 'Max', vaccine: 'Initial Series', date: '2024-05-01', nextDue: '2024-08-01' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'follow-up-needed': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredRecords = healthRecords.filter(record =>
    record.animal.toLowerCase().includes(searchTerm.toLowerCase()) ||
    record.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Health Records</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">Add Health Record</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Health Record</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="record-animal">Animal</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select animal" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bessie">Bessie</SelectItem>
                    <SelectItem value="charlie">Charlie</SelectItem>
                    <SelectItem value="daisy">Daisy</SelectItem>
                    <SelectItem value="max">Max</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="record-type">Record Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select record type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vaccination">Vaccination</SelectItem>
                    <SelectItem value="health-check">Health Check</SelectItem>
                    <SelectItem value="treatment">Treatment</SelectItem>
                    <SelectItem value="medication">Medication</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="record-description">Description</Label>
                <Input id="record-description" placeholder="Brief description" />
              </div>
              <div>
                <Label htmlFor="record-vet">Veterinarian/Staff</Label>
                <Input id="record-vet" placeholder="Who performed the procedure" />
              </div>
              <div>
                <Label htmlFor="record-date">Date</Label>
                <Input id="record-date" type="date" />
              </div>
              <div>
                <Label htmlFor="record-notes">Notes</Label>
                <Textarea id="record-notes" placeholder="Detailed notes and observations" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Add Record</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="records" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="records">Health Records</TabsTrigger>
          <TabsTrigger value="vaccinations">Vaccination History</TabsTrigger>
        </TabsList>

        <TabsContent value="records" className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <Input
                placeholder="Search records..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </CardContent>
          </Card>

          <div className="space-y-4">
            {filteredRecords.map((record) => (
              <Card key={record.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{record.animal}</h3>
                        <Badge variant="outline">{record.type}</Badge>
                        <Badge className={getStatusColor(record.status)}>
                          {record.status.replace('-', ' ')}
                        </Badge>
                      </div>
                      <p className="text-gray-800 mb-1">{record.description}</p>
                      <p className="text-sm text-gray-600 mb-2">Performed by: {record.vet}</p>
                      <p className="text-sm text-gray-700">{record.notes}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{record.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vaccinations" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {vaccinationHistory.map((vaccination, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{vaccination.animal}</h3>
                    <Badge variant="outline">{vaccination.vaccine}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Last Vaccination:</span>
                      <span className="text-sm font-medium">{vaccination.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Next Due:</span>
                      <span className="text-sm font-medium text-green-600">{vaccination.nextDue}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
