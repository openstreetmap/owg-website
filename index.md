---
title: OSMF Operations Working Group
---

# OSMF Operations Working Group

We're the [Operations Working Group](https://osmfoundation.org/wiki/Operations_Working_Group) (OWG) for the OpenStreetMap Foundation. The OWG is responsible for proposing the budget for, and running of the servers owned by the [OpenStreetMap Foundation](https://wiki.osmfoundation.org/)

The key priority for this group is ensuring the operation and smooth running of the XML editing API and data distribution services (planet files and diff updates). Secondary priorities include the operation of the other OSMF servers.

The main task of the Operations Working Group is the forecasting of demand and the purchasing of hardware required to meet the priorities.

Other tasks include:

* Creating [policies]({{ site.baseurl }}/policies/) for OSMF services, such as the Tile Usage Policy or API Usage Policy
* The organisation and budgeting for hosting OSMF servers

It does not concern itself with:

* Authoring software to run on the services. This is left to the development community
* Day-to-day running of the servers. This is the remit of the Sysadmins group

We run a [public issue tracker](https://github.com/openstreetmap/operations/issues) at GitHub for our tasks.

# Infrastructure Details and Status

Details on OSMF servers and statistics can be found at [OSMF Server Info](https://hardware.openstreetmap.org/).

[OpenStreetMap Server Status](https://uptime.openstreetmap.org/) gives uptime details by service (note that it may not include all servers and services).

# Latest Reports

<ul class="posts">
  {% for post in site.posts limit: 6 %}
    <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

For a full list of reports, please see our [Reports Archive]({{ site.baseurl }}/reports/).

# Members

* Tom Hughes
* Grant Slater
* Paul Norman
* Hrvoje Bogner

Former members

* Sarah Hoffmann
* Matt Amos
* Brian DeRocher
* Andy Allan
* Emilie Laffray
* Radoje Stojisic
* Jon Burgess

# Join Us!

OWG is a volunteer group, and we are always keen to welcome new members. We are particularly looking for people who can help analyse our infrastructure, make plans, forecast future hardware needs, and help with budgeting.

This does involve a certain level of technical knowledge, but it is not software development. OWG membership does not grant access to any servers - that is handled by our Sysadmins.

If you would like to join us, please read our [membership policy]({{ site.baseurl }}/policies/owg-membership/) and get in touch.

Some tasks welcome beginner contributions. They are labelled as [help-wanted](https://github.com/openstreetmap/operations/issues?q=is%3Aissue%20state%3Aopen%20label%3Ahelp-wanted) on the issue tracker.

# Contact

Join the chat on [Matrix](https://matrix.to/#/#_oftc_#osmf-operations:matrix.org) or [IRC](https://irc.openstreetmap.org/) (#osmf-operations)

The OSM Operations team are on Mastodon: <a href="https://en.osm.town/@osm_tech" rel="me">@osm_tech</a>

You can get in touch with the whole team at: [operations@osmfoundation.org](mailto:operations@osmfoundation.org)
