---
title: June 2022 outage post-mortem
---

OpenStreetMap.org was unavailable from 2022-06-11 20:18 (UTC) until the 2022-06-12 03:45 (UTC), a total outage of 7 hours 27 minutes. This was the longest outage of OpenStreetMap.org in the last 5 years.

## Situation at the time of the outage

OpenStreetMap.org is primarily hosted at an Equinix Data Centre in Amsterdam (AM6). We have failover hosting at an Equinix Data Centre in Dublin (DB4).

Our networking equipment in Amsterdam is a highly available pair of Cisco SG550X-48 switches (Switch-1 and Switch-2). The Cisco switches have redundant power supplied by a Cisco RPS2300 Redundant Power System which is supplied by power feed A (MDP-A/MCC-A) and power feed B (MDP-B/MCC-B). In addition Switch-1 has an internal power supply directly connected to power feed A (MDP-A/MCC-A), conversely Switch-2 has an internal power supply directly connected to power feed B.  In the event of a failure of power feed A or power feed B the Cisco Redundant Power System is meant to automatically continue supplying power via the remaining power feed to the Cisco Switches.

We have a single fibre network uplink to Cogent from Switch-1 which is a known single point of failure. We have a pre-configured spare fibre module pre-installed into Switch-2 to allow remote-hands in a hardware failure scenario to manually switch our uplink to Switch-2. A future upgrade is pending with redundant uplinks.

At the time of the failure the Operations Team had not yet installed out-of-band access equipment (4G modem serial console server) in Amsterdam. The out-of-band access equipment was installed during October 2021 at Dublin.

## Timeline

- 2022-05-02 - Notification of Equinix of upcoming 5 year maintenance on Power Feed A supplying our servers in Amsterdam (8 hour window)
- 2022-05-07 - OpenStreetMap Operations Ticket logged for upcoming Equinix maintenance: https://github.com/openstreetmap/operations/issues/621
- 2022-06-05 - Notification of Cogent network outage maintenance (5 hour window, outage of 45 - 60 minutes) and ticket created: https://github.com/openstreetmap/operations/issues/632
- 2022-06-06 - OpenStreetMap Operation announce the upcoming Cogent network outage maintenance: https://twitter.com/OSM_Tech/status/1533555914351030274
- 2022-06-10 22:00 (UTC) - Start of Cogent maintenance window
- Outage of ~ 10 minutes
- 2022-06-11 03:00 (UTC) - End of Cogent maintenance window
- 2022-06-11 20:00 (UTC) - Start of Equinix 5 year Power Feed A maintenance window
- 2022-06-11 20:18 (UTC) - Start of OpenStreetMap.org outage
- Outage of 7 hours 27 minutes
- Ops are unsure why connectivity failed. Redundant power meant to be supplied by Cisco Redundant Power System
- Ops felt the situation did not warrant disaster recovery failover to Dublin during the expected outage window.
- Ops Decision made to not request remote-hands to move fibre uplink to switch-2
- Ops Decision made to wait until the end of the Equinix power maintenance window before taking further action
- 2022-06-12 03:45 (UTC) - End of OpenStreetMap.org outage
- 2022-06-12 04:00 (UTC) - End of Equinix 5 year Power Feed A maintenance window
- 2022-06-12 04:03 (UTC) - OpenStreetMap Operation acknowledge outage: https://twitter.com/OSM_Tech/status/1535835250508861440
- 2022-06-12 04:22 (UTC) - OpenStreetMap Operation are able to confirm that Switch-1 was offline power maintenance window as suspected.
- 2022-06-20 - Site visit - Decommision old machines
- 2022-06-21 - Site visit - Install 4G out-of-band
- 2022-06-22 - Site visit - Test power failure scenario. STANDBY === NO POWER SUPPLIED

## What went wrong

It was expected that during the maintenance of power feed A (MDP-A/MCC-A) that the Cisco Redundant Power System would supply Cisco Switch-1 and Cisco Switch-2 from the remaining power feed B (MDP-B/MCC-B). During the install of the Cisco Redundant Power System in December 2018 this power failure scenario had been tested and confirmed working.

The initial working hyposis was that the Cisco Redundant Power System power supply connected to power feed A (MDP-A/MCC-A) had failed which caused a full power outage on Switch-1. With Switch-1 offline the uplink to Cogent was unavailable leaving all OpenStreetMap.org services hosted at Amsterdam without connectivity to the Internet (www, API, wiki, planet). Switch-2 remained operation due to its internal power supply being directly connected to power feed B

The lack of out-of-band equipment installed in Amsterdam prevented OpenStreetMap Operations from being able to investigate the cause of the failure when the uplink was unavailable.

During the follow up site visit, it was identified that both power supplies (feed A and feed B) in the Cisco Redundant Power System were fully operational. A test was later performed which identified that the Cisco Redundant Power System could enter a "standby" state where the Cisco Redundant Power System would not supply power to the switches. Without the redundant power feed a switch would fail if its internal power supply lost power (Switch-1 power feed A, Switch-2 power feed B). The Cisco Redundant Power System "standby" state could be switched to "active" supply by configuration using the IO panel on the Cisco Redundant Power System. The power state of the Cisco Redundant Power System can be monitored from the switches via the CLI.

It is unclear how the Cisco Redundant Power System entered the "standby" state.

# Preventing the issue from happening again / What we have learnt

1. Improve our response time to acknowledge ongoing outages. Follow us at https://twitter.com/OSM_Tech for alerts.

2. The OpenStreetMap Ops have decided to replace the Cisco SG550X-48 switches (Switch-1 and Switch-2) and the Cisco Redundant Power System with Juniper EX4300 switches with redundant power supplies. We use Juniper EX4300 switches in Dublin and they have been extremely reliable. The replacement switches were expected to be installed on the 20/21/22 Jun 2022 during the site visit but install was delayed due to supply chain parts shortage. As of 19 July 2022 all components are now on-site.

3. During the 20/21/22 June 2022 site visit out-of-band access equipment (4G modem serial console server) with dual power feeds was installed.

4. As of 19 July 2022 the installation of redundant uplinks is still pending. The OpenStreetMap Operations team continue to follow-up.

5. Make site failover easier, less manual, and lower risk. It is currently an error-prone manual process.

6. It has been identified that an on-call "pager" system is required by the OpenStreetMap Operations SRE. As of 19 July 2022 the vendor negotiations are ongoing.

7. Invest in site reliability, which we're already doing. The new site reliability engineer (and author of this post) started as the OSMF's first employee two months ago, and couldn't wish for a better baptism of fire. In the long term, because no person can be on call 24/7, we will expand our SRE team.

8. Continue and formalise tests for fail-over of equipment on power, network, upstream link and service outages.

# In closing

If you rely on OpenStreetMap, or just enjoy using it or mapping, please help us achieve these goals. Network equipment, bandwidth, hosting, servers, staffing and operations are expensive, and you can help us with a donation or by becoming an individual or corporate member.

The Operations Working Group is always looking for volunteer knowledgeable system and network admins.
