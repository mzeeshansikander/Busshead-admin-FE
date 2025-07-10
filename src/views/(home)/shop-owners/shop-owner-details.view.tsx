'use client';
import restrictedIcon from '@/../public/assets/images/Avatar.png';
import profilePicture from '@/../public/assets/images/john_doe.png';
import Button from '@/components/reusable/button';
import ChatButtonComp from '@/components/reusable/chat-button';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import DropdownComp from '@/components/reusable/drop-down';
import Loader from '@/components/reusable/loader';
import GetShopOwnerByIdHook from '@/services/react-query-client/(dashboard)/shop-owners/shop-owner-by-id';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';

interface ShopOwnersDetailsProps {
  shopOwnerId: string;
}

const ShopOwnerDetailsView: React.FC<ShopOwnersDetailsProps> = ({
  shopOwnerId,
}) => {
  /* eslint-disable-next-line */
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  //Hook to get shop owner details
  const { data: shopOwnerDetailsData, isLoading: shopOwnerDetailsLoading } =
    GetShopOwnerByIdHook(shopOwnerId);

  if (shopOwnerDetailsLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader className='w-8 h-8' />
      </div>
    );
  }

  return (
    <main className='flex flex-col gap-5 p-5'>
      {/* heading row */}
      <div className='flex sm:flex-row flex-col gap-2 sm:gap-0 justify-between'>
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
        <div className='flex flex-row gap-1 mb-2'>
          <Image
            src={profilePicture}
            alt='profile picture'
          />
          <div className='flex flex-col'>
            <h2 className='text-2xl font-bold'>
              {`${shopOwnerDetailsData?.data?.first_name}  ${shopOwnerDetailsData?.data?.last_name}`}
            </h2>
            <p className='text-base'>
              {shopOwnerDetailsData?.data?.email ?? 'N/A'}
            </p>
          </div>
        </div>

        <ContainerWrapper className='gap-3'>
          <div className='grid grid-cols-1 gap-y-4 '>
            <div className='grid grid-cols-2 '>
              <h3 className='font-medium border-b-2 pb-2'>First Name</h3>
              <p className='border-b-2 pb-2'>
                {shopOwnerDetailsData?.data?.first_name ?? 'N/A'}
              </p>
            </div>

            <div className='grid grid-cols-2'>
              <h3 className='font-medium border-b-2 pb-2'>Last Name</h3>
              <p className='border-b-2 pb-2'>
                {shopOwnerDetailsData?.data?.last_name ?? 'N/A'}
              </p>
            </div>

            <div className='grid grid-cols-2'>
              <h3 className='font-medium border-b-2 pb-2'>Email</h3>
              <p className='border-b-2 pb-2 break-words'>
                {shopOwnerDetailsData?.data?.email ?? 'N/A'}
              </p>
            </div>

            <div className='grid grid-cols-2'>
              <h3 className='font-medium border-b-2 pb-2'>Phone Number</h3>
              <p className='border-b-2 pb-2'>
                {shopOwnerDetailsData?.data?.owner_meta_data?.phone_number ??
                  'N/A'}
              </p>
            </div>

            <div className='grid grid-cols-2'>
              <h3 className='font-medium'>Store Name</h3>
              <p>
                {shopOwnerDetailsData?.data?.owner_meta_data?.store_name ??
                  'N/A'}
              </p>
            </div>
          </div>
        </ContainerWrapper>
      </ContainerWrapper>

      {/* Drop down for store addresses */}

      <DropdownComp
        label='Store Addresses'
        classNameforLabel='!text-[17px] font-semibold'
        valuesToMap={shopOwnerDetailsData?.data?.owner_store_locations.map(
          item => item.store_address,
        )}
        iconShow={true}
      />

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
