import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, PRIVACY_POLICIES } from "../links";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policies for apps published by grittyworld.",
};

export default function PrivacyIndex() {
  return (
    <>
      <h1>Privacy Policy</h1>

      <p>
        Each grittyworld app has its own privacy policy describing what that app
        collects and how it is used. Select an app to read its policy.
      </p>

      <ul className="apps">
        {PRIVACY_POLICIES.map((policy) =>
          policy.external ? (
            <li key={policy.name}>
              <a
                className="policy-link"
                href={policy.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {policy.name}
                <span className="ext" aria-hidden="true">
                  &#8599;
                </span>
              </a>
            </li>
          ) : (
            <li key={policy.name}>
              <Link className="policy-link" href={policy.href}>
                {policy.name}
              </Link>
            </li>
          ),
        )}
      </ul>

      <h2>Contact</h2>

      <p>
        If you have any questions about privacy across our apps, email us at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </>
  );
}
