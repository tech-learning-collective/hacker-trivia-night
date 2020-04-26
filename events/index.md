---
title: Competitions and Donors
---

{:style="text-align: center;"}
[<img alt="Calendar" src="{% link static/images/icon.calendar.svg %}" class="calendar icon" /> Subscribe to our calendar.]({{ "/events/all.ics" | absolute_url | replace: "https:", "webcal:" | replace: "http:", "webcal:" }} "Subscribe to our calendar."){:.button}
[<img alt="Download" src="{% link static/images/icon.download.svg %}" class="download icon" />]({% link events/all.ics %} "Export events as iCalendar file."){:.button}

## Top 10 Donors
<div class="google-chart"
    title="Top 10 Donors"
    data-spreadsheet="1nnQiJOydZlSVU4GniUs4NDu-DnX9fKWCbism0nceoRk"
    data-sheet="Contributions"
    data-query="select B, C, D, E order by D desc limit 10 label D 'Amount'"
    data-chart="table"
></div>
