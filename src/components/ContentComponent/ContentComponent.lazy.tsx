import React, { lazy, Suspense } from 'react';

const LazyContentComponent = lazy(() => import('./ContentComponent'));

const ContentComponent = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyContentComponent {...props} />
  </Suspense>
);

export default ContentComponent;
