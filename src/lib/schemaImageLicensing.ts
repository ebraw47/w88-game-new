/** Site origin for absolute schema URLs */
export const SITE_ORIGIN = "https://w88game.com.pk";

/** Schema.org Organization node reused as creator across ImageObjects */
export const IMAGE_CREATOR = {
  "@type": "Organization",
  name: "W88 Game",
  url: SITE_ORIGIN,
} as const;

/**
 * Full set of Schema.org ImageObject properties recommended by Google for
 * Image Metadata (Search Console: license, creator, acquireLicensePage,
 * copyrightNotice, creditText).
 */
export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: "© W88 Game. All rights reserved.",
  creditText: "W88 Game",
} as const;
