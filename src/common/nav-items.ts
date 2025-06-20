import dashboardIcon from '@/../public/assets/icons/category.png';
import dashboardDarkIcon from '../../public/assets/icons/category_b.png';
import orderIcon from '@/../public/assets/icons/document-text.png';
import orderDarkIcon from '@/../public/assets/icons/Vector_b.png';
import productsIcon from '@/../public/assets/icons/3dcube.png';
import productsDarkIcon from '@/../public/assets/icons/3dcube_b.png';
import driverIcon from '@/../public/assets/icons/truck.png';
import driverDarkIcon from '@/../public/assets/icons/truck_b.png';
import shopOwnerIcon from '@/../public/assets/icons/shop.png';
import shopOwnerDarkIcon from '@/../public/assets/icons/shop_b.png';
import messageIcon from '@/../public/assets/icons/message.png';
import messageDarkIcon from '@/../public/assets/icons/message_b.png';
import reportIcon from '@/../public/assets/icons/note-text.png';
import reportDarkIcon from '@/../public/assets/icons/note-text_b.png';

export const NAVITEMS = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: dashboardIcon,
    hoverIcon: dashboardDarkIcon,
  },
  {
    label: 'Orders',
    path: '/orders',
    icon: orderIcon,
    hoverIcon: orderDarkIcon,
  },
  {
    label: 'Products',
    path: '/products',
    icon: productsIcon,
    hoverIcon: productsDarkIcon,
  },
  {
    label: 'Drivers',
    path: '/drivers',
    icon: driverIcon,
    hoverIcon: driverDarkIcon,
  },
  {
    label: 'Shop Owners',
    path: '/shop-owners',
    icon: shopOwnerIcon,
    hoverIcon: shopOwnerDarkIcon,
  },
  {
    label: 'Chat',
    path: '/chat',
    icon: messageIcon,
    hoverIcon: messageDarkIcon,
  },
  {
    label: 'Report',
    path: '/report',
    icon: reportIcon,
    hoverIcon: reportDarkIcon,
  },
];
