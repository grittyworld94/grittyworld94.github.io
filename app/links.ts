export const CONTACT_EMAIL = "grittyworld.94@gmail.com";

export type PrivacyPolicy = {
  /** App name shown in the list */
  name: string;
  /** Where the policy lives */
  href: string;
  /**
   * True when href points outside this site (e.g. Notion).
   * Omit once the policy moves in-repo to /privacy/<slug>/.
   */
  external?: boolean;
};

/**
 * One entry per app that ships a privacy policy.
 * To add an app, append a row here — the list page picks it up automatically.
 */
export const PRIVACY_POLICIES: PrivacyPolicy[] = [
  {
    name: "Globepedia",
    href: "https://app.notion.com/p/34ed5a76164d80eeb957e390dadf9a84",
    external: true,
  },
];
