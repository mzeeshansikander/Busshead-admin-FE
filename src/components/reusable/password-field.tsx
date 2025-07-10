import { Label } from '@radix-ui/react-label';
import { EyeOff, Eye } from 'lucide-react';
import React from 'react';
import { Input } from '../ui/input';
import Button from './button';

interface PasswordFieldProps {
  label: string;
  showPassword: boolean;
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  errors?: string;
  touched?: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  label,
  showPassword,
  setShowPassword,
  name,
  errors,
  onBlur,
  onChange,
  touched,
  value,
}) => {
  return (
    <div className='mt-3'>
      <div className='mb-1'>
        <Label className='text-[14px]'>{label}</Label>
      </div>

      <div className='relative'>
        <Input
          type={showPassword ? 'text' : 'password'}
          name={name}
          id={name}
          placeholder='Enter Password'
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          //  className={`h-[56px] ${touched && errors ? 'border-red-500' : ''}`}
          className={`h-[56px] `}
          //  className={`h-[56px] ${!showPassword ? 'text-2xl tracking-wider' : ''} `}
        />

        <Button
          type='button'
          onClick={() => setShowPassword(!showPassword)}
          className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors'
        >
          {showPassword ? (
            <EyeOff className='h-5 w-5' />
          ) : (
            <Eye className='h-5 w-5' />
          )}
        </Button>
      </div>
      {errors && touched && (
        <p className='text-red-500 text-sm mt-0.5'>{errors} </p>
      )}
    </div>
  );
};

export default PasswordField;
