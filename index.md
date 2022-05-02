---
title: OSMF Operations Working Group
---

# OSMF Operations Working Group

We're the Operations Working Group (OWG) for the OpenStreetMap Foundation. The OWG is responsible for proposing the budget for, and running of the servers owned by the [OpenStreetMap Foundation](https://wiki.osmfoundation.org/)

The key priority for this group is ensuring the operation and smooth running of the XML editing API and data distribution services (planet files and diff updates). Secondary priorities include the operation of the other OSMF servers.

The main task of the Operations Working Group is the forecasting of demand and the purchasing of hardware required to meet the priorities.

Other tasks include:

* Creating [policies]({{ site.baseurl }}/policies/) for OSMF services, such as the Tile Usage Policy or API Usage Policy
* The organisation and budgeting for hosting OSMF servers

It does not concern itself with:

* Authoring software to run on the services. This is left to the development community
* Day-to-day running of the servers. This is the remit of the Sysadmins group

We run a public tracker for our tasks at https://github.com/openstreetmap/operations/issues.

# Infrastructure Details and Status

Details on OSMF servers and statistics can be found at https://hardware.openstreetmap.org/.

https://uptime.openstreetmap.org/ gives uptime details by service (note that it may not include all servers and services).

# Latest Reports

<ul class="posts">
  {% for post in site.posts limit: 6 %}
    <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

For a full list of reports, please see our [Reports Archive]({{ site.baseurl }}/reports/).

# Members

* Emilie Laffray
* Grant Slater
* Jon Burgess
* Paul Norman
* Tom Hughes
* Hrvoje Bogner
* Radoje Stojisic

Former members:

* Matt Amos
* Sarah Hoffmann
* Brian DeRocher
* Andy Allan

# Join Us!

OWG is a volunteer group, and we are always keen to find new members. We are particularly looking for people who can analyse our infrastructure, make plans, forecast future hardware needs, draw up budgets and that sort of thing. This does involve a certain level of technical expertise but it's not writing code, for example, and OWG membership doesn't grant access to any of the servers - that's for our Sysadmins. If you'd like to join us, have a read of our [membership policy]({{ site.baseurl }}/policies/owg-membership/), and please get in touch!

# Contact

The OSM Operations team are on Twitter: [@OSM_Tech](https://twitter.com/osm_tech)

You can get in touch with the whole team at: [operations@osmfoundation.org](mailto:operations@osmfoundation.org)
