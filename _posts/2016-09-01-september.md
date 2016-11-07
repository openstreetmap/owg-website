---
layout: post
title:  "September 2016"
date: 2016-09-30 23:59:59
---

# New donation drive

A new [donation drive](https://donate.openstreetmap.org/) was launched, work in support of which included moving the donation server to new hardware and making it Chef-y. Please [support OpenStreetMap](https://donate.openstreetmap.org/). [Tweet](https://twitter.com/OSM_Tech/status/781088756317192192).

# Carto stylesheet v2.43.0 and v2.44.0 deployed

[Announcement](https://lists.openstreetmap.org/pipermail/dev/2016-September/029473.html)

# Upgrade Recaptcha on wiki

The wiki sign-up had been using an old version of Google's recaptcha which required sign-ups to help Google digitise house numbers. A more recent version is now being used which does that less often. An alternative solution seems preferable, but all the alternatives which were investigated were not suitable for visually-impaired users. [Issue](https://github.com/openstreetmap/operations/issues/19).

# Continuing upgrades to 16.04

The heroic epic of upgrading machines to Ubuntu 16.04 LTS continues. [Issue](https://github.com/openstreetmap/operations/issues/81)

# New tile cache

A new tile cache in Denmark, called [odin](https://hardware.openstreetmap.org/servers/odin.openstreetmap.org/), was generously donated by [dotsrc.org](http://dotsrc.org/).

# Attempts to fix zero-size files problems

When the planet file server, called [ironbelly](https://hardware.openstreetmap.org/servers/ironbelly.openstreetmap.org/), crashes (as all computers occasionally do) it can sometimes leave zero-size replication files on disk. These replication files are useless and, if the wrong file is corrupted, can even prevent replication from continuing when the server reboots.

[Several](https://github.com/openstreetmap/chef/commit/bd63b8da0009075761535690e4fd9a270906b1f5) [attempts](https://github.com/openstreetmap/chef/commit/7f2b30d33c5898d31f9b6623657d93d272b8ea7a) were made to fix this by various invocations of `fsync` system calls. Getting data committed and durable on disk is [known to be tricky](http://www.slideshare.net/nan1nan1/eat-my-data).

# Upgrade high zoom array on render server

The "high zoom" array, containing tiles at zooms 17 and up, was replaced in one of the rendering servers, [orm](https://hardware.openstreetmap.org/servers/orm.openstreetmap.org/). This will reduce the latency of fetching a tile from disk, and also replaces a failing disk. [Issue](https://github.com/openstreetmap/operations/issues/88).
