import React from 'react';
import { Activity } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 animate-pulse">
          <Activity className="h-8 w-8 text-white animate-spin" />
        </div>
        <p className="text-white text-lg font-medium">Loading dashboard...</p>
        <p className="text-gray-400 text-sm mt-2">Connecting to NEAR Protocol network</p>
      </div>
    </div>
  );
};