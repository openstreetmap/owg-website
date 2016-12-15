---
layout: default
title: OSMF Operations Working Group
---

# OSMF Operations Working Group

We're the Operations Working Group for the OpenStreetMap Foundation.

# Latest Reports

<ul class="posts">
  {% for post in site.posts limit: 6 %}
    <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

For a full list of reports, please see our [Reports Archive]({{ site.baseurl }}/reports/).
