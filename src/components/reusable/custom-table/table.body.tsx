'use client';

// Interface
// React
import { Fragment } from 'react';

// Components
import { cn } from '@/lib/utils';
import { ITableBody } from '@/common/interfaces/table';

const TableBody = ({ email, name, role, VerifiedAt }: ITableBody) => {
  const tableData = [name, email, role, VerifiedAt];

  return (
    <tbody>
      <tr
        className={`h-[60px] border-b  text-[13px] font-medium text-[#51595A] hover:bg-[#f7f7f7] relative`}
      >
        {tableData.map((each, index) => (
          <Fragment key={index}>
            {each && <td className={cn('px-3')}>{each}</td>}
          </Fragment>
        ))}
      </tr>
    </tbody>
  );
};

export default TableBody;
