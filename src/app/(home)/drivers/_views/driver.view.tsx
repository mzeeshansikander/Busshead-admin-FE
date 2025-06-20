'use client';

import { DRIVER_CATEGORIES } from '@/common/types/constants/constant';
import { DriverCategory } from '@/common/types/driver/driver.types';
import Button from '@/components/reusable/button';
import { useState } from 'react';
import DriversDataTable from '../_components/drivers-data-table/drivers-data-table';
import { GoArrowLeft } from 'react-icons/go';

const DriversView = () => {
  //   return <DriversDataTable />;
  return (
    <main className='p-5'>
      {/* heading row */}
      <div className='flex flex-row justify-between'>
        <div className='flex gap-4'>
          {/* Back button */}
          <Button type='button'>
            <GoArrowLeft className='w-[24px] h-[24px]' />
          </Button>
          <h2 className='text-xl font-semibold'>Driver Details</h2>
        </div>

        <Button type='button'>Chat</Button>
      </div>
    </main>
  );
};

export default DriversView;
