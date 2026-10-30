import type { Metadata } from "next";
import Link from "next/link";

import { CONTACT_EMAIL, GLOBEPEDIA } from "@/app/links";

export const metadata: Metadata = {
  title: GLOBEPEDIA.name,
  description: GLOBEPEDIA.summary,
  openGraph: {
    title: `${GLOBEPEDIA.name} — grittyworld`,
    description: GLOBEPEDIA.summary,
    url: GLOBEPEDIA.href,
    locale: "ko_KR",
    type: "website",
  },
};

export default function GlobepediaPage() {
  return (
    <article lang="ko" className="product-page">
      <Link href="/" className="backlink">← grittyworld</Link>

      <h1>글로브피디아 <span className="product-name-en">Globepedia</span></h1>
      <p className="product-meta">
        <span className="badge">{GLOBEPEDIA.releaseLabel}</span>
        <span>iOS · Android</span>
      </p>
      <p className="lead">지구본을 돌리며, 세계를 알아가세요.</p>
      <p>
        글로브피디아는 나라의 위치와 정보를 직접 살펴보고 퀴즈로 익히는 지리 앱입니다.
        세계지리가 궁금할 때, 수도와 국기를 공부할 때, 가보고 싶은 나라를 찾아볼 때
        로그인 없이 바로 시작할 수 있습니다.
      </p>

      <section aria-labelledby="features-title">
        <h2 id="features-title">둘러보고, 찾아보고, 기억해요</h2>
        <ul>
          <li><strong>3D 지구본</strong> — 돌리고 확대하며 나라의 위치와 경계를 살펴봅니다.</li>
          <li><strong>나라 정보</strong> — 228개 나라와 지역의 국기·수도·화폐·소개와 주요 관광지를 알아봅니다.</li>
          <li><strong>세계지리 퀴즈</strong> — 위치 찾기, 국기, 수도, 지역 문제로 기억을 확인합니다.</li>
          <li><strong>한국지리 퀴즈</strong> — 지도를 누르며 대한민국 시·도와 시·군의 위치를 익힙니다.</li>
          <li><strong>검색과 즐겨찾기</strong> — 한국어·영어로 나라와 수도를 찾고, 관심 있는 나라를 모아 둡니다.</li>
        </ul>
      </section>

      <section aria-labelledby="download-title">
        <h2 id="download-title">다운로드</h2>
        <p>
          iPhone과 Android에서 무료로 이용할 수 있습니다. 앱에는 광고가 포함되어 있으며,
          일부 추가 힌트는 선택형 보상 광고 시청 후 이용할 수 있습니다.
        </p>
        <ul className="store-links">
          {GLOBEPEDIA.storeLinks.map((store) => (
            <li key={store.name}>
              <a href={store.href} target="_blank" rel="noopener noreferrer">
                {store.name}에서 다운로드
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="support-title">
        <h2 id="support-title">이용 안내와 문의</h2>
        <ul>
          <li>
            <a href={GLOBEPEDIA.privacyPolicyUrl} target="_blank" rel="noopener noreferrer">
              개인정보처리방침
            </a>
          </li>
          <li>문의: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
        </ul>
      </section>
    </article>
  );
}
