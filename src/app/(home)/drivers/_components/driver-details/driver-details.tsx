'use client';

import truckPicture from '@/../public/assets/images/container-truck.png';
import profilePicture from '@/../public/assets/images/Ellipse 5.png';
import licensePicture from '@/../public/assets/images/license_front.png';
import chatIcon from '@/../public/assets/images/message-text.png';
import pdfLogo from '@/../public/assets/images/pdf_logo.png';
import {
  dummyDriverDetails,
  dummyVehicleDetails,
} from '@/common/types/constants/driver';
import Button from '@/components/reusable/button';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import { Dialog } from '@/components/ui/dialog';
import { DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import DeactivateDriverComp from '../deactivate-driver-comp/deactivate-driver-comp';

interface DriverDetailsProps {
  driverId: string | null;
  setCurrentStep: Dispatch<SetStateAction<string>>;
}

const DriversDetails: React.FC<DriverDetailsProps> = ({
  driverId,
  setCurrentStep,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className='flex flex-col gap-5 p-5'>
      {/* heading row */}
      <div className='flex flex-row justify-between'>
        <div className='flex gap-4'>
          {/* Back button */}
          <Button
            type='button'
            onClick={() => setCurrentStep && setCurrentStep('driversDataTable')}
          >
            <GoArrowLeft className='w-[22px] h-[22px]' />
          </Button>
          <h2 className='text-xl font-semibold'>Driver Details</h2>
        </div>

        {dummyDriverDetails?.status === 'pending' ? (
          <div className='flex flex-row gap-2'>
            <Button className='bg-red-500 py-2.5 px-8 text-white font-medium'>
              Reject
            </Button>
            <Button className='bg-green-primary py-2.5 px-6 text-white font-medium'>
              Approve
            </Button>
          </div>
        ) : dummyDriverDetails?.status === 'approved' ? (
          <Button
            type='button'
            className='gradient py-2 px-6'
          >
            <div className='flex flex-row gap-2'>
              <Image
                src={chatIcon}
                alt='chat icon'
                className='w-[20px] h-[20px] mt-0.5'
              />
              <p className='font-medium'>Chat</p>
            </div>
          </Button>
        ) : dummyDriverDetails?.status === 'rejected' ? (
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
          <ContainerWrapper>
            <div className='flex sm:flex-row flex-col gap-3 sm:gap-0 justify-between'>
              <div className='flex flex-row'>
                <Image
                  src={profilePicture}
                  alt='profile picture'
                />
                <div className='flex flex-col'>
                  <h2 className='text-2xl font-bold'>
                    {dummyDriverDetails?.firstName}
                    {dummyDriverDetails?.lastName}
                  </h2>
                  <p className='text-base'>{dummyDriverDetails?.email}</p>
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
            <ContainerWrapper>
              <div className='grid grid-cols-1 gap-y-4 '>
                <div className='grid grid-cols-2 '>
                  <h3 className='font-medium border-b-2 pb-2'>First Name</h3>
                  <p className='border-b-2 pb-2'>
                    {dummyDriverDetails?.firstName}
                  </p>
                </div>

                <div className='grid grid-cols-2'>
                  <h3 className='font-medium border-b-2 pb-2'>Last Name</h3>
                  <p className='border-b-2 pb-2'>
                    {dummyDriverDetails?.lastName}
                  </p>
                </div>

                <div className='grid grid-cols-2'>
                  <h3 className='font-medium border-b-2 pb-2'>Email</h3>
                  <p className='border-b-2 pb-2 break-words'>
                    {dummyDriverDetails?.email}
                  </p>
                </div>

                <div className='grid grid-cols-2'>
                  <h3 className='font-medium border-b-2 pb-2'>Phone Number</h3>
                  <p className='border-b-2 pb-2'>
                    {dummyDriverDetails?.phoneNumber}
                  </p>
                </div>

                <div className='grid grid-cols-2'>
                  <h3 className='font-medium '>Date of Birth</h3>
                  <p className=''>{dummyDriverDetails?.dateOfBirth}</p>
                </div>
              </div>
            </ContainerWrapper>
          </ContainerWrapper>

          {/* Driving License Container */}
          <ContainerWrapper>
            <h3 className='font-medium text-lg'>Driving License</h3>
            <div className='flex sm:flex-row sm:justify-center flex-col'>
              {/* front side */}
              <div className='flex flex-col items-center gap-1 sm:gap-0'>
                <Image
                  src={licensePicture}
                  alt='license front side'
                  className='w-[189px] h-[111px]'
                />
                <p className='text-center'>Front</p>
              </div>
              {/* front side */}
              <div className='flex flex-col items-center'>
                <Image
                  src={licensePicture}
                  alt='license back side'
                  className='w-[189px] h-[111px]'
                />
                <p className='text-center'>Back</p>
              </div>
            </div>
          </ContainerWrapper>

          {/* Account Restriction Container */}
          <ContainerWrapper>
            <div className='flex flex-col gap-7'>
              <div className='flex flex-row gap-7'>
                <p>icon</p>
                <p className='font-medium text-lg'>Account Restricted</p>
              </div>
              <Button
                type='button'
                className=' bg-red-500 p-2 px-4'
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
        <ContainerWrapper>
          <h2 className='text-lg font-medium'>Vehicle Details</h2>
          <Image
            src={truckPicture}
            alt='truck picture'
            className='w-[345px] h-[230px] mx-auto'
          />

          {/* Vehicle Details*/}
          <ContainerWrapper>
            <div className='grid grid-cols-1 gap-y-4 '>
              <div className='grid grid-cols-2 '>
                <h3 className='font-medium border-b-2 pb-2'>Vehicle Type</h3>
                <p className='border-b-2 pb-2'>
                  {dummyVehicleDetails?.vehicleType}
                </p>
              </div>

              <div className='grid grid-cols-2'>
                <h3 className='font-medium border-b-2 pb-2'>Plate Number</h3>
                <p className='border-b-2 pb-2'>
                  {dummyVehicleDetails?.plateNumber}
                </p>
              </div>

              <div className='grid grid-cols-2'>
                <h3 className='font-medium border-b-2 pb-2'>Make</h3>
                <p className='border-b-2 pb-2'>{dummyVehicleDetails?.make}</p>
              </div>

              <div className='grid grid-cols-2'>
                <h3 className='font-medium border-b-2 pb-2'>Model</h3>
                <p className='border-b-2 pb-2'>{dummyVehicleDetails?.model}</p>
              </div>

              <div className='grid grid-cols-2'>
                <h3 className='font-medium '>Year of Manufacture</h3>
                <p className=''>{dummyVehicleDetails?.yearOfManufacture}</p>
              </div>

              <div className='grid grid-cols-2'>
                <h3 className='font-medium '>Load Capacity</h3>
                <p className=''>{dummyVehicleDetails?.loadCapacity} kg</p>
              </div>
            </div>
          </ContainerWrapper>

          <h3 className='font-medium text-lg'>Registration Certificate</h3>

          {/* Registration Certificate Pdf Container */}
          <ContainerWrapper>
            <div className='flex flex-row gap-4'>
              <Image
                src={pdfLogo}
                alt='pdf logo'
              />
              <div className='flex flex-col gap-2.5'>
                <p className='text-sm font-medium'>Registration Ceritificate</p>
                <p className='text-sm text-grey-medium'>PDF</p>
              </div>
            </div>
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

export default DriversDetails;
