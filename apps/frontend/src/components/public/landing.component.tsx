import Link from 'next/link';
import { pricing } from '@gitroom/nestjs-libraries/database/prisma/subscriptions/pricing';
import {
  PublicFooter,
  PublicHeader,
} from '@gitroom/frontend/components/public/public.header';

const platformIcons = [
  'x',
  'instagram',
  'facebook',
  'linkedin',
  'youtube',
  'tiktok',
  'threads',
  'pinterest',
  'reddit',
  'discord',
  'slack',
  'mastodon',
  'bluesky',
  'telegram',
];

const features = [
  {
    title: 'Schedule everywhere at once',
    description:
      'Write a post once, tailor it per network, and queue it to 28+ social and chat channels at the time your audience is online.',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
  {
    title: 'Visual content calendar',
    description:
      'Drag, drop, and rearrange your whole pipeline on a calendar built for teams that publish daily.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
  },
  {
    title: 'AI writing assistant',
    description:
      'Beat the blank page: generate post ideas, rewrite captions per platform, and create images and short videos with AI.',
    icon: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
  },
  {
    title: 'Analytics that matter',
    description:
      'Track reach, engagement, and growth across every connected channel from one dashboard.',
    icon: (
      <>
        <path d="M3 3v16a2 2 0 0 0 2 2h16" />
        <path d="M7 15l4-4 3 3 5-6" />
      </>
    ),
  },
  {
    title: 'Built for teams',
    description:
      'Invite teammates, manage multiple brands and customers, and keep approvals moving without spreadsheets.',
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: 'Automation & API',
    description:
      'Auto-post from RSS, fire webhooks on publish, and drive everything programmatically with the public API.',
    icon: (
      <>
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </>
    ),
  },
];

const steps = [
  {
    title: 'Connect your channels',
    description:
      'Link your social accounts in a couple of clicks — X, Instagram, LinkedIn, TikTok, YouTube, and 20+ more.',
  },
  {
    title: 'Create with AI',
    description:
      'Draft posts, generate visuals, and tailor the copy for each platform with the built-in assistant.',
  },
  {
    title: 'Schedule & grow',
    description:
      'Queue everything on the calendar, publish automatically, and watch the analytics roll in.',
  },
];

const tierOrder = ['STANDARD', 'TEAM', 'PRO', 'ULTIMATE'] as const;

const tierBlurbs: Record<string, string> = {
  STANDARD: 'For creators getting consistent',
  TEAM: 'For small teams and brands',
  PRO: 'For agencies and power users',
  ULTIMATE: 'For large organizations',
};

const tierFeatures = (key: (typeof tierOrder)[number]) => {
  const tier = pricing[key];
  return [
    `${tier.channel} connected channels`,
    tier.posts_per_month >= 1000000
      ? 'Unlimited posts'
      : `${tier.posts_per_month} posts per month`,
    'AI writing assistant',
    `${tier.image_generation_count} AI images / month`,
    `${tier.generate_videos} AI videos / month`,
    ...(tier.team_members ? ['Team members'] : []),
    ...(tier.autoPost ? ['Auto-post from RSS'] : []),
    'Public API access',
    `${tier.webhooks >= 10000 ? 'Unlimited' : tier.webhooks} webhooks`,
  ];
};

export const LandingComponent = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <PublicHeader />

      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute -top-[120px] left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-[#1E3A8A] opacity-30 blur-[140px]" />
        <div className="pointer-events-none absolute top-[220px] right-[8%] h-[240px] w-[240px] rounded-full bg-[#38BDF8] opacity-10 blur-[110px]" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-[24px] pb-[72px] pt-[88px] text-center">
          <div className="mb-[24px] flex items-center gap-[8px] rounded-full border border-newTableBorder bg-newBgColorInner px-[16px] py-[8px] text-[13px] text-newTableText">
            <span className="inline-block h-[8px] w-[8px] rounded-full bg-[#38BDF8]" />
            Publish to 28+ social and chat channels
          </div>
          <h1 className="max-w-[840px] text-[52px] font-[600] leading-[110%] tablet:text-[42px] mobile:!text-[34px]">
            Your entire social presence,{' '}
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] bg-clip-text text-transparent">
              planned from one place
            </span>
          </h1>
          <p className="mt-[20px] max-w-[640px] text-[18px] leading-[160%] text-newTableText mobile:text-[16px]">
            PlanetPost is the scheduling platform for creators, brands, and
            agencies. Plan on a calendar, write with AI, publish everywhere,
            and measure what works — without juggling ten tabs.
          </p>
          <div className="mt-[36px] flex flex-wrap items-center justify-center gap-[16px]">
            <Link
              href="/auth"
              className="rounded-[10px] bg-[#1E3A8A] px-[28px] py-[14px] text-[16px] font-[600] text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-[#2563EB] hover:shadow-blue-600/40"
            >
              Start your 7-day free trial
            </Link>
            <a
              href="#features"
              className="rounded-[10px] border border-newTableBorder px-[28px] py-[14px] text-[16px] font-[600] transition-colors hover:border-[#2563EB]"
            >
              See what&apos;s inside
            </a>
          </div>
          <div className="mt-[16px] text-[13px] text-newTableText">
            No credit card tricks — cancel anytime from settings.
          </div>

          {/* Channel logos */}
          <div className="mt-[64px] w-full">
            <div className="mb-[20px] text-[13px] uppercase tracking-[0.15em] text-newTableText">
              Works with the platforms you already use
            </div>
            <div className="flex flex-wrap items-center justify-center gap-[18px]">
              {platformIcons.map((icon) => (
                <div
                  key={icon}
                  className="flex h-[52px] w-[52px] items-center justify-center rounded-[12px] border border-newTableBorder bg-newBgColorInner"
                >
                  <img
                    src={`/icons/platforms/${icon}.png`}
                    alt={icon}
                    className="h-[28px] w-[28px] rounded-[6px] object-contain"
                  />
                </div>
              ))}
              <div className="flex h-[52px] items-center justify-center rounded-[12px] border border-newTableBorder bg-newBgColorInner px-[14px] text-[13px] text-newTableText">
                +14 more
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-newTableBorder">
        <div className="mx-auto max-w-[1200px] px-[24px] py-[80px]">
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="text-[36px] font-[600] leading-[120%] mobile:text-[28px]">
              Everything you need to show up every day
            </h2>
            <p className="mt-[16px] text-[16px] leading-[160%] text-newTableText">
              One workspace that takes a post from idea to published to
              measured.
            </p>
          </div>
          <div className="mt-[48px] grid grid-cols-3 gap-[20px] tablet:grid-cols-2 mobile:!grid-cols-1">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[16px] border border-newTableBorder bg-newBgColorInner p-[28px] transition-colors hover:border-[#2563EB]/50"
              >
                <div className="mb-[18px] flex h-[44px] w-[44px] items-center justify-center rounded-[12px] bg-[#1E3A8A]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#93C5FD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <div className="text-[17px] font-[600]">{feature.title}</div>
                <p className="mt-[8px] text-[14px] leading-[160%] text-newTableText">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-t border-newTableBorder">
        <div className="mx-auto max-w-[1200px] px-[24px] py-[80px]">
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="text-[36px] font-[600] leading-[120%] mobile:text-[28px]">
              Up and running in minutes
            </h2>
          </div>
          <div className="mt-[48px] grid grid-cols-3 gap-[20px] mobile:!grid-cols-1">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-[16px] border border-newTableBorder bg-newBgColorInner p-[28px]"
              >
                <div className="mb-[16px] flex h-[36px] w-[36px] items-center justify-center rounded-full bg-boxFocused text-[15px] font-[600] text-textItemFocused">
                  {index + 1}
                </div>
                <div className="text-[17px] font-[600]">{step.title}</div>
                <p className="mt-[8px] text-[14px] leading-[160%] text-newTableText">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-newTableBorder">
        <div className="mx-auto max-w-[1200px] px-[24px] py-[80px]">
          <div className="mx-auto max-w-[640px] text-center">
            <h2 className="text-[36px] font-[600] leading-[120%] mobile:text-[28px]">
              Simple pricing that scales with you
            </h2>
            <p className="mt-[16px] text-[16px] leading-[160%] text-newTableText">
              Every plan starts with a 7-day free trial. Yearly billing saves
              20%.
            </p>
          </div>
          <div className="mt-[48px] grid grid-cols-4 gap-[20px] tablet:grid-cols-2 mobile:!grid-cols-1">
            {tierOrder.map((key) => {
              const tier = pricing[key];
              const popular = key === 'PRO';
              return (
                <div
                  key={key}
                  className={`relative flex flex-col rounded-[16px] border p-[28px] ${
                    popular
                      ? 'border-[#2563EB] bg-newBgColorInner'
                      : 'border-newTableBorder bg-newBgColorInner'
                  }`}
                >
                  {popular && (
                    <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 rounded-full bg-[#2563EB] px-[12px] py-[4px] text-[12px] font-[600] text-white">
                      Most popular
                    </div>
                  )}
                  <div className="text-[15px] font-[600] uppercase tracking-[0.08em]">
                    {key.toLowerCase()}
                  </div>
                  <div className="mt-[4px] text-[13px] text-newTableText">
                    {tierBlurbs[key]}
                  </div>
                  <div className="mt-[16px] flex items-baseline gap-[6px]">
                    <span className="text-[40px] font-[600]">
                      ${tier.month_price}
                    </span>
                    <span className="text-[14px] text-newTableText">
                      / month
                    </span>
                  </div>
                  <ul className="mt-[20px] flex flex-col gap-[10px] text-[14px]">
                    {tierFeatures(key).map((feature) => (
                      <li key={feature} className="flex items-start gap-[8px]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#38BDF8"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mt-[2px] shrink-0"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span className="text-newTableText">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/auth"
                    className={`mt-[24px] rounded-[8px] py-[12px] text-center text-[14px] font-[600] transition-colors ${
                      popular
                        ? 'bg-[#1E3A8A] text-white hover:bg-[#2563EB]'
                        : 'border border-newTableBorder hover:border-[#2563EB]'
                    }`}
                  >
                    Start free trial
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-newTableBorder">
        <div className="mx-auto max-w-[1200px] px-[24px] py-[80px]">
          <div className="relative overflow-hidden rounded-[20px] border border-newTableBorder bg-newBgColorInner p-[56px] text-center mobile:p-[32px]">
            <div className="pointer-events-none absolute -top-[80px] left-1/2 h-[240px] w-[520px] -translate-x-1/2 rounded-full bg-[#1E3A8A] opacity-40 blur-[110px]" />
            <div className="relative">
              <img
                src="/logo.svg"
                alt="PlanetPost"
                className="mx-auto mb-[24px] h-[64px] w-[64px]"
              />
              <h2 className="text-[32px] font-[600] leading-[120%] mobile:text-[26px]">
                Ready to take your content into orbit?
              </h2>
              <p className="mx-auto mt-[12px] max-w-[480px] text-[16px] leading-[160%] text-newTableText">
                Join the creators and teams scheduling their entire social
                presence with PlanetPost.
              </p>
              <Link
                href="/auth"
                className="mt-[28px] inline-block rounded-[10px] bg-[#1E3A8A] px-[32px] py-[14px] text-[16px] font-[600] text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-[#2563EB]"
              >
                Get started for free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  );
};
