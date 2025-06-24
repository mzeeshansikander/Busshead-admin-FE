'use client';

import Button from '@/components/reusable/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import { useRouter } from 'next/navigation';

const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <main className='flex flex-col gap-4 p-7'>
      {/* Logo/Brand */}
      <h1 className='font-semibold text-[48px] text-center'>Busshead</h1>

      {/*  Form Container */}
      <ContainerWrapper className='gap-3'>
        <h2 className='text-[36px] font-semibold'>Log in</h2>

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

          <div className='mt-3'>
            <div className='mb-1'>
              <Label className='text-[14px]'>Password</Label>
            </div>

            <div className='relative'>
              <Input
                type={showPassword ? 'text' : 'password'}
                name='password'
                id='password'
                placeholder='Enter Password'
                className='h-[56px'
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
          </div>

          {/* Forgot Password button */}
          <div className='flex justify-center mt-4 '>
            <Button
              className='font-medium '
              type='button'
              onClick={() => router.push('forgot-password')}
            >
              Forgot Password?
            </Button>
          </div>

          {/* Login button */}
          <Button
            size='lg'
            variant='primary'
            className='gradient mt-4'
          >
            <span className='text-black text-[18px] font-semibold'>Log in</span>
          </Button>
        </form>
      </ContainerWrapper>
    </main>
  );
};

export default LoginView;
