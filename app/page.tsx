import Link from "next/link";

const apps = [
  {
    name: "발품 (balpoom)",
    status: "In development",
    description:
      "A record-keeping app for people visiting properties in person — capture photos, notes, and impressions on site, then compare them later.",
  },
  {
    name: "Globepedia",
    status: "Coming soon",
    description:
      "Explore the world on an interactive 3D globe and learn about every country along the way.",
  },
  {
    name: "Signal",
    status: "In development",
    description: "An atmospheric narrative game built with Godot.",
  },
];

export default function Home() {
  return (
    <>
      <p className="lead">Independent software studio based in South Korea.</p>

      <p>We create mobile apps and games for Android and iOS.</p>

      <p>
        Our goal is to build simple, reliable, and enjoyable digital experiences
        for users around the world.
      </p>

      <h2>Apps</h2>

      <ul className="apps">
        {apps.map((app) => (
          <li key={app.name}>
            <span className="app-name">{app.name}</span>
            <span className="badge">{app.status}</span>
            <span className="app-desc">{app.description}</span>
          </li>
        ))}
      </ul>

      <h2>Contact</h2>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:grittyworld.94@gmail.com">grittyworld.94@gmail.com</a>
      </p>

      <p>
        For questions about how we handle your data, see our{" "}
        <Link href="/privacy/">Privacy Policy</Link>.
      </p>
    </>
  );
}
