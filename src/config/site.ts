import { locales } from "@/i18n/routing";

export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Legion Breaker Wiki",
  shortName: "Legion Breaker",
  logoText: "LB",
  tagline: "Spells, Skill Trees, Army Builds & Progression Guides",
  description: "Fan-made Legion Breaker wiki covering beginner guides, spell builds, skill tree upgrades, holy army strategies and full progression walkthroughs.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://legion-breaker.wiki",
  supportEmail: "support@legion-breaker.wiki",
  gameUrl: "https://store.steampowered.com/app/4425980/Legion_Breaker/",
  heroVideoId: "Qjv2H7hWovs", // Legion Breaker - Official Trailer
  social: {
    // Legion Breaker has no official Discord server; the Steam Community Hub is the official community space.
    discord: "https://steamcommunity.com/app/4425980",
    youtube: "https://www.youtube.com/watch?v=Qjv2H7hWovs",
  },
  locales,
  defaultLocale: "en",
};
