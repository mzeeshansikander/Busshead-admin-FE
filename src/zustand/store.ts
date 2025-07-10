import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type DriverStore = {
  driverStatus: string;
  setDriverStatus: (status: string) => void;
};

export const useDriverStore = create<DriverStore>()(
  persist(
    set => ({
      driverStatus: '',
      setDriverStatus: (status: string) => set({ driverStatus: status }),
    }),
    {
      name: 'driver-status',
    },
  ),
);
