---
title: Post-Mortem - Network Outage Affecting OpenStreetMap.org - 15 December 2024
---

# Post-Mortem: Network Outage Affecting OpenStreetMap.org - 15 December 2024

## 1. Summary

- **Outage Start (UTC):** 15 December 2024, 03:53
- **Outage End (UTC):** 18 December 2024, 00:29 (when HE.net restored service)
- **Partial Restoration:**
   - 15 December 2024, 11:31: Restore OpenStreetMap.org with map edits disable (read-only) via Dublin site failover
   - 17 December 2024, 12:21: Map Edits restored via new Equinix Internet link in Amsterdam
- **Duration:**
  - **Dark outage** Complete outage of 8 hours until read-only OpenStreetMap.org enabled.
  - **Full outage:** Approximately 56 hours until restoration of map edits.
  - **Total time until HE.net resolved:** About 68 hours.

**Impact:**
- The primary OpenStreetMap.org website and API were initially completely offline.
- A read-only backup instance was made available on 15 December 2024 at 11:31 to provide limited functionality.
- Full functionality was restored on 17 December 2024 at 12:21 by switching to Equinix Internet in Amsterdam.
- HE.net service was fully restored on 18 December 2024 at 00:29, at which point all usual routes and services returned to normal.

**Root Cause:**
- An unanticipated failure of HE.net routing equipment in Amsterdam led to a network blackout of both of OpenStreetMap's redundant fibre Internet connections. HE.net's routing hardware had to be replaced, and this process involved them shipping new equipment from California. During this time, OpenStreetMap.org was exposed to their single point of failure with no direct failover ISP in place.

---

## 2. Timeline of Events

Below is a timeline of the incident:

1. **15 December 2024, 03:53 (UTC) – Outage Begins**
   - HE.net suffers a routing equipment failure in Amsterdam, causing OpenStreetMap.org to become unreachable. Both of OpenStreetMap's redundant diverse fibre links to HE.net were offline due the failure of the HE.net's equipment.

2. **15 December 2024, 04:01 – Initial Detection**
   - StatusCake monitoring tools detect the outage and send SMS alerts.
   - Incident is immediately reported to the Operations team.

3. **15 December 2024, 04:03 – Internal Coordination**
   - Operations team (via IRC) confirms that OpenStreetMap is offline.
   - By 04:06, Grant confirms that this is an external ISP issue with HE.net.

4. **15 December 2024, 04:18 – First Email to HE.net NOC**
   - OSM Operations team emails HE.net’s Network Operations Centre (NOC), inquiring if there is any unplanned maintenance.

5. **15 December 2024, 04:24 – HE.net NOC Response**
   - HE.net confirms via email that there is no scheduled maintenance. They are investigating the outage.

6. **15 December 2024, 04:43 – HE.net Phone Status**
   - OSM Operations contacts HE.net by telephone.
   - HE.net states the outage is in Amsterdam, with no estimated time to recover. They are waiting for Equinix "remote hands" to investigate.

7. **15 December 2024, 07:24 – Second Request for ETA**
   - OSM Operations again requests an estimated time of recovery from HE.net.
   - No precise estimate provided.

8. **15 December 2024, 11:31 – Read-Only Backup Online**
   - A read-only backup instance of OpenStreetMap.org (hosted in Dublin) is activated, providing partial functionality.
   - A maintenance notice is displayed on OpenStreetMap.org, indicating that data edits cannot be saved.

9. **15 December 2024, 11:12 & Ongoing – Additional Enquiries**
   - OSM Operations team continues to request updates from HE.net at regular intervals, but no ETA is provided.

10. **16 December 2024, 10:11 - Operations Team Prepare Emergency Full Failover Procedure Documention**
    - Document the required steps/procedure to fully failover to Dublin (Postgres & osmdbt)

11. **16 December 2024, 11:55 - Operations Team Decision to postpone the Emergency Full Failover**
    - OSM Operations team decide to wait for restoration of Amsterdam connectivity instead of Emergency Full Failover.
    - Communicate the expected ETA to full restoration of services with the OpenStreetMap Communication Working Group, OSMF Board and wider OpenStreetMap community (Announcement Mailinglist, Talk Mailing List, [Mastodon](https://en.osm.town/@osm_tech), [Community Forum](https://community.openstreetmap.org/))

12. **16 December 2024 - Escalation of Equinix Internet connectivity installations.**
    - Equinix Teams kindly escalated the installations Equinix Internet connectivity in Amsterdam and Dublin.

13. **16 December 2024 - Testing new Equinix Internet connectivity in Dublin**
    - Fibre Light and Routing Test

14. **16 December 2024 - Testing new Equinix Internet connectivity in Amsterdam**
    - Fibre Light and Routing Test

15. **17 December 2024, 12:21 – Partial Restoration via New ISP**
   - A new Equinix Internet link becomes operational in Amsterdam, bypassing HE.net.
   - Full functionality for OpenStreetMap.org and its API is restored through this alternative route.

16. **18 December 2024, 00:29 – HE.net Service Restoration**
   - HE.net confirms their own service is restored in Amsterdam.
   - Routing via HE.net resumes normal operation, and all network paths for OpenStreetMap.org are fully available again.

---

## 3. Impact

- **Website and Mapping API:**
  - OpenStreetMap.org’s main website and mapping API were completely offline from 15 December 2024 at 03:53 until the read-only backup went live on 15 December at 11:31.
  - The read-only instance meant users could view access OpenStreetMap.org but could not make any edits until 17 December 2024 at 12:21.

- **Authentication Unavailable while read-only:**
   - OpenStreetMap's OAuth service requires database write to store access tokens. While the website was read-only users were unable to login to OpenStreetMap.org, community.openstreetmap.org, umap, and other services because our OAuth service failed.

- **Other Amsterdam Hosts Services:**
  - The dev server, Taginfo (taginfo.openstreetmap.org), and certain aerial imagery services were unavailable.
  - The tile rendering service and Nominatim geocoding remained online but operated at reduced capacity.

---

## 4. Root Cause Analysis

- **Primary Cause:**
  - Failure of HE.net routing equipment in Amsterdam, which was a single point of failure for the Amsterdam servers internet connectivity.

- **Contributing Factors:**
  - Lack of a fully operational second ISP at the time of the outage.
  - Delayed resolution due to HE.net needing to ship replacement hardware from the United States, extending the downtime.
  - Inability to fully failover to secondary site due to incomplete replication and operational complexity & perceived risk.

---

## 5. Resolution and Mitigation Steps

1. **Short-Term Resolution:**
   - Deployed a read-only backup instance in Dublin to provide partial functionality for the main website.
   - Implemented a new Equinix Internet ISP link on 17 December 2024, restoring full functionality prior to HE.net fixing their equipment.

2. **Long-Term Mitigation:**
   - Transitioned to a multi-ISP architecture to ensure that, if one provider fails, another can switch over with minimal interruption.
   - Improved out-of-band connection, ensuring that connection is reliable and can be used for data recovery to secondary site.

---

## 6. Lessons Learned

1. **Single Point of Failure (SPOF) and Redundancy**
   - Relying on HE.net alone exposed the Amsterdam servers to a single point of failure.
   - In future, we will maintain multiple upstream providers to eliminate critical SPOFs.

2. **Out-of-Band access critical**
   - Having a 4G backup link proved invaluable. Expanding the reliability and capability of this backup link to allow data synchronisation.

3. **Backup and Failover Preparedness**
   - While a read-only backup provided partial service, resumption of replication would have allowed for quicker restoration of full editing capabilities.

4. **Vendor SLAs and Transparency**
   - Frequent communication with the ISP did not yield meaningful ETAs. We need to better understand the Service Level Agreement and seek additional transparency.

5. **Monitoring Enhancements**
   - The incident highlighted the need to refine alerting for upstream connectivity and to unify relevant data from multiple monitoring sources to pinpoint issues faster.

6. **OpenStreetMap Authentication Outage Impact on Other Services**
   - When OpenStreetMap.org was read-only, users were unable to login to unaffected services (eg: community.openstreetmap.org) because the OpenStreetMap site was unable to save new tokens.

---

## 7. Follow-Up Actions & Tasks

1. **Investigate Additional ISP Options**
   - **Description:** Research potential backup ISPs for the Amsterdam servers, comparing bandwidth, reliability, and costs. Follow up will be held at the [Karlsruhe Hack Weekend - February 2025](https://wiki.openstreetmap.org/wiki/Karlsruhe_Hack_Weekend_February_2025) to discuss practical options including BGP and retaining HE.net as a fallback ISP.

2. **Enhance Monitoring Suite**
   - **Description:** Implement deeper route and latency monitoring to detect ISP issues quickly and create an automated escalation protocol.

3. **Formalise Failover Testing Schedule**
   - **Description:** Establish failover drills to test switching traffic between ISPs, ensure replication processes are up to date and reliable. Site failover becomes a comfortable option.

4. **Review and Update ISP SLAs**
   - **Description:** Engage with HE.net and Equinix Internet on contractual SLAs and incorporate defined escalation procedures and response times.

5. **Improve Out-of-Band Access**
   - **Description:** The Raspberry Pi 4 and 4G modem used for out-of-band access. The out-of-band system should be pre-configured to be able to be used as a manual fallback uplink in the event of an ISP outage. The link would be used for server access and syncing the Postgres replication data to the secondary site. The out-of-band hardware should be upgraded to ensure resilience and redundancy. https://github.com/openstreetmap/operations/issues/1197

6. **Document Outage Communication Procedures**
   - **Description:** A document should be created to outline named groups and their responsibilities in communicating outages. The document should list the recommended communication channels. The Operations Team will delegate the communication and to allow them to focus on remediating the outage.

7. **Investigate possible to change OpenStreetMap.org Authentication when Database is Read-Only**
   - **Description:** The OpenStreetMap.org "rails-port" maintainers should investigate if it is possible and practical to de-couple the OAuth authentication to allow the authentication to continue to function for third parties during times when the site is disrupted.

---

## 8. Conclusion

This outage emphasised the importance of robust network redundancy and vendor reliability. By investing in multiple ISPs, improving monitoring and alerting, and refining both backup and communication procedures, OpenStreetMap can continue to provide a highly available service to our global community. The outlined action items will help to address the weaknesses exposed by this incident and strengthen OpenStreetMap.org against similar disruptions in the future.

## 9. Thank you to all those that helped

We very generously received support and assistance from many people around the world.

- Equinix Team: Thank you for your help getting the new connection provisioned and installed quickly.
- Operations Team: Thank you to Tom, Paul, Guillaume and others who helped recover from the outage.
- Others: Thank you for the assistance, offers of support and understanding we received during the outage. It is greatly appreciated.

---

**Report Prepared By:**
Grant Slater
**Date:** 15 February 2025


-------------
