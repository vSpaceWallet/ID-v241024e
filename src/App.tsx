import React from 'react';
import { WalletButton } from './components/WalletButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-4 bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">vSpaceWallet ID</h1>
        <div className="space-y-4">
          <WalletButton />
        </div>
      </div>
    </div>
  );
}

export default App;