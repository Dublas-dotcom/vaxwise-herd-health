
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const Dashboard = () => {
  const upcomingVaccinations = [
    { id: 1, animal: 'Bessie', type: 'Annual Booster', date: '2024-06-25', priority: 'high' },
    { id: 2, animal: 'Herd Group A', type: 'Flu Vaccine', date: '2024-06-27', priority: 'medium' },
    { id: 3, animal: 'Charlie', type: 'Deworming', date: '2024-06-30', priority: 'low' },
  ];

  const stats = [
    { label: 'Total Animals', value: '156', change: '+12', icon: '🐄' },
    { label: 'Vaccinations This Month', value: '23', change: '+5', icon: '💉' },
    { label: 'Health Alerts', value: '2', change: '-3', icon: '⚠️' },
    { label: 'Compliance Rate', value: '94%', change: '+2%', icon: '✅' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Farm Dashboard</h2>
        <Button className="bg-green-600 hover:bg-green-700">Quick Vaccination</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change}</p>
                </div>
                <div className="text-3xl">{stat.icon}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-16 flex flex-col space-y-1">
              <span className="text-lg">🐄</span>
              <span className="text-sm">Add Animal</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-1">
              <span className="text-lg">💉</span>
              <span className="text-sm">Schedule Vaccine</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-1">
              <span className="text-lg">📋</span>
              <span className="text-sm">Health Check</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-1">
              <span className="text-lg">📞</span>
              <span className="text-sm">Call Vet</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Vaccinations */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Vaccinations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingVaccinations.map((vaccination) => (
              <div key={vaccination.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <div>
                    <p className="font-medium text-gray-900">{vaccination.animal}</p>
                    <p className="text-sm text-gray-600">{vaccination.type}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{vaccination.date}</p>
                  <Badge 
                    variant={vaccination.priority === 'high' ? 'destructive' : 
                            vaccination.priority === 'medium' ? 'default' : 'secondary'}
                  >
                    {vaccination.priority}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
