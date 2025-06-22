
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const NotificationCenter = () => {
  const notifications = [
    {
      id: 1,
      type: 'vaccination-due',
      title: 'Vaccination Due Tomorrow',
      message: 'Bessie is scheduled for Annual Booster with Dr. Smith at 10:00 AM',
      time: '2 hours ago',
      priority: 'high',
      read: false
    },
    {
      id: 2,
      type: 'health-alert',
      title: 'Health Check Required',
      message: 'Charlie has not had a health check in 6 months',
      time: '5 hours ago',
      priority: 'medium',
      read: false
    },
    {
      id: 3,
      type: 'appointment-confirmed',
      title: 'Appointment Confirmed',
      message: 'Dr. Johnson confirmed visit for Herd A vaccination on June 27',
      time: '1 day ago',
      priority: 'low',
      read: true
    },
    {
      id: 4,
      type: 'medication-reminder',
      title: 'Medication Reminder',
      message: 'Daily supplements due for pregnant cows in Herd B',
      time: '1 day ago',
      priority: 'medium',
      read: false
    }
  ];

  const reminders = [
    {
      id: 1,
      title: 'Weekly Herd Inspection',
      description: 'Conduct visual health inspection of all animals',
      frequency: 'Weekly',
      nextDue: '2024-06-24',
      enabled: true
    },
    {
      id: 2,
      title: 'Feed Quality Check',
      description: 'Inspect feed quality and storage conditions',
      frequency: 'Bi-weekly',
      nextDue: '2024-06-28',
      enabled: true
    },
    {
      id: 3,
      title: 'Equipment Maintenance',
      description: 'Check and maintain vaccination equipment',
      frequency: 'Monthly',
      nextDue: '2024-07-01',
      enabled: false
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'vaccination-due': return '💉';
      case 'health-alert': return '⚠️';
      case 'appointment-confirmed': return '✅';
      case 'medication-reminder': return '💊';
      default: return '📢';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
          {unreadCount > 0 && (
            <Badge variant="destructive">{unreadCount} unread</Badge>
          )}
        </div>
        <Button variant="outline">Mark All Read</Button>
      </div>

      <Tabs defaultValue="notifications" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="notifications">
            Notifications {unreadCount > 0 && `(${unreadCount})`}
          </TabsTrigger>
          <TabsTrigger value="reminders">Reminders</TabsTrigger>
        </TabsList>

        <TabsContent value="notifications" className="space-y-4">
          <div className="space-y-3">
            {notifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`hover:shadow-md transition-shadow cursor-pointer ${
                  !notification.read ? 'ring-2 ring-blue-200 bg-blue-50' : ''
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{getTypeIcon(notification.type)}</div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`font-medium ${!notification.read ? 'font-semibold' : ''}`}>
                          {notification.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Badge className={getPriorityColor(notification.priority)}>
                            {notification.priority}
                          </Badge>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">{notification.message}</p>
                      <p className="text-gray-400 text-xs">{notification.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reminders" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Automated Reminders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {reminders.map((reminder) => (
                  <div key={reminder.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium">{reminder.title}</h3>
                        <Badge variant={reminder.enabled ? 'default' : 'secondary'}>
                          {reminder.enabled ? 'Active' : 'Disabled'}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{reminder.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span>Frequency: {reminder.frequency}</span>
                        <span>Next Due: {reminder.nextDue}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button 
                        variant={reminder.enabled ? "destructive" : "default"} 
                        size="sm"
                      >
                        {reminder.enabled ? 'Disable' : 'Enable'}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Create New Reminder</CardTitle>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                + Add Custom Reminder
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
