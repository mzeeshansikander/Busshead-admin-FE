import mainLayoutImage from '../../../public/assets/images/Side.png';
import Image from 'next/image';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayoutComponent: React.FC<AuthLayoutProps> = ({
  children,
}) => {
  return (
    <main className='flex flex-row min-h-screen'>
      <div className='lg:flex justify-center items-center w-[60%] h-screen bg-primary text-secondary text-center hidden'>
        <Image
          src={mainLayoutImage}
          alt='login-bg'
          className='w-full h-full'
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className='flex flex-col w-full lg:w-[40%] p-14 justify-center '>
        {children}
      </div>
    </main>
  );
};

export default AuthLayoutComponent;
