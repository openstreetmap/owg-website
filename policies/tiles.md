---
title: Tile Usage Policy
permalink: /policies/tiles/
---

# {{ page.title }}

OpenStreetMap (OSM) data is **free for everyone to use**. Our **tile servers are not**: they are [funded by donations](https://supporting.openstreetmap.org/donate/) and [sponsorship](https://hardware.openstreetmap.org/thanks/), and capacity is limited. To protect the service for mappers and the wider community, you **must** follow this policy when using tiles from `tile.openstreetmap.org`.

We welcome creative uses and do not require you to use a specific API. However, heavy or inappropriate use harms others' ability to edit and view the map. We may block access, without notice, if your usage degrades the service. We may try to contact you if possible, but cannot guarantee this.

Availability is **best-effort**: there is **no SLA or guarantee**. All [OSMF](https://osmfoundation.org/) services are also covered by the [OSMF Terms of Use](https://wiki.osmfoundation.org/wiki/Terms_of_Use).

If you cannot meet these requirements, please use an **alternative OSM-derived service** (see below), or run your own.

---

## Quick summary

**You must:**

* Use the correct URL: `https://tile.openstreetmap.org/{z}/{x}/{y}.png`.
* Provide visible **licence attribution**, following the [Attribution Guidelines](https://wiki.osmfoundation.org/wiki/Licence/Attribution_Guidelines).
* Send a **valid HTTP User-Agent** that clearly identifies your application (or a platform `X-Requested-With` app ID where set automatically).
* From web pages, ensure a valid **HTTP Referer** header is sent.
* **Cache** tiles locally according to HTTP caching headers (or at least **7 days** if your cache cannot read them).
* Avoid encouraging or enabling copyright infringement.

**You must not:**

* Bulk download ("scrape") tiles or offer prefetch features.
* Send `Cache-Control: no-cache`, `Pragma: no-cache`, or similar no-cache headers by default.
* Set a restrictive Referrer-Policy that prevents the **HTTP Referer** header being sent.
* Use the **HTTP** URL `http://tile.openstreetmap.org/{z}/{x}/{y}.png`, use the **HTTPS** URL from above.
* Masquerade as another app's User-Agent, or rely on a library's default User-Agent.

**You should (recommended):**

* Avoid hard-coding the tile URL; allow switching without needing a software update.
* Add a "Report a map issue" link to [https://www.openstreetmap.org/fixthemap](https://www.openstreetmap.org/fixthemap).
* Publish a contact email on your website or app store listing.
* Support HTTP/2 or HTTP/3 for efficient multiplexed downloads.

---

## 1. Correct tile URL

Use exactly:

```
https://tile.openstreetmap.org/{z}/{x}/{y}.png
```

Other subdomains or hostnames may be slower or withdrawn without notice. We cannot provide integration support for specific map libraries; please consult your library's documentation.

## 2. Attribution and licensing

* Show OpenStreetMap licence attribution clearly on the map (typically bottom-right).<br>
  Typically: *© [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors*<br>
  See: [Attribution Guidelines](https://wiki.osmfoundation.org/wiki/Licence/Attribution_Guidelines)
* Do not actively or passively encourage copyright infringement.
* Do not hide attribution beneath UI, behind toggles, or off-screen.

## 3. Technical requirements

### 3.1 Identification

* **User-Agent:** Send a clear, unique User-Agent string that names your app and optionally includes a contact URL or email.<br>
  *Example (good):*<br>
  `User-Agent: MyTownMaps/1.4 (+https://example.org; contact: maps@example.org)`<br>
  Browsers will use the browser's default `User-Agent`.
* Do **not** use a library default `User-Agent`, and never impersonate another app or a browser.
* If your platform automatically sets an **`X-Requested-With`** header with an app ID, that is acceptable, but a proper `User-Agent` is still recommended.
* **Referer (web only):** Browsers are expected to send a valid `Referer` header. Native apps usually do not have a referer, this is ok.
* **Referrer-Policy (web only):** Do not set a restrictive Referrer-Policy that prevents the `Referer` header being sent on requests to tile.openstreetmap.org.

### 3.2 Caching

* **Do not bypass caches.** Never send `Cache-Control: no-cache`, `Pragma: no-cache`, or similar no-cache headers by default.
* **Honour server caching headers** (`Cache-Control`, `Expires`, `Etag`). If your cache cannot read them, cache each tile for **at least 7 days**.
* Keep a sufficient local cache to ensure that repeat views do not unneccessarily re-download tiles.
* Use [Conditional Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Conditional_requests) using `If-None-Match` and `If-Modified-Since` when requesting tiles that have expired.

> **Note:** Modern browsers, with default settings, already satisfy these technical requirements.

### 3.3 Protocols

* Recommended: Use HTTP/2 or HTTP/3 to multiplex requests efficiently.

### 3.4 Apps, Library defaults & Software Development Kits (identification required)

Many HTTP clients and Software Development Kits (SDK) use a **generic User-Agent header** (e.g. `okhttp/x.y`, `Go-http-client/1.1`, `python-requests/x.y`, `Java/1.8`, `curl/x.y`). Traffic that uses these defaults **will be blocked** because we cannot identify or contact the actual application.

**You must:**

* Apps must configure a **distinct, stable `User-Agent`** naming your app **and** optionally a contact URL or email.
* For websites, ensure the **`Referer` header is present and accurate** end-to-end. If you proxy tile requests through your servers or a CDN, do not strip or blank the `Referer`.
* Keep identification **stable** across requests and releases. It’s fine (and helpful) to update the **version number** in your `User-Agent` as you publish new builds (e.g. `MyTownMaps/1.4` → `MyTownMaps/1.5`). Do **not** randomise or rotate the product name or contact details, and do **not** impersonate browsers or other apps.
* If you publish an SDK, set a **sensible default `User-Agent`** (naming the SDK and docs URL) and provide a **simple override** to allow developers to easily identify their app.

**You must not:**

* Use the library's generic default `User-Agent`.
* Hide behind a generic proxy `User-Agent` (e.g. `nginx`, `Varnish`, `CDN-XYZ`).
* Strip `Referer` on web traffic or tunnel all clients behind a single, anonymous identity.

**Enforcement:** Traffic using generic defaults, referer-stripping, or spoofed identities may be **blocked without notice**. We prioritise identifiable and contactable operators to keep the service reliable for everyone.

## 4. Prohibited: bulk downloading ("scraping") and offline use

**Bulk downloading** is any pre-emptive fetching of tiles other than those a user is actively viewing. This includes, but isn't limited to:

* "Pre-seeding" large areas or multiple zoom levels in advance.
* Building tile archives (e.g. `.zip`, `.mbtiles`) for later distribution.
* Automated scans across wide bounding boxes, especially at high zoom (z≥14).
* Headless bots that pan/zoom the map to force rendering.

**Offline use is not permitted on `tile.openstreetmap.org`.** Features such as "Download city/country for offline use" or "Save area for later" **rely on prefetch/bulk downloading** and are therefore prohibited.

> **Note:** If you require offline maps, use **self-hosted** tiles or a **provider that explicitly allows offline/prefetching**. [Vector tiles](https://wiki.openstreetmap.org/wiki/Vector_tiles) are often more suitable for this use-case.

**Permitted usage (examples):**

* Normal interactive viewing by a human where the client requests only the tiles needed for the current viewport (with modest, short-range look-ahead typical of browsers).
* Re-visits served from your **local cache** honouring server caching headers (or ≥ 7-day TTL if you cannot read them).

**Not permitted (examples):**

* Any "download for offline" button or background job that fetches tiles a user is not currently viewing.
* Preloading entire towns/regions or multiple zoom stacks "just in case".

**Enforcement:** Prefetch/offline patterns place disproportionate load on community-funded servers and will be **blocked without notice**. Repeated violations may lead to longer-term or network-level blocks.

## 5. Caching proxies

We generally **do not recommend** putting your own caching proxy in front of `tile.openstreetmap.org`. If you do, it **must**:

* Set a clear, contactable **User-Agent** identifying the organisation/service.
* Honour server caching headers or the minimum 7-day TTL rule above.

## 6. Privacy

Use of OSMF services is subject to the [OSMF Privacy Policy](http://wiki.osmfoundation.org/wiki/Privacy_Policy). Do not submit personal or confidential data to our services.

We publish **anonymised, aggregated usage data** for research and operations, including [summary data on tiles accessed and websites/apps using the service](https://planet.openstreetmap.org/tile_logs/). Additional aggregated reports may be produced on an ad-hoc basis.

## 7. Changes and enforcement

This policy may change at any time to reflect project needs and constraints. Commercial services, or those that seek donations, should be especially aware that access may be withdrawn at any point: you may no longer be able to serve your paying customers if access is withdrawn.

We may try to contact you (for example, via your `User-Agent` or public contact details) if there is a problem, but this may not always be possible. Access may be **blocked without prior notice**.

## 8. Alternatives: OSM-derived services, vector tiles, and self-hosting

**Hosted tile services based on OSM data**

* Community list: [https://wiki.openstreetmap.org/wiki/Raster_tile_providers](https://wiki.openstreetmap.org/wiki/Raster_tile_providers)

**Commercial providers**

* See: [Commercial OSM Software and Services](https://wiki.openstreetmap.org/wiki/Commercial_OSM_Software_and_Services) and [https://switch2osm.org/providers/](http://switch2osm.org/providers/)

**Run your own tiles**

* Up-to-date guidance: [http://switch2osm.org/](http://switch2osm.org/)

**Vector tiles**

* Vector tiles are an alternative to raster tiles and are typically rendered on the client using a style.
* They can be hosted by third parties or self-hosted, and **where the provider terms permit** **can be packaged for offline use**.
* See overview: [https://wiki.openstreetmap.org/wiki/Vector_tiles](https://wiki.openstreetmap.org/wiki/Vector_tiles)

## 9. Scope

This policy applies to the **Standard** ("OpenStreetMap Carto") **raster** tiles served by **`tile.openstreetmap.org`** as part of the OpenStreetMap project.

It **does not** apply to other layers shown on the OpenStreetMap.org homepage (e.g. OpenCycleMap or other third-party tiles). Those layers may have their own usage policies, please contact the relevant projects directly if you wish to use their tiles.

OpenStreetMap's Vector Tiles served by **`vector.openstreetmap.org`** is a separate service with its own usage policy: [https://operations.osmfoundation.org/policies/vector/](https://operations.osmfoundation.org/policies/vector/)
