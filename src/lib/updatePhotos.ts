import type { ImageMetadata } from "astro";

const photos = import.meta.glob("/src/assets/updates/*.{jpg,jpeg,png,webp}", {
  eager: true,
}) as Record<string, { default: ImageMetadata }>;

export function updatePhoto(name?: string): ImageMetadata | undefined {
  return name ? photos[`/src/assets/updates/${name}`]?.default : undefined;
}
