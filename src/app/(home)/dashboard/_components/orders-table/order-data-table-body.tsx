'use client';

// Components
import { cn } from '@/lib/utils';

import Image from 'next/image';
import arrowLeftIcon from '@/../public/assets/images/arrow-left.png';
import { Dispatch, SetStateAction } from 'react';
import Button from '@/components/reusable/button';
import { useRouter } from 'next/navigation';
import johnPic from '@/../public/assets/images/Ellipse 5.jpg';
import { CgProfile } from 'react-icons/cg';
import { GoArrowRight } from 'react-icons/go';

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

  const statusClasses =
    payment === 'COD'
      ? 'border-active-green-sixty text-active-green-sixty bg-active-green-light'
      : payment === 'Card'
        ? 'border-active-blue-sixty text-active-blue-sixty bg-active-blue-zero'
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
      {/* First column - Order ID*/}
      <td className={cn('truncate pl-3')}>
        <div className='flex items-center gap-3'>
          <p className='text-[14px] font-normal text-black'>{orderId || ''}</p>
        </div>
      </td>

      {/* Second column - Shop Owner */}
      <td className={cn('truncate pl-3')}>
        <div className='flex flex-row gap-2'>
          <Image
            src={johnPic}
            alt='john pic'
          />
          <p className='mt-0.5'> {shopOwner || 'N/A'}</p>
        </div>
      </td>

      {/* Third column - Driver */}
      <td className={cn('truncate pl-3')}>
        <div className='flex flex-row gap-2'>
          <CgProfile className='w-[24px] h-[24px]' />
          <p className='mt-0.5'> {driver || '-'}</p>
        </div>
      </td>

      {/* Fourth column - Delivery Date */}
      <td className={cn('truncate pl-3')}>{deliveryDate || 'N/A'}</td>

      {/* Fifth column - Payment */}
      {/* <td className={`truncate pl-3 ${statusClasses}`}>{payment || 'N/A'}</td> */}
      <td className={cn('truncate pl-3')}>
        <Button
          type='button'
          disabled
          className={`border-2 py-0.5 px-2 text-[16px] font-bold rounded-sm ${statusClasses}`}
        >
          {payment || 'N/A'}
        </Button>
      </td>
      {/* Sexith column - Payment */}
      <td className={cn('truncate pl-3')}>{address || 'N/A'}</td>

      {/* Sixth column - Actions  */}
      <td className={cn('truncate pl-3')}>
        <div className='flex flex-row gap-3'>
          <Button
            type='button'
            className='gradient py-1 px-4 text-black rounded-md font-medium'
            // onClick={onClick}
          >
            Assign
          </Button>
          <Button
            className='text-gray-400 hover:text-gray-600 mt-0.5'
            type='button'
          >
            <GoArrowRight className='w-[20px] h-[20px] text-black' />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default OrdersDataTableBody;
