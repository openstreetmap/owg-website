---
title: Tile Usage Policy
permalink: /policies/tiles/
---

# {{ page.title }}

We are in principle happy for our map tiles to be used by external users for creative and unexpected uses – in contrast to most web mapping providers, which insist that you use only their supplied API.

However, **OpenStreetMap's own servers are run entirely on donated resources.** They have strictly limited capacity. Heavy use of OSM tiles adversely affects people's ability to edit the map, and is an abuse of the individual donations and sponsorship which provide hardware and bandwidth. As a result, we require that users of the tiles abide by this tile usage policy.

**OpenStreetMap data is [free for everyone to use](https://www.openstreetmap.org/copyright). Our tile servers are not.**

Below are the minimum requirements that users of tile.openstreetmap.org must adhere to. These may change in future, depending on available resources. Should any users or patterns of usage nevertheless cause problems to the service, access may be [blocked](https://wiki.openstreetmap.org/wiki/Blocked_Tiles) without prior notice. We will try to contact relevant parties if possible, but cannot guarantee this. In any case, you can still get OSM-derived map tiles [elsewhere](https://wiki.openstreetmap.org/wiki/Tiles#Tile_providers).

Although our map tiles are generally very reliable, their availability to others is on a best effort basis and we offer no SLA or guarantees.

Use of any OSMF provided service is further governed by the [OSMF Terms of Use](https://wiki.osmfoundation.org/wiki/Terms_of_Use).

## Usage

The correct URL for the tiles is `https://tile.openstreetmap.org/{zoom}/{x}/{y}.png`. Other subdomains are not recommended as they may be slower or discontinued in the future. We are unable to offer support on how to make your preferred map library work with this URL and recommend you consult its documentation.

## Requirements

* Clearly display [license](https://wiki.openstreetmap.org/wiki/License) [attribution](https://wiki.osmfoundation.org/wiki/Licence/Attribution_Guidelines), normally in the bottom-right corner of the map.
* Do not actively or passively encourage copyright infringement.
* Recommended: Do not hardcode any URL to tile.openstreetmap.org as doing so will limit your ability to react if the service is disrupted or blocked. In particular, switching should be possible without requiring a software update.
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

Bulk downloading ("scraping") is the downloading of tiles in advance instead of downloading when a user views those tiles. Common examples include creating a tile archive or downloading for offline usage. Bulk downloading is **prohibited**. These tiles are generally not cached on the server in advance and have to be rendered specifically for those requests, putting an unjustified burden on the available resources.

## Caching proxies

We generally do not recommend setting up a caching service in front of tile.openstreetmap.org. If you decide to do so it **must** set a HTTP User-Agent that allows us to contact you in case of issues.

## Privacy

Use of all services is subject to the [OpenStreetMap Foundation privacy policy](http://wiki.osmfoundation.org/wiki/Privacy_Policy). Please do not submit personal data or other confidential material to any of our services.

We publish [anonymised, summarised data for research and other purposes](https://wiki.osmfoundation.org/wiki/Privacy_Policy#Data_we_receive_automatically) about usage of the tile service. This currently includes [aggregated data on tiles accessed and websites or apps using the service](https://planet.openstreetmap.org/tile_logs/) but may include other reports, including those generated on an ad-hoc basis.

## Changes to this policy

This policy may change at any time subject to the needs and constraints of the project. Commercial services, or those that seek donations, should be especially aware that access may be withdrawn at any point: you may no longer be able to serve your paying customers if access is withdrawn.

## Alternative OpenStreetMap Tile Providers

Tile servers based on OSM data:

* [Wiki tile server list](https://wiki.openstreetmap.org/wiki/Tile_servers)
* [Wiki TMS page](https://wiki.openstreetmap.org/wiki/TMS)

Paid-for tile servers:

* See [Commercial OSM Software and Services](https://wiki.openstreetmap.org/wiki/Commercial_OSM_Software_and_Services)

Setting up your own tile server:

* [the switch2osm website, with up to date information on running your own OSM based services](http://switch2osm.org/)

------

*This policy relates to the Standard ("OpenStreetMap Carto") tiles rendered and served by **tile.openstreetmap.org** as part of the OpenStreetMap project. It does not relate to other tiles that are viewable on the OpenStreetMap.org homepage, which may have their own usage policies. You should contact the individual projects, such as [OpenCycleMap](https://wiki.openstreetmap.org/wiki/OpenCycleMap), if you wish to use their tiles.*
