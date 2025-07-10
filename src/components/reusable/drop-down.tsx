'use client';

import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { DriverCategory } from '@/common/types/driver/driver.types';
import { SlLocationPin } from 'react-icons/sl';

type DropdownCompProps = {
  selected?: string | null | DriverCategory;
  onChange?: (value: string) => void;
  label?: string;
  valuesToMap?: string[];
  classNameforLabel?: string;
  iconShow?: boolean;
};

function DropdownComp({
  selected,
  onChange,
  label,
  valuesToMap,
  classNameforLabel,
  iconShow,
}: DropdownCompProps) {
  return (
    <div className='flex-shrink-0'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type='button'
            className={`inline-flex items-center w-full justify-between h-[42px] px-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 min-w-[140px] ${classNameforLabel}`}
          >
            <div className='flex flex-row gap-3'>
              {iconShow && <SlLocationPin className='mt-1 text-[16px]' />}
              <p>{selected || label}</p>
            </div>

            <ChevronDown className='h-4 w-4 ml-2 text-gray-400' />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='w-[var(--radix-dropdown-menu-trigger-width)] bg-white border border-gray-200 rounded-md shadow-lg z-50 p-1'
          sideOffset={0}
        >
          {valuesToMap ? (
            valuesToMap.map((type, index) => (
              <DropdownMenuItem
                key={index}
                onSelect={() => onChange && onChange(type)}
                className='px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer outline-none'
              >
                {type}
              </DropdownMenuItem>
            ))
          ) : (
            <></>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DropdownComp;
