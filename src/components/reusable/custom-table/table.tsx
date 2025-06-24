import TableFoot from './table-foot';
import CardFrame from '../card-frame';
import { ITable } from '@/common/interfaces/table';

/**
 * Updated Table component that accepts header content
 * @param IProps
 * @example
 * <Table
 *   header={<YourSearchFormComponent />}
 *   currentPage={currentPage}
 *   setCurrentPage={setCurrentPage}
 *   // ... other props
 * >
 *   <TableHeader tableHeader={tableHeader} />
 *   <TableBody>...</TableBody>
 * </Table>
 */
const Table = ({
  children,
  header,
  // handleSubmit,
  //searchTerm,
  //setSearchTerm,
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
  rowsOption,
  total,
  isFooter,
  isPending,
}: ITable) => {
  return (
    <CardFrame className='!p-0 overflow-hidden border border-divider'>
      {/* Render header section if provided */}
      <div className=' border-divider'>{header}</div>

      <div>
        {isPending ? (
          <div className='flex justify-center items-center h-[35dvh]'>
            <div className='animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-primary' />
          </div>
        ) : (
          <div className='w-full lg:overflow-x-scroll xl:overflow-x-hidden max-h-[55dvh] overflow-y-auto'>
            <table className='w-full relative'>{children}</table>
          </div>
        )}
      </div>

      {isFooter && (
        <TableFoot
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          rowsOption={rowsOption}
          total={total}
        />
      )}
    </CardFrame>
  );
};

export default Table;
