'use client';

// Components
import { cn } from '@/lib/utils';

import profileImg from '@/../public/assets/images/Ellipse 5 john.png';
import Button from '@/components/reusable/button';
import Image from 'next/image';

interface DriverRequest {
  driverName: string;
  driverImage: string;
  vehicle: string;
  status: string;
}

const DriverRequestsDataTableBody = ({
  driverName,
  // driverImage,
  // status,
  vehicle,
}: DriverRequest) => {
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
          <Image
            src={profileImg}
            alt='profile picture'
            className='w-[28px] h-[28px]'
          />
          <p className='text-[14px] font-normal text-black underline underline-offset-4'>
            {driverName || ''}
          </p>
        </div>
      </td>

      {/* Second column - Vehicle */}
      <td className={cn('truncate pl-3')}>{vehicle || 'N/A'}</td>

      {/* Fourth column - Actions  */}
      <td className={cn('truncate pl-3')}>
        <div className='flex flex-row gap-1.5'>
          <Button
            className='text-white bg-[#F14D4D] rounded-md border-[#F14D4D] px-3 py-1.5'
            type='button'
          >
            Reject
          </Button>
          <Button
            className='text-white bg-green-primary rounded-md border-green-primary px-2 py-1.5'
            type='button'
          >
            Approve
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default DriverRequestsDataTableBody;
