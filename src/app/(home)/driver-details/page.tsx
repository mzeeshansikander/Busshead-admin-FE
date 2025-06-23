import React from 'react';
import DriverDetailsView from './_views/driver-details.view';

const DriverDetailsPage = ({
  searchParams,
}: {
  searchParams: { driverId: string };
}) => {
  return <DriverDetailsView driverId={searchParams?.driverId} />;
};

export default DriverDetailsPage;
