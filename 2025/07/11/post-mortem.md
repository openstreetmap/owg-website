---
title: Post-Mortem - Planet replication diff outage - 25 June 2025
---

# Post-mortem - Planet replication diff outage 25 June 2025 21:33 until 26 June 2025 13:22 (16 hours)

## Summary
From 21:33 UTC on 25 June 2025 until 13:22 UTC on 26 June 2025 (a period of approximately 16 hours), OpenStreetMap.org's system for generating replication diffs unexpectedly stopped working. As a result, no new minutely, hourly, or daily diffs were automatically produced during this time. The issue was resolved manually by the operations team.

Replication diffs are used by other OpenStreetMap.org and third-party services to stay up to date with OpenStreetMap.org map edits.

## Timeline of Events

* 30 May 2025 16:53 - postgresql upgraded to 15.13-1.pgdg22.04+1
* 2 June 2025 00:00:01 - Weekly pg_dump script start (timer, normal)
* 4 June 2025 21:54:24 - Weekly pg_dump script finishes (normal)
...
* 23 June 2025 00:00:01 - Weekly pg_dump script (timer, normal)
* 25 June 2025 20:17:26 - planetdump generation starts from pg_dump output (inotify, normal)
* 25 June 2025 20:17:55 - Weekly pg_dump script finishes (normal)
...
* 25 June 2025 21:30:55 - osmdbt timer start minutely diff - replication/minute/006/658/633.osc.gz (timer, normal)
* 25 June 2025 21:31:56 - osmdbt timer start minutely diff - replication/minute/006/658/634.osc.gz (timer, normal)
* **25 June 2025 21:33:00** - osmdbt timer start minutely diff - `ERROR:  invalid memory alloc request size 1243650064` (timer, fail)
* 25 June 2025 21:34:00 - osmdbt timer start minutely diff - `ERROR:  invalid memory alloc request size 1243650064` (timer, fail)
* 25 June 2025 21:35:00 - osmdbt timer start minutely diff - `ERROR:  invalid memory alloc request size 1243650064` (timer, fail)
...
* 25 June 2025 21:40 - First alert by Alertmanager to Ops - `minutely replication feed delayed - 6m 2s`.
* 26 June 2025 00:37 - First Community Report of Issue - https://community.openstreetmap.org/t/is-osm-partially-down-new-data-isnt-able-to-be-queried-on-the-map-and-new-data-isnt-being-rendered/131884
* 26 June 2025 01:13 - First Social Media report of the issue - https://en.osm.town/@dbdean@aus.social/114747008024782209
* 26 June 2025 06:08 - Ops stop osmdbt timer ("cron")
* 26 June 2025 06:20:04 - Ops manually run osmdbt with reduced max change sets, success - replication/minute/006/658/635.osc.gz
* 26 June 2025 06:20:38 - Ops manually run osmdbt with reduced max change sets, success - replication/minute/006/658/636.osc.gz
* 26 June 2025 06:21:45 - Ops manually run osmdbt with reduced max change sets, success - replication/minute/006/658/637.osc.gz
* 26 June 2025 06:25:57 - Ops manually run osmdbt with reduced max change sets, success - replication/minute/006/658/638.osc.gz
* 26 June 2025 06:26:51 - Ops manually run osmdbt with reduced max change sets, success - replication/minute/006/658/639.osc.gz
* 26 June 2025 ~ 06:27 - Ops manually run osmdbt with reduced max change sets, failure. `Invalid memory alloc`
* 26 June 2025 06:49 - Tom (Ops) raises issue with osmdbt developer (Jochen) on irc (#osm-dev).
```
we have a problem with osmdbt - it is reporting "ERROR: invalid memory alloc request size 1243650064" trying to peek changes with pg_logical_slot_peek_changes which I believe is a fixed internal postgres limit of some sort
I've inched it forward to the point where even fetching --max-changes=1 trigegrs the error
```

* 26 June 2025 06:58 onward - osmdb developer (Jochen) responds. Discussion around potential cause. Investigation if there was a huge set of OpenStreetMap map changes (eg: 15 million+ node changes) which would have overwelmed the postgresql internal replication logs which are used by osmdbt.
* 26 June 2025 08:33 - GitHub OSM Ops Issue opened - https://github.com/openstreetmap/operations/issues/1253
* 26 June 2025 08:57 - Tom (Ops) raises question of workaround potential with Jochen (osmdbt developer)
* 26 June 2025 09:19 - Mastodon - Announce Replication Diffs not updating - https://en.osm.town/@osm_tech/114748919269472963
* 26 June 2025 09:41 onward - Jochen (osmdbt developer) responds with discussion of steps on how to run osmdbt using fakelog (osmdbt component) as a workaround. Tom (Ops) starts dry-run testing, follow up discussion clarifying understanding of fakelog output and the requirements with Jochen.
* 26 June 2025 10:13 - Ops discussion (irc #osmf-operations) that a OpenStreetMap.org read-only maintenance window will be required to avoid edits during the window to suppress edits while fakelog is manually used to produce OpenStreetMap replication diffs. Proposal of 1 hour emergency maintenance window.
* 26 June 2025 10:13 - Confirmation that weekly PostgreSQL database backup has already finished (at 25 June 2025 20:17:55)
* 26 June 2025 10:27 - Announce on Mastodon - Warning of offline maintenance expected - https://en.osm.town/@osm_tech/114749187128465578
* 26 June 2025 12:43 - Announce on Mastodon - Replication diff recovery still in progress - https://en.osm.town/@osm_tech/114749724057778146
* 26 June 2025 12:54 - Ops confirmation (irc #osmf-operations) that everything is ready for the maintenance window to allow for the manual osmdbt run using fakelog. Ops agree immediate start of the 1 hour OpenStreetMap.org read-only maintenace window.
* 26 June 2025 12:56 - OpenStreetMap.org - Read-Only Maintenance Starts (~ few minutes to go live)
* 26 June 2025 12:59 - Announce on Mastodon - Maintenance Outage Annoucement - https://en.osm.town/@osm_tech/114749783705346288
* 26 June 2025 13:03 - Announce Mailing List - Maintenance Outage Annoucement - https://lists.openstreetmap.org/pipermail/announce/2025-June/000121.html
* 26 June 2025 13:13:47 - osmdbt manual run with fakelog, success - replication/minute/006/658/640.gz (first)
* 26 June 2025 13:14:17 - osmdbt manual run with fakelog, success - replication/minute/006/658/641.gz
...
* 26 June 2025 13:17:01 - osmdbt manual run with fakelog, success - replication/minute/006/658/672.gz
* 26 June 2025 13:17:04 - osmdbt manual run with fakelog, success - replication/minute/006/658/673.gz (final)
* **26 June 2025 13:21:10** - osmdbt timer start minutely diff - replication/minute/006/658/674.osc.gz (timer restarted)
* 26 June 2025 13:22 - OpenStreetMap.org - Read-Only Maintenace Ends (~ few minutes to go live) (~25mins OSM.org read-only)
* 26 June 2025 13:22:57 - osmdbt timer start minutely diff - replication/minute/006/658/675.osc.gz (normal)
* 26 June 2025 13:29 - Announce Mastodon - Back Online - https://en.osm.town/@osm_tech/114749901654577418
* 26 June 2025 13:30 - Announce Mastodon - Diffs Back Online - https://en.osm.town/@osm_tech/114749909231464533
* 26 June 2025 13:33 - Announce Mailing List - Maintenance Complete Annoucement - https://lists.openstreetmap.org/pipermail/announce/2025-June/000122.html
* 26 June 2025 13:41 - Alertmanager alerts cleared message to Ops
* 26 June 2025 18:00 - Ops Fortnightly call with Jochen joining to discuss osmdbt failure. PostgreSQL cause? osmdbt usability improvement? Switching osmdbt custom postgresql plugin to using built in pgout. Minutes will be published on 10 July 2025.
* 28 Jun 2025 00:14:59 - planetdump generation finishes (normal)


## Impact
The OpenStreetMap.org planet replication diffs could not be generated and subsequently published. Downstream (tile.openstreetmap.org, nominatim, overpass) and third-party services were unable to stay up to date with OpenStreetMap.org map edits.

During the OpenStreetMap.org maintenance window (~25 minutes) the OpenStreetMap.org website and mapping API was read-only. The map edit API did not allow any map changes during this period.

## Root Cause
An unidentified condition in PostgreSQL replication caused the SQL query used by `osmdbt-get-log` to repeatedly fail (`ERROR:  invalid memory alloc request size 1243650064`) (See [Appendices](post-mortem.md#Appendices)) when `osmdbt-get-log` was generating the log data that is required by `osmdbt-create-diff`.

## Detection

Alertmanager sent multiple alerts related to the event. The event did not trigger any pager or SMS based alerts.

## Response

Ops responsed to the issue early on 26 June 2025. An attempt to workaround the issue by modifying the number of changesets dumped per replication diff did not resolve the issue. Ops raised the issue with the Jochen (osmdbt developer) and a path to fixing the issue was worked out.

## Resolution

osmdbt's fakelog tool was manually used by the operations team to skip ahead of the PostgreSQL's replication condition which triggered the failure.

## Follow-up Actions / Remediations

* PostgreSQL upgrade planned (Upgrade to PostgreSQL 17.x)
* Raise issue with PostgreSQL developers.

## Lessons Learned

* Communication with Jochen was crucial to help develop the workaround plan.
* Limited understanding of osmdbt in the Operations Team.

## Appendices

### Documented osmdbt recovery process
https://github.com/openstreetmap/osmdbt/blob/master/man/osmdbt.md#recovery-procedure

### PostgreSQL patches
It is possible that the recent changes to PostgreSQL in 15.13 may have caused or influenced the unexpected PostgreSQL error.

* Backported to 15.13: https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=4909b38af0
* Pending backport to 15.x: https://git.postgresql.org/gitweb/?p=postgresql.git;a=commit;h=d87d07b7ad3b782cb74566cd771ecdb2823adf6a

### PostgreSQL logs at point of initial failure
```
...
2025-06-25 21:31:56 GMT LOG:  starting logical decoding for slot "osmdbt"
2025-06-25 21:31:56 GMT STATEMENT:  SELECT * FROM pg_logical_slot_peek_changes($1, NULL, NULL);
2025-06-25 21:31:56 GMT LOG:  logical decoding found consistent point at 143DA/2D6FC7D0
2025-06-25 21:31:56 GMT STATEMENT:  SELECT * FROM pg_logical_slot_peek_changes($1, NULL, NULL);
2025-06-25 21:32:14 GMT LOG:  checkpoint complete: wrote 41420 buffers (0.2%); 0 WAL file(s) added, 0 removed, 12 recycled; write=239.841 s, sync=0.117 s, total=239.979 s; sync files=3679, longest=0.016 s, average=0.001 s; distance=279264 kB, estimate=304989 kB
2025-06-25 21:32:24 GMT LOG:  starting logical decoding for slot "osmdbt"
2025-06-25 21:32:24 GMT STATEMENT:  SELECT * FROM pg_replication_slot_advance($1, CAST ($2 AS pg_lsn));
2025-06-25 21:32:24 GMT LOG:  logical decoding found consistent point at 143DA/2DA8E0C8
2025-06-25 21:32:24 GMT STATEMENT:  SELECT * FROM pg_replication_slot_advance($1, CAST ($2 AS pg_lsn));
2025-06-25 21:33:00 GMT LOG:  starting logical decoding for slot "osmdbt"
2025-06-25 21:33:00 GMT STATEMENT:  SELECT * FROM pg_logical_slot_peek_changes($1, NULL, NULL);
2025-06-25 21:33:00 GMT LOG:  logical decoding found consistent point at 143DA/2EE23DF0
2025-06-25 21:33:00 GMT STATEMENT:  SELECT * FROM pg_logical_slot_peek_changes($1, NULL, NULL);
2025-06-25 21:33:14 GMT LOG:  checkpoint starting: time
2025-06-25 21:33:25 GMT ERROR:  invalid memory alloc request size 1243650064
...
```
