'use client';

// Components
import { cn } from '@/lib/utils';

import profileImg from '@/../public/assets/images/Ellipse 5 john.png';
import Button from '@/components/reusable/button';
import Image from 'next/image';
import { GoArrowRight } from 'react-icons/go';

interface PendingPayment {
  driverName: string;
  driverImage: string;
  paymentId: string;
  amount: string;
}

const PendingPaymentsDataTableBody = ({
  driverName,
  paymentId,
  // driverImage,
  amount,
}: PendingPayment) => {
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
          <p className='text-[14px] font-normal text-black'>
            {driverName || ''}
          </p>
        </div>
      </td>

      {/* Second column - ID of the payment */}
      <td className={cn('truncate pl-3')}>{paymentId || 'N/A'}</td>

      {/* Third column - Price */}
      <td className={cn('truncate pl-3')}>{amount || 'N/A'}</td>

      {/* Fourth column - Actions  */}
      <td className={cn('truncate pl-3')}>
        <Button
          className='text-gray-400 hover:text-gray-600'
          type='button'
        >
          <GoArrowRight className='ml-2 w-[20px] h-[20px] text-black' />
        </Button>
      </td>
    </tr>
  );
};

export default PendingPaymentsDataTableBody;
