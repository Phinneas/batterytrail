// Cloudflare Pages middleware (runs on every request).
//
// 1. Canonical host: Pages `_redirects` can't match hostnames, so the apex domain
//    (batterytrail.com) was serving the full site with a 200. Every apex request
//    now gets one 301 to the same path + query on https://www.batterytrail.com.
// 2. Path redirects: Pages stops applying `_redirects` to requests handled by
//    Functions, so the rules from public/_redirects are re-applied here from the
//    generated map (see scripts/generate-redirects.mjs). Edit public/_redirects,
//    not the generated file.
import redirects from '../functions-lib/redirects.js';

const CANONICAL_HOST = 'www.batterytrail.com';
const REDIRECT_HOSTS = new Set(['batterytrail.com']);

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const rule = redirects[url.pathname];

  if (REDIRECT_HOSTS.has(url.hostname) || rule) {
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    url.port = '';
    if (rule) {
      url.pathname = rule.to; // query string is preserved, like _redirects
    } else if (!url.pathname.endsWith('/') && !/\.[a-z0-9]+$/i.test(url.pathname)) {
      // Add the trailing slash here so apex URLs reach their final page in one hop
      // instead of 301 (host) -> 308 (Pages trailing-slash).
      url.pathname += '/';
    }
    return Response.redirect(url.toString(), rule ? rule.status : 301);
  }

  return context.next();
}
