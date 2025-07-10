export type DriverCategory = 'Approved' | 'Requested' | 'Rejected';

export interface Driver {
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  id: number;
  user_type: number;
  first_name: string;
  last_name: string;
  email: string;
  approved_status: number;
  is_activated: boolean;
  payment_account_id: string;
  on_boarding_steps: number;
  is_onboarding_complete: boolean;
}
