'use client';

import React from 'react';

interface ContainerWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`flex flex-col border-2 p-6 border-neutral-grey-ten rounded-3xl ${className}`}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
