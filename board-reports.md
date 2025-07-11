---
title: Monthly Board Reports
permalink: /board-reports/
---

# Monthly Board Reports

These are our monthly reports to the OSMF Board.

<ul class="posts">
  {% for post in site.posts %}
    {% if post.categories contains 'board-reports' %}
      <li>
        <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
