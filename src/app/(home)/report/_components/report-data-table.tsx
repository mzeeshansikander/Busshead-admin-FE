'use client';

import { dummyReportData } from '@/common/types/constants/report';
import Table from '@/components/reusable/custom-table/table';
import TableHeader from '@/components/reusable/custom-table/table-head';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';
import ReportDataTableBody from './report-data-table-body';

const ReportDataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchUser, setSearchUser] = useState('');

  const reportDataTableHeader = [
    'ID',
    'User',
    'Driver',
    'Date',
    'Status',
    'Price',
  ];

  const SearchHeader = () => {
    return (
      <div className='w-full p-4 bg-white border-b'>
        <div className='flex gap-4'>
          {/* Search Input */}
          <div className='relative flex-1'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Search className='h-4 w-4 text-neutral-grey-zero' />
            </div>
            <Input
              type='text'
              name='search'
              id='search'
              value={searchUser}
              onChange={e => {
                e.preventDefault();
                setSearchUser(e.target.value);
              }}
              placeholder='Search'
              className='h-[42px] w-full pl-10 pr-4 border border-gray-300 rounded-md '
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-col p-4'>
      <h1 className='text-[34px] font-semibold'>Report</h1>

      <div className='mt-3'>
        <Table
          header={SearchHeader()}
          currentPage={currentPage}
          rowsOption={[10, 20, 30, 40]}
          rowsPerPage={rowsPerPage}
          setCurrentPage={setCurrentPage}
          setRowsPerPage={setRowsPerPage}
          total={20}
          isFooter
          // isPending={isLoading}
        >
          <TableHeader
            tableHeader={reportDataTableHeader}
            isEnd={false}
          />
          <tbody>
            {/* User rows */}
            {dummyReportData?.length > 0 &&
              dummyReportData?.map((report, index) => (
                <ReportDataTableBody
                  date={report?.date}
                  id={report?.id}
                  driver={report?.driver}
                  price={report?.price}
                  status={report?.status}
                  user={report?.user}
                  key={index}
                />
              ))}

            {dummyReportData?.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className='text-center py-8'
                >
                  <div className='flex justify-center items-center h-[35dvh]'>
                    <p className='text-center text-xl font-bold'>
                      No data found
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              <></>
            )}

            {/* Error state */}
            {/* {error && (
            <tr>
              <td
                colSpan={4}
                className='text-center py-8'
              >
                <p className='text-xl text-red-500'>Error loading users</p>
              </td>
            </tr>
          )} */}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ReportDataTable;
