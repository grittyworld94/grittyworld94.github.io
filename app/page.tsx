import Link from "next/link";

import { APPS, CONTACT_EMAIL } from "@/app/links";

export default function Home() {
  return (
    <>
      <p className="lead">Independent software studio based in South Korea.</p>

      <p>We create mobile apps and games for Android and iOS.</p>

      <p>
        Our goal is to build simple, reliable, and enjoyable digital experiences
        for users around the world.
      </p>

      <h2 id="apps">Apps</h2>

      <ul className="apps">
        {APPS.map((app) => (
          <li key={app.href} lang="ko">
            <Link className="app-name" href={app.href}>
              {app.name}
            </Link>
            <span className="badge">{app.releaseLabel}</span>
            <span className="app-desc">{app.summary}</span>
            <span className="app-platforms">iOS · Android</span>
          </li>
        ))}
      </ul>

      <h2>Contact</h2>

      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <p>
        App-specific privacy policies and terms are linked from each app page.
      </p>
    </>
  );
}
