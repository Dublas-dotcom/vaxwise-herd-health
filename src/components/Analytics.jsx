
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export const Analytics = () => {
  const complianceData = [
    { category: 'Annual Boosters', completed: 145, total: 156, percentage: 93 },
    { category: 'Flu Vaccines', completed: 120, total: 156, percentage: 77 },
    { category: 'Deworming', completed: 156, total: 156, percentage: 100 },
    { category: 'Health Checks', completed: 89, total: 156, percentage: 57 },
  ];

  const monthlyStats = [
    { month: 'January', vaccinations: 23, costs: 450 },
    { month: 'February', vaccinations: 31, costs: 620 },
    { month: 'March', vaccinations: 28, costs: 560 },
    { month: 'April', vaccinations: 35, costs: 700 },
    { month: 'May', vaccinations: 29, costs: 580 },
    { month: 'June', vaccinations: 23, costs: 460 },
  ];

  const getComplianceColor = (percentage) => {
    if (percentage >= 90) return 'bg-green-100 text-green-800';
    if (percentage >= 70) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Analytics & Reports</h2>
        <Button variant="outline">Export Report</Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Animals</p>
                <p className="text-2xl font-bold text-gray-900">156</p>
              </div>
              <div className="text-3xl">🐄</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg Compliance</p>
                <p className="text-2xl font-bold text-green-600">82%</p>
              </div>
              <div className="text-3xl">✅</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-bold text-blue-600">23</p>
              </div>
              <div className="text-3xl">💉</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Cost</p>
                <p className="text-2xl font-bold text-purple-600">$3,370</p>
              </div>
              <div className="text-3xl">💰</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Vaccination Compliance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complianceData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{item.category}</span>
                    <span className="text-sm text-gray-500">{item.completed}/{item.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <Badge className={`ml-4 ${getComplianceColor(item.percentage)}`}>
                  {item.percentage}%
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Monthly Vaccination Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {monthlyStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-700">{stat.month}</span>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <span className="text-sm text-gray-600">Vaccinations:</span>
                    <span className="ml-2 font-medium">{stat.vaccinations}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-600">Cost:</span>
                    <span className="ml-2 font-medium">${stat.costs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
