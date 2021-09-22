import React, { Suspense } from 'react';
const Remote1 = React.lazy(() => import('remote1/App'));
const Remote2 = React.lazy(() => import('remote2/App'));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1</h1>
      </div>
      <Suspense fallback={'loading...'}>
        <Remote1 />
        <Remote2 />
      </Suspense>
    </div>
  );
};

export default App;
