---
# Unique identifier for this document (used in sidebar and routes)
id: intro # e.g., "intro", "getting-started", "api/auth", must be unique within sidebar

# Title displayed on the page and sidebar
title: Welcome # e.g., "Getting Started", "API Reference"

# Numerical position in the sidebar under the current category (lower = higher up)
sidebar_position: 1 # e.g., 1, 2, 3 — determines vertical order in sidebar

# Custom label for the sidebar (overrides `title`)
sidebar_label: Introduction # Optional; e.g., "Quick Start", "API Docs"

# If true, this page does NOT appear in the sidebar
sidebar_hide: false # Values: true | false

# Optional slug override (controls URL path)
# slug: /welcome # e.g., "/start-here" — defaults to /<folder>/<filename>

# Set a custom permalink (deprecated; use `slug` instead)
# permalink: /old-url  # Not recommended, kept for legacy compatibility

# Keywords to enhance SEO and internal search
keywords: [introduction, overview, guide] # array of search keywords

# Description meta tag (used by SEO and social previews)
description: A concise intro to our project and its structure. # plain text string

# Custom HTML meta tags (advanced SEO/customization)
tags:
  - name: robots
    content: noindex

# Specify page version (used with versioned docs)
# version: current # e.g., "current", "1.2.0", used in versioned sites

# Allows setting the page as draft (excluded from build output)
draft: false # Values: true | false (default = false)

# Prevents this doc from being indexed by search engines
hide_title: false # Hides the H1 title from rendered page — Values: true | false

# Whether to show the table of contents (TOC) sidebar on this page
hide_table_of_contents: true # Values: true | false

# Min/max heading levels to include in TOC (default: 2–3)
toc_min_heading_level: 2 # Values: 2–6
toc_max_heading_level: 3 # Values: 2–6

# Use a custom layout component (React) for this page (advanced)
# custom_edit_url: https://github.com/user/repo/edit/main/docs/intro.md  # overrides default edit link

# Control edit link visibility per page (default true if repo configured)
# hide_edit_link: true  # Values: true | false

# Enable or disable last update author/time (requires Git metadata)
# show_last_update_author: true
# show_last_update_time: true

# Custom class name to apply to the page container
# className: custom-intro-page  # used for custom CSS styling

# Any React component or plugin-specific frontmatter can be added here
# For example, callouts, banners, etc. can read from frontmatter keys
---

<!-- ---
id: intro
title: Welcome
sidebar_position: 1
--- -->

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
