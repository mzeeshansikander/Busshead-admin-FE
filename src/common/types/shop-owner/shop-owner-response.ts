export interface OwnerMetaData {
  id: number;
  store_name: string;
  phone_number: string;
  profile_image_url: string;
}

export interface OwnerStoreLocation {
  id: number;
  store_address: string;
}

export interface ShopOwnerType {
  id: number;
  user_type: number;
  first_name: string;
  last_name: string;
  email: string;
  is_activated: boolean;
  owner_meta_data: OwnerMetaData;
  owner_store_locations: OwnerStoreLocation[];
}

export interface ShopOwnerData {
  data: ShopOwnerType[];
  count: number;
  current_page: number;
  total_page: number;
}

//=========================== all shop owner response ====================

export interface AllShopOwnersResponse {
  data: ShopOwnerData;
  code: number;
  message: string;
}

//=========================== shop owner by id response ==================

export interface ShopOwnerByIdResponse {
  data: ShopOwnerType;
  code: number;
  message: string;
}
