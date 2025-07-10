import { ShopOwnerByIdResponse } from '@/common/types/shop-owner/shop-owner-response';
import { URL } from '@/services/api-base-urls';
import { GET } from '@/services/axios-request-handler';
import { useQuery } from '@tanstack/react-query';

const GetShopOwnerByIdHook = (shopOwnerId: string) => {
  const getShopOwnerFn = async (): Promise<ShopOwnerByIdResponse> => {
    const response = await GET(
      `${URL.SHOP_OWNERS.GET_SHOP_OWNER_BY_ID}?owner_id=${shopOwnerId}`,
    );

    return response as ShopOwnerByIdResponse;
  };

  return useQuery({
    queryKey: ['get-shop-owner-by-id', shopOwnerId],
    queryFn: getShopOwnerFn,
    retry: 0,
  });
};

export default GetShopOwnerByIdHook;
