import React from 'react';
import ShopOwnerDetailsView from '../../../../views/(home)/shop-owners/shop-owner-details.view';

const ShopOwnerDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <ShopOwnerDetailsView shopOwnerId={id} />;
};

export default ShopOwnerDetailsPage;
