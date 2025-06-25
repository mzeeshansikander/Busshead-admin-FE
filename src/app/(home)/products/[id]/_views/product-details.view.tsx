'use client';

import React, { useEffect } from 'react';
import Button from '@/components/reusable/button';
import ContainerWrapper from '@/components/reusable/container-wrapper';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { GoArrowLeft } from 'react-icons/go';
import trashIcon from '@/../public/assets/images/trash.png';
import editIcon from '@/../public/assets/images/edit_small.png';

import Image from 'next/image';
import { cn } from '@/lib/utils';
import { PRODUCT_IMAGES } from '@/common/types/constants/products';
import { useRouter } from 'next/navigation';

const ProductsDetailsView = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const router = useRouter();

  return (
    <main className='flex flex-col gap-4 p-5'>
      {/* Back button */}
      <Button
        type='button'
        onClick={() => router.back()}
      >
        <GoArrowLeft className='w-[24px] h-[24px]' />
      </Button>

      <ContainerWrapper>
        {/* product details div */}
        <div className='flex sm:flex-row flex-col gap-6'>
          {/* carousel div */}
          <div>
            <Carousel setApi={setApi}>
              <CarouselContent>
                {PRODUCT_IMAGES.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className='w-fit'
                  >
                    <Image
                      src={image}
                      alt={`Product image ${index + 1}`}
                      className='w-[400px] h-auto object-cover flex-shrink-0'
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>

            {/* Thumbnail pagination */}
            <div className='mt-4 flex items-center  gap-2'>
              {PRODUCT_IMAGES.map((image, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={cn('border-2 rounded-md overflow-hidden', {
                    'border-primary border-2': current === index + 1,
                    'border-gray-200': current !== index + 1,
                  })}
                >
                  <Image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className='w-16 h-16 object-cover'
                  />
                </button>
              ))}
            </div>
          </div>

          {/* details div */}
          <div className='flex flex-col gap-4 p'>
            {/* sub heading   */}
            <div className='flex flex-col'>
              <div className='flex flex-row justify-between'>
                <h3 className='text-neutral-grey-sixty font-medium text-base'>
                  Clothing
                </h3>
                <Button className='border border-[#B3B9C6] px-3 py-1'>
                  800 Qty
                </Button>
              </div>
              <h1 className='text-2xl font-medium'>Cozy Winter Mens Sweater</h1>
            </div>
            <p className='text-2xl font-bold'>$59.99</p>
            <p className='text-neutral-grey-eighty tracking-wide text-base/8'>
              Embrace collared sweater, featuring a knit design with a top
              buttons closure for a refined touch. Complete with ribbed sleeves
              and a ribbed hem, this sweater offers a polished, timeless look
              perfect for everyday wear. Designed as a versatile wardrobe
              staple, it seamlessly blends classic elegance with contemporary
              style, making it an essential piece for a modern, stylish
              wardrobe. made from poly wool blended fabric. Embrace collared
              sweater, featuring a knit design with a top buttons closure for a
              refined touch. Complete with ribbed sleeves and a ribbed hem, this
              sweater offers a polished, timeless look perfect for everyday
              wear. Designed as a versatile wardrobe staple
            </p>
            <div className='flex sm:flex-row mx-auto sm:mx-0 flex-col gap-3 mt-2'>
              <Button
                className='border border-red-400 text-red-500 sm:px-12 px-14 py-3'
                type='button'
              >
                <div className='flex flex-row gap-2.5'>
                  <Image
                    src={trashIcon}
                    alt='trash icon'
                    className='w-[24px] h-[24px]'
                  />
                  <p> Remove</p>
                </div>
              </Button>
              <Button
                className='border gradient px-18 py-3 font-medium'
                type='button'
              >
                <div className='flex flex-row gap-3'>
                  <Image
                    src={editIcon}
                    alt='edit icon'
                    className='w-[24px] h-[24px]'
                  />
                  <p> Edit</p>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </ContainerWrapper>
    </main>
  );
};

export default ProductsDetailsView;
