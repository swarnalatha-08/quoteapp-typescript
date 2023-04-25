import React from 'react';

export interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder: string;
  disabled?: boolean;
  variant?:string;
 
}

const Input = ({ value, onChange,placeholder,variant, label, disabled,  }: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input className={`input ${variant}`} value={value} onChange={onChange} disabled={disabled} placeholder={placeholder}/>
    </div>
  );
};

export default Input;
