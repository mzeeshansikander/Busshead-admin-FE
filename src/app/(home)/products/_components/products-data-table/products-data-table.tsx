'use client';
import { dummyProductsData } from '@/common/types/constants/products';
import Table from '@/components/reusable/custom-table/table';
import TableHeader from '@/components/reusable/custom-table/table-head';
import DropdownComp from '@/components/reusable/drop-down';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useState } from 'react';
import ProductsDataTableBody from './prodducts-data-table-body';

const ProductsDataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchProduct, setSearchProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');

  const productsTableHeader = [
    'Products',
    'Category',
    'Price',
    'Stock',

    'Action',
  ];

  const categories = ['Caps', 'Gift', 'Clothing'];

  const SearchHeader = () => {
    return (
      <div className='w-full p-4 bg-white border-b'>
        <div className='flex gap-4'>
          {/* Search Input */}
          <div className='relative flex-1'>
            <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
              <Search className='h-4 w-4 text-neutral-grey-zero' />
            </div>
            <Input
              type='text'
              name='search'
              id='search'
              value={searchProduct}
              onChange={e => {
                e.preventDefault();
                setSearchProduct(e.target.value);
              }}
              placeholder='Search'
              className='h-[42px] w-full pl-10 pr-4 border border-gray-300 rounded-md'
            />
          </div>

          {/* Quantity Input - Fixed */}
          <div className='relative'>
            <Input
              type='number'
              name='quantity'
              id='quantity'
              value={quantity}
              onChange={e => {
                e.preventDefault();
                setQuantity(e.target.value);
              }}
              placeholder='Enter quantity'
              className='h-[42px] w-[200px] px-4 border border-gray-300 rounded-md'
            />
          </div>

          {/* Product Category Selector */}
          <div className='flex-shrink-0'>
            <DropdownComp
              selected={category}
              onChange={setCategory}
              label='Category'
              valuesToMap={categories}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className='flex flex-col p-4'>
      <h1 className='text-[34px] font-semibold'>Drivers</h1>

      <div className='mt-3'>
        <Table
          header={SearchHeader()}
          currentPage={currentPage}
          rowsOption={[10, 20, 30, 40]}
          rowsPerPage={rowsPerPage}
          setCurrentPage={setCurrentPage}
          setRowsPerPage={setRowsPerPage}
          total={20}
          isFooter
          // isPending={isLoading}
        >
          <TableHeader
            tableHeader={productsTableHeader}
            isEnd={true}
          />
          <tbody>
            {/* User rows */}
            {dummyProductsData.length > 0 &&
              dummyProductsData.map((product, index) => (
                <ProductsDataTableBody
                  category={product?.category}
                  price={product?.price}
                  product={product?.product}
                  stock={product?.stock}
                  key={index}
                  image={product?.image}
                />
              ))}

            {dummyProductsData.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className='text-center py-8'
                >
                  <div className='flex justify-center items-center h-[35dvh]'>
                    <p className='text-center text-xl font-bold'>
                      No data found
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              <></>
            )}

            {/* Error state */}
            {/* {error && (
            <tr>
              <td
                colSpan={4}
                className='text-center py-8'
              >
                <p className='text-xl text-red-500'>Error loading users</p>
              </td>
            </tr>
          )} */}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ProductsDataTable;
