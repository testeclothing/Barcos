import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center px-8 py-4 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 font-display group";
  
  const variants = {
    primary: "bg-dark text-white hover:bg-neon hover:text-dark shadow-lg shadow-black/5",
    outline: "bg-transparent border border-dark/20 text-dark hover:border-dark hover:bg-dark hover:text-white",
    ghost: "bg-transparent text-dark hover:text-neon px-0",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center">
        {children}
      </span>
      
      {icon && (
        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
      )}
    </button>
  );
};

export default Button;