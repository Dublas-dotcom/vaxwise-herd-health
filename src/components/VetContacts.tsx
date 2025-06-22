
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export const VetContacts = () => {
  const veterinarians = [
    {
      id: 1,
      name: 'Dr. Sarah Smith',
      clinic: 'Rural Animal Health Center',
      specialization: 'Large Animal Medicine',
      phone: '+1 (555) 123-4567',
      email: 'dr.smith@ruralvet.com',
      emergency: true,
      distance: '12 miles',
      rating: 4.9,
      lastVisit: '2024-06-15'
    },
    {
      id: 2,
      name: 'Dr. Michael Johnson',
      clinic: 'Farm Animal Veterinary Services',
      specialization: 'Dairy Cattle Health',
      phone: '+1 (555) 234-5678',
      email: 'mjohnson@farmvet.com',
      emergency: true,
      distance: '8 miles',
      rating: 4.8,
      lastVisit: '2024-05-20'
    },
    {
      id: 3,
      name: 'Dr. Emily Brown',
      clinic: 'Countryside Veterinary Clinic',
      specialization: 'Preventive Care',
      phone: '+1 (555) 345-6789',
      email: 'emily.brown@countryside.vet',
      emergency: false,
      distance: '15 miles',
      rating: 4.7,
      lastVisit: '2024-04-10'
    }
  ];

  const recentConsultations = [
    { date: '2024-06-20', vet: 'Dr. Sarah Smith', animal: 'Bessie', type: 'Vaccination', status: 'completed' },
    { date: '2024-06-15', vet: 'Dr. Michael Johnson', animal: 'Herd A', type: 'Health Check', status: 'completed' },
    { date: '2024-06-10', vet: 'Dr. Sarah Smith', animal: 'Charlie', type: 'Emergency Call', status: 'completed' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-800">Veterinarian Contacts</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-green-600 hover:bg-green-700">Add Veterinarian</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Veterinarian</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-4">
              <div>
                <Label htmlFor="vet-name">Veterinarian Name</Label>
                <Input id="vet-name" placeholder="Dr. Full Name" />
              </div>
              <div>
                <Label htmlFor="clinic-name">Clinic Name</Label>
                <Input id="clinic-name" placeholder="Clinic or practice name" />
              </div>
              <div>
                <Label htmlFor="specialization">Specialization</Label>
                <Input id="specialization" placeholder="Area of expertise" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="+1 (555) 123-4567" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="vet@clinic.com" />
              </div>
              <div>
                <Label htmlFor="notes">Notes</Label>
                <Textarea id="notes" placeholder="Additional information" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">Add Veterinarian</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Emergency Contacts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <span className="text-red-500">🚨</span>
            Emergency Contacts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {veterinarians.filter(vet => vet.emergency).map((vet) => (
              <div key={vet.id} className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                <div>
                  <p className="font-medium text-red-800">{vet.name}</p>
                  <p className="text-sm text-red-600">{vet.clinic}</p>
                </div>
                <Button size="sm" className="bg-red-600 hover:bg-red-700">
                  Call Now
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* All Veterinarians */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {veterinarians.map((vet) => (
          <Card key={vet.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{vet.name}</CardTitle>
                  <p className="text-sm text-gray-600">{vet.clinic}</p>
                </div>
                {vet.emergency && (
                  <Badge variant="destructive" className="text-xs">Emergency</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm text-gray-600">Specialization:</p>
                <p className="text-sm font-medium">{vet.specialization}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Distance:</p>
                <p className="text-sm font-medium">{vet.distance}</p>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Rating:</span>
                <div className="flex items-center space-x-1">
                  <span className="text-sm font-medium">{vet.rating}</span>
                  <span className="text-yellow-400">⭐</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-600">Last Visit:</p>
                <p className="text-sm font-medium">{vet.lastVisit}</p>
              </div>
              <div className="pt-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full">
                  📞 {vet.phone}
                </Button>
                <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                  Schedule Appointment
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Consultations */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Consultations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentConsultations.map((consultation, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-medium text-gray-900">{consultation.animal}</p>
                    <p className="text-sm text-gray-600">{consultation.type} with {consultation.vet}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{consultation.date}</p>
                  <Badge variant="outline">{consultation.status}</Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
