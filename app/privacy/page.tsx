import type { Metadata } from "next";
import Link from "next/link";

import { APPS, CONTACT_EMAIL } from "@/app/links";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Find privacy policies and terms on each grittyworld app page.",
};

export default function PrivacyIndex() {
  return (
    <>
      <h1>Privacy Policy</h1>

      <p>
        Each app has its own privacy policy and, where provided, terms of
        service. Select an app to find its policy links and support information.
      </p>

      <ul className="apps">
        {APPS.map((app) => (
          <li key={app.href} lang="ko">
            <Link className="policy-link" href={`${app.href}#support-title`}>
              {app.name}
            </Link>
          </li>
        ))}
      </ul>

      <h2>Contact</h2>

      <p>
        If you have any questions about privacy across our apps, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
