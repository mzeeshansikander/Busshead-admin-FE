import React from 'react';
import DriverDetailsView from '@/views/(home)/drivers/driver-details.view';

const DriverDetailsPage = ({ params }: { params: { id: string } }) => {
  return <DriverDetailsView driverId={params?.id} />;
};

export default DriverDetailsPage;
