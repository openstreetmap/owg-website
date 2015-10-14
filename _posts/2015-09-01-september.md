---
layout: post
title:  "September 2015"
date:   2015-09-30 23:59:59
---

# Disk error reporting

Some alerts were [still going off](https://github.com/openstreetmap/operations/issues/47) due to the earlier disk swap-out on the main DB server. This is complicated by the pretty poor state of support for various suppliers' cards in disk monitoring software. In this case, the fix turned out to be unwedging `chef-client`.

# SMART monitoring on DB disks

The monitoring software on the DB machine [reports an error when it can't read the SMART values](https://github.com/openstreetmap/operations/issues/49) for spun-down hot spares. In this case, the fix was two-fold; one disk had failed and the other was simply spun down. The controller was configured to not spin down spares, which should fix the SMART issue. More on the failed disk next month...

# Failed disk on Fume

There has been a failed disk on [Fume] which was causing a lot of alerts. The [RAID array was rebuilt without it](https://github.com/openstreetmap/operations/issues/26) and this has stopped the error reports.

# New aerial imagery machines

OWG ordered two new aerial imagery machines with the following spec:

* System: HP DL180 G6 2U server - Dual PSU - 750w common slot
* CPU: 2x Quadcore Intel Xeon X5630 @ 2.13GHz
* Memory: 128GB (16x 8GB)
* Disk: 12x 2TB 3.5" SAS (RAID6, HP 7.2K SAS)
* Controller: HP Smart Array P410i Controller 512MB Flash-backed write cache

This is a slight departure from the budget, which only called for one new machine. However, getting two machines allows us to have some degree of redundancy. The old HP kit is pretty reliable and has good out-of-band management, so we're not anticipating any issues due to the age of the hardware.
