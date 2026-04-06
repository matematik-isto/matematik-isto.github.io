---
layout: default
title: Blog
permalink: /es/blog/
lang: es
---

# Blog en Español

{% for post in site.posts %}
  {% if post.lang == "es" %}
  - [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%d %b %Y" }}
  {% endif %}
{% endfor %}