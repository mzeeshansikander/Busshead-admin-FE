import React from 'react';

interface LoaderProps {
  className?: string;
}

const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div
      className={`border-2 mx-auto border-black border-t-transparent rounded-full animate-spin ${className}`}
    />
  );
};

export default Loader;
