'use client';
import Button from '@/components/reusable/button';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { GoArrowLeft } from 'react-icons/go';

interface VerificationCodeCompProps {
  setCurrentStep: Dispatch<SetStateAction<string>>;
  setGlobalCode: Dispatch<SetStateAction<string>>;
  globalEmail: string;
  otpCode?: number;
}

const VerificationCodeComp: React.FC<VerificationCodeCompProps> = ({
  setCurrentStep,
  setGlobalCode,
  globalEmail,
  otpCode,
}) => {
  const [remainingTime, setRemainingTime] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (remainingTime <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setTimeout(() => {
      setRemainingTime(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [remainingTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <ContainerWrapper>
      {/* Back button */}
      <Button
        type='button'
        onClick={() => setCurrentStep('forgotPassword')}
      >
        <GoArrowLeft className='w-[24px] h-[24px] ' />
      </Button>

      <h1 className='text-[36px] font-semibold'>Verification Code</h1>

      <p className='text-base text-neutral-grey-sixty'>
        Enter a verification code send to{' '}
        <span className='text-black font-medium'>abc@gmail.com</span>
      </p>

      <form>
        <div className='flex justify-center items-center mb-2'>
          <InputOTP
            maxLength={6}
            // value={values.code}
            // onChange={handleOtpChange}
            name='code'
            //   onBlur={handleBlur}
          >
            <InputOTPGroup className='flex gap-[8px] sm:gap-3 2xl:gap-4'>
              {Array.from({ length: 6 }, (_, index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className='input-otp-slot'
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <div className='flex flex-col gap-2  w-full'>
          {remainingTime !== 60 ? (
            <p className='text-sm text-center'>
              Remaining Time: {formatTime(remainingTime)}
            </p>
          ) : (
            <></>
          )}

          {/* Continue button */}
          <Button
            size='lg'
            variant='primary'
            className='gradient w-full'
            onClick={() => setCurrentStep('setNewPassword')}
          >
            <span className='text-black text-[18px] font-semibold'>
              Continue
            </span>
          </Button>

          <div className='flex justify-center'>
            <p className='mt-2 text-base text-center w-full'>
              Didn&apos;t receive the code?
              <button type='button'>
                <div className='text-center'>
                  <p
                    className={`font-medium ${canResend ? 'text-black underline-offset-2 font-semibold cursor-pointer' : 'text-gray-400'}`}
                  >
                    Resend it
                  </p>
                </div>
              </button>
            </p>
          </div>
        </div>
      </form>
    </ContainerWrapper>
  );
};

export default VerificationCodeComp;
