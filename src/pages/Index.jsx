
import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { Dashboard } from '@/components/Dashboard';
import { AnimalManagement } from '@/components/AnimalManagement';
import { VaccinationScheduler } from '@/components/VaccinationScheduler';
import { HealthRecords } from '@/components/HealthRecords';
import { Analytics } from '@/components/Analytics';
import { VetContacts } from '@/components/VetContacts';
import { NotificationCenter } from '@/components/NotificationCenter';

const Index = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentView={currentView}
        onViewChange={setCurrentView}
      />
      
      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 className="text-xl font-bold text-green-800">VaxWise</h1>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentView('notifications')}
              className="relative p-2 rounded-md hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5 5-5m-5 5h-5m7 5v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4M7 7V4a1 1 0 011-1h8a1 1 0 011 1v3" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
          </div>
        </header>
        
        <main className="flex-1 p-4 lg:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
