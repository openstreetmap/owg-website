---
layout: post
title: September 2023
date: 2023-09-30 23:59:59
---

## Microsoft MapBuilder

Microsoft has asked about allow-listing their IPs and emails to let automatically create accounts for Microsoft Map Builder. This is not currently possible, but discussion has been deferred until the Data Working Group approves Microsoft's plans.

## Planet
Serving of planet files [has moved to S3](https://github.com/openstreetmap/operations/issues/678), which is sponsored by the AWS Open Data program. Existing URLs are redirected to S3 instead of one of the other mirrors, and this will reduce the hardware requirements for the planet site, avoiding expensive specialized machines.

## Featured layers

### Maptiler
Maptiler responded to a question from June about their featured layer proposal, opening [an issue about use of non-OSM names](https://github.com/openmaptiles/openmaptiles/issues/1577). The decision was made to put the proposal on hold until the bugs with names are fixed, as showing non-OSM names to mappers for feedback results in confusion.

### Tracestrack
Tracestrack has been approved as a featured layer for osm.org. It adds a topo map to osm.org, an area not previously covered.

## Planet

## Standard tile layer
### Piasa and mod_tile bug
A new server, piasa, has been set up in OSUOSL to replace pyrene which was due to replacement. While setting up the new server, bugs in Mapnik's font cache implementation were found, leading to lock contention. This resulted in being unable to scale past approximately 24 threads, which is an issue on modern machines. A [fix was added to mod_tile](https://github.com/openstreetmap/mod_tile/pull/334) and deployed on all rendering servers, increasing capacity significantly.

### Ysera memory

Failed memory was [found in ysera](https://github.com/openstreetmap/operations/issues/962). It has been present since at least July 2022 and reduces performance on a re-render by about 6%. Replacing it is scheduled for the next UCL site visit.

### Attribution
The LWG has proposed making a checklist where users indicate that a site does not have attribution and they have tried to contact the site to have the site blocked. This idea was tentatively approved at an ops meeting, but during implementation concerns within the OWG were raised about blocking sites without anyone from the OSMF ever looking at the site, as well as blocking entire sites like jsfiddle because one user's page on them did not have attribution.

## Hardware

New general-purpose servers have arrived in Dublin. These are replacing existing old hardware.
