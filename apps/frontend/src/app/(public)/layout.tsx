export const dynamic = 'force-dynamic';
import '../global.scss';
import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import clsx from 'clsx';

export const generateMetadata = async (): Promise<Metadata> => {
  const base = process.env.FRONTEND_URL || 'http://localhost:4200';
  return {
    metadataBase: new URL(base),
    applicationName: 'PlanetPost',
    robots: {
      index: true,
      follow: true,
    },
  };
};

const jakartaSans = Plus_Jakarta_Sans({
  weight: ['600', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default async function PublicLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body
        className={clsx(
          jakartaSans.className,
          'dark !bg-newBgColor text-newTextColor'
        )}
      >
        {children}
      </body>
    </html>
  );
}
