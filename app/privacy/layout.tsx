import Link from "next/link";

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article>
      <Link href="/" className="backlink">
        &larr; Back to home
      </Link>
      {children}
    </article>
  );
}
