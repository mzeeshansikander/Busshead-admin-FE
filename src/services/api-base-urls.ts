/**
 * Live URL that checks if the app is in production or development.
 */
const IS_LIVE = true;

/**
 * Production URL that will be treated as global start-point and is connected to production backend API.
 */
const PRODUCTION_URL = process.env.NEXT_PUBLIC_API_URL as string;

// const S3URL = process.env.NEXT_PUBLIC_S3_URL as string;

/**
 * Local URL that will be treated as global start-point and is connected to local backend or AWS Elastic API.
 */
const LOCAL_URL = 'http://localhost:3004' as string;

/**
 * Base URL that will be treated as global start-point.
 */
export const BASE_URL = IS_LIVE ? PRODUCTION_URL : LOCAL_URL;

export const URL = {
  //========================================== AUTH  =============================

  AUTH: {
    ADMIN_LOGIN: `${BASE_URL}/auth/login`,
  },

  DRIVERS: {
    GET_REQUESTED_DRIVERS: (page?: string, limit?: string, name?: string) => {
      const params = new URLSearchParams();
      if (page) params.append('page', page);
      if (limit) params.append('limit', limit);
      if (name) params.append('name', name);
      return `${BASE_URL}/get-requested-drivers/?${params.toString()}`;
    },

    GET_REJECTED_DRIVERS: (page?: string, limit?: string, name?: string) => {
      const params = new URLSearchParams();
      if (page) params.append('page', page);
      if (limit) params.append('limit', limit);
      if (name) params.append('name', name);
      return `${BASE_URL}/get-rejected-drivers/?${params.toString()}`;
    },

    GET_APPROVED_DRIVERS: (page?: string, limit?: string, name?: string) => {
      const params = new URLSearchParams();
      if (page) params.append('page', page);
      if (limit) params.append('limit', limit);
      if (name) params.append('name', name);
      return `${BASE_URL}/get-approved-drivers/?${params.toString()}`;
    },

    GET_DRIVER_DETAILS_BY_ID: `${BASE_URL}/get-driver`,

    APPROVE_DRIVER: `${BASE_URL}/approve-driver`,
    REJECT_DRIVER: `${BASE_URL}/reject-driver`,
  },

  SHOP_OWNERS: {
    GET_ALL_SHOP_OWNERS: (page?: string, limit?: string, name?: string) => {
      const params = new URLSearchParams();
      if (page) params.append('page', page);
      if (limit) params.append('limit', limit);
      if (name) params.append('name', name);
      return `${BASE_URL}/get-shop-owners/?${params.toString()}`;
    },

    GET_SHOP_OWNER_BY_ID: `${BASE_URL}/get-owner`,
  },
} as const;
