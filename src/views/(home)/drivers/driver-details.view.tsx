'use client';

import truckPicture from '@/../public/assets/images/container-truck.png';
// import profilePicture from '@/../public/assets/images/Ellipse 5.png';
import licensePicture from '@/../public/assets/images/license_front.png';
import profilePic from '@/../public/assets/images/Ellipse 5 john.png';
import pdfLogo from '@/../public/assets/images/pdf_logo.png';
import {
  dummyDriverDetails,
  dummyVehicleDetails,
} from '@/common/types/constants/driver';
import Button from '@/components/reusable/button';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { useRouter } from 'next/navigation';
import DeactivateDriverComp from '../../../components/features/(home)/drivers/[id]/deactivate-driver-comp';
import ChatButtonComp from '@/components/reusable/chat-button';
import restrictedIcon from '@/../public/assets/images/Avatar.png';
import { DriverDetailsHook } from '@/services/react-query-client/(dashboard)/drivers/driver-details-by-id';
import { VEHICLE_TYPE } from '@/common/types/vehicle/vehicle.type';
import { useDriverStore } from '@/zustand/store';
import Loader from '@/components/reusable/loader';
import { MEDIA_TYPE } from '@/common/types/media/media-type.enum';
import toast from 'react-hot-toast';
import { ApproveDriverHook } from '@/services/react-query-client/(dashboard)/drivers/approve-driver';
import axios from 'axios';
import { RejectDriverHook } from '@/services/react-query-client/(dashboard)/drivers/reject-driver';

interface DriverDetailsProps {
  driverId: string;
}

const DriverDetailsView: React.FC<DriverDetailsProps> = ({ driverId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  //Hook for driver details

  const { data: driverDetailsData, isLoading: driverDetailsDataLoading } =
    DriverDetailsHook(driverId);

  //store to get status
  const { driverStatus } = useDriverStore();

  //hook to approve reject
  const { mutateAsync: approveDriver, isPending: approveDriverPending } =
    ApproveDriverHook();

  //hook to reject driver
  const { mutateAsync: rejectDriver, isPending: rejectDriverPending } =
    RejectDriverHook();

  const handleUserClick = async (status: string) => {
    try {
      if (status === 'Approved') {
        const response = await approveDriver({
          driver_id: Number(driverId),
        });

        toast.success('Driver Approved Successfully');
      }

      const response = await rejectDriver({ driver_id: Number(driverId) });
      toast.success('Driver Rejected Successfully');

      router.push('/drivers');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || 'Something went wrong');
      } else {
        toast.error('Something went wrong');
      }
    }
  };

  if (driverDetailsDataLoading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loader className='w-8 h-8' />
      </div>
    );
  }

  return (
    <main className='flex flex-col gap-5 p-5'>
      {/* heading row */}
      <div className={`flex flex-row justify-between`}>
        <div className='flex flex-row gap-4'>
          {/* Back button */}
          <Button
            type='button'
            onClick={() => router.back()}
          >
            <GoArrowLeft className='w-[22px] h-[22px]' />
          </Button>
          <h2 className='text-xl font-semibold'>Driver Details</h2>
        </div>

        {driverStatus === 'Requested' ? (
          <div className='flex sm:flex-row flex-col gap-2'>
            {/* button for rejecting driver */}
            <Button
              className='bg-red-500 py-2.5 px-8 text-white font-medium'
              type='button'
              disabled={approveDriverPending}
              onClick={() => handleUserClick('Rejected')}
            >
              {rejectDriverPending ? (
                <Loader className='w-5 h-5' />
              ) : (
                <span>Reject</span>
              )}
            </Button>

            {/* button for approving driver */}
            <Button
              className='bg-green-primary py-2.5 px-6 text-white font-medium'
              type='button'
              onClick={() => handleUserClick('Approved')}
              disabled={rejectDriverPending}
            >
              {approveDriverPending ? (
                <Loader className='w-5 h-5' />
              ) : (
                <span>Approve</span>
              )}
            </Button>
          </div>
        ) : driverStatus === 'Approved' ? (
          <ChatButtonComp />
        ) : driverStatus === 'Rejected' ? (
          <Button
            type='button'
            className='bg-red-100 py-2 px-6 rounded-4xl'
          >
            <p className='font-medium text-red-600'>Rejected</p>
          </Button>
        ) : null}
      </div>

      {/* left container */}
      <div className='grid sm:grid-cols-2 grid-cols-1 gap-3 w-full'>
        <div className='flex flex-col gap-5'>
          {/* image container */}
          <ContainerWrapper className='gap-3'>
            <div className='flex sm:flex-row flex-col gap-3 sm:gap-0 justify-between'>
              <div className='flex flex-row gap-1.5'>
                <img
                  src={
                    driverDetailsData?.data?.driver_meta_data
                      ?.profile_image_url ?? ''
                  }
                  alt='profile picture'
                  className='h-[63px] rounded-xl'
                />
                <div className='flex flex-col'>
                  <h2 className='text-2xl font-bold'>
                    {driverDetailsData?.data?.first_name ?? 'N/A'}
                    {driverDetailsData?.data?.last_name ?? 'N/A'}
                  </h2>
                  <p className='text-base'>
                    {driverDetailsData?.data?.email ?? 'N/A'}
                  </p>
                </div>
              </div>

              <Button
                type='button'
                className=' border-2 rounded-3xl p-2 px-3'
              >
                <span className='text-dark-blue-primary'>En Route</span>
              </Button>
            </div>

            {/* Details Container */}
            <ContainerWrapper className='gap-3'>
              <div className='grid grid-cols-1 gap-y-4 '>
                <div className='grid grid-cols-2 '>
                  <h3 className='font-medium border-b-2 pb-2'>First Name</h3>
                  <p className='border-b-2 pb-2'>
                    {driverDetailsData?.data?.first_name ?? 'N/A'}
                  </p>
                </div>

                <div className='grid grid-cols-2'>
                  <h3 className='font-medium border-b-2 pb-2'>Last Name</h3>
                  <p className='border-b-2 pb-2'>
                    {driverDetailsData?.data?.last_name ?? 'N/A'}
                  </p>
                </div>

                <div className='grid grid-cols-2'>
                  <h3 className='font-medium border-b-2 pb-2'>Email</h3>
                  <p className='border-b-2 pb-2 break-words'>
                    {driverDetailsData?.data?.email ?? 'N/A'}
                  </p>
                </div>

                <div className='grid grid-cols-2'>
                  <h3 className='font-medium border-b-2 pb-2'>Phone Number</h3>
                  <p className='border-b-2 pb-2'>
                    {driverDetailsData?.data?.driver_meta_data?.phone_number ??
                      'N/A'}
                  </p>
                </div>

                <div className='grid grid-cols-2'>
                  <h3 className='font-medium '>Date of Birth</h3>
                  <p className=''>
                    {driverDetailsData?.data?.driver_meta_data?.date_of_birth ??
                      'N/A'}
                  </p>
                </div>
              </div>
            </ContainerWrapper>
          </ContainerWrapper>

          {/* Driving License Container */}
          <ContainerWrapper className='gap-3'>
            <h3 className='font-medium text-lg'>Driving License</h3>
            <div className='flex sm:flex-row sm:justify-center flex-col'>
              {/* front side */}
              <div className='flex flex-col items-center gap-2 sm:gap-0'>
                <img
                  //  src={driverDetailsData?.data?.driver_license_media?.filter}
                  src={
                    driverDetailsData?.data?.driver_license_media?.find(
                      item => item.is_front === true,
                    )?.media_url
                  }
                  alt='license front side'
                  className='w-[189px] h-[111px]'
                />
                <p className='text-center'>Front</p>
              </div>
              {/* front side */}
              <div className='flex flex-col items-center'>
                <img
                  src={
                    driverDetailsData?.data?.driver_license_media?.find(
                      item => item.is_front === false,
                    )?.media_url
                  }
                  alt='license back side'
                  className='w-[189px] h-[111px]'
                />
                <p className='text-center'>Back</p>
              </div>
            </div>
          </ContainerWrapper>

          {/* Account Restriction Container */}
          <ContainerWrapper className='gap-3'>
            <div className='flex flex-col gap-6'>
              <div className='flex flex-row gap-1'>
                <Image
                  src={restrictedIcon}
                  alt='restricted icon'
                />
                <p className='font-medium text-lg mt-4.5'>Account Restricted</p>
              </div>
              <Button
                type='button'
                className=' bg-red-500 p-2 px-4 ml-3'
                onClick={() => setIsOpen(true)}
              >
                <span className='text-white font-medium text-sm'>
                  Deactivate
                </span>
              </Button>
            </div>
          </ContainerWrapper>
        </div>

        {/* right container */}
        <ContainerWrapper className='gap-3'>
          <h2 className='text-lg font-medium'>Vehicle Details</h2>
          <img
            src={
              driverDetailsData?.data?.media?.find(
                item => item.media_type === MEDIA_TYPE.VEHICLE,
              )?.media_url
            }
            alt='truck picture'
            className='w-[345px] h-[230px] mx-auto'
          />

          {/* Vehicle Details*/}
          <ContainerWrapper className='gap-3'>
            <div className='grid grid-cols-1 gap-y-4 '>
              <div className='grid grid-cols-2 '>
                <h3 className='font-medium border-b-2 pb-2'>Vehicle Type</h3>
                <p className='border-b-2 pb-2'>
                  {driverDetailsData?.data?.driver_vehicle?.vehicle_type ===
                  VEHICLE_TYPE.TRUCK
                    ? 'Truck'
                    : 'N/A'}
                </p>
              </div>

              <div className='grid grid-cols-2'>
                <h3 className='font-medium border-b-2 pb-2'>Plate Number</h3>
                <p className='border-b-2 pb-2'>
                  {driverDetailsData?.data?.driver_vehicle?.plate_number ??
                    'N/A'}
                </p>
              </div>

              <div className='grid grid-cols-2'>
                <h3 className='font-medium border-b-2 pb-2'>Make</h3>
                <p className='border-b-2 pb-2'>
                  {driverDetailsData?.data?.driver_vehicle?.manufacture_year ??
                    'N/A'}
                </p>
              </div>

              <div className='grid grid-cols-2'>
                <h3 className='font-medium border-b-2 pb-2'>Model</h3>
                <p className='border-b-2 pb-2'>
                  {driverDetailsData?.data?.driver_vehicle?.model ?? 'N/A'}
                </p>
              </div>

              <div className='grid grid-cols-2'>
                <h3 className='font-medium border-b-2 pb-2'>
                  Year of Manufacture
                </h3>
                <p className='border-b-2 pb-2'>
                  {driverDetailsData?.data?.driver_vehicle?.manufacture_year ??
                    'N/A'}
                </p>
              </div>

              <div className='grid grid-cols-2'>
                <h3 className='font-medium '>Load Capacity</h3>
                <p className=''>
                  {driverDetailsData?.data?.driver_vehicle?.load_capacity} kg
                </p>
              </div>
            </div>
          </ContainerWrapper>

          <h3 className='font-medium text-lg'>Registration Certificate</h3>

          {/* Registration Certificate Pdf Container */}
          <ContainerWrapper className='gap-3'>
            <a
              href={
                driverDetailsData?.data?.media.find(
                  item =>
                    item.media_type === MEDIA_TYPE.REGISTRATION_CERTIFICATE,
                )?.media_url
              }
              target='blank'
            >
              <div className='flex flex-row gap-4'>
                <Image
                  src={pdfLogo}
                  alt='pdf logo'
                />

                <div className='flex flex-col gap-2.5'>
                  <p className='text-sm font-medium'>
                    Registration Certificate
                  </p>
                  <p className='text-sm text-grey-medium'>PDF</p>
                </div>
              </div>
            </a>
          </ContainerWrapper>
        </ContainerWrapper>
      </div>

      <DeactivateDriverComp
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </main>
  );
};

export default DriverDetailsView;
