'use client';

// Components
import { cn } from '@/lib/utils';

import Image from 'next/image';
import arrowLeftIcon from '@/../public/assets/images/arrow-left.png';
import { Dispatch, SetStateAction } from 'react';
import Button from '@/components/reusable/button';

interface ShopOwner {
  id: string;
  driver: string;
  email: string;
  phoneNumber: string;
  storeName: string;
  storeAddress: string;
  profilePicture?: string;
  //   setCurrentStep?: Dispatch<SetStateAction<string>>;
  //   setDriverId?: Dispatch<SetStateAction<string>>;
}

const ShopOwnersTableBody = ({
  id,
  driver,
  email,
  phoneNumber,
  storeName,
  storeAddress,
  profilePicture,
}: ShopOwner) => {
  //   const handleUserClick = () => {
  //     console.log('working');
  //     console.log('id', id);
  //     setDriverId && setDriverId(id);
  //     setCurrentStep && setCurrentStep('driverDetails');
  //   };

  return (
    <tr
      className={cn(
        'h-[60px]',
        'border-b',
        'text-[13px] font-medium text-[#51595A]',
        'hover:bg-[#f7f7f7]',
        'relative',
      )}
    >
      {/* First column - Driver Name*/}
      <td className={cn('truncate pl-3')}>
        <div className='flex items-center gap-3'>
          <p className='text-[14px] font-normal text-black'>{driver || ''}</p>
        </div>
      </td>

      {/* Second column - Email */}
      <td className={cn('truncate pl-3')}>{email || 'N/A'}</td>

      {/* Third column - Phone Number */}
      <td className={cn('truncate pl-3')}>{phoneNumber || 'N/A'}</td>

      {/* Fourth column - Store Name */}
      <td className={cn('truncate pl-3')}>{storeName || 'N/A'}</td>

      {/* Fifth column - Store Address */}
      <td className={cn('truncate pl-3')}>{storeAddress || 'N/A'}</td>

      {/* Sixth column - Actions  */}
      <td className={cn('truncate pl-3')}>
        <Button
          className='text-gray-400 hover:text-gray-600'
          type='button'
          //   onClick={handleUserClick}
        >
          <Image
            src={arrowLeftIcon}
            alt='arrow left'
          />
        </Button>
      </td>
    </tr>
  );
};

export default ShopOwnersTableBody;
