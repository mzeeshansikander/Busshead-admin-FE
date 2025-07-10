'use client';

// Components
import { cn } from '@/lib/utils';

import Button from '@/components/reusable/button';
import { useRouter } from 'next/navigation';
import { GoArrowRight } from 'react-icons/go';

interface ShopOwner {
  id: number;
  shopOwner: string;
  email: string;
  phoneNumber: string;
  storeName: string;
  storeAddress: string;
  profilePicture: string;
  //   setCurrentStep?: Dispatch<SetStateAction<string>>;
  //   setDriverId?: Dispatch<SetStateAction<string>>;
}

const ShopOwnersTableBody = ({
  id,
  shopOwner,
  email,
  phoneNumber,
  storeName,
  storeAddress,
  profilePicture,
}: ShopOwner) => {
  const router = useRouter();

  const handleUserClick = () => {
    console.log('working');
    router.push(`/shop-owners/${id}`);
  };

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
          <img
            src={profilePicture}
            alt='profile picture'
            className='w-[28px] h-[28px]'
          />
          <p className='text-[14px] font-normal text-black'>
            {shopOwner || 'N/A'}
          </p>
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
          onClick={handleUserClick}
        >
          <GoArrowRight className='w-[20px] h-[20px] text-black' />
        </Button>
      </td>
    </tr>
  );
};

export default ShopOwnersTableBody;
