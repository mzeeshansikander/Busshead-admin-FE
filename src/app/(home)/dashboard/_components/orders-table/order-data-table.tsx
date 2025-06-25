'use client';

import { dummyNewOrdersData } from '@/common/types/constants/dashboard';
import Table from '@/components/reusable/custom-table/table';
import TableHeader from '@/components/reusable/custom-table/table-head';
import { useState } from 'react';
import OrdersDataTableBody from './order-data-table-body';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { ShopOwnerTabs } from '@/common/types/shop-owner/shop-owner.types';
import { SHOP_OWNER_TABS } from '@/common/types/constants/constant';
import Button from '@/components/reusable/button';

interface OrderDataTableProps {
  isHidden?: boolean;
}

const OrdersDataTable: React.FC<OrderDataTableProps> = ({ isHidden }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchShopOwner, setSearchShopOwner] = useState('');
  const [shopOwnerTab, setShopOwnerTab] = useState<ShopOwnerTabs>('Pending');

  const ordersDataTableHeader = [
    'Order ID',
    'Shop Owner',
    'Driver',
    'Delivery Date',
    'Payment',
    'Address',
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
      {isHidden ? (
        <div>
          <h1 className='text-[34px] font-semibold'>Orders</h1>

          {/*  category selection buttons */}
          <div className='flex gap-4 mt-4'>
            {SHOP_OWNER_TABS.map(shopOwner => (
              <Button
                key={shopOwner}
                onClick={() => setShopOwnerTab(shopOwner)}
                className={`px-4 py-2 rounded-none pb-2  transition-all duration-200  ${
                  shopOwnerTab === shopOwner
                    ? 'text-green-sec  border-b-2 border-green-sec '
                    : ''
                }`}
                type='button'
              >
                {shopOwner}
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}

      {/* Orders Data Table */}
      <div className='mt-3'>
        <Table
          header={isHidden ? SearchHeader() : ''}
          currentPage={currentPage}
          rowsOption={[10, 20, 30, 40]}
          rowsPerPage={rowsPerPage}
          setCurrentPage={setCurrentPage}
          setRowsPerPage={setRowsPerPage}
          total={20}
          isFooter={isHidden ? true : false}

          // isPending={isLoading}
        >
          <TableHeader
            tableHeader={ordersDataTableHeader}
            isEnd={false}
          />
          <tbody>
            {/* User rows */}
            {dummyNewOrdersData?.length > 0 &&
              dummyNewOrdersData?.map((order, index) => (
                <OrdersDataTableBody
                  key={order?.orderId}
                  orderId={order?.orderId}
                  address={order?.address}
                  deliveryDate={order?.deliveryDate}
                  driver={order?.driver}
                  payment={order?.payment}
                  shopOwner={order?.shopOwner}
                  shopOwnerImage={order?.shopOwnerImage}
                />
              ))}

            {dummyNewOrdersData?.length === 0 ? (
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

export default OrdersDataTable;
