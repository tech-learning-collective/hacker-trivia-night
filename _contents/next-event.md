---
title: "Next Hacker Trivia Night Theme"
html_id: next-event
---

{% for event in site.events limit: 1 %}
{% include h-event.html event=event %}
[Read more about the beneficiaries]({{ event.url | relative_url }}#this-games-beneficiaries) for this Hacker Trivia Night competition.
{% include chart-next-game-prize-pool.html event=event %}
{% include donate-now.html event=event %}
{% endfor %}

[![Subscribe]({% link static/images/icon.calendar.svg %}){:.icon }](webcal://{{ "events/all.ics" | absolute_url | replace: "https://", "" | replace: "http://", "" }} "Subscribe to event calendar"){:.button}
[Add to calendar]({% link events/all.ics %}){:.button}
