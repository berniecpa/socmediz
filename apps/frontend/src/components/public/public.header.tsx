import Link from 'next/link';

export const PublicHeader = () => {
  return (
    <header className="sticky top-0 z-[50] border-b border-newTableBorder bg-newBgColor/80 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center gap-[24px] px-[24px]">
        <Link href="/" className="flex items-center gap-[10px]">
          <img src="/logo.svg" alt="PlanetPost" className="h-[36px] w-[36px]" />
          <span className="text-[20px] font-[600]">PlanetPost</span>
        </Link>
        <nav className="ms-auto hidden items-center gap-[28px] text-[14px] text-newTableText sm:flex">
          <a href="/#features" className="transition-colors hover:text-newTextColor">
            Features
          </a>
          <a href="/#how-it-works" className="transition-colors hover:text-newTextColor">
            How it works
          </a>
          <a href="/#pricing" className="transition-colors hover:text-newTextColor">
            Pricing
          </a>
        </nav>
        <div className="ms-auto flex items-center gap-[12px] sm:ms-0">
          <Link
            href="/auth/login"
            className="rounded-[8px] px-[16px] py-[10px] text-[14px] font-[600] text-newTableText transition-colors hover:text-newTextColor"
          >
            Log in
          </Link>
          <Link
            href="/auth"
            className="rounded-[8px] bg-[#1E3A8A] px-[18px] py-[10px] text-[14px] font-[600] text-white transition-colors hover:bg-[#2563EB]"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
};

export const PublicFooter = () => {
  return (
    <footer className="border-t border-newTableBorder">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-[16px] px-[24px] py-[32px] sm:flex-row">
        <div className="flex items-center gap-[10px]">
          <img src="/logo.svg" alt="PlanetPost" className="h-[28px] w-[28px]" />
          <span className="text-[14px] text-newTableText">
            © {new Date().getFullYear()} PlanetPost. All rights reserved.
          </span>
        </div>
        <nav className="flex items-center gap-[24px] text-[14px] text-newTableText sm:ms-auto">
          <Link href="/terms" className="transition-colors hover:text-newTextColor">
            Terms of Service
          </Link>
          <Link href="/privacy" className="transition-colors hover:text-newTextColor">
            Privacy Policy
          </Link>
          <Link href="/auth/login" className="transition-colors hover:text-newTextColor">
            Log in
          </Link>
        </nav>
      </div>
    </footer>
  );
};
