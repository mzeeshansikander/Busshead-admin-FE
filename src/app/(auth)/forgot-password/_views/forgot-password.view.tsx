'use client';
import { useState } from 'react';
import ForgotPasswordComp from '../_components/forgot-password-comp';
import PasswordChangedSucessComp from '../_components/password-changed-sucess-comp';
import SetNewPasswordComp from '../_components/set-new-password-comp';
import VerificationCodeComp from '../_components/verification-code-comp';

const ForgotPasswordView = () => {
  const [currentStep, setCurrentStep] = useState('forgotPassword');
  const [globalEmail, setGlobalEmail] = useState('');
  const [globalCode, setGlobalCode] = useState('');

  const STEPS = {
    forgotPassword: 'forgotPassword',
    verifyOtp: 'verifyOtp',
    setNewPassword: 'setNewPassword',
    passwordChangedSuccess: 'passwordChangedSuccess',
  };

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
