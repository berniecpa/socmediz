import { FC, ReactNode } from 'react';
import {
  PublicFooter,
  PublicHeader,
} from '@gitroom/frontend/components/public/public.header';

export const LegalSection: FC<{ title: string; children: ReactNode }> = ({
  title,
  children,
}) => (
  <section className="mt-[40px]">
    <h2 className="text-[22px] font-[600]">{title}</h2>
    <div className="mt-[12px] flex flex-col gap-[12px] text-[15px] leading-[175%] text-newTableText [&_strong]:text-newTextColor [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-[6px] [&_ul]:ps-[24px]">
      {children}
    </div>
  </section>
);

export const LegalPage: FC<{
  title: string;
  effectiveDate: string;
  children: ReactNode;
}> = ({ title, effectiveDate, children }) => (
  <div className="flex min-h-screen flex-col">
    <PublicHeader />
    <main className="mx-auto w-full max-w-[800px] flex-1 px-[24px] pb-[96px] pt-[64px]">
      <h1 className="text-[40px] font-[600] leading-[120%] mobile:text-[32px]">
        {title}
      </h1>
      <div className="mt-[12px] text-[14px] text-newTableText">
        Effective date: {effectiveDate}
      </div>
      {children}
    </main>
    <PublicFooter />
  </div>
);
