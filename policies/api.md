---
title: API Usage policy
permalink: /policies/api/
---

*This forms part of a set of usage policies governing core OpenStreetMap services. Note that 'API' relates to the data editing API. For developers accessing maps (often using javascript "APIs") the OpenStreetMap Tile Usage Policy is more relevant*

------

The editing API is provided in order to edit the map data, **not** for read-only purposes or projects. Clients may be blocked without notice if they are affecting the service level for others or causing data corruption.

Large or frequent data users must use the download service "[planet.osm](https://wiki.openstreetmap.org/wiki/Planet.osm)" other alternatives described below.

To avoid having your access blocked, please discuss your requirement with [system administrators](https://wiki.openstreetmap.org/wiki/System_Administrators) either via their wiki pages or on the [IRC channel](https://wiki.openstreetmap.org/wiki/IRC) prior to starting.

The OSMF Operations Working Group (OWG) are the team in charge of API Usage policies for OSMF-run services.

## Requirements

* Clearly display [licence](https://wiki.openstreetmap.org/wiki/Licence) attribution as required.
* Do not actively or passively encourage copyright infringement.

## Technical Usage Requirements

* **Valid User-Agent** identifying application and version. Faking another app's User-Agent WILL get you blocked.
* If known, a **valid HTTP Referer**.
* **Maximum of 2 download threads**.

## Heavy Users

We request that you

* set up your own data server, usually with [planet.osm](https://wiki.openstreetmap.org/wiki/Planet.osm) and [Osmosis](https://wiki.openstreetmap.org/wiki/Osmosis): or
* use another provider. See list below.

All of the tools and software needed to create a complete mirror of OpenStreetMap and/or its API are available as open source software and can be found in OpenStreetMap's source repositories at [git.openstreetmap.org](http://git.openstreetmap.org/) and [svn.openstreetmap.org](http://trac.openstreetmap.org/browser) with an explanation of how to set it up in the [wiki](https://wiki.openstreetmap.org/wiki/Rails_port). Additional useful tools and API's can be found there too.

## Privacy

Use of all services is subject to the [OpenStreetMap Foundation privacy policy](http://wiki.osmfoundation.org/wiki/Privacy_Policy). Please do not submit personal data or other confidential material to any of our services.

## Changes to this policy

This policy may change at any time subject to the needs and constraints of the project. Commercial services, or those that seek donations, should be especially aware that access may be withdrawn at any point: you may no longer be able to serve your paying customers if access is withdrawn.
Alternative OpenStreetMap Data Providers

* [planet.osm](https://wiki.openstreetmap.org/wiki/Planet.osm) (and many 3rd party mirrors) - This bulk data download service offers the entire planet of vector data, as well as diffs for syncing on a minutely basis. Smaller "extract" downloads are available by geographical area.
* [Xapi](https://wiki.openstreetmap.org/wiki/Xapi) and [Overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API) - These are APIs provided for read only purposes. They are part of the OpenStreetMap ecosystem, but not as "core" as the main editing API covered by this policy. They are however subject to limitations and policies of their own. Note that the servers which run these APIs would be using the same planet.osm diffs to stay in sync.
* See [List of Companies offering OpenStreetMap Services / Support / Consulting](https://wiki.openstreetmap.org/wiki/Commercial_OSM_Software_and_Services)
