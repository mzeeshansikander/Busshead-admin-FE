'use client';

// Components
import { cn } from '@/lib/utils';

import Image from 'next/image';
import profilePic from '@/../public/assets/images/Ellipse 5 john.png';
import { Dispatch, SetStateAction } from 'react';
import Button from '@/components/reusable/button';
import { useRouter } from 'next/navigation';
import { GoArrowRight } from 'react-icons/go';
import truckIcon from '@/../public/assets/images/vehicle_img.png';
interface Driver {
  id: string;
  name: string;
  image?: string;
  vehcile: string;
  email: string;
  phoneNumber: string;
  status: string;
}

const DriversTableBody = ({
  id,
  name,
  email,
  phoneNumber,
  status,
  vehcile,
  image,
}: Driver) => {
  const router = useRouter();

  const handleUserClick = () => {
    router.push(`/drivers/${id}`);
  };

  const statusClasses =
    status === 'En Route'
      ? 'border-green-secondary text-green-secondary bg-[#B7BF491A]'
      : status === 'Available'
        ? 'border-blue-primary text-blue-primary bg-[#4661771A]'
        : 'border-gray-300 text-gray-500 bg-gray-100';
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
      {/* First column - Driver info*/}
      <td className={cn('truncate pl-3')}>
        <div className='flex items-center gap-3'>
          <Image
            src={profilePic}
            alt='profile picture'
            className='w-[28px] h-[28px]'
          />
          <p className='text-[14px] font-normal text-black'>{name}</p>
        </div>
      </td>

      {/* Second column - Vehicle */}
      <td className={cn('truncate pl-3')}>
        <div className='flex items-center gap-3'>
          <Image
            src={truckIcon}
            alt='vehicle image'
            className='w-[28px] h-[28px]'
          />
          <p className='text-[14px] font-normal text-black'>
            {vehcile || 'N/A'}
          </p>
        </div>
      </td>

      {/* Third column - Email */}
      <td className={cn('truncate pl-3')}>{email || 'N/A'}</td>

      {/* Fourth column - Phone Number */}
      <td className={`truncate pl-3 `}>{phoneNumber || 'N/A'}</td>

      {/* Fifth column - Status */}
      <td className={cn('truncate pl-3')}>
        <Button
          type='button'
          disabled
          className={`border-2 py-1 px-3 rounded-xl ${statusClasses}`}
        >
          {status || 'N/A'}
        </Button>
      </td>

      {/* Sixth column - Actions  */}
      <td className={cn('truncate pl-3')}>
        <Button
          className='text-gray-400  hover:text-gray-600'
          type='button'
          onClick={handleUserClick}
        >
          <GoArrowRight className='w-[20px] h-[20px] text-black' />
        </Button>
      </td>
    </tr>
  );
};

export default DriversTableBody;
