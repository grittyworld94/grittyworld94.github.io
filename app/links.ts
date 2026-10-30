export const CONTACT_EMAIL = "grittyworld.94@gmail.com";

type StoreLink = {
  name: "App Store" | "Google Play";
  href: string;
};

export const GLOBEPEDIA = {
  name: "글로브피디아 (Globepedia)",
  href: "/apps/globepedia/",
  summary: "지구본을 돌려 나라를 탐색하고, 국기·수도·위치 퀴즈로 배우는 지리 앱.",
  releaseLabel: "다운로드 가능",
  storeLinks: [
    { name: "App Store", href: "https://apps.apple.com/kr/app/globepedia/id6800700904" },
    { name: "Google Play", href: "https://play.google.com/store/apps/details?id=com.grittyworld.globepedia" },
  ] satisfies StoreLink[],
  privacyPolicyUrl:
    "https://hungry-ship-7a4.notion.site/34ed5a76164d80eeb957e390dadf9a84",
};

/** Policies and terms belong to each app's introduction page. */
export const APPS = [GLOBEPEDIA];
