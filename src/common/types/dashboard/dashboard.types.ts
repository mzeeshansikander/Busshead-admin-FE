export interface DashboardCard {
  id: string;
  title: string;
  value: string | number;
  /*eslint-disable-next-line*/
  icon: any;
  altText: string;
  className?: string;
}
