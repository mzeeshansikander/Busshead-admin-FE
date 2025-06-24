'use client';

// Components
import { cn } from '@/lib/utils';

import Image from 'next/image';
import arrowLeftIcon from '@/../public/assets/images/arrow-left.png';
import { Dispatch, SetStateAction } from 'react';
import Button from '@/components/reusable/button';
import { useRouter } from 'next/navigation';

interface Order {
  orderId: string;
  shopOwner: string;
  shopOwnerImage: string;
  driver: string | null;
  deliveryDate: string;
  payment: string;
  address: string;
}

const OrdersDataTableBody = ({
  orderId,
  shopOwner,
  driver,
  deliveryDate,
  payment,
  address,
  shopOwnerImage,
}: Order) => {
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
      {/* First column - Order ID*/}
      <td className={cn('truncate pl-3')}>
        <div className='flex items-center gap-3'>
          <p className='text-[14px] font-normal text-black'>{orderId || ''}</p>
        </div>
      </td>

      {/* Second column - Shop Owner */}
      <td className={cn('truncate pl-3')}>{shopOwner || 'N/A'}</td>

      {/* Third column - Driver */}
      <td className={cn('truncate pl-3')}>{driver || 'N/A'}</td>

      {/* Fourth column - Delivery Date */}
      <td className={cn('truncate pl-3')}>{deliveryDate || 'N/A'}</td>

      {/* Fifth column - Payment */}
      <td className={cn('truncate pl-3')}>{payment || 'N/A'}</td>

      {/* Sexith column - Payment */}
      <td className={cn('truncate pl-3')}>{address || 'N/A'}</td>

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

export default OrdersDataTableBody;
