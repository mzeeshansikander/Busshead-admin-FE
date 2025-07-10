'use client';

import { dummyPendingPayments } from '@/common/types/constants/dashboard';
import Table from '@/components/reusable/custom-table/table';
import TableHeader from '@/components/reusable/custom-table/table-head';
import { useState } from 'react';
import PendingPaymentsDataTableBody from './pending-payments-data-table-body';

const PendingPaymentsDataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const PendingPaymentsDataTableHeader = ['Driver', 'ID', 'Price', 'Action'];

  return (
    <div className='flex flex-col p-4 gap-2'>
      <h1 className='text-2xl font-semibold'>Pending Payments</h1>

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
            tableHeader={PendingPaymentsDataTableHeader}
            isEnd={false}
          />
          <tbody>
            {/* User rows */}
            {dummyPendingPayments?.length > 0 &&
              dummyPendingPayments?.map(pendingPayments => (
                <PendingPaymentsDataTableBody
                  amount={pendingPayments?.amount}
                  driverImage={pendingPayments?.driverImage}
                  driverName={pendingPayments?.driverName}
                  paymentId={pendingPayments?.paymentId}
                  key={pendingPayments?.paymentId}
                />
              ))}

            {dummyPendingPayments?.length === 0 ? (
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

export default PendingPaymentsDataTable;
