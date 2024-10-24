import React from 'react';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface AuthButtonProps {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  variant?: 'default' | 'outline' | 'black';
  disabled?: boolean;
}

export function AuthButton({ 
  icon: Icon, 
  label, 
  onClick, 
  variant = 'default',
  disabled = false 
}: AuthButtonProps) {
  const baseStyles = "w-full flex items-center justify-center space-x-3 py-3 px-4 rounded-lg transition-colors";
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300",
    outline: "bg-white border border-gray-200 text-gray-900 hover:border-blue-500 disabled:bg-gray-100",
    black: "bg-black text-white hover:bg-gray-800 disabled:bg-gray-600"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
      disabled={disabled}
    >
      <Icon className="w-5 h-5" />
      <span>{label}</span>
      <ChevronRight className="w-5 h-5 ml-auto" />
    </button>
  );
}