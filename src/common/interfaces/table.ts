import { FormikHandlers } from 'formik';

export interface ITableHead {
  tableHeader?: string[];
  isEnd?: boolean;
}

export interface ITableBody {
  id: string;
  email: string;
  name: string;
  isVerified: boolean;
  VerifiedAt: string;
  deletedAt: Date | null;
  role: string;
  profilePicture: string;
  subscriptionStatus: boolean;
  step: string;
  suspendedReason: string | null;
  isSuspended: boolean;
}
export interface TableFootI {
  rowsPerPage?: number;
  setRowsPerPage?: React.Dispatch<React.SetStateAction<number>>;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  rowsOption?: number[];
  total?: number;
}

export interface ITable {
  children?: React.ReactNode;
  searchTerm?: string;
  header?: React.ReactNode;
  setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit?: FormikHandlers['handleSubmit'];
  rowsPerPage?: number;
  setRowsPerPage?: React.Dispatch<React.SetStateAction<number>>;
  currentPage?: number;
  setCurrentPage?: React.Dispatch<React.SetStateAction<number>>;
  rowsOption?: number[];
  total?: number;
  tabs?: string[];
  currentTab?: number;
  setTab?: React.Dispatch<React.SetStateAction<number>>;
  isFooter?: boolean;
  isPending?: boolean;
}
