import { CONTACT_EMAIL, PRIVACY_POLICY_URL } from "./links";

export default function Home() {
  return (
    <>
      <p className="lead">Independent software studio based in South Korea.</p>

      <p>We create mobile apps and games for Android and iOS.</p>

      <p>
        Our goal is to build simple, reliable, and enjoyable digital experiences
        for users around the world.
      </p>

      <h2>Contact</h2>

      <p>
        <strong>Email:</strong>{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>

      <p>
        For questions about how we handle your data, see our{" "}
        <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>
        .
      </p>
    </>
  );
}
