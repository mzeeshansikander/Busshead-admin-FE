'use client';

import Button from '@/components/reusable/button';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import PasswordField from '@/components/reusable/password-field';
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
        <PasswordField
          label='New Password'
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />

        {/* Confirm New Password */}

        <PasswordField
          label='Confirm New Password'
          showPassword={showConfirmPassword}
          setShowPassword={setShowConfirmPassword}
        />

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
