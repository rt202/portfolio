import { useEffect } from "react";
import { siteConfig } from "../config/siteConfig";

const STRUCTURED_DATA_ID = "portfolio-structured-data";

function setOrCreateMeta(attribute: "name" | "property", key: string, content: string) {
  let meta = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function setCanonical(url: string) {
  let link = document.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export const SeoHead = () => {
  useEffect(() => {
    const origin = siteConfig.siteUrl || window.location.origin;
    const canonicalUrl = `${origin}/`;
    const title = siteConfig.seo.title;
    const description = siteConfig.seo.description;
    const ogImageUrl = new URL(siteConfig.seo.ogImagePath, origin).toString();

    document.title = title;

    setOrCreateMeta("name", "description", description);
    setOrCreateMeta("name", "theme-color", "#020314");
    setOrCreateMeta("property", "og:title", title);
    setOrCreateMeta("property", "og:description", description);
    setOrCreateMeta("property", "og:type", "website");
    setOrCreateMeta("property", "og:url", canonicalUrl);
    setOrCreateMeta("property", "og:image", ogImageUrl);
    setOrCreateMeta("name", "twitter:card", "summary_large_image");
    setOrCreateMeta("name", "twitter:title", title);
    setOrCreateMeta("name", "twitter:description", description);
    setOrCreateMeta("name", "twitter:image", ogImageUrl);
    setCanonical(canonicalUrl);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.title,
      description,
      url: canonicalUrl,
      sameAs: [siteConfig.links.mlPrepUrl]
    };

    let script = document.getElementById(STRUCTURED_DATA_ID) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = STRUCTURED_DATA_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, []);

  return null;
};
