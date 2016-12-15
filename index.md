---
layout: default
title: owg-log
---

<div id="home">
  <p>We're the Operations Working Group for the OpenStreetMap Foundation. These are our monthly reports to the
  OSMF board.</p>
  <h1>Monthly Reports</h1>
  <ul class="posts">
    {% for post in site.posts %}
      <li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>
