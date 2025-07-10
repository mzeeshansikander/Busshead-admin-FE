import React from 'react';
import ShopOwnerDetailsView from '../../../../views/(home)/shop-owners/shop-owner-details.view';

const ShopOwnerDetailsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ shopOwnerId: string }>;
}) => {
  const resolvedSearchParams = await searchParams;

  return (
    <ShopOwnerDetailsView shopOwnerId={resolvedSearchParams?.shopOwnerId} />
  );
};

export default ShopOwnerDetailsPage;
