import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogTitle } from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import React, { useState } from 'react';
// import uploadIcon from '@/public/assets/images/add (2).png';
import Button from '@/components/reusable/button';
import DropdownComp from '@/components/reusable/drop-down';
import Image from 'next/image';
import uploadIcon from '../../../../../../public/assets/images/add (2).png';

interface ModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

interface FormData {
  productName: string;
  productDescription: string;
  category: string;
  stockQuantity: string;
  price: string;
  images: File[];
}
const categories = ['Caps', 'Gift', 'Clothing'];

const AddNewProductComp = ({ isOpen, setIsOpen }: ModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    productName: '',
    productDescription: '',
    category: '',
    stockQuantity: '',
    price: '',
    images: [],
  });
  const [category, setCategory] = useState('');

  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFileUpload = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      setFormData(prev => ({
        ...prev,
        images: [...prev.images, ...fileArray].slice(0, 5), // Limit to 5 images
      }));
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files);
    }
  };

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setIsOpen(false);
  };

  const handleCancel = () => {
    setFormData({
      productName: '',
      productDescription: '',
      category: '',
      stockQuantity: '',
      price: '',
      images: [],
    });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        {/* Overlay */}
        <div className='fixed inset-0 bg-black/50 z-50' />

        <DialogContent className='fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 custom-no-scrollbar -translate-y-1/2 bg-white rounded-lg shadow-lg sm:max-h-[90vh] max-h-[80vh] overflow-y-auto'>
          <DialogTitle className='sr-only'>Add New Product</DialogTitle>

          {/* Header */}
          <div className='flex items-center justify-between p-6 '>
            <h2 className='text-2xl font-medium text-gray-900 '>
              Add New Product
            </h2>
            <button
              onClick={handleCancel}
              className='p-1 hover:bg-gray-100 rounded-full transition-colors'
            >
              <X className='w-5 h-5 text-gray-500' />
            </button>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className='p-6 space-y-6'
          >
            {/* Product Name */}
            <div className='space-y-2'>
              <Label
                htmlFor='productName'
                className='text-sm font-medium text-gray-700'
              >
                Product Name *
              </Label>
              <Input
                id='productName'
                type='text'
                placeholder='Enter Product Name'
                value={formData.productName}
                onChange={e => handleInputChange('productName', e.target.value)}
                className='h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                required
              />
            </div>

            {/* Product Description */}
            <div className='space-y-2'>
              <Label
                htmlFor='productDescription'
                className='text-sm font-medium text-gray-700'
              >
                Product Description *
              </Label>
              <Textarea
                id='productDescription'
                placeholder='e.g., A soft, premium-quality winter sweater perfect for chilly days.'
                value={formData.productDescription}
                onChange={e =>
                  handleInputChange('productDescription', e.target.value)
                }
                className='min-h-[80px] border-gray-300 focus:border-blue-500 focus:ring-blue-500 resize-none'
                required
              />
            </div>

            {/* Product Category Selector */}
            <div className='flex-shrink-0 space-y-2 w-full'>
              <Label
                htmlFor='category'
                className='text-sm font-medium text-gray-700'
              >
                Select Category *
              </Label>
              <DropdownComp
                selected={category}
                onChange={setCategory}
                label='Choose a category'
                valuesToMap={categories}
              />
            </div>

            {/* Stock Quantity */}
            <div className='space-y-2'>
              <Label
                htmlFor='stockQuantity'
                className='text-sm font-medium text-gray-700'
              >
                Stock Quantity *
              </Label>
              <Input
                id='stockQuantity'
                type='number'
                placeholder='Available Stock'
                value={formData.stockQuantity}
                onChange={e =>
                  handleInputChange('stockQuantity', e.target.value)
                }
                className='h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                min='0'
                required
              />
            </div>

            {/* Price */}
            <div className='space-y-2'>
              <Label
                htmlFor='price'
                className='text-sm font-medium text-gray-700'
              >
                Price *
              </Label>
              <div className='relative'>
                <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500'>
                  $
                </span>
                <Input
                  id='price'
                  type='number'
                  placeholder='0.00'
                  value={formData.price}
                  onChange={e => handleInputChange('price', e.target.value)}
                  className='h-12 pl-8 border-gray-300 focus:border-blue-500 focus:ring-blue-500'
                  min='0'
                  step='0.01'
                  required
                />
              </div>
            </div>

            {/* Product Images */}
            <div className='space-y-2'>
              <Label className='text-sm font-medium text-gray-700'>
                Product Images *
              </Label>

              {/* Upload Area  */}
              <label
                htmlFor='file-upload'
                className={`block border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                  dragActive
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <div className='flex justify-center'>
                  <Image
                    src={uploadIcon}
                    alt='add icon'
                    className='mb-2'
                  />
                </div>
                <p className='text-sm font-medium text-gray-700 mb-1'>
                  Upload Images
                </p>
                <p className='text-xs text-gray-500 mb-3'>
                  The format must be a PNG/JPG format
                  <br />
                  Max file size 5 MB (Recommended: 800×600px)
                </p>

                <input
                  type='file'
                  accept='image/png,image/jpeg,image/jpg'
                  multiple
                  onChange={e => handleFileUpload(e.target.files)}
                  className='hidden'
                  id='file-upload'
                />
              </label>

              {/* Image Preview */}
              {formData.images.length > 0 && (
                <div className='grid grid-cols-3 gap-2 mt-3'>
                  {formData.images.map((file, index) => (
                    <div
                      key={index}
                      className='relative group'
                    >
                      <img
                        src={URL.createObjectURL(file)}
                        alt={`Preview ${index + 1}`}
                        className='w-full h-20 object-cover rounded-md border'
                      />
                      <button
                        type='button'
                        onClick={() => removeImage(index)}
                        className='absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity'
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <Button className='gradient w-full p-3'>
              <span className='text-black font-semibold'>Create</span>
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddNewProductComp;
