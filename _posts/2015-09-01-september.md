---
layout: post
title:  "September 2015"
date:   2015-09-30 23:59:59
---

# Disk error reporting

Some alerts were [still going off](https://github.com/openstreetmap/operations/issues/47) due to the earlier disk swap-out on the main DB server. This is complicated by the pretty poor state of support for various suppliers' cards in disk monitoring software. In this case, the fix turned out to be unwedging `chef-client`.
