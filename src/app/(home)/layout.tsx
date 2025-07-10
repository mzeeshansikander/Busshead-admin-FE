'use client';

import LogoutLogo from '@/../public/assets/icons/logout.png';
import { NAVITEMS } from '@/common/nav-items';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
// import { removeCookie } from '@/utils/storage.util';
import { usePathname, useRouter } from 'next/navigation';
import bellIcon from '@/../public/assets/images/Frame 22.png';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const NavigationContent: React.FC<{
  over: string;
  setOver: (label: string) => void;
  isMobile?: boolean;
  handleLogout: () => void;
}> = ({ over, setOver, isMobile = false, handleLogout }) => {
  const extractedPathname = usePathname();

  const pathName = extractedPathname.split('/')[1];

  return (
    <>
      {/* Logo */}
      <div className='m-4'>
        <h1 className='text-5xl font-semibold break-words'>Busshead</h1>
      </div>

      {/* Navigation Items */}
      <div className='mt-8 mx-2 flex flex-col gap-3 flex-1'>
        {NAVITEMS.map(item => (
          <React.Fragment key={item.path}>
            {isMobile ? (
              <SheetClose asChild>
                <Link href={item.path}>
                  <div
                    className={`flex gap-2 p-2 rounded cursor-pointer hover-gradient ${pathName === item?.name ? 'gradient' : ''}`}
                    onMouseOver={() => setOver(item.label)}
                    onMouseOut={() => setOver('')}
                  >
                    <Image
                      src={
                        over === item.label || pathName === item?.name
                          ? item.hoverIcon
                          : item.icon
                      }
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
                  className={`flex gap-2 p-2 rounded cursor-pointer hover-gradient ${pathName === item?.name ? 'gradient' : ''}`}
                  onMouseOver={() => setOver(item.label)}
                  onMouseOut={() => setOver('')}
                >
                  <Image
                    src={
                      over === item.label || pathName === item?.name
                        ? item.hoverIcon
                        : item.icon
                    }
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

      {/* Logout */}
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
};

const Homelayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const [over, setOver] = useState('');
  const router = useRouter();

  const handleLogout = () => {
    // removeCookie('accessToken');
    router.replace('/login');
    window.location.reload();
  };

  return (
    <div className='flex flex-row'>
      {/* Desktop Sidebar */}
      <div className='w-[16%] border-r-2 hidden sm:flex flex-col h-[98dvh] mt-4'>
        <NavigationContent
          over={over}
          setOver={setOver}
          isMobile={false}
          handleLogout={handleLogout}
        />
      </div>

      {/* Main Content */}
      <div className='md:w-[84%] w-[100vw] h-[100dvh] overflow-y-auto'>
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
