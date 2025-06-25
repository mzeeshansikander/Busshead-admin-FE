'use client';
import { dashboardCards } from '@/common/types/constants/dashboard';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import Image from 'next/image';
import DriverRequestsDataTable from '../_components/drivers-request-table/driver-requests-table';
import OrdersDataTable from '../_components/orders-table/order-data-table';
import PendingPaymentsDataTable from '../_components/pending-payments-table/pending-payments-data-table';

const DashboardView = () => {
  return (
    <main className='flex flex-col p-5 gap-3'>
      <h1 className='text-[34px] font-semibold'>Dashboard</h1>

      {/* Dashboard details data */}
      <div className='grid sm:grid-cols-3 grid-cols-1 gap-3'>
        {dashboardCards.map(
          ({ value, title, id, className, icon, altText }) => (
            <ContainerWrapper
              key={id}
              className={className}
            >
              <Image
                src={icon}
                alt={altText}
              />
              <p className='text-lg text-neutral-grey-sixty mt-1.5'>{title}</p>
              <h3 className='text-[23px] font-bold'>{value}</h3>
            </ContainerWrapper>
          ),
        )}
      </div>

      <div className='flex flex-row justify-between mt-2'>
        <h2 className='text-2xl font-semibold'>New Orders</h2>
        <p className='font-semibold text-green-secondary'>View all</p>
      </div>

      {/* order table */}
      <OrdersDataTable isHidden={false} />

      <div className='grid sm:grid-cols-2 grid-cols-1 gap-3'>
        <PendingPaymentsDataTable />
        <DriverRequestsDataTable />
      </div>
    </main>
  );
};

export default DashboardView;
