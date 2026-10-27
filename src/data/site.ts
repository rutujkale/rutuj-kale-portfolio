export const siteUrl = "https://rutujkale.netlify.app";

export function absoluteUrl(pathname: string) {
  return `${siteUrl}${pathname === "/" ? "/" : pathname}`;
}
