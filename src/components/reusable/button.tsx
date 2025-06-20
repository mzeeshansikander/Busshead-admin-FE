import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  children,
  onClick,
  type,
  variant,
  size,
  disabled,
  isLoading,
  className,
}) => {
  const baseStyles = 'rounded-lg transition-colors hover:cursor-pointer';

  const variantStyles = {
    primary: 'bg-primary text-white',
    secondary: 'bg-neutral-grey text-white',
    outline: 'bg-white text-primary border-2 border-primary',
    danger: '',
  };

  const sizeStyles = {
    sm: '',
    md: 'py-2 w-[80%] h-12',
    lg: 'py-2 w-full h-[60px]',
  };

  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled || isLoading}
        className={`${baseStyles}  ${variant ? variantStyles[variant] : ''} ${
          size ? sizeStyles[size] : ''
        } ${
          disabled ? 'opacity-50 cursor-not-allowed' : ''
        } ${className || ''}`}
      >
        {isLoading ? 'Loading...' : children}
      </button>
    </div>
  );
};

export default ButtonComponent;
