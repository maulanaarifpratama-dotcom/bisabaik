import type { ImageMetadata } from "astro";

import batikHands from "@/assets/stock/batik-hands.jpg";
import chiliVendor from "@/assets/stock/chili-vendor.jpg";
import elderMan from "@/assets/stock/elder-man.jpg";
import elderWomanPortrait from "@/assets/stock/elder-woman-portrait.jpg";
import elderWomanWave from "@/assets/stock/elder-woman-wave.jpg";
import ikatWeaverMarket from "@/assets/stock/ikat-weaver-market.jpg";
import paraAthlete from "@/assets/stock/para-athlete.jpg";
import papuaMarketGathering from "@/assets/stock/papua-market-gathering.jpg";
import farmerElderBaskets from "@/assets/stock/farmer-elder-baskets.jpg";
import healthPostCommunity from "@/assets/stock/health-post-community.jpg";
import marketWomen from "@/assets/stock/market-women.jpg";
import ricePlantingHills from "@/assets/stock/rice-planting-hills.jpg";
import riceTerracesWalker from "@/assets/stock/rice-terraces-walker.jpg";
import schoolFieldwork from "@/assets/stock/school-fieldwork.jpg";
import streetSweeper from "@/assets/stock/street-sweeper.jpg";
import villageGathering from "@/assets/stock/village-gathering.jpg";
import villagePath from "@/assets/stock/village-path.jpg";
import villageWomenLaughing from "@/assets/stock/village-women-laughing.jpg";

/**
 * Photographs are licensed stock (Unsplash and Pexels), not the organisation's own programme
 * documentation, and every one was checked against its source page for where
 * it was taken: three candidates were dropped because the page placed them in
 * India, Taiwan, or nowhere that could be confirmed. Credits live in the
 * Disclaimer, and the alt text describes only what is visible. It never says
 * "our field team", because these are not.
 *
 * Content files reference photography by key, never by path, so that copy can
 * move to a CMS without carrying build-time import paths with it. Keys name
 * the picture, not the slot, so a photo can move between pages without the key
 * lying about where it is.
 */
export const IMAGES = {
  "batik-hands": batikHands,
  "chili-vendor": chiliVendor,
  "elder-man": elderMan,
  "elder-woman-portrait": elderWomanPortrait,
  "elder-woman-wave": elderWomanWave,
  "ikat-weaver-market": ikatWeaverMarket,
  "papua-market-gathering": papuaMarketGathering,
  "para-athlete": paraAthlete,
  "farmer-elder-baskets": farmerElderBaskets,
  "health-post-community": healthPostCommunity,
  "market-women": marketWomen,
  "rice-planting-hills": ricePlantingHills,
  "rice-terraces-walker": riceTerracesWalker,
  "school-fieldwork": schoolFieldwork,
  "street-sweeper": streetSweeper,
  "village-gathering": villageGathering,
  "village-path": villagePath,
  "village-women-laughing": villageWomenLaughing,
} satisfies Record<string, ImageMetadata>;

export type ImageKey = keyof typeof IMAGES;

export function image(key: ImageKey): ImageMetadata {
  return IMAGES[key];
}
