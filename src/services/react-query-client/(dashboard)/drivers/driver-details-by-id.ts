import { DriverDetailsResponse } from '@/common/types/driver/driver-response';
import { URL } from '@/services/api-base-urls';
import { GET } from '@/services/axios-request-handler';
import { useQuery } from '@tanstack/react-query';

export const DriverDetailsHook = (driverId: string) => {
  const driverDetailsFn = async (): Promise<DriverDetailsResponse> => {
    const response = await GET(
      `${URL.DRIVERS.GET_DRIVER_DETAILS_BY_ID}?driver_id=${driverId}`,
    );
    return response as DriverDetailsResponse;
  };

  return useQuery({
    queryKey: ['driver-details-by-id', driverId],
    queryFn: driverDetailsFn,
    retry: 0,
  });
};
