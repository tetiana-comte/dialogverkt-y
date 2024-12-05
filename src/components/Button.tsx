import { FC, ButtonHTMLAttributes } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-4 rounded-lg font-medium transition-colors';
  const variantStyles = {
    primary: 'bg-gray-900 hover:bg-gray-800 text-white',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900'
  };
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="h-5 w-5 mr-2" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="h-5 w-5 ml-2" />}
    </button>
  );
};

export default Button;