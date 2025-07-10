import { AllDriverDataResponse } from '@/common/types/driver/driver-response';
import { URL } from '@/services/api-base-urls';
import { GET } from '@/services/axios-request-handler';
import { useQuery } from '@tanstack/react-query';

export const AllDriversFiltersHook = (
  status: string,
  page?: string,
  limit?: string,
  name?: string,
) => {
  const fetchDrivers = async (): Promise<AllDriverDataResponse> => {
    let driverUrl = '';

    switch (status) {
      case 'Requested':
        driverUrl = URL.DRIVERS.GET_REQUESTED_DRIVERS(page, limit, name);
        break;
      case 'Approved':
        driverUrl = URL.DRIVERS.GET_APPROVED_DRIVERS(page, limit, name);
        break;
      case 'Rejected':
        driverUrl = URL.DRIVERS.GET_REJECTED_DRIVERS(page, limit, name);
        break;
      default:
        throw new Error(`Unsupported status: ${status}`);
    }

    const response = await GET(driverUrl);
    return response as AllDriverDataResponse;
  };

  return useQuery({
    queryKey: ['all-drivers', status, page, limit, name],
    queryFn: fetchDrivers,
    retry: 0,
    enabled: !!status,
  });
};
