import { ApproveRejectDriverResponse } from '@/common/types/driver/driver-response';
import { URL } from '@/services/api-base-urls';
import { PATCH } from '@/services/axios-request-handler';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type ApproveDriverPayload = {
  driver_id: number;
};

export const ApproveDriverHook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: ApproveDriverPayload) => {
      const response = await PATCH(URL.DRIVERS.APPROVE_DRIVER, payload);
      return response as ApproveRejectDriverResponse;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-drivers'] });
    },
  });
};
