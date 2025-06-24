'use client';

import { cn } from '@/lib/utils';

import editIcon from '@/../public/assets/images/edit_icon.png';
import deleteIcon from '@/../public/assets/images/trash _small.png';
import Button from '@/components/reusable/button';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

interface Product {
  //   id: string;
  product: string;
  category: string;
  price: number;
  stock: number;
  image?: StaticImageData;
}

const ProductsDataTableBody = ({
  category,
  price,
  product,
  stock,
  image,
}: Product) => {
  const router = useRouter();

  //   const handleUserClick = () => {
  //     router.push(`/drivers/${id}`);
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
      {/* First column - Product*/}
      <td className={cn('truncate pl-3')}>
        <div className='flex flex-row gap-2 items-center'>
          {image && (
            <Image
              src={image}
              alt='product icon'
              width={24}
              height={24}
            />
          )}

          {!image && (
            <div className='w-6 h-6 bg-gray-200 rounded flex items-center justify-center'>
              <span className='text-xs text-gray-500'>N/A</span>
            </div>
          )}
          <p>{product || 'N/A'}</p>
        </div>
      </td>

      {/* Second column - Category */}
      <td className={cn('truncate pl-3')}>{category || 'N/A'}</td>

      {/* Third column - Price */}
      <td className={cn('truncate pl-3')}>${price || 'N/A'}</td>

      {/* Fourth column - Stock */}
      <td className={cn('truncate pl-3')}>
        <div
          className={`border-2 w-fit px-4 py-2 ${stock < 100 ? 'border-red-200 text-red-400' : ''} rounded-md`}
        >
          {stock ? `${stock} Qty` : 'N/A'}
        </div>
      </td>

      {/* Fifth column - Actions  */}
      <td className={cn('truncate pl-3 flex justify-end pr-8 mt-2')}>
        <div className='flex justify-between gap-2.5'>
          <Button type='button'>
            <Image
              src={deleteIcon}
              alt='delete icon'
              className='mt-2'
            />
          </Button>
          <Button type='button'>
            <Image
              src={editIcon}
              alt='edit icon'
              className='mt-1'
            />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default ProductsDataTableBody;
