import { AllShopOwnersResponse } from '@/common/types/shop-owner/shop-owner-response';
import { URL } from '@/services/api-base-urls';
import { GET } from '@/services/axios-request-handler';
import { useQuery } from '@tanstack/react-query';

export const AllShopOwnersHook = (
  page?: string,
  limit?: string,
  name?: string,
) => {
  const fetchShopOwners = async (): Promise<AllShopOwnersResponse> => {
    const response = await GET(
      URL.SHOP_OWNERS.GET_ALL_SHOP_OWNERS(page, limit, name),
    );
    return response as AllShopOwnersResponse;
  };

  return useQuery({
    queryKey: ['all-shop-owners', page, limit, name],
    queryFn: fetchShopOwners,
    retry: 0,
  });
};
