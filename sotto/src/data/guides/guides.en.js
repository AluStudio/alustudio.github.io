// Sotto guides — English content pack. Every language's pack lists the same
// slugs in the same order (checked by scripts/copy-spa-pages.js); zh-Hans is
// generated from zh-Hant (scripts/gen-zh-hans.mjs).
//
// Article: { slug, title, summary, content, related }
//   title    — the page h1 and <title>, phrased the way people search in that language
//   summary  — index-card text and the page's meta description (≤ 160 characters)
//   content  — blocks, opening with a paragraph that answers the title directly:
//              { type: "p" | "h2" | "note", text }
//              { type: "list" | "steps", items: [text] }
//              { type: "table", caption?, head: [text], rows: [[text]] }
//   related  — slugs of other guides
//
// Claims about Sotto must match the app's code (AGENTS.md §Product Repos).
// Shared, language-free data (the ring size table) lives in its own module so
// a pack never pulls in another language's articles.

import { RING_SIZE_ROWS } from "./ring-sizes.js";

export const articles = [
  {
    slug: "remember-details-about-people",
    title: "How to Remember Details About People You Care About",
    summary: "Write details down the same day, keep one page per person, and read it before you meet. A simple way to remember what matters to the people you love.",
    content: [
      { type: "p", text: "The reliable way to remember details about people is to stop relying on memory: write each detail down the same day you hear it, keep everything about one person in one place, and read that page before you see them. Small facts you hear once fade within days; a note does not." },
      { type: "p", text: "This guide covers what is worth writing down, a capture habit that takes about a minute, and how to use your notes without it feeling like homework." },
      { type: "h2", text: "Why small details slip away" },
      { type: "p", text: "A friend's coffee order or the name of their sister's dog comes up once, in passing, while you are busy following the rest of the conversation. Nothing repeats it, so nothing reinforces it. Memory research going back to Hermann Ebbinghaus in the 1880s shows the same pattern: material you never revisit fades fastest in the first day or two." },
      { type: "p", text: "The fix is not a better memory. It is a place to put the detail before it fades." },
      { type: "h2", text: "What is worth writing down" },
      {
        type: "list",
        items: [
          "Preferences: their coffee order, favorite food and flowers, what they avoid, allergies.",
          "Sizes: clothing, shoes, ring size — the details you need for gifts and can't easily ask about.",
          "Dates: birthdays, anniversaries, the day a new job starts, a parent's surgery.",
          "People in their life: partner, children, pets, the coworker they keep mentioning.",
          "Plans and worries: the trip they're saving for, what is stressing them out, what they're proud of.",
          "Things they said they want: a book, a gadget, a place they'd love to visit.",
        ],
      },
      { type: "p", text: "You don't need all of it for everyone. Two or three solid details per person beat a full profile you never open." },
      { type: "h2", text: "A one-minute capture habit" },
      {
        type: "steps",
        items: [
          "Write it the same day. After a call or a dinner, take a minute to note what you learned while it is fresh.",
          "Keep one page per person. A detail filed under the person is easy to find; a detail buried in a chat thread is not.",
          "Use their words. \"Wants to learn pottery\" is more useful later than \"hobbies: crafts\".",
          "Date anything that will change, like a job search or a move, so you know how current it is.",
        ],
      },
      { type: "h2", text: "Read your notes before you meet" },
      { type: "p", text: "Notes only help if you read them. Glance at someone's page a few minutes before you see them or call them. Ask how the interview went, or remember that they don't drink coffee after noon. People notice when you remember, and it comes across as care, not as a system." },
      { type: "note", text: "Keep it kind. Write down what helps you show up for someone, not things you would be embarrassed for them to read." },
      { type: "h2", text: "Paper, a notes app, or a people notes app?" },
      { type: "p", text: "Any system you will actually use works. A notebook is private but hard to search. A general notes app works until your notes about twenty people blur into one long list. Your contacts app has a notes field, but it is cramped and shared with every app that can read your contacts." },
      { type: "p", text: "A people notes app organizes everything by person, with fields made for the details above — sizes, dates and preferences — so you don't have to invent a structure." },
      { type: "h2", text: "How Sotto helps" },
      { type: "p", text: "Sotto is a people notes app built for exactly this. Each person gets a page with a photo, a short bio, notes, and any of 130 built-in fields, from birthdays and allergies to shoe and ring sizes. Turn on a reminder for a birthday and Sotto tells you a week ahead. When you're not sure what to ask, a catalog of 323 conversation questions can start the next talk." },
      { type: "p", text: "Everything stays on your phone, behind your phone's own screen lock if you want. Sotto is free for up to 5 people, on iPhone and Android." },
    ],
    related: ["find-gift-sizes-without-asking", "gift-log", "how-many-people-do-you-meet-in-a-lifetime"],
  },
  {
    slug: "find-gift-sizes-without-asking",
    title: "How to Find Out Someone's Size for a Gift Without Asking",
    summary: "Read the size off clothes and shoes they already wear, ask someone close to them, or create a natural moment — then save it so you only find out once.",
    content: [
      { type: "p", text: "The easiest way to find out someone's size without asking is to read it off something they already own: the tag inside a shirt they wear often, the inside of their shoes, or a ring they wear on the right finger. If you can't get to their things, ask someone who can, or bring sizes up naturally while shopping together. Then write the size down so you never have to find it out again." },
      { type: "h2", text: "Clothing: read the label of something that fits" },
      {
        type: "list",
        items: [
          "Choose an item they wear often and that clearly fits — not the oversized sweater they sleep in.",
          "Check the care label at the neck, side seam or waistband, and note the brand: sizes vary between brands.",
          "For trousers, many labels give waist and inseam, for example 32/32.",
          "No label? Lay the item flat, measure straight across the chest or waist, and double it.",
        ],
      },
      { type: "h2", text: "Shoes: look inside the tongue or on the insole" },
      { type: "p", text: "Most shoes print the size inside the tongue or on the insole, often in several systems at once — US, UK, EU and centimeters. Write down all of them, along with the brand. Sneakers and dress shoes from the same person can differ by half a size." },
      { type: "h2", text: "Rings: borrow, trace or ask an accomplice" },
      { type: "p", text: "Rings are the hardest, because a wrong size means a resize. The quickest options are to borrow a ring they wear on the same finger and have it measured, or to trace its inside on paper. Our guide to finding a ring size secretly covers each method and includes a conversion chart." },
      { type: "h2", text: "Ask someone who knows" },
      { type: "p", text: "A partner, sibling, parent or close friend often knows the size, or can check without raising suspicion. Offer to return the favor when their turn comes." },
      { type: "h2", text: "Create a natural moment" },
      {
        type: "list",
        items: [
          "Shop together and notice which size they pick up.",
          "Offer to order something for them: \"What size should I get?\" sounds like an errand, not a surprise.",
          "Bring up an upcoming season: \"Do you need new boots this winter? What size are you?\"",
        ],
      },
      { type: "h2", text: "When you can't confirm the size" },
      { type: "p", text: "Choose gifts where fit matters less — a scarf, a bag, jewelry other than a ring — or include a gift receipt so an exchange is easy." },
      { type: "h2", text: "Write it down once" },
      { type: "p", text: "Sizes rarely change, so finding out once can last for years — if you record it. Sotto has 23 size and measurement fields, including body measurements, shoe size and a ring size for every finger, plus custom fields for anything else, such as a shirt size. It converts shoe sizes between US, EU, UK, Japanese and centimeter sizes, and ring sizes between seven systems, so a size read off a European label still makes sense in an American store." },
    ],
    related: ["find-ring-size-secretly", "gift-log", "remember-details-about-people"],
  },
  {
    slug: "find-ring-size-secretly",
    title: "How to Find Out Someone's Ring Size Secretly",
    summary: "Borrow a ring they wear on the same finger, trace it, measure while they sleep, or ask a friend. How each method works, plus a ring size conversion chart.",
    content: [
      { type: "p", text: "The most accurate secret method is to borrow a ring they already wear on the same finger of the same hand, and have a jeweler measure it or measure its inside diameter yourself. If you can't take the ring away, trace its inside on paper or press it into soap, or ask a close friend or family member to find out for you." },
      { type: "h2", text: "Method 1: Borrow a ring they already wear" },
      {
        type: "steps",
        items: [
          "Pick a ring worn on the finger you are buying for. Fingers on the dominant hand are usually slightly larger.",
          "Take it to a jeweler, who can size it in moments on a ring mandrel.",
          "Or measure its inside diameter in millimeters and look it up in the chart below.",
          "Put it back exactly where you found it.",
        ],
      },
      { type: "h2", text: "Method 2: Trace or press the ring" },
      { type: "p", text: "If you only have the ring for a minute, lay it on paper and trace the inside edge with a sharp pencil, or press it halfway into a bar of soap to keep an impression. Measure the inside diameter later. This is less precise than measuring the ring itself, so if you land between two sizes, choose the larger one." },
      { type: "h2", text: "Method 3: Measure the finger while they sleep" },
      { type: "p", text: "Wrap a thin strip of paper around the base of the finger, mark where it overlaps, and measure the length: that is the circumference. It is risky — they may wake up — and string stretches, so use paper and measure twice." },
      { type: "h2", text: "Method 4: Ask an accomplice" },
      { type: "p", text: "A friend can suggest trying on rings during a shopping trip, and a sibling or parent may simply know. This is the only method that doesn't require touching their jewelry." },
      { type: "h2", text: "Method 5: Compare against your own fingers" },
      { type: "p", text: "Slide their ring onto your own fingers and note where it stops. Then measure that spot on your finger. It is rough, but it narrows the range." },
      { type: "h2", text: "Ring size conversion chart" },
      {
        type: "table",
        caption: "Circumference is the reference. Each system shows its size nearest to that circumference, the same conversion Sotto uses.",
        head: ["US / Canada", "Circumference (mm)", "Inside diameter (mm)", "UK / Australia", "EU", "Japan", "China"],
        rows: RING_SIZE_ROWS,
      },
      { type: "note", text: "Fingers swell in heat and in the evening, and a knuckle can be wider than the base of the finger. If you are unsure, size up: a ring that is slightly large can still be worn and is easier to resize." },
      { type: "h2", text: "Save every finger's size in Sotto" },
      { type: "p", text: "Once you know it, keep it. Sotto stores a ring size for each of the ten fingers, left and right, thumb to pinky, and converts between US, EU, UK, Japanese, Chinese, Hong Kong and Swiss sizes. The size stays private on your phone, ready when the occasion comes." },
    ],
    related: ["find-gift-sizes-without-asking", "gift-log"],
  },
  {
    slug: "gift-log",
    title: "How to Keep a Gift Log and Never Repeat a Gift",
    summary: "Record what you gave, when and for which occasion, and add gift ideas as you hear them. A simple gift log ends repeats and last-minute panic.",
    content: [
      { type: "p", text: "A gift log is a simple record of what you gave each person, when, and for which occasion, plus a running list of gift ideas you pick up during the year. Keep one per person, add an entry right after each occasion, and check it before you shop. That alone prevents repeated gifts and turns last-minute panic into a short list." },
      { type: "h2", text: "What to record for each gift" },
      {
        type: "list",
        items: [
          "The gift itself, with the brand or color if it matters.",
          "The occasion and the date: a birthday, a holiday, a thank-you.",
          "How it landed: used every day, exchanged, or a polite smile.",
          "The price, if you like to keep gifts balanced between people.",
        ],
      },
      { type: "h2", text: "Keep a gift ideas list too" },
      { type: "p", text: "The best ideas show up months before the occasion: a passing \"I've always wanted to try…\", something of theirs that broke, a book they're curious about. Write it under their name the same day. When the birthday comes, you choose from ideas that came from them." },
      { type: "h2", text: "Where to keep your gift log" },
      {
        type: "list",
        items: [
          "A spreadsheet suits one big occasion, like a wedding, but gets unwieldy across many people and years.",
          "A notes app is quick, but ideas and past gifts for different people end up mixed together.",
          "A page per person keeps past gifts, ideas and sizes together — exactly what you need when you shop.",
        ],
      },
      { type: "h2", text: "Habits that make a gift log work" },
      {
        type: "steps",
        items: [
          "Log the gift the day you give it, while you still remember the reaction.",
          "Note the size next to any clothing gift, so the next one fits.",
          "Record gifts you receive too, so you can thank people and return the kindness.",
          "Set a reminder a week before birthdays, so the log helps while there is still time to shop.",
        ],
      },
      { type: "h2", text: "Using Sotto as a gift log" },
      { type: "p", text: "Sotto has no separate gift-tracking screen; each person's page does the job. Write a note for each gift you give, with the occasion and date in the first line, and use the Gift Ideas and Wishlist fields for ideas as they come up. Sizes sit on the same page, and a reminder for a birthday or anniversary arrives 7 days ahead, at 9 in the morning. Everything stays on your phone." },
    ],
    related: ["find-gift-sizes-without-asking", "remember-details-about-people"],
  },
  {
    slug: "how-many-people-do-you-meet-in-a-lifetime",
    title: "How Many People Do You Meet in a Lifetime? The Real Numbers Behind \"1 in 8 Billion\"",
    summary: "The viral \"80,000 people in a lifetime\" is a thought experiment. Research puts the people you know by name near 611, and a close friend takes 200+ hours.",
    content: [
      { type: "p", text: "No study has ever counted how many people one person meets in a lifetime. The widely shared figure of 80,000 is a thought experiment: meet three new people every day for 73 years. Research that did survey people estimates that the average American knows about 611 people by name (median 472). Out of 8 billion, that is about one person in every 13 million." },
      { type: "p", text: "The question came back into fashion with \"1 in 8 Billion\", a browser life simulator that an independent developer in South Korea built with AI in early October 2026. Using statistics from the United Nations, the World Health Organization and the World Bank, it makes you one of the 8 billion people at random and plays out that whole life. It took off on Threads and spread from Korea to Japan and Taiwan within weeks. Many players finished a life and started wondering who they have met in their real one." },
      { type: "h2", text: "Where \"80,000 people\" and \"8 million people\" come from" },
      { type: "p", text: "A set of numbers circulates on Chinese-language social media: in a lifetime you will pass 8,263,563 people, greet 39,778, get to know 3,619, and grow close to 275. It usually travels with a short video, and no study behind it can be found." },
      { type: "p", text: "The 80,000 figure has a clearer origin. Max Roser, founder of Our World in Data, imagined someone who talks with three new people every single day for 73 years: they would get to know about 80,000 people. He used the number to make the opposite point: even someone that outgoing knows only 0.001% of the world." },
      { type: "h2", text: "The numbers research has measured" },
      {
        type: "table",
        head: ["Number", "What it measures", "Source"],
        rows: [
          ["8 billion", "World population, which the United Nations projected to reach on 15 November 2022", "United Nations"],
          ["611 people", "How many people the average American knows by name; the median is 472", "McCormick, Salganik & Zheng, 2010"],
          ["About 150", "How many stable relationships one person can maintain", "Dunbar, 1992; a 2021 study argued the uncertainty is too wide to fix any single number"],
          ["50 / 90 / 200 hours", "Total time together to go from acquaintance to casual friend, friend, and close friend", "Hall, 2018"],
        ],
      },
      { type: "p", text: "The 611 comes from a US survey, and no other country has a study of the same scale, but the order of magnitude holds: out of 8 billion people, you know a few hundred by name, and the people you spend 200 hours with will always be few." },
      { type: "h2", text: "The people who matter are often met by chance" },
      { type: "p", text: "In 1950, psychologist Leon Festinger and his colleagues studied Westgate West, married student housing at MIT. Residents took apartments in the order they became free, so nobody chose their neighbors. On the same floor, next-door neighbors named each other among the people they saw most about 41% of the time; two doors apart it fell to about 22%, and at opposite ends of the hall to about 10%. Who became friends depended less on personality than on who ran into whom every day." },
      { type: "p", text: "Couples work the same way. Stanford sociologist Michael Rosenfeld and colleagues analyzed data on heterosexual couples in the United States, published in 2019: in 2017, 39% had met online, 27% in a bar or restaurant, and 20% through friends (a couple can fall into more than one category). About 9 in 10 couples who met online were strangers before. The channel changed; most meetings still start between strangers." },
      { type: "p", text: "Meeting is only the start, though. By Hall's estimate, becoming close friends takes more than 200 hours together. The people you met by chance became important because you kept seeing them afterwards." },
      { type: "h2", text: "Why you forget how you met" },
      { type: "p", text: "The day you first meet someone, you don't know they will matter, so it is an ordinary day: you don't make a point of remembering where you were, who introduced you, or what you talked about. Years later, when they are a close friend or your partner and you want to tell the story, most of the details are gone." },
      { type: "p", text: "That isn't a bad memory. Nobody knew the moment was worth remembering while it was happening." },
      { type: "h2", text: "Write down how you met" },
      {
        type: "steps",
        items: [
          "Write two or three lines the day you meet: where, who introduced you, and what got you talking.",
          "Add the date. Years from now, it may be the day you celebrate.",
          "Note one thing they told you first: their work, something on their mind, or a line that stuck with you.",
          "You don't need to do this for everyone. Only for the people you'd like to talk to again.",
        ],
      },
      { type: "p", text: "Those few lines are more than a memory. Next time you meet, asking \"You were getting ready to move — how did it go?\" is one of the dozens of hours that turn an acquaintance into a friend." },
      { type: "note", text: "What you write is your own memory, not a file on them. Write only what you wouldn't mind them reading." },
      { type: "h2", text: "How Sotto helps" },
      { type: "p", text: "Sotto is a people notes app with a page for each person. Its built-in How We Met field is made for the story of how you met, and the date can go in the Anniversary field: turn on its reminder and Sotto tells you 7 days ahead, at 9 in the morning. To go deeper with someone new, the 33 questions in the Knowing each other category are adapted from psychologist Arthur Aron's 1997 study on how strangers become close." },
      { type: "p", text: "Everything stays on your phone, behind your phone's own screen lock if you want. Sotto is free for up to 5 people, on iPhone and Android." },
    ],
    related: ["remember-details-about-people", "gift-log"],
  },
];
