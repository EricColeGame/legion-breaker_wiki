import { defineRouting } from "next-intl/routing";

// 唯一真相源：最终语言集合（与 languages.json 保持一致）
export const locales = ["en", "ja", "ko", "es"] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales: locales as unknown as string[],
  defaultLocale: "en",
  localePrefix: "always",
  localeDetection: false,
});
