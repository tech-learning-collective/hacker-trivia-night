---
title: "Next Hacker Trivia Night Theme"
html_id: next-event
---

{% for event in site.events limit: 1 %}
{% include h-event.html event=event %}
{% endfor %}

[![Subscribe]({% link static/images/icon.calendar.svg %}){:.icon }](webcal://{{ "events/all.ics" | absolute_url | replace: "https://", "" | replace: "http://", "" }} "Subscribe to event calendar")
[Add to calendar]({% link events/all.ics %})
