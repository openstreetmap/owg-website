---
title: Security Notice: openstreetmap-website ecurity fix; developer action required
---

# openstreetmap-website security fix; developer action required

On 7 July 2025, openstreetmap-website changed how third-party tools can authenticate using OSM via OAuth. This fixes a security vulnerability that would have allowed a malicious site to trick a user into providing credentials for some third-party login services. If you run your own instance of openstreetmap-website, you should upgrade to the latest version or [backport the fix](https://github.com/openstreetmap/openstreetmap-website/commit/2ff4d6a4e633e479568572090eb6a16074103cd9) as soon as possible.

Unfortunately, [the fix breaks some Web applications](https://community.openstreetmap.org/t/osm-oauth-authorizations-are-failing-across-multiple-services-due-to-popup-windows/132397) that display OSM’s login page in a popup window. If you have deployed one of the following applications or libraries, please upgrade to avoid breakage:

* [HOT Tasking Manager](https://github.com/hotosm/tasking-manager/pull/6933): upgrade to [v5.0.6](https://github.com/hotosm/tasking-manager/releases/tag/v5.0.6) or later
* [osm-api-js](https://github.com/osmlab/osm-api-js/pull/24): upgrade to v3.0.0 or later then [update land.html](https://www.npmjs.com/package/osm-api#1-popup)
* [osm-auth](https://github.com/osmlab/osm-auth/pull/138)

Thanks to Sam Jose for reporting the security vulnerability. As a reminder, if you find any security issue in software or services on openstreetmap.org, please follow the Operations Working Group’s [security reporting policy](https://operations.osmfoundation.org/policies/security/).
