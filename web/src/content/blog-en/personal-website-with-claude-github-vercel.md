---
title: "How I built my personal website with Claude, GitHub and Vercel (free and without coding)"
description: "The real process behind this website: from the idea to going live with Claude, GitHub and Vercel, without knowing how to code and without paying for hosting."
pubDate: 2026-10-14T10:00:00Z
category: "Building"
es: "web-personal-con-claude-github-vercel"
image: "/og/personal-website-with-claude-github-vercel.jpg"
tags: ["Claude", "GitHub", "Vercel", "Astro", "personal website", "personal brand"]
tldr:
  - "I built this website with Claude without knowing how to code: Claude writes the code, GitHub stores it and Vercel publishes it."
  - "The stack is free: Astro, GitHub and Vercel's Hobby plan. The only optional cost is your own domain."
  - "I went through more than ten versions in a private preview before publishing anything."
  - "The hard part wasn't technical: it was deciding what I wanted to say and who for."
faq:
  - q: "Can you build a personal website with Claude without knowing how to code?"
    a: "Yes. I don't code. Claude writes the code from what I ask for in plain language, and I review the result in a preview before publishing it."
  - q: "How much does it cost to publish a website with GitHub and Vercel?"
    a: "It can cost nothing. GitHub and Vercel's Hobby plan are free for personal use, and Astro is open source. The only thing worth paying for later on is your own domain."
  - q: "What is Vercel?"
    a: "It's a service that publishes websites. You connect it to your GitHub repository and every time you change a file, it republishes the site on its own."
  - q: "What is GitHub and why do I need it?"
    a: "It's where the website's code is stored, with the history of every change. It works as the source of truth: Vercel reads from there to publish."
  - q: "Why Astro and not just an HTML file?"
    a: "While it was a single page, one HTML file was enough. To have a blog, Astro generates the index, the sitemap and the RSS feed on its own: publishing an article means uploading a text file."
---

**I built this website with Claude, without knowing how to code and without paying for hosting.** Claude writes the code from what I ask for, GitHub stores it and Vercel publishes it. I come from sales, and I wanted the website itself to be proof of what I write about.

Here's the real process, with what worked and what broke along the way.

## Why build a personal website if I already have LinkedIn?

This website exists because someone told me that what seems normal to me is something almost nobody does: [selling with a process that runs on Claude](/en/blog/automated-sales-process-with-claude/). I decided to talk about it, and I needed a place of my own to do it.

LinkedIn and X are good for conversation, but content doesn't last long and the algorithm decides the reach. A website is mine: it builds up over time, it can be found on Google and AI tools can cite it when someone asks about the topic.

## Which tools did I use?

| Tool | What for | Cost |
|---|---|---|
| [Claude](https://claude.ai) | Designs and writes the code and the copy with me | My usual subscription |
| [GitHub](https://github.com) | Stores the code and the change history | Free |
| [Vercel](https://vercel.com) | Publishes the website every time something changes | Free (Hobby plan, personal use) |
| [Astro](https://astro.build) | Builds the website and the blog | Free (open source) |

I didn't use paid templates, visual builders or hosting.

## What was the process, step by step?

### 1. Decide what to say and who for

Before designing anything I defined three things: the goal (to share how I work, not to sell services), who I'm talking to (founders, executives and tech people taking their first steps with AI) and what I wanted to happen next: a conversation.

That was the hard part. The technical side came later.

### 2. Look for references

I showed Claude websites I liked and explained why. That's where the visual language came from: black and white, lots of space, two-tone sentences and a monospaced typeface as a nod to "I'm sales and code".

### 3. Iterate in a private preview

I worked through more than ten versions in a preview only I could see. I changed the whole hero, removed sections that didn't add anything, and rebuilt the how-it-works section three times. Each time I asked Claude to review the page as if it were a sales director seeing it for the first time.

### 4. Build a design system

With the website on track, we built a small design system: a logo shaped like a terminal prompt, colors, typefaces, buttons and tone of voice. It makes everything I publish, here and on social media, look like one thing.

### 5. Publish with GitHub and Vercel

I created a repository on GitHub, uploaded the files from the browser and connected it to Vercel. From then on, every change I upload goes live on its own in a minute or two.

### 6. Add a blog

When I wanted to write articles like this one, we moved the website to Astro. Now publishing means uploading a text file: the blog index, the sitemap and the RSS feed update on their own.

## What went wrong?

Several things, and they're worth sharing.

- **A file with the wrong name.** When I downloaded a new version, my computer saved it as `index_4.html`. I uploaded it like that and the website stopped showing. The fix was renaming it to `index.html` from GitHub. Lesson: check the name before uploading.
- **A photo that disappeared.** In one version, the image on the contact card depended on a separate file that wasn't where it should be. I ended up embedding it in the page.
- **Designs that didn't work.** There was a diagram I liked that didn't explain anything. We replaced it with something simpler: fixed tools that light up as you scroll down.

Fixing them didn't take any coding. Paying close attention and asking for the change was enough.

## Why does this matter to someone who doesn't want a website?

Because the website is the least of it. What it shows is a pattern that works for almost any process in a company: you bring the judgment (what gets done, for whom, what stays and what goes) and AI does the execution.

For a founder or an executive, that means being able to test an idea (a landing page, an internal tool, a workflow) without waiting for the tech team to have time, and walking into the conversation with the team with something concrete in hand.

## What did I learn?

1. The judgment is yours and the execution can be delegated. Claude writes the code; deciding what stays and what goes is my job.
2. Iterating in private is cheap. Ten versions in a preview cost less than one bad version published.
3. Asking for reviews from a specific role improves the result. "Review it as a sales director" gets better feedback than "what do you think?".
4. The free stack is more than enough for a personal website with a blog.

It's the same principle I apply in sales: [tools adapt to people](/en/#detras), not the other way around.

If you're trying something similar at your company, get in touch and I'll tell you how I did it.
