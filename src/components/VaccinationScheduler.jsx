
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export const VaccinationScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [view, setView] = useState('calendar');

  const scheduledVaccinations = [
    { id: 1, date: '2024-06-25', animal: 'Bessie', vaccine: 'Annual Booster', vet: 'Dr. Smith', status: 'scheduled' },
    { id: 2, date: '2024-06-27', animal: 'Herd Group A', vaccine: 'Flu Vaccine', vet: 'Dr. Johnson', status: 'confirmed' },
    { id: 3, date: '2024-06-30', animal: 'Charlie', vaccine: 'Deworming', vet: 'Dr. Smith', status: 'pending' },
    { id: 4, date: '2024-07-03', animal: 'Daisy', vaccine: 'Vitamin Injection', vet: 'Dr. Brown', status: 'scheduled' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Vaccination Schedule</h2>
        <div className="flex gap-2">
          <Button
            variant={view === 'calendar' ? 'default' : 'outline'}
            onClick={() => setView('calendar')}
            size="sm"
          >
            Calendar
          </Button>
          <Button
            variant={view === 'list' ? 'default' : 'outline'}
            onClick={() => setView('list')}
            size="sm"
          >
            List
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">Schedule Vaccination</Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Schedule New Vaccination</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div>
                  <Label htmlFor="animal-select">Animal/Herd</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select animal or herd" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bessie">Bessie</SelectItem>
                      <SelectItem value="charlie">Charlie</SelectItem>
                      <SelectItem value="herd-a">Herd A (All)</SelectItem>
                      <SelectItem value="herd-b">Herd B (All)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="vaccine-type">Vaccine Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select vaccine type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="annual-booster">Annual Booster</SelectItem>
                      <SelectItem value="flu-vaccine">Flu Vaccine</SelectItem>
                      <SelectItem value="deworming">Deworming</SelectItem>
                      <SelectItem value="vitamin-injection">Vitamin Injection</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="vet-select">Veterinarian</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select veterinarian" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dr-smith">Dr. Smith</SelectItem>
                      <SelectItem value="dr-johnson">Dr. Johnson</SelectItem>
                      <SelectItem value="dr-brown">Dr. Brown</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                <div>
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea id="notes" placeholder="Additional notes..." />
                </div>
                <Button className="w-full bg-green-600 hover:bg-green-700">Schedule Vaccination</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {view === 'calendar' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Calendar View</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>
                {selectedDate ? `Scheduled for ${selectedDate.toDateString()}` : 'Select a Date'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {scheduledVaccinations
                  .filter(vaccination => {
                    if (!selectedDate) return false;
                    const vaccineDate = new Date(vaccination.date);
                    return vaccineDate.toDateString() === selectedDate.toDateString();
                  })
                  .map(vaccination => (
                    <div key={vaccination.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{vaccination.animal}</span>
                        <Badge className={getStatusColor(vaccination.status)}>
                          {vaccination.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">{vaccination.vaccine}</p>
                      <p className="text-sm text-gray-500">with {vaccination.vet}</p>
                    </div>
                  ))}
                {scheduledVaccinations.filter(vaccination => {
                  if (!selectedDate) return false;
                  const vaccineDate = new Date(vaccination.date);
                  return vaccineDate.toDateString() === selectedDate.toDateString();
                }).length === 0 && (
                  <p className="text-gray-500 text-center py-4">No vaccinations scheduled</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>All Scheduled Vaccinations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {scheduledVaccinations.map(vaccination => (
                <div key={vaccination.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div>
                      <p className="font-medium text-gray-900">{vaccination.animal}</p>
                      <p className="text-sm text-gray-600">{vaccination.vaccine}</p>
                      <p className="text-sm text-gray-500">with {vaccination.vet}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{vaccination.date}</p>
                    <Badge className={getStatusColor(vaccination.status)}>
                      {vaccination.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
