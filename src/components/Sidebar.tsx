
import { X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: string;
  onViewChange: (view: string) => void;
}

export const Sidebar = ({ isOpen, onClose, currentView, onViewChange }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'animals', label: 'Herd Management', icon: '🐄' },
    { id: 'schedule', label: 'Vaccination Schedule', icon: '💉' },
    { id: 'records', label: 'Health Records', icon: '📋' },
    { id: 'analytics', label: 'Analytics', icon: '📈' },
    { id: 'vets', label: 'Veterinarians', icon: '👨‍⚕️' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={onClose} />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">VW</span>
            </div>
            <span className="font-semibold text-gray-800">VaxWise</span>
          </div>
          <button onClick={onClose} className="lg:hidden p-1 rounded-md hover:bg-gray-100">
            <X size={20} />
          </button>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    onViewChange(item.id);
                    onClose();
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors
                    ${currentView === item.id 
                      ? 'bg-green-100 text-green-800 font-medium' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }
                  `}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
