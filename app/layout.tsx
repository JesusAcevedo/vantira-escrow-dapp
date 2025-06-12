import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';
import ClientLayout from './layout.client';


export const metadata: Metadata = {
  title: 'Vantira Escrow DApp',
  description: 'Decentralized Escrow App powered by Next.js and Wagmi',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
    <body>
      <ClientLayout>{children}</ClientLayout>
</body>
    </html>
  );
}
