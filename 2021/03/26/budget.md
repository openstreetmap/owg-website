---
title: 2021 budget
---

This is the budget [approved by the OSMF board in March](https://wiki.osmfoundation.org/wiki/Board/Minutes/2021-03#Operations_Working_Group_budget). It covers a year starting from 2021Q2. Costs for the SRE are budgeted separately.

All costs are converted in Euros, but may be incurred in USD or GBP. Costs do not include VAT. Ongoing costs are expressed per month.

# Year overview.

Last year many purchases were deferred with COVID restrictions. We also found that a commercial data centre offers advantages for access and remote work, and propose moving our UK sites to a commercial data centre in Dublin.

# Current ongoing costs
These are costs that we are already committed to with ongoing services, and their costs have started in the past.

## Cloud Hosting
Some of our services rely on cloud hosting, as well as internal uses like backups and logging.

Item | Cost per month | Capital cost
-|-|-
Cloud hosting | € 350 |

## Amsterdam site hosting
Amsterdam is our primary hosting location.

Item | Cost per month | Capital cost
-|-|-
Power and space | € 900 |
Network | € 250 |
Remote hands | € 50

## Subscriptions
We use subscriptions for domains, monitoring, and other services

Item | Cost per month | Capital cost
-|-|-
Subscriptions | € 75

# 2021Q2 plans
## Dublin move project
Last year we have had access problems with access to our UK sites, partly due to COVID but partly due to the non-commercial relationship we have with the hosting companies. We plan to move our existing UCL and Bytemark sites to a commercial data centre in Dublin for better support, access, an EU-based site, and saving operations time. Once it is running, we will move the UK functionality to Dublin incrementally.

Item | Cost per month | Capital cost
-|-|-
Power and space | € 1 200 |
Network | € 750 |
One-time move costs, new power hardware, new network hardware | | € 7 500

## Hardware refresh of generic hardware
Several machines in the UK were due for replacement in 2020. Due to COVID we did not refresh the hardware last year or spend the money.

Additionally, other machines will be due for replacement soon enough that we would rather replace them than ship the old machines to Dublin.

Item | Cost per month | Capital cost
-|-|-
DUB hardware | | 7x € 4 000

## Tile service capacity
Our tile service is at rendering capacity in Europe and we would like to install a new server in Dublin and either Amsterdam or Zagreb.

Item | Cost per month | Capital cost
-|-|-
DUB rendering server | | 1x € 8 500
AMS/ZAG rendering server | | 1x € 8 500

# 2021Q3
## Website/API redundancy maintenance
The backup database servers for the website/API are in need of scheduled replacement. When replaced, the new servers will be the primary ones and the old primary servers will be the backups.

Item | Cost per month | Capital cost
-|-|-
DUB DB server | | 1x € 15 000

## Planet server

The planet server powers a primary service and is due for replacement. There are two options — replace it with a similar server, or move long-term planet storage to a commercial object store. If we go with the second option we anticipate being able to secure sponsered hosting from a cloud provider for this. We are evaluating the merits of the two options. The first option has a capital cost of € 15 000, the second has a capital cost of € 5 000 and if not sponsored, an estimated monthly cost of € 1 500

Item | Cost per month | Capital cost
-|-|-
DUB planet server | | 1x € 5 000

## Insurance
Finding an insurance provider is currently assigned to the admin assistant and accountant. When this is done, we will need to pay insurance. We do not know what the cost will be.

Item | Cost per month | Capital cost
-|-|-
Insurance | € 500 |

# 2021Q4

## Nominatim capacity and redundancy improvements
A Nominatim server was due and budgeted for replacement last year. Due to COVID this was postponed.

This is necessary for redundancy and capacity.

Item | Cost per month | Capital cost
-|-|-
DUB nominatim server | | € 6 000

## Development ("tool") server
The development server is a server open for developers to use, and many tasks are run on it. It is 10 years old and critically in need of replacement. If not replaced, we may need to stop offering this service to developers.

Item | Cost per month | Capital cost
-|-|-
Development server | | € 6 000

# 2022Q1
## Planet server
The other planet server should be replaced by 2022. See the previous planet server replacement for options.

Item | Cost per month | Capital cost
-|-|-
AMS planet server | | 1x € 5 000

## Network upgrades

We want to upgrade our networking at AMS to 2 GBps or better as we are sometimes at capacity. We have also had ongoing problems with IPv6 routing issues stopping some users from accessing osm.org. This upgrade may require new networking hardware to take full advantage of the inc

Item | Cost per month | Capital cost
-|-|-
Increased AMS internet costs | € 500 |
Network setup fees | | € 1 000 |
Network hardware | | 2x € 1 000 |

# Year 1 risks
## COVID
The greatest risk to the 2021 plan is COVID. We plan to move our UK site to a commercial data centre and the move may be more complicated, slower and more expensive if COVID restrictions increase. To mitigate this risk we are allowing plenty of time for the move and will use remote hands exclusively if we cannot travel.

## Brexit shipping
Brexit-related shipping delays pose risks to the data centre move schedule. Shipping lead times are unpredictable to and from the UK.

## Loss of sponsorship
We have moved the tile CDN to Fastly, a commercial provider who is sponsoring the costs. If we were to loose sponsorship we would need to make arrangements for a new CDN on a rush basis. This would likely cost € 40 000 for the first month, plus new ongoing costs.

# Year 1 totals

Expense | Cost
-|-
Recurring costs                             | € 48 900
Capital expenses (servers)                  | € 82 000
Capital expenses (other)                    | € 10 500
Replacement parts and labor for new servers | € 3 600
Total                                       | € 145 000
