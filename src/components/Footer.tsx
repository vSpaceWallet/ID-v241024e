import React from 'react';

export function Footer() {
  return (
    <footer className="py-6 px-8 border-t border-gray-200">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <p className="text-sm text-gray-500">© 2024 vSpaceWallet ID. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Help</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy</a>
          <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms</a>
        </div>
      </div>
    </footer>
  );
}