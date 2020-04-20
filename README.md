# Your Website

This folder, called the "web root" or sometimes "document root," contains the whole of your Website. Everything needed to publish your site's HTML pages, [blog posts](_posts/), [events](_events/README.md#the-_events-folder), [gallery](_data/README.md#gallery), [images](static/images/README.md#the-images-folder), and more are somewhere within this folder structure. Not all of these files are Web pages. Some are [configuration files](#site-configuration), [data files](_data/README.md#the-_data-folder), or [snippets of templates](_includes/README.md#the-_includes-folder).

The software used to publish your Website is called [Jekyll](https://jekyllrb.com/). It is the program responsible for processing the files in this folder structure and transforming them into the HTML pages, RSS feeds, iCalendar feeds, and other machine-readable formats that your Web browser, news reader, calendaring application, and other client software downloads. Much of the [documentation provided by the Jekyll project](https://jekyllrb.com/docs/) is therefor very useful in understanding both the folder hierarchy contained herein and the contents of each file in these folders.

The rest of this document, along with the other `README.md` files in various folders, offers a basic overview of these files, what they do, and how to edit them. These directions are written for those who feel comfortable manipulating the Web site by editing its Jekyll-formatted source files directly. For instructions relating to a more graphical environment, see the [`.forestry/`](.forestry/) folder and the `README.md` files located there.

# Folder structure

All [Jekyll projects share a similar folder structure](https://jekyllrb.com/docs/structure/). (In Jekyll's documentation, the term "folder" and "directory" are interchangable.) The most important folders for your website are:

* [`_data`](_data/) - Site-specific content, such as navigation menus, are saved here.
* [`_events`](_events/) - Calendar events are saved here.
* [`_posts`](_posts/) - Blog posts are saved here.
* [`static/images`](static/images/) - Upload images for your blog posts, gallery, etcetera into this folder.

There are other folders as well, but these are the ones you will need to open and edit most often.

# Site configuration

Settings that affect the whole of your website are written to the main configuration file, called [`_config.yaml`](_config.yaml), located in the document root (this folder). The configuration file itself is written in a highly structured format called [YAML](https://en.wikipedia.org/wiki/YAML "YAML Ain't Markup Language"). If you edit this file to update a site setting, be sure to change only the setting you intend, and not the structure of the file (i.e., don't change the indentation or remove any punctuation).

One exception to this rule is the human-language text contained in the file. These sections are always prepended with the octothorpe (`#`) character. The octothrope signifies the start of a comment. Such comments are intended to make remembering how to edit the file a little easier. Feel free to edit these comments as you wish.

The remainder of this section describes the individual site settings in greater detail.

## Site settings

Some settings affect almost every page on your website. These settings are documented next.

### `title`

The title of your website. This is shown in the Web browser's title bar, set as the default name for a bookmark, and in numerous places on your site's published web page(s).

> :bulb: If you have a multi-lingual Web site, set this setting the site's title in the site's default language. To set a site title in multiple languages, see the [Internationalization and localization](#internationalization-and-localization) section to learn how to add translatable text to your Web site, and then add a string whose key is `site_title` to the language's strings data file.

### `description`

Your website's description should be a one or two sentence explanation of what your site is for and what a visitor might find useful about it. The description field is sometimes shown in the detail view of search engine result pages, and when someone shares your website address on social media.

> :bulb: If you have a multi-lingual Web site, set this setting the site's description in the site's default language. To set a site description in multiple languages, see the [Internationalization and localization](#internationalization-and-localization) section to learn how to add translatable text to your Web site, and then add a string whose key is `site_description` to the language's strings data file.

### `timezone`

The default timezone for your website. This setting will affect things like the publication dates of blog posts and the specific times of published events. Jekyll uses the `tz` database for understanding timezone information. Set this to the closest city listed in [the `tz` list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).

For example, for a website whose authors and events are primarily or only located in New York City, New York, United States:

```yaml
timezone: "America/New_York"
```

### `type`

The kind of thing your Web site is for. For example, a `BookStore`, `RadioStation`, or `NGO`. Valid values are any Schema.org type. Typically, you should use a subtype of [LocalBusiness](https://schema.org/LocalBusiness#subtypes) or [Organization](https://schema.org/Organization#subtypes).

## Jekyll SEO Tag settings

All of the [Jekyll SEO Tag plugin's settings](https://github.com/jekyll/jekyll-seo-tag/tree/master/docs) are also supported. Especially notable settings are described in this section.

### `lang`

The default language for your Web site. Defaults to `en_US`.

### `logo`

Path to your site's main logo image.

## Blog settings

These settings affect your blog post listing pages and the blog posts themselves.

### `paginate`

How many posts per page should appear on blog listing pages, such as the main blog page, category pages, tag pages, archive pages, and so on.

See also [Jekyll's documentation about pagination](https://jekyllrb.com/docs/pagination/).

### `paginate_path`

This setting determines the URL structure ("pretty permalinks") for paginated pages.

See also [Jekyll's documentation about pagination](https://jekyllrb.com/docs/pagination/).

### `date_format`

A representation of the default way to print dates, specified in [`strftime` format](http://strftime.net/). For example, to print dates as the day of the week, a comma and a space, then an abbreviated month name, followed by the number of the day of the month, another comma and space, and then the four-digit year, like "`Tuesday, Apr 30, 2019`" use the following format string:

```yaml
date_format: "%A, %b %e, %Y"
```

### `time_format`

A representation of the default way to print times, specified in [`strftime` format](http://strftime.net/). This is identical to `date_format` but formats times-of-day instead of dates.

## Collections settings

[Collections are a Jekyll feature](https://jekyllrb.com/docs/collections/) that takes structured data and can render a page for each item in that  data structure. For example, you can make a collection of baking recipes and then, for each recipe in the collection, you can make a page with its own Web address to show the recipe on your Web site.

Each collection is described as its own object in the top-level `collections` object. The primary feature of your Web site that uses collections is [events](_events/README.md#the-_events-folder). This means that there is a `collections.events` object, and the items of this object are the individual settings for the `events` collection. These settings are collectively referred to as "collection metadata."

In YAML, this is written as follows:

```yaml
collections:
    events:
        output: true
```

When discussing the `output` setting of the `events` collection, we refer to it as the `collections.events.output` setting. Since the `events` part of the setting is dependent on the name of the collection, this is replaced with `:collection`.

All collection settings are optional. Refer to [the Jekyll documentation on Collections](https://jekyllrb.com/docs/collections/) details about the available settings.

For example, to define two collections, `menu_items` and `events`, where the `events` collection has a custom permalink structure and individual pages for each item (event) in the collection, write a `collections` object as follows:

```yaml
collections:
    menu_items:
    events:
        output: true
        permalink: /:collection/:title
```

## Page defaults

The `defaults` object in your site configuration controls the default values of certain metadata that accompany your pages. You won't likely have to change any of these. See the Jekyll documentation for [Front Matter Defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/) for more information.

## iCalendar settings

Your site has built-in support for [iCalendar, a digital calendaring and event scheduling format](https://en.wikipedia.org/wiki/ICalendar). Using iCalendar, visitors can subscribe to upcoming and recurring event notifications. These notifications will then show up right alongside their own alarms and alerts in their phones or other mobile devices. This feature is often used by performance venues to help remind visitors of an upcoming show, presentation, or class.

The iCalendar settings are all contained inside an `iCalendar` object. See below for examples regarding structure and syntax.

### iCalendar defaults

The `iCalendar.defaults` object sets the default values for various event metadata.

#### `iCalendar.defaults.location`

The physical location for events that are missing this field. This should usually be set to the physical location of the event venue itself.

For example:

```yaml
iCalendar:
    defaults:
        location: "123 Main Street, Pleasanthill Neighborhood, Anytown, 12345, United States"
```

#### `iCalendar.defaults.status`

The planning stage for events that are missing this field. The values are the same as for [the `STATUS` field in the iCalendar specification (RFC 5545)](https://icalendar.org/iCalendar-RFC-5545/3-8-1-11-status.html). The default is `CONFIRMED`.

#### `iCalendar.defaults.image`

The file name of the image to use as an event image's placeholder for events that are missing this field. To be useful, there must be an image with the same filename in your site's [`static/images` folder](static/images/README.md#the-images-folder).

## Build settings

These settings affect the way Jekyll processes your site's source files. You probably shouldn't change any of these. :)

### `markdown`

This setting instructs Jekyll which Gem to use to parse and transform Markdown files. The default, `kramdown`, is the best option in most cases.

### `exclude`

This setting instructs Jekyll to ignore specific files or folders when processing your website. Any path listed in this setting will *not* become a published Web page.

The following example will prevent the file or folder named `vendor` and the file named `README.md` from appearing as a Web page on your published site:

```yaml
exclude:
    - vendor
    - README.md
```

## Plugin settings

This setting is simply a list of the plugins you'd like to install on your site. See [GitHub Help: Adding Jekyll Plugins to a GitHub Pages Site](https://help.github.com/en/articles/adding-jekyll-plugins-to-a-github-pages-site).

# Internationalization and localization

Your Web site is fully multi-lingual. You can optionally translate any text into multiple languages. This section describes how to do this.

## Set the default language

First, ensure you have [set a default language](#lang). This language will be used when no translation is available.

## Adding strings

A *string* is some text that you want to be available in multiple languages. Common strings are the display text for [navigation menu items](_data/README.md#navigation-menus), or captions for images in a Web site's [gallery](_data/README.md#gallery). For example, a community center might have a menu item that reads "Visit us!" in English (the [default language](#set-the-default-language) for your Web site) and would like this same menu item to read "¡Visítanos!" in Spanish. To accomplish this, you need to create at least two files, such as `_data/strings/es.yaml` and `_data/strings/en.yaml`.

In the `_data/strings/en.yaml` file, add a line such as this:

```yaml
visit_us: "Visit us!"
```

In the `_data/strings/es.yaml` file, add a similar line, like this:

```yaml
visit_us: "¡Visítanos!"
```

## Displaying strings

To retrieve the correctly translated text from the strings data file, use the special `gettext.liquid` [include file](_includes/README.md#the-_includes-folder). For example, to get the correct translation of the "Visit us!" text:

```liquid
{% include gettext.liquid key="visit_us" %}
```

## Language switcher

The language switcher lets your visitors choose which language to display the page in. To make use of the language switcher, each equivalent page must be identified with the special `i18n` custom field. For example, if you have translated your home page into both English and Spanish you might have two pages like the following example.

The English home page, probably in [`/index.md`](index.md):

```
---
title: Home Page
i18n: home
---

This is the home page.
```

The Spanish home page, probably in [`es/index.md`](es/index.md):

```
---
title: Página de inicio
i18n: home
---

Esta es la página principal.
```

Since both pages have the same value for their `i18n` custom field, the language switcher will show the two pages as being equivalent.
