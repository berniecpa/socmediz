import Link from 'next/link';
import {
  LegalPage,
  LegalSection,
} from '@gitroom/frontend/components/public/legal.component';

export const PrivacyComponent = () => (
  <LegalPage title="Privacy Policy" effectiveDate="July 21, 2026">
    <LegalSection title="1. Overview">
      <p>
        This Privacy Policy explains how PlanetPost (&quot;we&quot;,
        &quot;us&quot;) collects, uses, and shares information about you when
        you use our social media planning and scheduling platform (the
        &quot;Service&quot;). By using the Service, you agree to the practices
        described here.
      </p>
    </LegalSection>

    <LegalSection title="2. Information We Collect">
      <p>
        <strong>Account information.</strong> Name, email address, password
        (stored hashed), company name, and profile details you provide.
      </p>
      <p>
        <strong>Connected channel data.</strong> When you connect a social
        media or messaging account, we store the authorization tokens the
        platform issues and basic profile information (such as the account
        name and avatar) needed to publish on your behalf. We access connected
        platforms only to provide the features you use — scheduling,
        publishing, importing, and analytics.
      </p>
      <p>
        <strong>Content.</strong> Posts, drafts, media files, comments, and
        other material you create or upload in the Service.
      </p>
      <p>
        <strong>Payment information.</strong> Payments are processed by our
        payment processor (Stripe). We receive limited billing details such as
        your plan, payment status, and the last digits of your card — never
        your full card number.
      </p>
      <p>
        <strong>Usage and device information.</strong> Log data, IP address,
        browser type, pages viewed, and interactions with the Service,
        collected directly and through cookies and similar technologies,
        including analytics tools.
      </p>
    </LegalSection>

    <LegalSection title="3. How We Use Information">
      <ul>
        <li>to provide, maintain, and improve the Service;</li>
        <li>
          to publish your content to the platforms you connect, at the times
          you choose;
        </li>
        <li>to process payments and manage subscriptions;</li>
        <li>
          to communicate with you about the Service, including service
          announcements and, where permitted, product updates you can opt out
          of;
        </li>
        <li>to monitor performance, debug issues, and prevent abuse;</li>
        <li>to comply with legal obligations.</li>
      </ul>
      <p>
        We do not sell your personal information.
      </p>
    </LegalSection>

    <LegalSection title="4. AI Features">
      <p>
        When you use AI-assisted features (such as generating post text,
        images, or videos), the prompts and content you submit to those
        features are processed by our AI service providers to generate the
        output. We do not use your content to train our own models.
      </p>
    </LegalSection>

    <LegalSection title="5. How We Share Information">
      <p>We share information only:</p>
      <ul>
        <li>
          with the third-party platforms you explicitly connect, in order to
          publish and retrieve content on your behalf;
        </li>
        <li>
          with service providers that help us operate the Service (hosting,
          storage, payment processing, email delivery, error monitoring, and
          analytics), bound by contractual confidentiality obligations;
        </li>
        <li>
          with your organization&apos;s administrators and teammates, where
          you use the Service as part of a team or agency workspace;
        </li>
        <li>
          when required by law, or to protect the rights, safety, and security
          of PlanetPost, our users, or the public;
        </li>
        <li>
          as part of a merger, acquisition, or asset sale, with notice to you.
        </li>
      </ul>
    </LegalSection>

    <LegalSection title="6. Cookies">
      <p>
        We use cookies and similar technologies to keep you signed in,
        remember preferences (such as language), and understand how the
        Service is used. You can control cookies through your browser
        settings; disabling essential cookies may prevent the Service from
        working.
      </p>
    </LegalSection>

    <LegalSection title="7. Data Retention">
      <p>
        We keep your information for as long as your account is active or as
        needed to provide the Service. When you delete your account, we delete
        or anonymize your personal information within a reasonable period,
        except where we must retain it to comply with legal obligations,
        resolve disputes, or enforce agreements. You can disconnect a social
        channel at any time, which revokes our stored authorization for it.
      </p>
    </LegalSection>

    <LegalSection title="8. Security">
      <p>
        We use administrative, technical, and organizational safeguards
        designed to protect your information, including encryption in transit,
        hashed passwords, and access controls. No system is completely secure,
        so we cannot guarantee absolute security.
      </p>
    </LegalSection>

    <LegalSection title="9. Your Rights">
      <p>
        Depending on where you live, you may have rights to access, correct,
        export, restrict, or delete your personal information, and to object
        to certain processing. You can exercise most of these directly in your
        account settings, or by contacting us at the address below. If you are
        in the EEA, UK, or a jurisdiction with similar laws, you also have the
        right to lodge a complaint with your supervisory authority.
      </p>
    </LegalSection>

    <LegalSection title="10. International Transfers">
      <p>
        We may process and store information in countries other than your own.
        Where required, we use appropriate safeguards for international
        transfers, such as standard contractual clauses.
      </p>
    </LegalSection>

    <LegalSection title="11. Children">
      <p>
        The Service is not directed to children under 16, and we do not
        knowingly collect personal information from them. If you believe a
        child has provided us personal information, contact us and we will
        delete it.
      </p>
    </LegalSection>

    <LegalSection title="12. Changes to this Policy">
      <p>
        We may update this Privacy Policy from time to time. If we make
        material changes, we will notify you — for example, by email or a
        notice in the Service — before the changes take effect. The
        &quot;Effective date&quot; above shows when this Policy was last
        revised.
      </p>
    </LegalSection>

    <LegalSection title="13. Contact">
      <p>
        Questions or requests about your data? Contact us at{' '}
        <a
          href="mailto:support@planetpost.com"
          className="underline hover:text-newTextColor"
        >
          support@planetpost.com
        </a>
        . See also our{' '}
        <Link href="/terms" className="underline hover:text-newTextColor">
          Terms of Service
        </Link>
        .
      </p>
    </LegalSection>
  </LegalPage>
);
