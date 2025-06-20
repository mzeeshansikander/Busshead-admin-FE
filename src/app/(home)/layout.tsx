'use client';

import { NAVITEMS } from '@/common/nav-items';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import LogoutLogo from '@/../public/assets/icons/logout.png';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';
import { RxHamburgerMenu } from 'react-icons/rx';
// import { removeCookie } from '@/utils/storage.util';
import { useRouter } from 'next/navigation';
import bellIcon from '../../../public/assets/images/Frame 22.png';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const NavigationContent: React.FC<{
  over: string;
  setOver: (label: string) => void;
  isMobile?: boolean;
  handleLogout: () => void;
}> = ({ over, setOver, isMobile = false, handleLogout }) => (
  <>
    {/* Logo */}
    <div className='m-4'>
      <h1 className='text-5xl font-semibold'>Busshead</h1>
    </div>

    {/* Navigation Items */}
    <div className='mt-8 mx-2 flex flex-col gap-3 flex-1'>
      {NAVITEMS.map(item => (
        <React.Fragment key={item.path}>
          {isMobile ? (
            <SheetClose asChild>
              <Link href={item.path}>
                <div
                  className='flex gap-2 p-2 rounded cursor-pointer hover:gradient'
                  onMouseOver={() => setOver(item.label)}
                  onMouseOut={() => setOver('')}
                >
                  <Image
                    src={over === item.label ? item.hoverIcon : item.icon}
                    alt={item.label}
                    width={24}
                    height={24}
                  />
                  <p className='mr-2 text-black text-[16px]'>{item.label}</p>
                </div>
              </Link>
            </SheetClose>
          ) : (
            <Link href={item.path}>
              <div
                className='flex gap-2 p-2 rounded cursor-pointer hover:bg-gradient-( linear-gradient(90deg, #EEC340 -9.48%, #F3D95D 6.14%, #FDF383 18.33%, #F6E66C 36.52%, #E2B527 64.41%, #F3DC62 91.45%, #FFFB8D 110.67%);
)'
                onMouseOver={() => setOver(item.label)}
                onMouseOut={() => setOver('')}
              >
                <Image
                  src={over === item.label ? item.hoverIcon : item.icon}
                  alt={item.label}
                  width={24}
                  height={24}
                />
                <p className='mr-2 text-black text-[16px]'>{item.label}</p>
              </div>
            </Link>
          )}
        </React.Fragment>
      ))}
    </div>

    {/* Logout at the bottom */}
    <button
      className='flex m-7 gap-3 mt-auto'
      onClick={handleLogout}
    >
      <Image
        src={LogoutLogo}
        alt='logout logo'
        width={24}
        height={24}
      />
      <p className='text-black cursor-pointer hover:underline'>Logout</p>
    </button>
  </>
);

const Homelayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const [over, setOver] = useState('');

  const router = useRouter();

  const handleLogout = () => {
    // removeCookie('accessToken');
    router.replace('/login');
    window.location.reload();
  };

  return (
    <div className='flex flex-row min-h-screen'>
      {/* Desktop Sidebar */}
      <div className='w-[16%] border-r-2 hidden sm:flex flex-col min-h-screen mt-4'>
        <NavigationContent
          over={over}
          setOver={setOver}
          isMobile={false}
          handleLogout={handleLogout}
        />
      </div>

      {/* Main Content */}
      <div className='md:w-[84%] w-full min-h-screen'>
        {/* Mobile Header with Hamburger Menu */}
        <div className='sm:hidden flex items-center justify-between p-4 bg-white border-b'>
          <div className='flex items-center gap-4'>
            <Sheet>
              <SheetTrigger>
                <RxHamburgerMenu className='w-6 h-6' />
              </SheetTrigger>
              <SheetContent
                side='left'
                className='bg-white min-h-screen flex flex-col p-0 border-white'
              >
                <SheetTitle></SheetTitle>
                <NavigationContent
                  over={over}
                  setOver={setOver}
                  isMobile={true}
                  handleLogout={handleLogout}
                />
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Page Content */}
        <div className='p-1 sm:p-0'>
          {/* notificaiton icon */}
          <div className='flex justify-end w-[96%]'>
            <Image
              src={bellIcon}
              alt='bell icon'
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Homelayout;
