/// <reference lib="webworker" />
import { clientsClaim } from 'workbox-core';
import {
  cleanupOutdatedCaches,
  createHandlerBoundToURL,
  precacheAndRoute,
} from 'workbox-precaching';
import { NavigationRoute, registerRoute } from 'workbox-routing';

declare let self: ServiceWorkerGlobalScope;

/**
 * Takeover release: the v1 worker at this same path was cache-first with a
 * never-bumped cache name, so installed clients would otherwise stay on the
 * old site forever. skipWaiting + clientsClaim replace it on first load,
 * and the legacy cache is deleted for good.
 */
self.skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.delete('playlearn-v1'));
});

// SPA navigation fallback (hash router — one real document).
registerRoute(new NavigationRoute(createHandlerBoundToURL('index.html')));
