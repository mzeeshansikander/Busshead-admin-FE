export type UserCategory = 'Shop Owners' | 'Drivers';

export interface User {
  id: number;
  user_type: number;
  first_name: string;
  last_name: string;
  email: string;
  approved_status: number;
  is_activated: boolean;
  on_boarding_steps: number;
  is_onboarding_complete: boolean;
}
