'use client';

import { dummyNewOrdersData } from '@/common/types/constants/dashboard';
import Table from '@/components/reusable/custom-table/table';
import TableHeader from '@/components/reusable/custom-table/table-head';
import { useState } from 'react';
import OrdersDataTableBody from './order-data-table-body';

const OrdersDataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const ordersDataTableHeader = [
    'Order ID',
    'Shop Owner',
    'Driver',
    'Delivery Date',
    'Payment',
    'Address',
    'Action',
  ];

  return (
    <div className='flex flex-col p-4'>
      <div>
        <Table
          currentPage={currentPage}
          rowsOption={[10, 20, 30, 40]}
          rowsPerPage={rowsPerPage}
          setCurrentPage={setCurrentPage}
          setRowsPerPage={setRowsPerPage}
          total={20}
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
