// import React from 'react';
import { useDashboardData } from './hooks/useDashboardData';
import { Header } from './components/Header';
import { NodeStatus } from './components/NodeStatus';
import { NetworkHealth } from './components/NetworkHealth';
// import { ValidatorStats } from './components/ValidatorStats';
import { LoadingSpinner } from './components/LoadingSpinner';
import { AlertCircle } from 'lucide-react';

function App() {
  const { data, loading, error } = useDashboardData();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
      console.log(error)
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-red-400 mx-auto mb-4" />
          <p className="text-white text-lg font-medium mb-2">Connection Error</p>
          <p className="text-gray-400 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      <Header 
        isConnected={!error} 
        lastUpdate={data.nodeStatus.lastBlockTime} 
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <NodeStatus nodeStatus={data.nodeStatus} />
          <NetworkHealth networkHealth={data.networkHealth} />
        </div>
        
        {/*<ValidatorStats validators={data.validators} />*/}
      </main>
    </div>
  );
}

export default App;