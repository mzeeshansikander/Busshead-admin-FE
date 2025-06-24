'use client';

import Button from '@/components/reusable/button';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';

interface SetNewPasswordCompProps {
  setCurrentStep: Dispatch<SetStateAction<string>>;
  globalEmail: string;
  globalCode: string;
}

const SetNewPasswordComp: React.FC<SetNewPasswordCompProps> = ({
  setCurrentStep,
  globalCode,
  globalEmail,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ContainerWrapper className='gap-3'>
      {/* Back button */}
      <Button
        type='button'
        onClick={() => setCurrentStep('verifyOtp')}
      >
        <GoArrowLeft className='w-[24px] h-[24px]' />
      </Button>

      <h1 className='text-[36px] font-semibold'>Set a New Password</h1>

      <p className='text-base text-neutral-grey-sixty'>
        Create a new password & remember it
      </p>

      <form>
        {/* New Password */}
        <div className='mt-3'>
          <div className='mb-1'>
            <Label
              className='text-[14px]'
              htmlFor='password'
            >
              New Password
            </Label>
          </div>

          <div className='relative'>
            <Input
              type={showPassword ? 'text' : 'password'}
              name='password'
              id='password'
              placeholder='Enter Password'
              className='h-[56px]'
            />
            <Button
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors'
              type='button'
            >
              {showPassword ? (
                <EyeOff className='h-5 w-5' />
              ) : (
                <Eye className='h-5 w-5' />
              )}
            </Button>
          </div>
        </div>

        {/* Confirm New Password */}
        <div className='mt-3'>
          <div className='mb-1'>
            <Label
              className='text-[14px]'
              htmlFor='confirmPassword'
            >
              Confirm New Password
            </Label>
          </div>

          <div className='relative'>
            <Input
              type={showConfirmPassword ? 'text' : 'password'}
              name='confirmPassword'
              id='confirmPassword'
              placeholder='Enter Password'
              className='h-[56px]'
            />
            <Button
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors'
              aria-label={
                showConfirmPassword ? 'Hide password' : 'Show password'
              }
              type='button'
            >
              {showConfirmPassword ? (
                <EyeOff className='h-5 w-5' />
              ) : (
                <Eye className='h-5 w-5' />
              )}
            </Button>
          </div>
        </div>

        {/* Change Password Button */}
        <Button
          size='lg'
          variant='primary'
          className='gradient mt-6'
          type='button'
          onClick={() => setCurrentStep('passwordChangedSuccess')}
        >
          <span className='text-black text-[18px] font-semibold'>
            Change Password
          </span>
        </Button>
      </form>
    </ContainerWrapper>
  );
};

export default SetNewPasswordComp;
