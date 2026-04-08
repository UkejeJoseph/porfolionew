/**
 * Centralized API configuration for split deployment.
 *
 * In production the frontend lives on Vercel and the backend on Render,
 * so every request needs the full Render origin.  During local development
 * the env var is left empty and requests fall back to relative URLs (same
 * origin), which the Vite dev-server proxies to Express automatically.
 */

/** Absolute URL of the backend (e.g. "https://hallsite-api.onrender.com") */
export const API_BASE_URL: string =
  import.meta.env.VITE_API_BASE_URL?.replace(/\/+$/, "") ?? "";

/**
 * Build the WebSocket URL that points at the Render backend.
 * Falls back to the current page origin when no env var is set (local dev).
 */
export function getWsUrl(): string {
  if (API_BASE_URL) {
    const url = new URL(API_BASE_URL);
    const protocol = url.protocol === "https:" ? "wss:" : "ws:";
    return `${protocol}//${url.host}/ws`;
  }
  // Local dev — same origin
  const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
  return `${protocol}//${window.location.host}/ws`;
}
