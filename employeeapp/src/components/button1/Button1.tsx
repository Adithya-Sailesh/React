import React from 'react';
import './Button1.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;

}

const Button1: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <button 
      className={`button button--${variant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button1;