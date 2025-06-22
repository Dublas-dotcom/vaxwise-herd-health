
import { useState } from 'react';
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { AnimalManagement } from '@/components/AnimalManagement';
import { VaccinationScheduler } from '@/components/VaccinationScheduler';
import { HealthRecords } from '@/components/HealthRecords';
import { Analytics } from '@/components/Analytics';
import { VetContacts } from '@/components/VetContacts';
import { NotificationCenter } from '@/components/NotificationCenter';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'animals':
        return <AnimalManagement />;
      case 'schedule':
        return <VaccinationScheduler />;
      case 'records':
        return <HealthRecords />;
      case 'analytics':
        return <Analytics />;
      case 'vets':
        return <VetContacts />;
      case 'notifications':
        return <NotificationCenter />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar 
          currentView={currentView}
          onViewChange={setCurrentView}
        />
        
        <SidebarInset className="flex-1">
          <header className="flex h-14 shrink-0 items-center justify-between gap-2 border-b px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <h1 className="text-xl font-bold text-green-800">VaxWise</h1>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentView('notifications')}
              className="relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </Button>
          </header>
          
          <main className="flex-1 p-4 lg:p-6">
            {renderContent()}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
