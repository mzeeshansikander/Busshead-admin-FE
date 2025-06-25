'use client';

import Button from '@/components/reusable/button';
// Components
import { cn } from '@/lib/utils';

import { useRouter } from 'next/navigation';

interface Report {
  id: string;
  user: string;
  driver: string;
  date: string;
  status: string;
  price: number;
}

const ReportDataTableBody = ({
  id,
  driver,
  user,
  date,
  status,
  price,
}: Report) => {
  const statusClasses =
    status === 'COD'
      ? 'border-active-green-sixty text-active-green-sixty bg-active-green-light'
      : status === 'Card'
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
      {/* First column - ID*/}
      <td className={cn('truncate pl-3')}>#{id || 'N/A'}</td>

      {/* Second column - User */}
      <td className={cn('truncate pl-3')}>{user || 'N/A'}</td>

      {/* Third column - Driver */}
      <td className={cn('truncate pl-3')}>{driver || 'N/A'}</td>

      {/* Fourth column - Date */}
      <td className={cn('truncate pl-3')}>{date || 'N/A'}</td>

      {/* Fifth column - Status */}
      <td className={`truncate pl-3 `}>
        <Button
          type='button'
          disabled
          className={`border-2 py-0.5 px-2 text-[16px] font-bold rounded-sm ${statusClasses}`}
        >
          {status || 'N/A'}
        </Button>
      </td>

      {/* Sixth column - Price  */}
      <td className={cn('truncate pl-3')}>${price || 'N/A'}</td>
    </tr>
  );
};

export default ReportDataTableBody;
