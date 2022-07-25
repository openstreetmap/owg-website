---
title: Budget plan for 2022
---

This is the OWG budget for 2022Q3 and 2022Q4. It has been approved by the OSMF board.

Hardware capital costs and subscription costs are based on current prices and may change based on the market.

All costs are converted in Euros, but may be incurred in USD or GBP. For the purposes of budgeting, 1 EUR = 0.86 GBP = 1.05 USD. Costs do not include VAT.

# Current ongoing costs
These are costs that we are already committed to with ongoing services, and their costs have started in the past.

## Cloud Hosting
Some of our services rely on cloud hosting, as well as internal uses like backups and logging.

Item | Operational cost | Capital cost
-|-|-
Cloud hosting | € 9 000 |

## Amsterdam site hosting
Amsterdam is a primary hosting location. This includes budgeting for necessary network upgrades.

Item | Operational cost | Capital cost
-|-|-
Power and space | € 5 400 |
Network | € 4 500 |
Remote hands | € 300

## Dublin site hosting
Dublin is a primary hosting location.

Item | Operational cost | Capital cost
-|-|-
Power and space | € 7 080 |
Network | € 4 500 |
Remote hands | € 300 |

## Subscriptions
We use subscriptions for domains, monitoring, and other services

Item | Operational cost | Capital cost
-|-|-
Subscriptions | € 500 |

## Insurance
We assume that the admin assistant and treasurer will have insurance options for 2022Q3.

Item | Operational cost | Capital cost
-|-|-
Subscriptions | € 3 000 |

# 2022Q3
## Network redundancy
Currently each site has a single uplink, leading to an outage if that link is interrupted, and redundancy is obtained by having key services at multiple locations. We want to have redundant uplinks at each location for resilancy.

Item | Operational cost | Capital cost
-|-|-
Network | € 8 000 | € 1 000


## Nominatim
A Nominatim server is due for update in 2022.

Item | Operational cost | Capital cost
-|-|-
Nominatim server | | 1x € 11 500

## US rendering server
The tile service is at capacity in the US. The current OSM US-provided server is due for replacement. We are looking at donation options, but anticipate a need to replace the existing server regardless.

Item | Operational cost | Capital cost
-|-|-
Tile server | | 1x € 11 500

## Additional generic hardware
We may take on additional services like coastline generation, Discourse, more tertiary services, and other projects that require hardware. We can run this on retired hardware temporarily or as a test, but will require long-term hosting on more recent hardware.

Item | Operational cost | Capital cost
-|-|-
Generic servers | | 2x € 5 000

# 2022Q4
## UCL to Dublin hardware replacement
We have some services hosted in UCL Slough that we intend to move to Dublin, and the hardware is due for replacement.

Item | Operational cost | Capital cost
-|-|-
Generic servers | | 2x € 5 000

## New map rendering technology server
We would like to experiment with new map rendering technologies when the development community has produced one. This could be some form of client-side rendering. This item depends on work outside the scope of the OWG.

This item could be advanced in schedule if the development community produces the required software sooner.

Item | Operational cost | Capital cost
-|-|-
Map rendering server | | 1x € 11 500

## Dev server
The dev server (errol) hosts the development APIs and is used by community members for various projects. It is long-overdue for replacement, and without replacement would need to be shut down.

Item | Operational cost | Capital cost
-|-|-
Dev server | | 1x € 13 000

# Unbudgeted costs
## SRE costs

The SRE will have costs for salary, taxes, training, and other overhead. As the OWG is not in charge of this budget item, it is not included.

## Note-taking
The OWG will continue to need note-taking and minutes administrative support for 13 meetings in the budget period.

## Travel
Travel for one person to Amsterdam or Dublin is expected to be required.

# Risks
## Supply chain
There is a global shortage of many computer components leading to increased lead times and prices. Current prices are stable, but lead times are elevated.

## Loss of sponsorship
We have moved the tile CDN to Fastly, a commercial provider who is sponsoring the costs. If we were to loose sponsorship we would need to make arrangements for a new CDN on a rush basis. This would likely cost € 120 000 for the first month, plus new ongoing costs.

# Totals

Included in the totals is
- Replacement parts for servers
- Contingency for unexpected needs or cost increases, but we do not plan to spend, based on 5% of operational and 15% of capital expenses.
- 22% VAT. Actual VAT rates depend on where purchases are made and if the OSMF becomes VAT registered.

Expense | Cost
-|-|-|-
Operational Expense                         | €  42 580
Capital expenses (servers)                  | €  68 500
Replacement parts and labor for new servers | €   3 425
Contingency                                 | €  12 404
VAT                                         | €  27 920
Total                                       | € 154 829
