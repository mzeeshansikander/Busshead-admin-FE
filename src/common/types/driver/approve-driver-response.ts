import { Driver } from './driver.types';

export interface ApproveRejectDriverResponse {
  data: Driver;
  code: number;
  message: string;
}
