'use client';
import { useState } from 'react';
import ForgotPasswordComp from '@/components/features/(auth)/forgot-password/forgot-password-comp';
import PasswordChangedSucessComp from '@/components/features/(auth)/forgot-password/password-changed-sucess-comp';
import SetNewPasswordComp from '@/components/features/(auth)/forgot-password/set-new-password-comp';
import VerificationCodeComp from '@/components/features/(auth)/forgot-password/verification-code-comp';
import { STEPS } from '@/common/types/auth/auth.types';

const ForgotPasswordView = () => {
  const [currentStep, setCurrentStep] = useState('forgotPassword');
  const [globalEmail, setGlobalEmail] = useState('');
  const [globalCode, setGlobalCode] = useState('');

  const renderCurrentStep = () => {
    switch (currentStep) {
      case STEPS.forgotPassword:
        return (
          <ForgotPasswordComp
            setCurrentStep={setCurrentStep}
            setGlobalEmail={setGlobalEmail}
          />
        );
      case STEPS.verifyOtp:
        return (
          <VerificationCodeComp
            setCurrentStep={setCurrentStep}
            globalEmail={globalEmail}
            setGlobalCode={setGlobalCode}
          />
        );
      case STEPS.setNewPassword:
        return (
          <SetNewPasswordComp
            setCurrentStep={setCurrentStep}
            globalCode={globalCode}
            globalEmail={globalEmail}
          />
        );

      case STEPS.passwordChangedSuccess:
        return <PasswordChangedSucessComp />;
      default:
        return (
          <ForgotPasswordComp
            setCurrentStep={setCurrentStep}
            setGlobalEmail={setGlobalEmail}
          />
        );
    }
  };

  return <>{renderCurrentStep()}</>;
};

export default ForgotPasswordView;
