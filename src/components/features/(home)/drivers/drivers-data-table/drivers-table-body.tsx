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
import { MEDIA_TYPE } from '@/common/types/media/media-type.enum';
interface Driver {
  id: number;
  name: string;
  // vehicleImage: string;
  vehicle: string;
  email: string;
  phoneNumber: string;
  status: string;
  media: Media[];
  profileImage: string;
}

interface Media {
  id: number;
  media_type: MEDIA_TYPE;
  media_url: string;
}

const DriversTableBody = ({
  id,
  name,
  email,
  phoneNumber,
  status,
  vehicle,
  media,
  profileImage,
}: Driver) => {
  const router = useRouter();

  const handleUserClick = () => {
    router.push(`/drivers/${id}`);
  };

  const statusClasses =
    status === 'Available'
      ? 'border-green-secondary font-medium text-[#B7BF49] bg-[#B7BF491A]'
      : status === 'En Route'
        ? 'border-blue-primary font-medium text-[#466177] bg-[#4661771A]'
        : 'border-gray-300 text-gray-500 bg-gray-100';

  //filtering vehicle image
  const vehicleImg = media.filter(
    item => item.media_type === MEDIA_TYPE.VEHICLE,
  );

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
          <img
            src={profileImage}
            alt='profile picture'
            width={28}
            height={28}
            className='w-[28px] h-[28px]'
          />

          <p className='text-[14px] font-normal text-black'>{name}</p>
        </div>
      </td>

      {/* Second column - Vehicle */}
      <td className={cn('truncate pl-3')}>
        <div className='flex items-center gap-3'>
          <img
            src={vehicleImg.length !== 0 ? vehicleImg[0].media_url : ''}
            alt='vehicle image'
            width={28}
            height={28}
            className='w-[28px] h-[28px]'
          />
          <p className='text-[14px] font-normal text-black'>
            {vehicle || 'N/A'}
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
