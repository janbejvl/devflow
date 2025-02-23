import type { PropsWithChildren } from 'react';

import { Navbar } from '@/components/navigation/navbar';

const RootLayout = ({ children }: PropsWithChildren) => (
  <main>
    <Navbar />
    {children}
  </main>
);

export default RootLayout;
