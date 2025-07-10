import React from 'react';
import { URL } from '@/services/api-base-urls';
import { GET } from '@/services/axios-request-handler';
import { useQuery } from '@tanstack/react-query';
import { DriverDetailsResponse } from '@/common/types/driver/driver-response';

export const DriverDetailsHook = (driverId: string) => {
  const driverDetailsFn = async (): Promise<DriverDetailsResponse> => {
    const response = await GET(
      `${URL.DRIVERS.GET_DRIVER_DETAILS_BY_ID}?driver_id=${driverId}`,
    );
    return response as DriverDetailsResponse;
  };

  return useQuery({
    queryKey: ['driver-details-by-id'],
    queryFn: driverDetailsFn,
    retry: 0,
  });
};
