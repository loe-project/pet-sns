export const FEED_PLACEHOLDER_SRC = "/placeholder-image1.png";

type FeedImageLike = { url?: string | null } | null | undefined;

export function getValidImageUrls(images: FeedImageLike[] | undefined): string[] {
  if (!Array.isArray(images)) return [];
  return images
    .map((img) => (typeof img?.url === "string" ? img.url.trim() : ""))
    .filter((url): url is string => url.length > 0);
}

export function pickFeedImage(images: FeedImageLike[] | undefined): string {
  return getValidImageUrls(images)[0] ?? FEED_PLACEHOLDER_SRC;
}
