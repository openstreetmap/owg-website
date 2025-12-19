---
title: Post-mortems
permalink: /post-mortems/
---

# Post-mortems

<ul class="posts">
  {% assign post_mortems = site.pages | where: "post_mortem", true | sort: "date" | reverse %}
  {% for pm in post_mortems %}
    <li>{{ pm.date | date: "%Y-%m-%d" }} – <a href="{{ site.baseurl }}{{ pm.url }}">{{ pm.title }}</a></li>
  {% endfor %}
</ul>
