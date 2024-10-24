import React, { useState } from 'react';
import { Mail, ChevronRight } from 'lucide-react';

export function EmailForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email authentication
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="w-full flex items-center justify-center space-x-3 py-3 px-4 bg-white border border-gray-200 rounded-lg hover:border-blue-500 transition-colors group cursor-pointer">
        <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-500" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Continue with email"
          className="flex-1 border-none bg-transparent focus:outline-none text-gray-900 placeholder-gray-500"
        />
        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 ml-auto" />
      </div>
    </form>
  );
}