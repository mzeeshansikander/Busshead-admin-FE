import { ApproveRejectDriverResponse } from '@/common/types/driver/driver-response';
import { URL } from '@/services/api-base-urls';
import { PATCH } from '@/services/axios-request-handler';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type RejectDriverPayload = {
  driver_id: number;
};

export const RejectDriverHook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (payload: RejectDriverPayload) => {
      const response = await PATCH(URL.DRIVERS.REJECT_DRIVER, payload);
      return response as ApproveRejectDriverResponse;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-drivers'] });
    },
  });
};
