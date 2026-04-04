# Portfolio Domain And Integration Notes

This portfolio is a static `Vite + React` app. It does not need Supabase unless you later add a backend feature like authentication, a CMS, analytics storage, or live prediction endpoints.

## What Is Already Wired In

- runtime SEO metadata through `src/components/SeoHead.tsx`
- a `siteUrl` field in `src/config/siteConfig.ts` for the final production domain
- `robots.txt`
- a starter `sitemap.xml`
- a social preview image at `public/og-preview.svg`
- cross-links to `ML Prep`

## Before You Attach A Real Portfolio Domain

1. Buy or choose the portfolio domain.
2. Set `siteConfig.siteUrl` in `src/config/siteConfig.ts`.
3. Update `public/sitemap.xml` with the final absolute URL.
4. Replace placeholder social/contact links in `siteConfig` if needed.

## Vercel + Cloudflare Flow

1. Add the portfolio domain to the portfolio Vercel project.
2. Copy the required DNS records into Cloudflare.
3. Use `DNS only` if Vercel has trouble verifying proxied records.
4. Use `Full` or `Full (strict)` SSL in Cloudflare.
5. After the certificate is issued, verify the custom domain and any redirect behavior.

## Relationship To ML Prep

- `mlprep.org` should point to the existing ML Prep app.
- This portfolio should stay on a separate domain once you choose it.
- Cross-links between the two sites are already supported in the UI.
