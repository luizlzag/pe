import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({
  weight:['100','400','700'],
  style:['normal'],
  display:'swap',
  subsets: ['latin'] 
});

export const metadata = {
  title: 'Pedido Eletronico',
  description: 'PE',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
