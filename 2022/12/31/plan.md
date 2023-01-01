---
title: Spending plan for 2023
---

This is the OWG plan for 2023, as submitted to the OSMF board. This budget will get us in sync with the OSMF budgeting cycle.

Hardware capital costs and subscription costs are based on current prices and may change based on the market. A margin has been built in at the end of the budget.

All costs are converted in Euros, but may be incurred in USD or GBP. For the purposes of budgeting, 1 EUR = 0.86 GBP = 1.04 USD. Costs do not include VAT, which is added at the end.

As in previous years, a 🔴low, 🟡medium, and 🟢high option is presented. Under the low option essential services would remain running, but capital costs and maintenance would be deferred and some secondary services would need to reduce in scope.

When comparing with the [previous budget](https://operations.osmfoundation.org/2022/07/25/budget.html) keep in mind that the last budget was for half the time.

# Overview and last year's budget
The work done in last budget at replacing outdated servers and moving to Dublin is mostly complete, significantly reducing capital costs for this year. This work has also eased sysadmin load, reduced operational costs from power consumption, and improved the reliability and performance of services. All items on the 2022Q3-Q4 budget that were wholly within the scope of the OWG were completed except for network upgrades, which are partially completed and in this year's budget request.



# Current ongoing costs
These are costs that we are already committed to with ongoing services, and their costs have started in the past.

## Cloud Hosting
Some of our services (website and standard map layer) rely on S3 for storing files, as well as internal uses like backups and logging.

There is [considerable uncertainty](https://github.com/openstreetmap/operations/issues/788#issuecomment-1354246725) as to what our costs will be next year as we have [cut our cloud hosting bills in half](https://github.com/openstreetmap/operations/issues/727), meaning data from earlier in the year cannot be used to forecast future costs. The estimate used is from the high end of possible costs.

Item | Operational cost | Capital cost
-|-|-
🔴Cloud hosting | € 24 000 |

## Amsterdam site hosting
Amsterdam is a primary hosting location. This includes budgeting for necessary network upgrades. Money for expected power cost increases has been included.

Item | Operational cost | Capital cost
-|-|-
🔴Power and space | € 14 655 |
🔴Network | € 3 000 |
🔴Remote hands | € 1 500 |

## Dublin site hosting
Dublin is a primary hosting location.

Item | Operational cost | Capital cost
-|-|-
🔴Power and space | € 17 700 |
🔴Network | € 10 385 |
🔴Remote hands | € 1 500 |

## Subscriptions
We use subscriptions for domains, monitoring, and other services

Item | Operational cost | Capital cost
-|-|-
🔴Domains | € 872 |
🔴Monitoring | € 178 |
🔴Discourse translations | € 500 |

## Insurance
We assume that the admin assistant and treasurer will have insurance options for 2023Q3.

Item | Operational cost | Capital cost
-|-|-
🔴Insurance | € 3 000 |

# 2023Q1
## Network upgrades
Currently each site has a single uplink, leading to an outage if that link is interrupted, and redundancy is obtained by having key services at multiple locations. We want to have redundant uplinks at each location for resilancy. We have completed the hardware upgrades necessary for this in 2022.

Item | Operational cost | Capital cost
-|-|-
🔴AM6 Network | € 10 800 | € 500
🟡DB4 Network | €  2 400 | € 500

# 2023Q2
## Scheduled general-purpose server replacement

We use general-purpose servers for most of our services. When they get too old they require replacement. We have standardized on used HP DL360s as they are reliable, good value, and well supported on the used market. In the last year upgrades to what is available used have allowed us to host more services like Nominatim on general-purpose servers.

Item | Operational cost | Capital cost
-|-|-
🟡General-purpose servers | € 0 | 2x € 5 500

## US rendering server
We have two rendering servers in the US, one sponsored by OSM US, and one VM sponsored by AWS. The OSM US server is old and overdue for replacement. We anticipate finding a sponsor for a new US-based server, but if we are unable to do so we will need to buy a new server in order to avoid sending west coast traffic to Europe.

As used machines have become more powerful, we anticipate a lower cost than previous rendering servers.

Item | Operational cost | Capital cost
-|-|-
🟡Rendering server | € 0 | 1x € 6 500

# 2023Q3
## Scheduled API Database server replacement
Two of the servers that power the API database are scheduled to reach end of life and need upgrades. Because we purchased a new database server last year for DB4, only one is required for AM6.

This upgrade is required in order to maintain the ability to run the website if one site is down.

Item | Operational cost | Capital cost
-|-|-
🟡API DB server | € 0 | € 25 000

# 2023Q4
## New US general-purpose server for monitoring

For monitoring, it is useful to have the monitoring services located outside our primary sites, so we have monitoring and alarms if one of them goes down. This can be done on a general purpose server, but we need a newer one in the US to keep it hosted there. If we do not purchase a server, we will likely have to move it to a primary site, which could impair outage detection and response.

Item | Operational cost | Capital cost
-|-|-
🟢General-purpose servers | € 0 | 1x € 5 500

# Unbudgeted costs
## Staff costs

The SRE will have costs for salary, taxes, training, and other overhead. As the OWG is not in charge of this budget item, it is not included in this submission.

## Note-taking
The OWG will continue to need note-taking and minutes administrative support for 13 meetings in the budget period.

## Travel
It is sometimes more efficient to travel to a datacenter than to rely on remote hands. We anticipate three trips total to either Amsterdam or Dublin, as well as some trips local to the UK.

# Risks
## Loss of sponsorship
We have moved the tile CDN to Fastly, a commercial provider who is sponsoring the costs. If we were to loose sponsorship we would need to make arrangements for a new CDN on a rush basis. This would likely cost € 120 000 for the first month, plus new ongoing costs.

## European electricity prices
The market price for electricity has [increased by approximately 30% per year in 2021 and 2022](https://fred.stlouisfed.org/series/IRLCPIENGMINMEI). Power is one of the major operational costs to hosting servers, and these costs are eventually passed on to us. In the case of Equinix, these are directly passed on to us as part of our cost for power, for other providers it is part of their costs which also get passed on to the consumer eventually.

We have budgeted for announced power cost increases in DB4 and an expected one in AM6. If power prices unexpectedly increase in 2023, we could be subject to additional costs. We believe the contingency funds will be sufficient if this happens.

# Totals

Included in the totals is
- Replacement parts for servers
- Contingency for unexpected needs or cost increases, but we do not plan to spend, based on 5% of operational and 15% of capital expenses.
- 10% VAT. Actual VAT rates will depend on accounting.

Expense | 🔴      |   🟡      | 🟢
-|-|-|-
Operational Expense                         | € 88 090 | € 90 490 | € 90 490
Capital expenses (servers)                  | € 500 | € 43 500 | €49 000
Replacement parts and labor for new servers | € 25 | € 2 175 | € 2 450
Contingency                                 | € 4 480 | € 11 050 | € 11 875
VAT                                         | € 9 310 | € 14 772 | € 15 382
Total                                       | € 102 405 | € 161 937 | € 169 197
