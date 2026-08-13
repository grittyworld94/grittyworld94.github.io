import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, PRIVACY_POLICY_URL } from "./links";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://grittyworld94.github.io"),
  title: {
    default: "grittyworld",
    template: "%s — grittyworld",
  },
  description:
    "Independent software studio based in South Korea. We create mobile apps and games for Android and iOS.",
  openGraph: {
    title: "grittyworld",
    description:
      "Independent software studio based in South Korea. We create mobile apps and games for Android and iOS.",
    url: "https://grittyworld94.github.io",
    siteName: "grittyworld",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="wrap">
          <header className="masthead">
            <Link href="/" className="wordmark">
              grittyworld
            </Link>
          </header>

          <main>{children}</main>

          <footer>
            <nav aria-label="Footer">
              <Link href="/">Home</Link>
              <a
                href={PRIVACY_POLICY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
            </nav>
            <p>&copy; 2026 grittyworld. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
