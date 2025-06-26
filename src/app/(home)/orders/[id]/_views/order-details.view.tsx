'use client';
import React from 'react';
// import OrdersDataTable from '@/../dashboard/_components/orders-table/order-data-table';
import Button from '@/components/reusable/button';
import { GoArrowLeft } from 'react-icons/go';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import ChatButtonComp from '@/components/reusable/chat-button';
import shopOwnerPic from '@/../public/assets/images/jane_cooper.png';
import visaPic from '@/../public/assets/images/Visa.png';
import truckRemoveImg from '@/../public/assets/images/truck-remove.png';
import Image from 'next/image';
import {
  ORDER_TOTALS,
  PRODUCTS_OBJECT,
} from '@/common/types/constants/products';
import { useRouter } from 'next/navigation';

const OrderDetailsView = () => {
  const router = useRouter();
  return (
    <main className='flex flex-col p-5 gap-5'>
      {/* heading bar */}
      <div className='flex flex-row justify-between'>
        <div className='flex flex-row gap-4'>
          <Button
            type='button'
            onClick={() => router.back()}
          >
            <GoArrowLeft className='w-[24px] h-[24px] mt-0.5' />
          </Button>

          <p className='text-[20px] font-bold'>Order # 56231LK</p>
        </div>
        <p>Button</p>
      </div>

      {/* order content part */}
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-3 w-full'>
        {/* left side */}
        <div className='flex flex-col gap-4'>
          {/* shop owner container*/}
          <ContainerWrapper className='gap-5'>
            <p className='text-lg font-medium ml-1'>Shop Owner</p>
            <div className='flex flex-row justify-between'>
              <div className='flex flex-row gap-1.5'>
                <Image
                  src={shopOwnerPic}
                  alt='shop owener pic'
                  className='w-[28px] h-[28px]'
                />
                <p>Jane Cooper</p>
              </div>
              <ChatButtonComp />
            </div>
          </ContainerWrapper>

          {/* Order Details Container */}
          <ContainerWrapper className='gap-3'>
            <h3 className='font-medium text-lg'>Order Details</h3>

            <ContainerWrapper className='gap-4'>
              <div className='flex flex-col border-b-2 gap-1'>
                <p className='text-sm font-medium'>Delivery Date</p>
                <p className='text-order-grey-color text-sm  mb-2'>
                  26 March 2025
                </p>
              </div>
              <div className='flex flex-col border-b-2 gap-1'>
                <p className='text-sm font-medium'>Delivery Address</p>
                <p className='text-order-grey-color text-sm  mb-2'>
                  20 Greenway Drive, San Diego, CA
                </p>
              </div>
              <div className='flex flex-col gap-1'>
                <p className='text-sm font-medium'>Specical Instructions</p>
                <p className='text-order-grey-color text-sm'>
                  Please deliver between 10 AM - 2 PM
                </p>
              </div>
            </ContainerWrapper>
          </ContainerWrapper>

          {/* Payment Details Container */}
          <ContainerWrapper className='gap-3'>
            <h3 className='text-lg font-medium'>Payment Details</h3>
            <div className='flex flex-row justify-between'>
              <p className='text-neutral-grey-fifty'>Payment Method</p>
              <p>Paid via Card</p>
            </div>
            <div className='flex flex-row justify-between'>
              <p className='text-neutral-grey-fifty'>Payment Status</p>
              <p className='text-active-green-sixty'>Paid</p>
            </div>

            <div className='flex flex-row gap-1 mt-3.5'>
              <Image
                src={visaPic}
                alt='visa picture'
                className='w-[54px] h-[37px]'
              />
              <div className='flex flex-col'>
                <p className='font-bold '>Albert Dan</p>
                <p className='text-neutral-grey-sixty'>**** **** **** 8774</p>
              </div>
            </div>
          </ContainerWrapper>
        </div>

        {/* right side */}
        <div className='flex flex-col gap-4'>
          {/* Assign driver container */}
          <ContainerWrapper className='gap-3'>
            <h3 className='text-lg font-medium'>Driver</h3>

            <Image
              src={truckRemoveImg}
              alt='truck remove pic'
              className='w-[55px] h-[55px] mx-auto mt-3'
            />
            <p className='text-neutral-grey-seventy text-center'>
              No drives is assigned yet
            </p>

            <div className='flex justify-center max-w-full'>
              <Button className='gradient text-black rounded-md px-4 py-2 w-full sm:w-48 md:w-56 lg:w-64 xl:w-80'>
                Assign Driver
              </Button>
            </div>
          </ContainerWrapper>

          {/* PRODUCTS_ARRAY */}
          <ContainerWrapper className='gap-6'>
            <div className='flex flex-row justify-between'>
              <h3 className='text-lg font-medium'>Products</h3>
              <p className='text-sm text-neutral-grey-fifty'>3 items</p>
            </div>

            {/* products */}
            {PRODUCTS_OBJECT.map((product, index) => (
              <div
                className='flex flex-row justify-between'
                key={index}
              >
                <div className='flex flex-row gap-2'>
                  <Image
                    src={product?.image}
                    alt={product?.title}
                    className='w-[36px] h-[36px]'
                  />
                  <div className='flex flex-col'>
                    <p className='text-sm text-neutral-grey-hundred'>
                      {product?.title}
                    </p>
                    <p className='text-sm text-neutral-grey-sixty'>
                      Qty {product.quantity}
                    </p>
                  </div>
                </div>
                <p className='font-medium text-neutral-grey-hundred text-sm mt-2'>
                  ${product?.price}
                </p>
              </div>
            ))}
          </ContainerWrapper>

          <div className='flex flex-col gap-4 mt-3'>
            {ORDER_TOTALS.map((stats, index) => (
              <div
                className='flex flex-row justify-between'
                key={index}
              >
                <p className='text-neutral-grey-fifty'>{stats?.field}</p>
                <p
                  className={`${index + 1 === ORDER_TOTALS.length ? 'text-lg font-bold' : ''}`}
                >
                  $ {stats?.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetailsView;
