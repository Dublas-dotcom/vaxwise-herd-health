
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

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

  // Chart data
  const vaccinationTrend = [
    { month: 'Jan', vaccinations: 23, cost: 450 },
    { month: 'Feb', vaccinations: 31, cost: 620 },
    { month: 'Mar', vaccinations: 28, cost: 560 },
    { month: 'Apr', vaccinations: 35, cost: 700 },
    { month: 'May', vaccinations: 29, cost: 580 },
    { month: 'Jun', vaccinations: 23, cost: 460 },
  ];

  const complianceData = [
    { name: 'Completed', value: 145, fill: '#10b981' },
    { name: 'Overdue', value: 8, fill: '#ef4444' },
    { name: 'Upcoming', value: 23, fill: '#f59e0b' },
  ];

  const animalHealthData = [
    { category: 'Healthy', count: 132 },
    { category: 'Under Treatment', count: 18 },
    { category: 'Monitoring', count: 6 },
  ];

  const chartConfig = {
    vaccinations: {
      label: "Vaccinations",
      color: "#10b981",
    },
    cost: {
      label: "Cost ($)",
      color: "#3b82f6",
    },
  };

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

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Vaccination Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Vaccination Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <LineChart data={vaccinationTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="vaccinations" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  dot={{ fill: '#10b981' }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Compliance Overview Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Vaccination Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <PieChart>
                <Pie
                  data={complianceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {complianceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="flex justify-center mt-4 space-x-4">
              {complianceData.map((entry, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.fill }}
                  ></div>
                  <span className="text-sm text-gray-600">{entry.name}: {entry.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Animal Health Status Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Animal Health Status</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="h-[250px]">
            <BarChart data={animalHealthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="count" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>

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
