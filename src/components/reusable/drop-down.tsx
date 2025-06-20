'use client';

import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type DropdownCompProps = {
  selected: string | null;
  onChange: (value: string) => void;
  label?: string;
  valuesToMap?: string[];
};

function DropdownComp({
  selected,
  onChange,
  label,
  valuesToMap,
}: DropdownCompProps) {
  return (
    <div className='flex-shrink-0'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            type='button'
            className='inline-flex items-center justify-between h-[42px] px-4 py-2 bg-white border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 min-w-[140px]'
          >
            <span>{selected || label}</span>
            <ChevronDown className='h-4 w-4 ml-2 text-gray-400' />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className='min-w-[140px] bg-white border border-gray-200 rounded-md shadow-lg z-50 p-1'>
          {valuesToMap ? (
            valuesToMap.map(type => (
              <DropdownMenuItem
                key={type}
                onSelect={() => onChange(type)}
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
