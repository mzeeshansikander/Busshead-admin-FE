import React from 'react';
import Image from 'next/image';
import Button from './button';
import chatIcon from '@/../public/assets/images/message-text.png';

interface ChatButtonProps {
  onClick?: () => void;
}

const ChatButtonComp: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <Button
      type='button'
      className='gradient py-2 px-6 hover-gradient-shimmer'
      onClick={onClick}
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
  );
};

export default ChatButtonComp;
