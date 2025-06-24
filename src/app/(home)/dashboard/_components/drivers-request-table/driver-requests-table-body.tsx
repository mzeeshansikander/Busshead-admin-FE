'use client';

// Components
import { cn } from '@/lib/utils';

import Image from 'next/image';
import arrowLeftIcon from '@/../public/assets/images/arrow-left.png';
import { Dispatch, SetStateAction } from 'react';
import Button from '@/components/reusable/button';
import { useRouter } from 'next/navigation';

interface DriverRequest {
  driverName: string;
  driverImage: string;
  vehcile: string;
  status: string;
}

const DriverRequestsDataTableBody = ({
  driverName,
  driverImage,
  status,
  vehcile,
}: DriverRequest) => {
  const router = useRouter();

  //   const handleUserClick = () => {
  //     console.log('working');
  //     router.push(`/shop-owners/${id}`);
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
          <p className='text-[14px] font-normal text-black'>
            {driverName || ''}
          </p>
        </div>
      </td>

      {/* Second column - Vehicle */}
      <td className={cn('truncate pl-3')}>{vehcile || 'N/A'}</td>

      {/* Fourth column - Actions  */}
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

export default DriverRequestsDataTableBody;
