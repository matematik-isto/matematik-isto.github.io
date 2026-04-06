---
layout: default
title: Blog
permalink: /en/blog/
lang: en
---

# Blog in English

{% for post in site.posts %}
  {% if post.lang == "en" %}
  - [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%b %d, %Y" }}
  {% endif %}
{% endfor %}