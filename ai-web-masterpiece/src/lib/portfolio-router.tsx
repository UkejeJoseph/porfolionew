import { forwardRef, type AnchorHTMLAttributes } from "react";
import {
  Link as RouterLink,
  useLocation as useRouterLocation,
  useMatch,
} from "react-router-dom";

export const Link = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
>(({ href, ...props }, ref) => <RouterLink ref={ref} to={href} {...props} />);
Link.displayName = "PortfolioLink";
export function useLocation(): [string] {
  return [useRouterLocation().pathname];
}
export function useRoute(
  pattern: string,
): [boolean, Record<string, string | undefined> | null] {
  const match = useMatch(pattern);
  return [Boolean(match), match?.params ?? null];
}
