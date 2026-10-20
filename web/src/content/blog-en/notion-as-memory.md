---
title: "Notion as memory: the foundation of my sales process with Claude"
seoTitle: "Notion as memory for my sales process with Claude"
description: "Everything Claude knows about a client comes from Notion. How I organize client files, call notes and proposals so the AI never starts from scratch."
pubDate: 2026-11-02T06:00:00Z
category: "Process"
es: "notion-como-memoria"
image: "/og/notion-as-memory.jpg"
tags: ["Notion", "Claude", "AI for sales", "sales process"]
tldr:
  - "Notion is the memory of my sales process: everything Claude knows about a client comes from there."
  - "Each proposal has an internal page with the lead's file, what the client asked for, the scope, the risks and the open questions, always with the same structure."
  - "Claude reads Notion before each step, decides what to do and writes what's new in the same place."
  - "Before thinking about prompts, it's worth organizing where the information lives."
faq:
  - q: "What's Notion for if I use Claude?"
    a: "To give Claude a memory. Every conversation starts without context; if the client information is organized in Notion and Claude has access, it can read it before each task and you don't have to explain anything again."
  - q: "What sales information is worth keeping in Notion?"
    a: "Client files, notes from each call, proposals with their status and the playbooks for how each service is sold. What matters is that it always has the same structure, so Claude knows where to look."
  - q: "Does Notion replace the CRM?"
    a: "Not in my case. HubSpot holds the deal: stage, amount and owner. Notion holds the context: what the client said, what we proposed and why."
---

**Notion is the memory of my sales process: everything Claude knows about a client comes from there.** It's the least visible part of the system and the one most taken for granted. Without Notion, Claude would start from scratch in every conversation and I'd have to explain again who the client is, what they asked for and what we proposed.

## Why does Claude need a memory?

Every conversation with Claude starts without context. Connectors give it access to my tools (Gmail, Calendar, Granola, HubSpot), but someone has to decide where each client's information lives and what shape it takes. That place is Notion.

Organizing where information lives helps people too. In [Atlassian's State of Teams 2025](https://www.atlassian.com/blog/state-of-teams-2025), a survey of 12,000 knowledge workers and 200 executives, teams and leaders said they waste 25% of their time just searching for answers.

One of the [principles I don't compromise on](/en/#criterio) is that context beats the prompt. The quality of what Claude returns depends above all on how well I taught it where to look.

## What do I keep in Notion?

Everything sales-related lives in a single sales space, with four parts: clients and accounts, call notes, proposals and playbooks by boutique.

Proposals are in a database where each row is a project. Besides the document, each one has fixed fields: the status (drafting proposal, awaiting reply, won, lost), the type of service, how the client found us, the language and the discovery call. There are also templates by project type, so a website proposal and a branding proposal start with the structure that fits them.

Everything always having the same shape is what makes it work, because Claude doesn't have to guess where each thing is.

## What does a client file look like inside?

Each proposal has an internal page that fills up as the sale moves forward. At the very top is the link to the estimate sheet. Then comes a lead file with where the contact came from, the date of the discovery call and the link to the Granola recording, plus links to the deal in HubSpot and the email thread.

Below that, Claude organizes what came out of the call: who the client is, what they asked for, which tools they use, what's in scope and what's left out. The page ends with two sections that save me a lot of mistakes, one with risks and open points and another with the questions I still need to ask the client.

I recently saw it work on a branding proposal. After a half-hour discovery call, the page already had all of that in place. Two days later I estimated the project with a colleague, we added the notes from that session to the same page and adjusted the scope with her feedback. The client-facing version came out of there, as a subpage and without any internal data.

## How does Claude use it?

The cycle is always the same: Claude reads, decides and writes. Before a call it reads the client's file and puts the context together for me. Afterwards, Granola transcribes the conversation and Claude fills in the file with what the client said.

When it's time for the proposal, the skill I use to build them first checks Notion, Gmail and Granola. It also searches the group's proposal archive, with records going back to 2020, in case that client has worked with us before. Only then does it draft, and the proposal is saved in its boutique's repository, with its status.

I explain it step by step in [how I automated my sales process with Claude](/en/blog/automated-sales-process-with-claude/).

## What rules did I give it?

Some parts of Notion are read-only. The proposal archive, for example, is something Claude consults as a reference but never modifies.

Another rule came from a process change. I used to load each deal into HubSpot with a form. Now Claude creates it directly, but first it checks whether there's already an open deal for that client and, if it finds one, asks me before creating another. That way deals don't get duplicated.

The other important rule separates what's internal from what the client sees. The page shared with a client is always a subpage of the project's internal page, and the internal estimate sheet stays at the top of the internal page, never on the client's. That way costs and team notes don't get mixed up with what gets sent.

## And HubSpot?

They live side by side. HubSpot holds the deal: the stage, the amount and who owns it. Notion holds the context: what the client said, what we proposed and why. Claude writes in both, and each step of the process updates the deal without me loading it by hand.

The same system works for other things too. The [case studies we're putting together](/en/blog/case-studies-when-your-work-isnt-visible/) follow the same path: an interview recorded in Granola, a file organized by Claude and a repository in Notion.

## Where to start?

If you're bringing AI into your sales process, my advice is to first organize where the information lives and with what structure, and think about prompts afterwards.

If you want to see how I have it set up on the inside, it's in [Behind the process](/en/#detras). And if you're working on the same thing, [get in touch](/en/#contacto) and we can compare how each of us organizes it.
