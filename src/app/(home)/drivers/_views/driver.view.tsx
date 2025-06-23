'use client';

import { useState } from 'react';
import DriversDetailsView from '../_components/driver-details/driver-details';
import DriversDataTable from '../_components/drivers-data-table/drivers-data-table';
import DriversDetails from '../_components/driver-details/driver-details';

const DriversView = () => {
  const [currentStep, setCurrentStep] = useState('driversDataTable');
  const [driverId, setDriverId] = useState('');

  const STEPS = {
    driversDataTable: 'driversDataTable',
    driverDetails: 'driverDetails',
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case STEPS.driversDataTable:
        return (
          <DriversDataTable
            setCurrentStep={setCurrentStep}
            setDriverId={setDriverId ?? ''}
          />
        );

      case STEPS.driverDetails:
        return (
          <DriversDetails
            driverId={driverId}
            setCurrentStep={setCurrentStep}
          />
        );

      default:
        return (
          <DriversDataTable
            setCurrentStep={setCurrentStep}
            setDriverId={setDriverId ?? ''}
          />
        );
    }
  };
  // return <DriversDataTable />;
  return <>{renderCurrentStep()}</>;
};

export default DriversView;
