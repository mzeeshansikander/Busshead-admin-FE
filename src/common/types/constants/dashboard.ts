import { DashboardCard } from '../dashboard/dashboard.types';
import newOrders from '@/../public/assets/images/new-orders.png';
import activeDriver from '@/../public/assets/images/truck_frame.png';
import pendingPayments from '@/../public/assets/images/pending_payments_frame.png';
import totalRevenue from '@/../public/assets/images/total_revenue_frame.png';
import revenueCod from '@/../public/assets/images/revenue_cod_frame.png';
import revenueOnline from '@/../public/assets/images/revenue_online_frame.png';

export const dashboardCards: DashboardCard[] = [
  {
    id: 'new-orders',
    title: 'New Orders',
    value: 15,
    icon: newOrders,
    altText: 'new orders',
    className: 'gap-0.5',
  },
  {
    id: 'active-drivers',
    title: 'Active Driver',
    value: 120,
    icon: activeDriver,
    altText: 'active driver',
  },
  {
    id: 'pending-payments',
    title: 'Pending Payments',
    value: '$1250',
    icon: pendingPayments,
    altText: 'pending payments',
  },
  {
    id: 'total-revenue',
    title: 'Total Revenue',
    value: '$2500',
    icon: totalRevenue,
    altText: 'total revenue',
  },
  {
    id: 'revenue-cod',
    title: 'Revenue COD',
    value: '$1250',
    icon: revenueCod,
    altText: 'revenue cod',
  },
  {
    id: 'revenue-online',
    title: 'Revenue Online',
    value: '$1250',
    icon: revenueOnline,
    altText: 'revenue online',
  },
];
