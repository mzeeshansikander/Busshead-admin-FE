import trashIcon from '@/../public/assets/images/trash.png';
import Button from '@/components/reusable/button';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import Image from 'next/image';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (_isOpen: boolean) => void;
}

const DeactivateDriverComp = ({ isOpen, setIsOpen }: ModalProps) => {
  const handleCancel = () => {
    setIsOpen(false);
  };

  if (!isOpen) null;

  console.log('check is open', isOpen);

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        {/* Overlay */}
        {isOpen && <div className='fixed inset-0 bg-black/50 z-50' />}

        <DialogContent className='fixed left-1/2 top-1/2 z-50 w-full max-w-xl py-6 px-12 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg  shadow-lg'>
          <DialogTitle className='sr-only'>Deactivate Account</DialogTitle>

          <div className='flex flex-col items-center text-center space-y-4'>
            {/* Trash Icon */}
            <Image
              src={trashIcon}
              alt='trash icon'
              className='w-[114px] h-[114px]'
            />

            {/* Title */}
            <h2 className='text-[28px] font-semibold text-gray-900'>
              Are you sure you want to deactivate this account?
            </h2>

            {/* Buttons */}
            <div className='flex flex-row gap-3 w-full pt-4 '>
              <Button
                type='button'
                onClick={handleCancel}
                className='flex-1 bg-gray-200 text-gray-800 py-2 px-[105px] rounded-md hover:bg-gray-300'
              >
                No
              </Button>
              <Button
                type='button'
                className='flex-1 bg-red-500 text-white py-2 px-[90px] rounded-md hover:bg-red-600'
              >
                Deactivate
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DeactivateDriverComp;
