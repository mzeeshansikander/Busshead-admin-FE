// React
import { ITableHead } from '@/common/interfaces/table';
import { cn } from '@/lib/utils';
import React from 'react';

// Interface

/**
 *
 * @param IProps
 * @example
 *  <TableHeader tableHeader={['Doctor Name', 'Location','Experience','Education','Status','Action']} />
 */
const TableHeader = ({ tableHeader, isEnd }: ITableHead) => {
  return (
    <thead className='!w-full border-divider border-b sticky -top-1 bg-[#F2F5F6] text-white  z-10'>
      <tr className='h-[46px] w-full'>
        {tableHeader &&
          tableHeader.map((item: string, index: number) => {
            return (
              <th
                key={index}
                className={cn(
                  `px-3 text-black text-sm font-semibold w-max h-[90%] truncate`,
                  isEnd && tableHeader.length === index + 1
                    ? 'text-end pr-6'
                    : `text-start`,
                )}
              >
                {item}
              </th>
            );
          })}
      </tr>
    </thead>
  );
};

export default TableHeader;
// w-[40%]
