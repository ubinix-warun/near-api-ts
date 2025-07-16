import React from 'react';
import { Activity, Wifi, WifiOff } from 'lucide-react';

interface HeaderProps {
  isConnected: boolean;
  lastUpdate: string;
}

export const Header: React.FC<HeaderProps> = ({ isConnected, lastUpdate }) => {
  return (
    <header className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Activity className="h-5 w-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">NEAR Protocol Dashboard</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {isConnected ? (
                <Wifi className="h-4 w-4 text-green-400" />
              ) : (
                <WifiOff className="h-4 w-4 text-red-400" />
              )}
              <span className="text-sm text-gray-300">
                {isConnected ? 'Connected' : 'Disconnected'}
              </span>
            </div>
            
            <div className="text-sm text-gray-400">
              Last update: {new Date(lastUpdate).toLocaleTimeString()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};