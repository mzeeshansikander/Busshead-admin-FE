// React Imports
import { Fragment } from 'react';

// React Hot Toast Imports
import { Toaster } from 'react-hot-toast';

export function ToasterProvider() {
  return (
    <Fragment>
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: '#E5BC31',
              secondary: 'white',
            },
          },
          error: {
            iconTheme: {
              primary: '#E32652',
              secondary: 'white',
            },
          },
        }}
      />
    </Fragment>
  );
}
