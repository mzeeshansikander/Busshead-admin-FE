'use client';
import Button from '@/components/reusable/button';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import React from 'react';
import successIcon from '@/../public/assets/images/tick-circle.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const PasswordChangedSucessComp = () => {
  const router = useRouter();
  return (
    <ContainerWrapper>
      <Image
        src={successIcon}
        alt='success icon'
        className='w-[96px] h-[96px] mx-auto'
      />

      <p className='text-2xl font-semibold text-center'>
        Password Changed Successfully!
      </p>

      {/* Change Password Button */}
      <Button
        size='lg'
        variant='primary'
        className='gradient mt-6'
        type='button'
        onClick={() => router.replace('login')}
      >
        <span className='text-black text-[18px] font-semibold'>Done</span>
      </Button>
    </ContainerWrapper>
  );
};

export default PasswordChangedSucessComp;
