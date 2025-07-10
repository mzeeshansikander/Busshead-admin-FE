'use client';
import johnImg from '@/../public/assets/images/Ellipse 5 john.png';
import {
  dummyChatHeadsData,
  dummyMessagesData,
} from '@/common/types/constants/chat';
import { USER_TYPES } from '@/common/types/constants/constant';
import { UserCategory } from '@/common/types/users/users.types';
import Button from '@/components/reusable/button';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import { Input } from '@/components/ui/input';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, MoreHorizontal, Search, Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const ChatView = () => {
  const [searchUser, setSearchUser] = useState('');
  const [userType, setUserType] = useState<UserCategory>('Shop Owners');
  const [selectedChat, setSelectedChat] = useState(dummyChatHeadsData[0]);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Filter chat heads based on user type and search
  const filteredChatHeads = dummyChatHeadsData.filter(chat => {
    const matchesType =
      userType === 'Shop Owners'
        ? chat.type === 'shopOwner'
        : chat.type === 'driver';
    const matchesSearch = chat.name
      .toLowerCase()
      .includes(searchUser.toLowerCase());
    return matchesType && matchesSearch;
  });

  const handleChatSelect = (chat: (typeof dummyChatHeadsData)[0]) => {
    setSelectedChat(chat);
    setIsSheetOpen(false);
  };

  const ChatSidebar = () => (
    <div className='flex flex-col h-full'>
      {/* Search Bar */}
      <div className='p-3 sm:p-4 border-b border-gray-50'>
        <div className='relative'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4' />
          <Input
            type='text'
            value={searchUser}
            onChange={e => setSearchUser(e.target.value)}
            placeholder='Search conversations...'
            className='h-10 w-full pl-10 pr-4 border-gray-200 rounded-lg 
                       focus:ring-2 focus:ring-yellow-500 focus:border-transparent
                       text-sm placeholder:text-gray-400'
          />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className='flex  mx-3 sm:mx-4 mt-2 rounded-lg p-1'>
        {USER_TYPES.map(user => (
          <Button
            key={user}
            onClick={() => setUserType(user)}
            className={`px-4 py-2 rounded-none pb-2  transition-all duration-200  ${
              userType === user
                ? 'text-green-sec  border-b-2 border-green-sec '
                : ''
            }`}
            type='button'
          >
            {user}
          </Button>
        ))}
      </div>

      {/* Chat Heads List */}
      <div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent'>
        <div className='p-2'>
          {filteredChatHeads.length > 0 ? (
            filteredChatHeads.map(chathead => (
              <div
                key={chathead.id}
                onClick={() => handleChatSelect(chathead)}
                className={`flex items-center gap-3 p-3 cursor-pointer rounded-lg 
                         transition-all duration-200 hover:bg-gray-50 group ${
                           selectedChat.id === chathead.id
                             ? 'bg-neutral-100 shadow-sm'
                             : 'hover:shadow-sm'
                         }`}
              >
                <div className='relative flex-shrink-0'>
                  <Image
                    src={johnImg}
                    alt={`${chathead.name} avatar`}
                    className='w-11 h-11 rounded-full object-cover ring-2 ring-gray-100'
                  />
                </div>

                <div className='flex-1 min-w-0'>
                  <div className='flex items-center justify-between mb-1'>
                    <h3 className='font-semibold text-gray-900 truncate text-sm'>
                      {chathead.name}
                    </h3>
                    <span
                      className='text-xs text-gray-500 whitespace-nowrap ml-2 
                                 group-hover:text-gray-600'
                    >
                      {chathead.lastSeen}
                    </span>
                  </div>
                  <p className='text-xs text-gray-600 truncate leading-relaxed'>
                    {chathead.lastMessage}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className='flex flex-col items-center justify-center py-8 text-center'>
              <div className='w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3'>
                <Search className='w-6 h-6 text-gray-400' />
              </div>
              <p className='text-sm text-gray-500'>No conversations found</p>
              <p className='text-xs text-gray-400 mt-1'>
                Try adjusting your search
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <main className='container p-10 flex flex-col  '>
      {/* Header */}
      <div className='flex items-center justify-between mb-4 sm:mb-6'>
        <div className='flex items-center gap-3'>
          <Sheet
            open={isSheetOpen}
            onOpenChange={setIsSheetOpen}
          >
            <SheetTrigger asChild>
              <button className='lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors'>
                <Menu className='w-5 h-5' />
              </button>
            </SheetTrigger>
            <SheetContent
              side='left'
              className='w-80 sm:w-96 p-0'
            >
              <SheetHeader className='p-4 border-b border-gray-100'>
                <SheetTitle>Conversations</SheetTitle>
              </SheetHeader>
              <ChatSidebar />
            </SheetContent>
          </Sheet>

          <h1 className='text-xl sm:text-2xl font-semibold text-gray-900'>
            {userType === 'Shop Owners' ? 'Shop Owners' : 'Chat'}
          </h1>
        </div>
      </div>

      <ContainerWrapper className='flex-1 bg-white rounded-xl shadow-sm overflow-hidden'>
        <div className='flex h-full relative'>
          {/* Desktop Chat List Sidebar */}
          <div className='hidden lg:flex lg:min-w-[320px] xl:min-w-[380px] bg-white border-r border-gray-100 flex-col'>
            <ChatSidebar />
          </div>

          {/* Chat Messages Area */}
          <div className='flex-1 flex flex-col min-w-0'>
            {/* Chat Header */}
            <div className='flex items-center gap-3 p-3 sm:p-4 border-b-2 border-gray-100 bg-white'>
              <Image
                src={johnImg}
                alt={`${selectedChat.name} avatar`}
                className='w-10 h-10 rounded-full object-cover ring-2 ring-gray-100'
              />
              <div className='flex-1 min-w-0'>
                <h2 className='font-semibold text-gray-900 truncate text-sm sm:text-base'>
                  {selectedChat.name}
                </h2>
                <p className='text-xs sm:text-sm text-gray-500 capitalize'>
                  {selectedChat.type === 'shopOwner' ? 'Shop Owner' : 'Driver'}{' '}
                  • {selectedChat.lastSeen}
                </p>
              </div>
              <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0'>
                <MoreHorizontal className='w-5 h-5' />
              </button>
            </div>

            {/* Messages Container */}
            <div
              className='flex-1 overflow-y-auto p-3 sm:p-4  
                          scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent'
            >
              <div className='space-y-3 sm:space-y-4 max-w-4xl mx-auto'>
                {dummyMessagesData.map(message => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'self' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className='max-w-[85%] sm:max-w-xs lg:max-w-md xl:max-w-lg'>
                      <div
                        className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-2xl shadow-sm ${
                          message.sender === 'self'
                            ? 'gradient text-black ml-auto hover-gradient-shimmer'
                            : 'bg-white text-gray-900 border border-gray-100'
                        }`}
                      >
                        <p className='text-sm leading-relaxed break-words'>
                          {message.message}
                        </p>
                      </div>
                      <p
                        className={`text-xs text-gray-500 mt-1.5 px-1 ${
                          message.sender === 'self' ? 'text-right' : 'text-left'
                        }`}
                      >
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Message Input */}
            <div className='p-3 sm:p-4 border-t border-gray-100 bg-white'>
              <div className='flex items-end gap-2 sm:gap-3 max-w-4xl mx-auto'>
                <div className='flex-1 relative'>
                  <Input
                    type='text'
                    placeholder='Type your message...'
                    className='w-full py-3 px-4 pr-12 border-gray-200 rounded-2xl 
                             focus:ring-2 
                             text-sm resize-none min-h-[44px] max-h-32'
                  />
                </div>
                <button
                  className='p-3 gradient text-black 
                             rounded-full  
                             transition-all duration-200 shadow-md hover:shadow-lg
                             active:scale-95 flex-shrink-0'
                >
                  <Send className='w-5 h-5' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </main>
  );
};

export default ChatView;
