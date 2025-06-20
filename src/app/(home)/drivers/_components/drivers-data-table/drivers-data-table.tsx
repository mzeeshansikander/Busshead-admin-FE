import { dummyDriversData } from '@/common/types/constants/driver';
import Table from '@/components/reusable/custom-table/table';
import TableHeader from '@/components/reusable/custom-table/table-head';
import DropdownComp from '@/components/reusable/drop-down';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import React, { useState } from 'react';
import DriversTableBody from './drivers-table-body';
import { DRIVER_CATEGORIES } from '@/common/types/constants/constant';
import Button from '@/components/reusable/button';
import { DriverCategory } from '@/common/types/driver/driver.types';

const DriversDataTable = () => {
  const [driverCategory, setDriverCategory] =
    useState<DriverCategory>('Approved');

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedType, setSelectedType] = useState('');
  const [searchDriver, setSearchDriver] = useState('');
  const [status, setStatus] = useState('');

  const statuses = ['en route', 'active'];

  const driversTableHeader = [
    'Driver',
    'Vehicle',
    'Email',
    'Phone Number',
    'Status',
    'Action',
  ];

  const SearchHeader = () => {
    return (
      <div className='w-full p-4 bg-white border-b'>
        <div className='flex gap-4'>
          {/* Search Input */}
          <div className='relative flex-1'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Search className='h-4 w-4 text-gray-400' />
            </div>
            <Input
              type='text'
              name='search'
              id='search'
              value={searchDriver}
              onChange={e => {
                e.preventDefault();
                setSearchDriver(e.target.value);
              }}
              placeholder='Search users...'
              className='h-[42px] w-full pl-10 pr-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-'
            />
          </div>

          {/* User Type Selector */}
          <div className='flex-shrink-0'>
            <DropdownComp
              selected={status}
              onChange={setStatus}
              label='Status'
              valuesToMap={statuses}
            />
          </div>
        </div>
      </div>
    );
  };
  const headerComponent = <SearchHeader />;

  return (
    <div className='flex flex-col p-4'>
      <h1 className='text-[34px] font-semibold'>Drivers</h1>

      {/*  category selection buttons */}
      <div className='flex gap-4 mt-4'>
        {DRIVER_CATEGORIES.map(category => (
          <Button
            key={category}
            onClick={() => setDriverCategory(category)}
            className={`px-4 py-2 rounded-none pb-2  transition-all duration-200     ${
              driverCategory === category
                ? 'text-green-sec  border-b-2 border-green-sec '
                : ''
            }`}
            type='button'
          >
            {category}
          </Button>
        ))}
      </div>

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
          <TableHeader tableHeader={driversTableHeader} />
          <tbody>
            {/* User rows */}
            {dummyDriversData.length > 0 &&
              dummyDriversData.map((driver, index) => (
                <DriversTableBody
                  id={driver?.id}
                  email={driver?.email}
                  name={driver?.driver}
                  phoneNumber={driver?.phoneNumber}
                  image={driver.profilePicture}
                  status={driver?.status}
                  vehcile={driver?.vehicle}
                />
              ))}

            {/* No data state - rendered within table */}
            {dummyDriversData.length === 0 ? (
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

export default DriversDataTable;
