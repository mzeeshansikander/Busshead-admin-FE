import { Driver } from './driver.types';

export interface DriverVehicle {
  id: number;
  vehicle_type: number;
  company: string;
  model?: string;
  manufacture_year?: number;
  load_capacity?: number;
  plate_number?: string;
}

export interface DriverMetaData {
  id: number;
  phone_number: string;
  profile_image_url: string;
  date_of_birth?: string;
}

export interface Media {
  id: number;
  media_type: number;
  media_url: string;
}

export interface DriverType {
  id: number;
  user_type: number;
  first_name: string;
  last_name: string;
  email: string;
  is_activated: boolean;
  driver_vehicle: DriverVehicle;
  driver_meta_data: DriverMetaData;
  media: Media[];
}

export interface DriverData {
  data: DriverType[];
  count: number;
  current_page: number;
  total_page: number;
}

//======================= all drivers response =============================

export interface AllDriverDataResponse {
  data: DriverData;
  code: number;
  message: string;
}

//============================ driver details by id res ===================

export interface DriverLicenseMedia {
  id: number;
  media_url: string;
  is_front: boolean;
}

export interface DriverDetails extends DriverType {
  driver_license_media: DriverLicenseMedia[];
}

export interface DriverDetailsResponse {
  data: DriverDetails;
  code: number;
  message: string;
}

//========================= approve reject driver response ======================
export interface ApproveRejectDriverResponse {
  data: Driver;
  code: number;
  message: string;
}
