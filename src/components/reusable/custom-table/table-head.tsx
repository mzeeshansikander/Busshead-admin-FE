// React
import { ITableHead } from '@/common/interfaces/table';
import React from 'react';

// Interface

/**
 *
 * @param IProps
 * @example
 *  <TableHeader tableHeader={['Doctor Name', 'Location','Experience','Education','Status','Action']} />
 */
const TableHeader = ({ tableHeader }: ITableHead) => {
  return (
    <thead className='!w-full border-t border-divider border-b sticky -top-1 bg-neutral-200 text-white  z-10'>
      <tr className='h-[46px] w-full'>
        {tableHeader &&
          tableHeader.map((item: string, index: number) => {
            return (
              <th
                key={index}
                className={`px-3 text-black text-sm font-semibold w-max h-[90%] truncate text-start`}
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
