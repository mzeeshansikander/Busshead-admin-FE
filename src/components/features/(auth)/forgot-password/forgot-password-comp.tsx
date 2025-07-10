'use client';
import Button from '@/components/reusable/button';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';
import React, { Dispatch, SetStateAction } from 'react';
import { GoArrowLeft } from 'react-icons/go';

interface ForgotPasswordCompProps {
  setCurrentStep: Dispatch<SetStateAction<string>>;
  setGlobalEmail: Dispatch<SetStateAction<string>>;
}

const ForgotPasswordComp: React.FC<ForgotPasswordCompProps> = ({
  // setGlobalEmail,
  setCurrentStep,
}) => {
  const router = useRouter();
  return (
    <ContainerWrapper className='gap-3'>
      {/* Back button */}
      <Button
        type='button'
        onClick={() => router.push('login')}
      >
        <GoArrowLeft className='w-[24px] h-[24px]' />
      </Button>

      <h1 className='text-[36px] font-semibold'>Forgot Password?</h1>

      <form>
        <div>
          <div className='mb-1'>
            <Label className='text-[14px]'>Email</Label>
          </div>

          <div className='relative'>
            <Input
              type='text'
              name='email'
              id='email'
              placeholder='Enter Email Address'
              className='h-[56px]'
            />
          </div>
        </div>

        {/* Continue button */}
        <Button
          size='lg'
          variant='primary'
          className='gradient mt-4 hover-gradient-shimmer'
          onClick={() => setCurrentStep('verifyOtp')}
        >
          <span className='text-black text-[18px] font-semibold'>Continue</span>
        </Button>
      </form>
    </ContainerWrapper>
  );
};

export default ForgotPasswordComp;
