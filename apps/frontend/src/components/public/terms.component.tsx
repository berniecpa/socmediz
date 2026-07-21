import Link from 'next/link';
import {
  LegalPage,
  LegalSection,
} from '@gitroom/frontend/components/public/legal.component';

export const TermsComponent = () => (
  <LegalPage title="Terms of Service" effectiveDate="July 21, 2026">
    <LegalSection title="1. Agreement to these Terms">
      <p>
        These Terms of Service (the &quot;Terms&quot;) govern your access to
        and use of PlanetPost (the &quot;Service&quot;), a social media
        planning, scheduling, and publishing platform. By creating an account
        or using the Service, you agree to be bound by these Terms. If you are
        using the Service on behalf of a company or other organization, you
        represent that you have authority to bind that organization, and
        &quot;you&quot; refers to that organization.
      </p>
      <p>
        If you do not agree to these Terms, do not use the Service.
      </p>
    </LegalSection>

    <LegalSection title="2. The Service">
      <p>
        PlanetPost lets you connect third-party social media and messaging
        accounts, compose and schedule content, publish that content to
        connected platforms, collaborate with team members, and review
        analytics. Features vary by subscription plan and may change over time
        as we improve the Service.
      </p>
    </LegalSection>

    <LegalSection title="3. Accounts and Security">
      <p>
        You must provide accurate registration information and keep it up to
        date. You are responsible for all activity that occurs under your
        account and for keeping your credentials confidential. Notify us
        immediately if you suspect unauthorized use of your account. You must
        be at least 16 years old (or the minimum age required in your
        jurisdiction) to use the Service.
      </p>
    </LegalSection>

    <LegalSection title="4. Third-Party Platforms">
      <p>
        The Service publishes content to third-party platforms (such as X,
        Instagram, LinkedIn, TikTok, and others) on your behalf, using
        authorizations you grant. Your use of those platforms remains subject
        to their own terms and policies, and you are responsible for complying
        with them. We do not control third-party platforms and are not
        responsible for their availability, API changes, content moderation
        decisions, or any suspension of your accounts on those platforms.
      </p>
    </LegalSection>

    <LegalSection title="5. Your Content">
      <p>
        You retain all rights to the content you create, upload, or schedule
        through the Service (&quot;Your Content&quot;). You grant us a
        limited, worldwide, non-exclusive license to host, store, process,
        and transmit Your Content solely as needed to operate the Service —
        for example, to store scheduled posts and deliver them to the
        platforms you choose. You are solely responsible for Your Content,
        including having all rights necessary to publish it.
      </p>
    </LegalSection>

    <LegalSection title="6. Acceptable Use">
      <p>You agree not to use the Service to:</p>
      <ul>
        <li>violate any law or the rights of others;</li>
        <li>
          publish content that is unlawful, defamatory, harassing, hateful, or
          infringing;
        </li>
        <li>
          send spam, engage in coordinated inauthentic behavior, or violate
          the rules of a connected platform;
        </li>
        <li>
          probe, disrupt, or overload the Service, or attempt to access it by
          means other than the interfaces we provide;
        </li>
        <li>
          resell or provide the Service to third parties except as permitted
          by your plan (for example, agency features).
        </li>
      </ul>
      <p>
        We may suspend or terminate accounts that violate this section.
      </p>
    </LegalSection>

    <LegalSection title="7. AI Features">
      <p>
        The Service includes optional AI-assisted features such as text,
        image, and video generation. AI output may be inaccurate or similar to
        output generated for others; review it before publishing. You are
        responsible for content you publish, including AI-assisted content.
      </p>
    </LegalSection>

    <LegalSection title="8. Subscriptions, Billing, and Trials">
      <p>
        Paid plans are billed in advance on a monthly or yearly basis through
        our payment processor and renew automatically until cancelled. Where a
        free trial is offered, you will not be charged until the trial ends;
        cancel before then to avoid charges. You can cancel at any time from
        your settings, effective at the end of the current billing period.
        Except where required by law, payments are non-refundable. We may
        change prices with reasonable advance notice; changes apply from your
        next billing period.
      </p>
    </LegalSection>

    <LegalSection title="9. Intellectual Property">
      <p>
        The Service, including its software, design, and branding, is owned by
        us or our licensors and is protected by intellectual property laws.
        These Terms do not grant you any rights to our trademarks or branding.
        If you send us feedback, we may use it without obligation to you.
      </p>
    </LegalSection>

    <LegalSection title="10. Termination">
      <p>
        You may stop using the Service and delete your account at any time. We
        may suspend or terminate your access if you materially breach these
        Terms, if required by law, or if we discontinue the Service. Upon
        termination, your right to use the Service ends; sections that by
        their nature should survive (including Sections 5, 9, 11, 12, and 13)
        survive termination.
      </p>
    </LegalSection>

    <LegalSection title="11. Disclaimers">
      <p>
        The Service is provided &quot;as is&quot; and &quot;as
        available&quot;, without warranties of any kind, whether express or
        implied, including warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We do not warrant that the
        Service will be uninterrupted, error-free, or that scheduled content
        will always publish successfully — platform outages and API changes
        outside our control can prevent delivery.
      </p>
    </LegalSection>

    <LegalSection title="12. Limitation of Liability">
      <p>
        To the maximum extent permitted by law, we will not be liable for any
        indirect, incidental, special, consequential, or punitive damages, or
        for lost profits, revenues, data, or goodwill, arising out of or
        related to your use of the Service. To the maximum extent permitted by
        law, our total liability for all claims relating to the Service is
        limited to the greater of the amounts you paid us in the twelve months
        before the claim arose or one hundred US dollars (US$100).
      </p>
    </LegalSection>

    <LegalSection title="13. Indemnification">
      <p>
        You will indemnify and hold us harmless from claims, damages, and
        expenses (including reasonable legal fees) arising from Your Content,
        your use of the Service, or your breach of these Terms.
      </p>
    </LegalSection>

    <LegalSection title="14. Changes to the Service or Terms">
      <p>
        We may update these Terms from time to time. If we make material
        changes, we will provide notice — for example, by email or a notice in
        the Service — before the changes take effect. Your continued use of
        the Service after changes take effect constitutes acceptance of the
        updated Terms.
      </p>
    </LegalSection>

    <LegalSection title="15. Governing Law and Disputes">
      <p>
        These Terms are governed by the laws of the jurisdiction in which the
        operator of the Service is established, without regard to conflict of
        laws rules. Courts located in that jurisdiction will have exclusive
        jurisdiction over disputes arising from these Terms, unless applicable
        law gives you the right to bring proceedings elsewhere.
      </p>
    </LegalSection>

    <LegalSection title="16. Contact">
      <p>
        Questions about these Terms? Contact us at{' '}
        <a
          href="mailto:support@planetpost.com"
          className="underline hover:text-newTextColor"
        >
          support@planetpost.com
        </a>
        . See also our{' '}
        <Link href="/privacy" className="underline hover:text-newTextColor">
          Privacy Policy
        </Link>
        .
      </p>
    </LegalSection>
  </LegalPage>
);
