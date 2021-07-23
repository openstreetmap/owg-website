---
title: Spending plan for 2022
---

This is the OWG plan for the year starting from 2022Q2. It will form the basis for a budget when a budget request is recieved from the OSMF Board.

As this document attempts to predict costs and plans two years into the future, it may be subject to substantial change. Hardware capital costs and subscription costs are based on current prices and may change based on the computer market.

All costs are converted in Euros, but may be incurred in USD or GBP. Costs do not include VAT. Ongoing costs are expressed per month.

As in previous years, a 🔴low, 🟡medium, and 🟢high option is presented. Under the low option essential services would remain running, but capital costs and maintenance would be deferred and some secondary services would need to reduce in scope.

Items marked with ⏩ can be done sooner including in 2021, but may depend on work outside the scope of the OWG, external timelines, or us having enough human capacity.

# Current ongoing costs
These are costs that we are already committed to with ongoing services, and their costs have started in the past.

## Cloud Hosting
Some of our services rely on cloud hosting, as well as internal uses like backups and logging.

Item | Cost per month | Capital cost
-|-|-
🔴Cloud hosting | € 600 |

## Amsterdam site hosting
Amsterdam is our primary hosting location.

Item | Cost per month | Capital cost
-|-|-
🔴Power and space | € 900 |
🔴Network | € 750 |
🔴Remote hands | € 50

## Dublin site hosting
Dublin is our new other site

Item | Cost per month | Capital cost
-|-|-
🔴Power and space | € 1 180 |
🔴Network | € 750 |
🔴Remote hands | € 50 |

## Subscriptions
We use subscriptions for domains, monitoring, and other services

Item | Cost per month | Capital cost
-|-|-
🔴Subscriptions | € 75

## Insurance
We assume that insurance will have been selected before 2022.

Item | Cost per month | Capital cost
-|-|-
🔴Subscriptions | € 500

# 2022Q2
## Nominatim
The other Nominatim server may require replacement in 2022.

Item | Cost per month | Capital cost
-|-|-
🟡Nominatim server | | 1x € 10 500

## ⏩ New map rendering technology server
We would like to experiment with new map rendering technologies when the development community has produced one. This could be some form of client-side rendering. This item depends on work outside the scope of the OWG.

This item could be advanced in schedule if the development community produces the required software sooner.

Item | Cost per month | Capital cost
-|-|-
🟢Map rendering server | | 1x € 10 500

## Additional generic hardware
We may take on additional services like coastline generation, Discourse, more tertiary services, and other projects that require hardware. We can run this on retired hardware temporarily or as a test, but will require long-term hosting on more recent hardware.

Item | Cost per month | Capital cost
-|-|-
🟢Generic servers | | 2x € 5 000

# 2022Q3
## ⏩ New map rendering technology server
If the previous work with a new map rendering technology is a success, we will want to have two servers for redundancy. This item depends on work outside the scope of the OWG.

This item could be advanced in schedule if the development community produces the required software sooner.

Item | Cost per month | Capital cost
-|-|-
🟢Map rendering server | | 1x € 10 500

## ⏩ Aerial imagery ("COG" project)
We currently host some aerial imagery for mappers that is not available from commercial providers. We would like to modernize this, storing imagery in an object store and tiling it to make it available for mappers. This item depends on work outside the scope of the OWG.

This item could be advanced in schedule if the development community produces the required software sooner.

Item | Cost per month | Capital cost
-|-|-
🟢Generic servers | | 2x € 5 000
🟢Cloud object store usage | € 500 |

# 2022Q4
## Additional cloud hosting costs
As the data we use cloud hosting for expands, we can expect additional costs.

Item | Cost per month | Capital cost
-|-|-
🔴Cloud hosting | € 300

## New map rendering server
The map rendering server in the US will be due for replacement. The current machine is owned by OSMUS and operated by the OSMF. Depending on the new map rendering technology work this server might not be required, but we are assuming some upgrade will be required.

Item | Cost per month | Capital cost
-|-|-
🟡Map rendering server | | 1x € 10 500

## ⏩ API keys software development
We would like the ability to require and manage API keys for Nominatim, tiles, and potentially aerial imagery and new map rendering services. This would allow us to identify heavy users and contact them reliably.

Item | Cost
-|-
🟢Software consultancy | 50x € 300

# 2023Q1

T.B.D.

# Other unbudgeted costs
## SRE costs

The SRE will have costs for salary, taxes, training, and other overhead. As the OWG is not in charge of this budget item, it is not included.

## Note-taking
The OWG will continue to need note-taking and minutes administrative support for 26 meetings per year

## Travel
Travel for one person to Amsterdam and Dublin is expected to be required.

# Year 2 risks
## COVID
We assume COVID restrictions will have lifted before 2022Q2. If they have not, it may result in a delay of some purchases.

## Parts shortage
There is a global shortage of many computer components leading to increased lead times and prices. On the basis of talks with suppliers, we've budgeted 25% more than current prices, but this is a rough estimate. The shortages impact both purchased hardware and cloud providers.

## Brexit shipping
We assume that shipping to and from Ireland and the UK will be more predictable than now. If not, it may result in extra lead time being required for all purchases.

## Loss of sponsorship
We have moved the tile CDN to Fastly, a commercial provider who is sponsoring the costs. If we were to loose sponsorship we would need to make arrangements for a new CDN on a rush basis. This would likely cost € 40 000 for the first month, plus new ongoing costs.

## Software development
We are looking at having API key software developed to ease the operational load of managing services used by third parties. Although many members of the OWG have experience as software developers or in related roles, this is not something we have done before as a working group.

# Totals
Expense | 🔴      |   🟡      | 🟢
-|-|-|-
Recurring costs                             | € 60 060 | € 60 060  | € 64 560
Capital expenses (servers)                  | € 0 | € 21 000 | € 62 000
Software consultancy                        | € 0 | € 0 | € 15 000
Replacement parts and labor for new servers | € 0 | € 1 050 | € 3 100
Total                                       | € 60 060 | € 82 110 | € 144 660
