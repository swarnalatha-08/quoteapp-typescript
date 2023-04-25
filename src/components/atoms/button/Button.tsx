import React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  label?: string;
}

export function Button({ children, variant, ...props }: ButtonProps) {
  return (
    <button
      className={`button ${variant}`}
      {...props}
    >
      {children}
    </button>
  );
}
