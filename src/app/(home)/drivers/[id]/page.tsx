import React from 'react';
import DriverDetailsView from '@/views/(home)/drivers/driver-details.view';

const DriverDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <DriverDetailsView driverId={id} />;
};

export default DriverDetailsPage;
