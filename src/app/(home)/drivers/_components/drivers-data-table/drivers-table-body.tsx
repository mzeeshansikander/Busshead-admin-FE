'use client';

// Components
import { cn } from '@/lib/utils';

import Image from 'next/image';
import arrowLeftIcon from '@/../public/assets/images/arrow-left.png';
import { Dispatch, SetStateAction } from 'react';

interface Driver {
  id: string;
  name: string;
  image?: string;
  vehcile: string;
  email: string;
  phoneNumber: string;
  status: string;
  // setCurrentStep?: Dispatch<SetStateAction<string>>;
  //  setSelectedUserId?: Dispatch<SetStateAction<string | null>>;
}

const DriversTableBody = ({
  name,
  email,
  phoneNumber,
  status,
  vehcile,
  image,
}: Driver) => {
  //   const handleUserClick = () => {
  //     setSelectedUserId && setSelectedUserId(id);

  //     if (userType === 'Active Users') {
  //       setCurrentStep && setCurrentStep('usersManagementComp');
  //     } else {
  //       setCurrentStep && setCurrentStep('usersDetailsSuspendedComp');
  //     }
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
      {/* First column - Driver info*/}
      <td className={cn('truncate pl-3')}>
        <div className='flex items-center gap-3'>
          <div className='flex flex-col'>
            <span className='text-[14px] font-normal text-black'>{name}</span>
          </div>
        </div>
      </td>

      {/* Second column - Vehicle */}
      <td className={cn('truncate pl-3')}>{vehcile || 'N/A'}</td>

      {/* Third column - Email */}
      <td className={cn('truncate pl-3')}>{email || 'N/A'}</td>

      {/* Fourth column - Phone Number */}
      <td className={cn('truncate pl-3')}>{phoneNumber || 'N/A'}</td>

      {/* Fifth column - Status */}
      <td className={cn('truncate pl-3')}>{status || 'N/A'}</td>

      {/* Sixth column - Actions  */}
      <td className={cn('truncate pl-3')}>
        <button
          className='text-gray-400 hover:text-gray-600'

          // onClick={handleUserClick}
        >
          <Image
            src={arrowLeftIcon}
            alt='arrow left'
          />
        </button>
      </td>
    </tr>
  );
};

export default DriversTableBody;
