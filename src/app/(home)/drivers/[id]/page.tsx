import React from 'react';
import DriverDetailsView from './_views/driver-details.view';

const DriverDetailsPage = ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  return <DriverDetailsView driverId={searchParams?.id} />;
};

export default DriverDetailsPage;
