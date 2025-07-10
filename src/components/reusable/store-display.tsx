import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MapPin, Phone, Clock } from 'lucide-react';

type StoreLocation = {
  id: string;
  name: string;
  address: string;
  phone?: string;
  hours?: string;
  email?: string;
  additionalInfo?: string;
};

type StoreAccordionProps = {
  stores: StoreLocation[];
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  className?: string;
  showIcons?: boolean;
  defaultValue?: string | string[];
};

function StoreAccordion({
  stores,
  type = 'single',
  collapsible = true,
  className = '',
  showIcons = true,
  defaultValue,
}: StoreAccordionProps) {
  if (!stores || stores.length === 0) {
    return (
      <div className='text-center py-8 text-gray-500'>
        No store locations available
      </div>
    );
  }

  // Handle different accordion types with proper props
  const accordionProps =
    type === 'single'
      ? {
          type: 'single' as const,
          collapsible,
          defaultValue: defaultValue as string | undefined,
        }
      : {
          type: 'multiple' as const,
          defaultValue: defaultValue as string[] | undefined,
        };

  return (
    <Accordion
      {...accordionProps}
      className={className}
    >
      {stores.map(store => (
        <AccordionItem
          key={store.id}
          value={store.id}
        >
          <AccordionTrigger className='text-left hover:no-underline'>
            <div className='flex items-center gap-2'>
              {showIcons && <MapPin className='h-4 w-4 text-gray-600' />}
              <span className='font-medium'>{store.name}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className='space-y-3 pt-2'>
              {/* Address */}
              <div className='flex items-start gap-2'>
                {showIcons && (
                  <MapPin className='h-4 w-4 text-gray-500 mt-0.5' />
                )}
                <div>
                  <p className='text-sm font-medium text-gray-900'>Address</p>
                  <p className='text-sm text-gray-600'>{store.address}</p>
                </div>
              </div>

              {/* Phone */}
              {store.phone && (
                <div className='flex items-start gap-2'>
                  {showIcons && (
                    <Phone className='h-4 w-4 text-gray-500 mt-0.5' />
                  )}
                  <div>
                    <p className='text-sm font-medium text-gray-900'>Phone</p>
                    <p className='text-sm text-gray-600'>{store.phone}</p>
                  </div>
                </div>
              )}

              {/* Hours */}
              {store.hours && (
                <div className='flex items-start gap-2'>
                  {showIcons && (
                    <Clock className='h-4 w-4 text-gray-500 mt-0.5' />
                  )}
                  <div>
                    <p className='text-sm font-medium text-gray-900'>Hours</p>
                    <p className='text-sm text-gray-600'>{store.hours}</p>
                  </div>
                </div>
              )}

              {/* Email */}
              {store.email && (
                <div className='flex items-start gap-2'>
                  {showIcons && <div className='h-4 w-4 mt-0.5' />}
                  <div>
                    <p className='text-sm font-medium text-gray-900'>Email</p>
                    <p className='text-sm text-gray-600'>{store.email}</p>
                  </div>
                </div>
              )}

              {/* Additional Info */}
              {store.additionalInfo && (
                <div className='mt-3 p-3 bg-gray-50 rounded-md'>
                  <p className='text-sm text-gray-700'>
                    {store.additionalInfo}
                  </p>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default StoreAccordion;
