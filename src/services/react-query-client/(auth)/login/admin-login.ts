import { POST } from '@/services/axios-request-handler';
import { useMutation } from '@tanstack/react-query';
import { URL } from '@/services/api-base-urls';
import { LoginPayload } from '../../../../common/payload/login-payload';
import { User } from '@/common/types/users/users.types';

interface LoginResponse {
  data: {
    user: User;
    accessToken: string;
  };
  code: number;
  message: string;
}

export const adminLoginFn = async (
  payload: LoginPayload,
): Promise<LoginResponse> => {
  const response = await POST(URL.AUTH.ADMIN_LOGIN, payload);
  return response as LoginResponse;
};

export const AdminLoginHook = () => {
  return useMutation({
    mutationFn: adminLoginFn,
    mutationKey: ['login'],
  });
};
