import React from 'react';

interface ContainerWrapperProps {
  children: React.ReactNode;
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({ children }) => {
  return (
    <div className='flex flex-col gap-3 border-2 p-6 border-neutral-grey-ten rounded-3xl'>
      {children}
    </div>
  );
};

export default ContainerWrapper;
