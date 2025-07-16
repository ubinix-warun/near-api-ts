import React, { useState } from 'react';
import { Shield, Search, TrendingUp, Activity } from 'lucide-react';
import { Validator } from '../types';

interface ValidatorStatsProps {
  validators: Validator[];
}

export const ValidatorStats: React.FC<ValidatorStatsProps> = ({ validators }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'stake' | 'uptime'>('stake');

  const filteredValidators = validators
    .filter(validator => 
      validator.accountId.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'stake') {
        return parseInt(b.stake) - parseInt(a.stake);
      }
      return b.uptime - a.uptime;
    });

  const getUptimeColor = (uptime: number) => {
    if (uptime >= 95) return 'text-green-400';
    if (uptime >= 85) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="bg-gray-900 rounded-xl p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white flex items-center gap-2">
          <Shield className="h-5 w-5 text-purple-400" />
          Validator Statistics
        </h2>
        <div className="text-sm text-gray-400">
          {validators.filter(v => v.isActive).length} / {validators.length} active
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search validators..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setSortBy('stake')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'stake' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Sort by Stake
          </button>
          <button
            onClick={() => setSortBy('uptime')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              sortBy === 'uptime' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Sort by Uptime
          </button>
        </div>
      </div>

      <div className="space-y-3 max-h-96 overflow-y-auto">
        {filteredValidators.map((validator) => (
          <div
            key={validator.id}
            className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/70 transition-colors"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${validator.isActive ? 'bg-green-400' : 'bg-gray-400'}`} />
                <span className="font-medium text-white">{validator.accountId}</span>
              </div>
              <span className="text-sm text-gray-400">
                {new Date(validator.lastSeen).toLocaleString()}
              </span>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="flex items-center gap-1 text-gray-400 mb-1">
                  <TrendingUp className="h-3 w-3" />
                  Stake
                </div>
                <div className="text-white font-medium">{parseInt(validator.stake).toLocaleString()} NEAR</div>
              </div>
              
              <div>
                <div className="flex items-center gap-1 text-gray-400 mb-1">
                  <Activity className="h-3 w-3" />
                  Uptime
                </div>
                <div className={`font-medium ${getUptimeColor(validator.uptime)}`}>
                  {validator.uptime.toFixed(1)}%
                </div>
              </div>
              
              <div>
                <div className="text-gray-400 mb-1">Blocks</div>
                <div className="text-white font-medium">{validator.blocks.toLocaleString()}</div>
              </div>
              
              <div>
                <div className="text-gray-400 mb-1">Chunks</div>
                <div className="text-white font-medium">{validator.chunks.toLocaleString()}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};