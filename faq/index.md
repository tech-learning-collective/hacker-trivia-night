---
title: Frequently Asked Questions
---

{:style="text-align: center;"}
[Beneficiaries](#for-beneficiaries){:.button}
[Donors](#for-donors){:.button}
[Players](#for-players){:.button}

We are working out the final details for numerous parts of the competition. We will update this page with more information as it becomes available.

<details id="for-beneficiaries" open="open" markdown="1">
<summary>For beneficiaries</summary>
* [I don&rsquo;t believe I can win a hacking competition; should I still apply?](#i-dont-believe-i-can-win-a-hacking-competition-should-i-still-apply)
* [How can I get teams to choose me as their beneficiary?](#how-can-i-get-teams-to-choose-me-as-their-beneficiary)
* [How do I become a Hacker Trivia Night beneficiary?](#how-do-i-become-a-hacker-trivia-night-beneficiary)
* [My team(s) won! When will I see my winnings?](#my-teams-won-when-will-i-see-my-winnings)

## I don&rsquo;t believe I can win a hacking competition; should I still apply?

**Yes!** Remember, *you* don&rsquo;t have to win. *Any* winning team that has [declared you as their beneficiary](#how-do-i-choose-who-my-winnings-will-go-to) when they signed up wins on your behalf.

You are more than welcome to both become a beneficiary *and* register a team to try and win. However, you are also encouraged you inform your members, patrons, constituencies, friends, neighbors, and community that they can win money on your behalf simply by playing Hacker Trivia Night. The more independent teams that sign up to play and declare you as their beneficiary, the better your chances of winning.

Please remember, however, that collusion between teams is strictly forbidden. Independent teams who are discovered sharing solutions to challenges will be disqualified. Please play fair!

## How can I get teams to choose me as their beneficiary? 

Our best advice for this is simply to let them know they can! Announce your participation in your email newsletter, blog about it on your Web site, and post about it on social media. The more effectively you mobilize your community, the better your chances of teams signing up to support you.

## How do I become a Hacker Trivia Night beneficiary?

TK-TODO

## My team(s) won! When will I see my winnings?

TK-TODO

</details><!-- #for-beneficiaries -->

<details id="for-donors" open="open" markdown="1">
<summary>For donors</summary>
* [Can I compete if I&rsquo;ve also donated to the prize pool?](#can-i-compete-if-ive-also-donated-to-the-prize-pool)

## Can I compete if I&rsquo;ve also donated to the prize pool?

**Yes!** In fact, we encourage it! Competing is the only way you can [influence who the donations will go to support](#how-do-i-choose-who-my-winnings-will-go-to). Plus, it&rsquo;s educational, free, and fun.

</details><!-- #for-donors -->

<details id="for-players" open="open" markdown="1">
<summary>For players</summary>
* [Can I compete without donating?](#can-i-compete-without-donating)
* [How can I improve my skills?](#how-can-i-improve-my-skills)
* [How do I choose who my winnings will go to?](#how-do-i-choose-who-my-winnings-will-go-to)

## Can I compete without donating?

**Yes!** Hacker Trivia Night is always free to play. You are welcome to compete even if you do not donate to the prize pool.

However, *please consider making a donation of any amount* if you can afford it, especially if you are going to play.

Even a small donation helps make this event better and, ultimately, helps the beneficiaries who really need it. Also, our team spends considerable effort to produce events like these and we cannot continue to run them without financial contributions from people just like you.

You may also play Hacker Trivia Night without [declaring a beneficiary](#how-do-i-choose-who-my-winnings-will-go-to), but in this case any points you earn are effectively wasted, as your team will be omitted from the final calculations. We encourage you to do the right thing and put your work to good use by choosing a beneficiary when you register!

## How can I improve my skills?

The best way to improve your hacking and general computer skills is to attend a [Tech Learning Collective](https://techlearningcollective.com/) workshop.

Tech Learning Collective is an apprenticeship-based technology school operated exclusively by radical queer and femme technologists providing a security-first IT infrastructure curriculum to its students. Tech Learning Collective is also one of the organizations behind the Hacker Trivia Night benefit project.

The educational materials provided by Tech Learning Collective are directly relevant to Hacker Trivia Night challenges, as well as to cybersecurity challenges &ldquo;in real life,&rdquo; whether at home or at work. Tech Learning Collective&rsquo;s [workshop events](https://techlearningcollective.com/events/) are a low-commitment, low-cost way to get a feel for our more intensive [courses](https://techlearningcollective.com/courses/) as well as meet some of our teaching team.

Tech Learning Collective also produces numerous free resources in [our online &ldquo;Foundations&rdquo; courses](https://techlearningcollective.com/foundations/). However, nothing can compare to learning directly from a teacher whom you can actually see and ask questions of in real time, so come to a Tech Learning Collective workshop before the next game!

Learn more [about Tech Learning Collective](https://techlearningcollective.com/about/).

## How do I choose who my winnings will go to?

When you [register](https://ctf.techlearningcollective.com/index.php?page=registration) to compete in a Hacker Trivia Night competition, you will be asked to enter the names and email addresses of your team&rsquo;s players. Simply fill one of your team&rsquo;s player slots with the name and email address of your chosen beneficiary to make sure your points are awarded to that beneficiary.

You can see a list of the beneficiaries selected for any given Hacker Trivia Night competition on the specific competition event&rsquo;s page. The upcoming competition&rsquo;s beneficiaries are also listed in the sidebar on every page of this Web site. Both the beneficiary&rsquo;s name and &lt;email address&gt; is shown.

{% assign events = site.events | where_exp: "event", "event.endDate > site.time" | sort: "startDate" %}
{% if 1 <= events.size %}
To be absolutely clear, the *upcoming* game&rsquo;s beneficiaries are:

{% for event in events limit: 1 %}
{% include event-beneficiaries.html event=event excerpt_only=true %}
{% endfor %}
{% endif %}

Click through to visit each beneficiary&rsquo;s Web site and agree on your selection with your teammates. Don&rsquo;t forget to include them in your team roster when you register on the game site.

You may also choose more than one beneficiary, in which case your earnings will be evenly split amongst all your chosen beneficiaries.

</details><!-- #for-players -->
