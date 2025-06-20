import { Providers } from '@/providers';
import '@/styles/globals.css';
import { Urbanist } from 'next/font/google';

const fontUrbanist = Urbanist({
  subsets: ['latin'],
  variable: '--font-urbanist',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        suppressHydrationWarning
        className={fontUrbanist.className}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
