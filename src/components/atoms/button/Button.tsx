import React from 'react';
import buttonStyles from './button.module.css';

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


// storybook default props

Button.defaultProps={
  variant:buttonStyles.outlined,
  children:'Hello world',
  label:'This is label'
}