'use client';

import Button from '@/components/reusable/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import { useRouter } from 'next/navigation';
import PasswordField from '@/components/reusable/password-field';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { AdminLoginHook } from '@/services/react-query-client/(auth)/login/admin-login';
import { setCookie } from 'cookies-next';
import axios from 'axios';
import toast from 'react-hot-toast';
import Loader from '@/components/reusable/loader';

const LoginView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  interface InitialValues {
    email: string;
    password: string;
  }

  const initialValues = {
    email: '',
    password: '',
  };

  //================================= formik ===================================

  const {
    touched,
    errors,
    values,
    resetForm,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .matches(
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          'Invalid email address',
        )
        .test(
          'no-double-domain',
          'Email contains invalid domain structure',
          value => {
            if (!value) return true;

            const atSymbols = (value.match(/@/g) || []).length;
            if (atSymbols !== 1) return false;

            const domainPart = value.split('@')[1];

            const dots = (domainPart.match(/\./g) || []).length;
            if (dots > 2) return false;

            const domainSegments = domainPart.split('.');
            const tldSegments = domainSegments.slice(1);

            for (let i = 0; i < tldSegments.length - 1; i++) {
              if (tldSegments[i] === tldSegments[i + 1]) return false;
            }

            return true;
          },
        )
        .required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: async values => {
      await handleLoginClick(values);
    },
  });

  //============================== login method =============================

  const handleLoginClick = async (values: InitialValues) => {
    const payload = {
      email: values.email.toLowerCase(),
      password: values.password,
    };

    try {
      const response = await mutateAsync(payload);

      if (response) {
        setCookie('accessToken', response.data.accessToken);
        toast.success('Login Successful');
        resetForm();
        router.push(`/dashboard`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || 'Something went wrong');
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  //===================== login hook =================================

  const { mutateAsync, isPending } = AdminLoginHook();

  return (
    <main className='flex flex-col gap-4 p-7'>
      {/* Logo/Brand */}
      <h1 className='font-semibold text-[48px] text-center'>Busshead</h1>

      {/*  Form Container */}
      <ContainerWrapper className='gap-3'>
        <h2 className='text-[36px] font-semibold'>Log in</h2>

        <form onSubmit={handleSubmit}>
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
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          </div>
          {errors.email && touched.email && (
            <p className='text-red-500 text-sm mt-0.5'>{errors.email} </p>
          )}

          <PasswordField
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            label='Password'
            errors={errors.password}
            onBlur={handleBlur}
            onChange={handleChange}
            name='password'
            touched={touched.password}
            value={values.password}
          />

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
            className='gradient mt-4 hover-gradient-shimmer '
          >
            {isPending ? (
              <Loader className='w-5 h-5' />
            ) : (
              <span className='text-black text-[18px] font-semibold'>
                Log in
              </span>
            )}
          </Button>
        </form>
      </ContainerWrapper>
    </main>
  );
};

export default LoginView;
