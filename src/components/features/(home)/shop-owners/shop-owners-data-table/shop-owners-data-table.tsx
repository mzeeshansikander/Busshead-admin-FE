'use client';

import Table from '@/components/reusable/custom-table/table';
import TableHeader from '@/components/reusable/custom-table/table-head';
import { Input } from '@/components/ui/input';
import { AllShopOwnersHook } from '@/services/react-query-client/(dashboard)/shop-owners/all-shop-owners';
import { Search } from 'lucide-react';
import { useState } from 'react';
import ShopOwnersTableBody from './shop-owners-table-body';

const ShopOwnersDataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchShopOwner, setSearchShopOwner] = useState('');

  const shopOwnersTableHeader = [
    'Shop Owner',
    'Email',
    'Phone Number',
    'Store Name',
    'Store Address',
    'Action',
  ];

  const { data: AllShopOwnersData } = AllShopOwnersHook(
    currentPage.toString(),
    rowsPerPage.toString(),
    searchShopOwner,
  );

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

  console.log({ AllShopOwnersData });

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
          total={AllShopOwnersData?.data?.count}
          isFooter
          // isPending={isLoading}
        >
          <TableHeader
            tableHeader={shopOwnersTableHeader}
            isEnd={false}
          />
          <tbody>
            {/* User rows */}
            {AllShopOwnersData &&
              AllShopOwnersData?.data?.data?.length > 0 &&
              AllShopOwnersData?.data?.data?.map(shopOwner => (
                <ShopOwnersTableBody
                  id={shopOwner?.id}
                  email={shopOwner?.email}
                  shopOwner={shopOwner?.first_name + ' ' + shopOwner?.last_name}
                  phoneNumber={shopOwner?.owner_meta_data?.phone_number}
                  storeAddress={
                    shopOwner?.owner_store_locations[0]?.store_address
                  }
                  storeName={shopOwner?.owner_meta_data?.store_name}
                  key={shopOwner?.id}
                  profilePicture={shopOwner?.owner_meta_data?.profile_image_url}
                />
              ))}

            {AllShopOwnersData?.data?.data?.length === 0 ? (
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
