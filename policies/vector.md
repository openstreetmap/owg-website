---
title: Vector Tile Usage Policy
permalink: /policies/vector/
---

# {{ page.title }}

We are in principle happy for our map tiles to be used by external users for creative and unexpected uses – in contrast to most web mapping providers, which insist that you use only their supplied API.

However, **OpenStreetMap's own servers are run entirely on donated resources.** They have strictly limited capacity. Heavy use of OSM tiles adversely affects people's ability to edit the map, and is an abuse of the individual donations and sponsorship which provide hardware and bandwidth. As a result, we require that users of the tiles abide by this tile usage policy.

**OpenStreetMap data is [free for everyone to use](https://wiki.openstreetmap.org/wiki/OpenStreetMap_License). Our tile servers are not.**

Below are the minimum requirements that users of vector.openstreetmap.org must adhere to. These may change in future, depending on available resources. Should any users or patterns of usage nevertheless cause problems to the service, access may still be blocked without prior notice. We will try to contact relevant parties if possible, but cannot guarantee this.

Although our map tiles are generally very reliable, their availability to others is on a best effort basis and we offer no SLA or guarantees.

Because OpenStreetMap data is free, many other organisations provide map tiles made from OSM data. If your project doesn't meet our requirements, you can get [Shortbread tiles](https://shortbread-tiles.org/) elsewhere.

Use of any OSMF provided service is further governed by the [OSMF Terms of Use](https://wiki.osmfoundation.org/wiki/Terms_of_Use).

## Usage

The correct URL for the tiles is `https://vector.openstreetmap.org/$VERSION/{z}/{x}/{y}.mvt` or the tilejson at `https://vector.openstreetmap.org/$VERSION/tilejson.json`. The style is available at `https://vector.openstreetmap.org/demo/shortbread/colorful.json`. We are unable to offer support on how to make your preferred map library work with these URLs and recommend you consult its documentation.

## Requirements

* Clearly display [license](https://wiki.openstreetmap.org/wiki/License) [attribution](https://wiki.osmfoundation.org/wiki/Licence/Attribution_Guidelines), normally in the bottom-right corner of the map.
* Do not actively or passively encourage copyright infringement.
* Recommended: Do not hardcode any URL to vector.openstreetmap.org as doing so will limit your ability to react if the service is disrupted or blocked. In particular, switching should be possible without requiring a software update.
* Recommended: add a link to [https://www.openstreetmap.org/fixthemap](https://www.openstreetmap.org/fixthemap) to allow your users to report and fix problems in our data.
* Recommended: a contact email on your web page or app store page. If we cannot find contact information we will be unable to do anything except block if an issue arises.

## Technical Usage Requirements

* **Valid [HTTP User-Agent](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/User-Agent)** identifying application. Faking another app's User-Agent WILL get you blocked. Using a library's default User-Agent is **NOT** recommended as they may be blocked if another user of the library is misusing it. If a device automatically sends an X-Requested-With header with an application specific Application ID, this will be considered an acceptable substitute for the HTTP User-Agent, although we still recommend setting a valid HTTP User-Agent for the application.
* When coming from a web page, a **valid [HTTP Referer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)**. Apps generally do not have a HTTP referer.
* **DO NOT send no-cache headers**. ("Cache-Control: no-cache", "Pragma: no-cache" etc.)
* **Cache Tile** downloads locally according to HTTP Expiry Header, alternatively a minimum of 7 days.
* Recommended: HTTP/2 or HTTP/3 support to allow multiplexed downloads

Note: modern web browsers in standard configuration pass all the above technical requirements.

## Bulk Downloading

Bulk downloading ("scraping") is the downloading of tiles in advance instead of downloading when a user views those tiles. Common examples include creating a tile archive or downloading for offline usage. Bulk downloading is **prohibited**. [Other providers](https://shortbread-tiles.org/download/) have bulk tiles available as packages.

## Caching proxies

We generally do not recommend setting up a caching service in front of vector.openstreetmap.org. If you decide to do so it **must** set a HTTP User-Agent that allows us to contact you in case of issues.

## Privacy

Use of all services is subject to the [OpenStreetMap Foundation privacy policy](http://wiki.osmfoundation.org/wiki/Privacy_Policy). Please do not submit personal data or other confidential material to any of our services.

We publish [anonymised, summarised data for research and other purposes](https://wiki.osmfoundation.org/wiki/Privacy_Policy#Data_we_receive_automatically) about usage of the tile service.

## Changes to this policy

This policy may change at any time subject to the needs and constraints of the project. Commercial services, or those that seek donations, should be especially aware that access may be withdrawn at any point: you may no longer be able to serve your paying customers if access is withdrawn.

## Versioning

We will try to offer new tiles immediately after the release of a new major version of Shortbread. After a new set of tiles is released we will attempt to offer the old tiles with updates for one month and continue to make the tiles available without updates for an additional two months.
