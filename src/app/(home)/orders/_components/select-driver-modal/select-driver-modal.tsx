'use client';

import driverPic from '@/../public/assets/images/Ellipse 5 john.png';
import { dummyDriversData } from '@/common/types/constants/driver';
import Button from '@/components/reusable/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (_isOpen: boolean) => void;
}

const SelectDriverModalComp = ({ isOpen, setIsOpen }: ModalProps) => {
  const [searchDriver, setSearchDriver] = useState('');
  const [selectedDrivers, setSelectedDrivers] = useState<string[]>([]);

  if (!isOpen) return null;

  const checkValues = () => {
    console.log('checking it', selectedDrivers);
    setIsOpen(false);
    setSelectedDrivers([]);
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        {/* Overlay */}
        {isOpen && <div className='fixed inset-0 bg-black/50 z-50' />}

        <DialogContent className='fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg'>
          <DialogTitle className='sr-only'>Select Driver</DialogTitle>

          <div className='flex flex-col h-[700px]'>
            {/* Header */}
            <div className='px-6 pt-6 pb-4'>
              <div className='flex justify-between'>
                <h2 className='text-2xl font-semibold  mb-4 '>Select Driver</h2>
                <Button
                  type='button'
                  onClick={() => setIsOpen(false)}
                >
                  <IoClose className='w-5 h-5 p-1 bg-neutral-grey-fifty rounded-2xl text-white mt-2' />
                </Button>
              </div>
              {/* Search Input */}
              <div className='relative'>
                <Input
                  type='text'
                  name='search'
                  id='search'
                  value={searchDriver}
                  onChange={e => {
                    e.preventDefault();
                    setSearchDriver(e.target.value);
                  }}
                  placeholder='Search Driver'
                  className='h-[42px] w-full pl-4 pr-4 border border-gray-300 rounded-md'
                />
              </div>
            </div>

            {/* Scrollable Driver List */}
            <div className='flex-1 overflow-y-auto px-6'>
              <div className=''>
                {dummyDriversData.map((driver, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors'
                  >
                    <div className='flex gap-1.5'>
                      <Image
                        src={driverPic}
                        alt='driver picture'
                        width={36}
                        height={36}
                        className='rounded-full'
                      />

                      <p className='text-[14px] mt-2 font-medium text-gray-900'>
                        {driver?.driver}
                      </p>
                    </div>

                    <Checkbox
                      className='border-2 border-[#B6C2C3] mt-1.5 '
                      checked={selectedDrivers.includes(driver.id)}
                      onCheckedChange={checked =>
                        setSelectedDrivers(prev =>
                          checked
                            ? [...prev, driver.id]
                            : prev.filter(id => id !== driver.id),
                        )
                      }
                    />
                  </div>
                ))}
              </div>

              {/* No results message */}
              {dummyDriversData.length === 0 && (
                <div className='text-center py-8 text-gray-500'>
                  No drivers found
                </div>
              )}
            </div>

            {/* Footer with Assign Button */}
            <div className='px-6 py-4 '>
              <Button
                type='button'
                onClick={checkValues}
                disabled={selectedDrivers.length === 0}
                className='w-full gradient  text-black font-medium py-3 rounded-md disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Assign
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SelectDriverModalComp;
