// import React from 'react';
// import ShopOwnerDetailsView from './_views/shop-owner-details.view';

// const ShopOwnerDetailsPage = ({
//   searchParams,
// }: {
//   searchParams: { shopOwnerId: string };
// }) => {
//   return <ShopOwnerDetailsView shopOwnerId={searchParams?.shopOwnerId} />;
// };

// export default ShopOwnerDetailsPage;

import React from 'react';
import ShopOwnerDetailsView from './_views/shop-owner-details.view';

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
