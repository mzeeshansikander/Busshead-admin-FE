'use client';
import Button from '@/components/reusable/button';
import ChatButtonComp from '@/components/reusable/chat-button';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import router, { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import Image from 'next/image';
import profilePicture from '@/../public/assets/images/john_doe.png';
import restrictedIcon from '@/../public/assets/images/Avatar.png';

interface ShopOwnersDetailsProps {
  shopOwnerId: string;
}

const ShopOwnerDetailsView: React.FC<ShopOwnersDetailsProps> = ({
  shopOwnerId,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  return (
    <main className='flex flex-col gap-5 p-5'>
      {/* heading row */}
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-4'>
          {/* Back button */}
          <Button
            type='button'
            onClick={() => router.back()}
          >
            <GoArrowLeft className='w-[22px] h-[22px]' />
          </Button>
          <h2 className='text-xl font-semibold'>Shop Owner Details</h2>
        </div>

        <ChatButtonComp />
      </div>

      {/* Shop Owner Details Container */}
      <ContainerWrapper className='gap-3'>
        {/* image container */}
        <div className='flex flex-row mb-2'>
          <Image
            src={profilePicture}
            alt='profile picture'
          />
          <div className='flex flex-col'>
            <h2 className='text-2xl font-bold'>John Doe</h2>

            <p className='text-base'>Jane@gmail.com</p>
          </div>
        </div>

        <ContainerWrapper className='gap-3'>
          <div className='grid grid-cols-1 gap-y-4 '>
            <div className='grid grid-cols-2 '>
              <h3 className='font-medium border-b-2 pb-2'>First Name</h3>
              <p className='border-b-2 pb-2'>Jane</p>
            </div>

            <div className='grid grid-cols-2'>
              <h3 className='font-medium border-b-2 pb-2'>Last Name</h3>
              <p className='border-b-2 pb-2'>Cooper</p>
            </div>

            <div className='grid grid-cols-2'>
              <h3 className='font-medium border-b-2 pb-2'>Email</h3>
              <p className='border-b-2 pb-2 break-words'>johndoe@example.com</p>
            </div>

            <div className='grid grid-cols-2'>
              <h3 className='font-medium border-b-2 pb-2'>Phone Number</h3>
              <p className='border-b-2 pb-2'>+92 123 456 7890</p>
            </div>

            <div className='grid grid-cols-2'>
              <h3 className='font-medium border-b-2 pb-2 '>Store Name</h3>
              <p className='border-b-2 pb-2'>IndiMart</p>
            </div>

            <div className='grid grid-cols-2'>
              <h3 className='font-medium '>Store Address</h3>
              <p className=''>20 Greenway Drive, San Diego, CA</p>
            </div>
          </div>
        </ContainerWrapper>
      </ContainerWrapper>

      {/* Account Restriction Container */}
      <ContainerWrapper className='gap-3'>
        <div className='flex flex-col gap-7'>
          <div className='flex flex-row gap-1'>
            <Image
              src={restrictedIcon}
              alt='restricted icon'
            />
            <p className='font-medium text-lg mt-4.5'>Account Restricted</p>
          </div>
          <Button
            type='button'
            className=' bg-red-500 p-2 px-4'
            onClick={() => setIsOpen(true)}
          >
            <span className='text-white font-medium text-sm'>Deactivate</span>
          </Button>
        </div>
      </ContainerWrapper>
    </main>
  );
};

export default ShopOwnerDetailsView;
