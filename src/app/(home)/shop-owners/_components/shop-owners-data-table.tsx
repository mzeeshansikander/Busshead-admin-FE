'use client';

import { dummyDriversData } from '@/common/types/constants/driver';
import Table from '@/components/reusable/custom-table/table';
import TableHeader from '@/components/reusable/custom-table/table-head';
import DropdownComp from '@/components/reusable/drop-down';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { DRIVER_CATEGORIES } from '@/common/types/constants/constant';
import Button from '@/components/reusable/button';
import { DriverCategory } from '@/common/types/driver/driver.types';
import { dummyShopOwnersData } from '@/common/types/constants/shop-owners';
import ShopOwnersTableBody from './shop-owners-table-body';

// interface DriversDataTableProps {
//   setCurrentStep: Dispatch<SetStateAction<string>>;
//   setDriverId: Dispatch<SetStateAction<string>>;
// }

const ShopOwnersDataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchShopOwner, setSearchShopOwner] = useState('');

  const shopOwnersTableHeader = [
    'Driver',
    'Email',
    'Phone Number',
    'Store Name',
    'Store Address',
    'Action',
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
              value={searchShopOwner}
              onChange={e => {
                e.preventDefault();
                setSearchShopOwner(e.target.value);
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
      <h1 className='text-[34px] font-semibold'>Shop Owners</h1>

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
          <TableHeader tableHeader={shopOwnersTableHeader} />
          <tbody>
            {/* User rows */}
            {dummyShopOwnersData?.length > 0 &&
              dummyShopOwnersData?.map((shopOwner, index) => (
                <ShopOwnersTableBody
                  id={shopOwner?.id}
                  email={shopOwner?.email}
                  driver={shopOwner?.driver}
                  phoneNumber={shopOwner?.phoneNumber}
                  storeAddress={shopOwner?.phoneNumber}
                  storeName={shopOwner?.storeName}
                  key={shopOwner?.id}
                  profilePicture={shopOwner?.profilePicture}
                />
              ))}

            {dummyShopOwnersData?.length === 0 ? (
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

export default ShopOwnersDataTable;
