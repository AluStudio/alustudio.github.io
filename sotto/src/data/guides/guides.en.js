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
//              { type: "image", src, phone?, width, height, alt, caption? }
//                an illustration in public/guides/, the same file in every
//                language (checked by scripts/guide-images.mjs)
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
    title: "How to Find Out Someone's Ring Size Without Asking Them",
    summary: "Borrow a ring they wear on the same finger and measure it, or trace it, compare it with your own ring, measure while they sleep or ask a friend. Chart included.",
    content: [
      { type: "p", text: "The most accurate way to find someone's ring size without asking is to borrow a ring they already wear on the same finger of the same hand and have it measured. If you cannot take a ring away, you can trace it on paper, compare it with a ring of your own, measure their finger while they sleep, or ask someone close to them." },
      { type: "h2", text: "Borrow a ring they already wear" },
      { type: "p", text: "A ring that already fits the finger is the best reference you can get. Make sure it is one they wear on the finger you are buying for, not any ring from their jewelry box." },
      {
        type: "steps",
        items: [
          "Pick a ring they wear on the exact finger and hand you are buying for, and wait until they take it off.",
          "Take it to a jeweler, who can size it on a ring mandrel in moments.",
          "Or, at home, lay it on a ruler and measure its inside diameter in millimeters across the widest inner opening, excluding the metal band, then look it up in the chart below.",
          "Put the ring back in the exact spot where you found it, facing the same way round.",
        ],
      },
      { type: "h2", text: "Trace it or take an impression" },
      { type: "p", text: "If you cannot take the ring out of the house, record its size on the spot and put it right back. Lay the ring flat on paper and trace the inside edge with a sharp pencil, holding the pencil upright so the circle matches the inner opening, or press the ring halfway into a bar of soap and wipe the metal clean afterward." },
      { type: "p", text: "Later, measure the inside diameter of the pencil circle or soap impression in millimeters and match it to the chart below. Both methods are less precise than measuring the ring itself, because pencil thickness or soft soap edges can shift the reading slightly." },
      { type: "h2", text: "Compare it with a ring of your own" },
      { type: "p", text: "If you only have their ring for a moment and no ruler nearby, use your own fingers or rings as the reference:" },
      {
        type: "list",
        items: [
          "Slide their ring onto one of your own fingers and note the exact spot where it stops. If it fits a finger whose ring size you already know, their size is close to that; if not, wrap a paper strip around that spot later and measure it.",
          "Take a ring of your own whose size you know and lay it flat on top of theirs. If the inside edges line up, it is the same size; if not, you can see which one is bigger and by roughly how much.",
          "For a casual approach that does not involve sneaking into a jewelry box, hand them a ring of your own to try on as if for fun, and watch which finger it fits and how far it slides.",
        ],
      },
      { type: "p", text: "Comparing against your own ring or finger is rough, but it narrows the range to a size or two." },
      { type: "h2", text: "Measure their finger while they sleep" },
      { type: "p", text: "If they do not wear rings on that finger, you can measure the finger itself while they sleep. Wrap a thin strip of paper snugly around the base of the finger, mark the spot where the paper overlaps, and measure the length to the mark with a millimeter ruler. That length is the circumference, which the chart below lists alongside inside diameter." },
      { type: "p", text: "Use paper, not string: string stretches when pulled and gives a larger reading than the finger is. Measure twice to be sure, and work gently, because the main risk with this method is that they wake up." },
      { type: "h2", text: "Ask someone close to them" },
      { type: "p", text: "Asking a friend, sister, brother or parent is the only method that needs neither their jewelry nor their sleeping hand. A family member or close friend may simply know the size from a past gift or from borrowing jewelry." },
      { type: "p", text: "If they do not know it offhand, a friend can suggest trying on rings together while out shopping. When the idea comes from a friend browsing for themselves, trying on a few bands and mentioning the size feels natural." },
      { type: "h2", text: "Match the finger and the hand" },
      { type: "p", text: "A ring borrowed from a different finger will be a different size, and even the same finger rarely matches across both hands. The same finger on the dominant hand is usually about half a size larger than on the other hand." },
      { type: "p", text: "Customs also differ by country. In Germany, Poland and Russia, wedding rings are traditionally worn on the right hand; in Brazil, the engagement ring is worn on the right hand and moves to the left at the wedding; in many other countries, such as the US, the UK, France and Italy, rings go on the left hand. Always measure the exact finger on the hand where the new ring will be worn." },
      { type: "h2", text: "Getting a reading you can trust" },
      { type: "p", text: "Fingers change size with the time of day and the weather: they are larger in the afternoon and evening and in heat, and smaller in the cold. Finger shape matters as well, because a knuckle can be wider than the base of the finger, and the ring still has to pass over it." },
      { type: "note", text: "When a reading falls between two sizes, choose the larger one: a slightly loose ring can still be worn and is easier to resize than a tight one." },
      { type: "h2", text: "If you still cannot find out" },
      { type: "p", text: "If none of these methods work, choose a gift that needs no size, such as a necklace, bracelet or earrings, or pick an adjustable open ring." },
      { type: "p", text: "When you are buying a ring for a proposal and have to guess the size, ask the store about resizing before you buy, so the ring can be adjusted after they say yes. Avoid eternity bands with stones set all the way around, as they are hard or impossible to resize." },
      { type: "h2", text: "Ring size conversion chart" },
      {
        type: "table",
        caption: "Circumference is the reference. Each system shows its size nearest to that circumference, the same conversion Sotto uses.",
        head: ["US / Canada", "Circumference (mm)", "Inside diameter (mm)", "UK / Australia", "EU", "Japan", "China"],
        rows: RING_SIZE_ROWS,
      },
      { type: "h2", text: "Keep the size where you will find it years later" },
      { type: "p", text: "Once you know their ring size, write it down somewhere you will still find it years later, not on a scrap of paper that gets lost after the gift is opened." },
      { type: "p", text: "Sotto is a private people notes app for iPhone and Android with one page per person for notes, birthdays, gift ideas and 23 size and measurement fields, including a ring size for each of the ten fingers. It converts ring sizes between seven systems (US, EU, UK, Japanese, Chinese, Hong Kong and Swiss) and keeps everything on your phone, with no account and no ads. The app can be locked with your phone's own screen lock." },
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
      { type: "p", text: "Couples work the same way. Stanford sociologist Michael Rosenfeld and colleagues analyzed data on heterosexual couples in the United States, published in 2019: in 2017, 39% had met online, 27% in a bar or restaurant, and 20% through friends (a couple can fall into more than one category). About 9 in 10 couples who met online were strangers before. More couples meet online now, but most still start out as strangers." },
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
      { type: "p", text: "Those few lines also give you something to ask next time you meet: \"You were getting ready to move. How did it go?\" A question like that is part of the dozens of hours that turn an acquaintance into a friend." },
      { type: "note", text: "What you write is your own memory, not a file on them. Write only what you wouldn't mind them reading." },
      { type: "h2", text: "How Sotto helps" },
      { type: "p", text: "Sotto is a people notes app with a page for each person. Its built-in How We Met field is made for the story of how you met, and the date can go in the Anniversary field: turn on its reminder and Sotto tells you 7 days ahead, at 9 in the morning. To go deeper with someone new, try the 33 questions in the Knowing each other category, adapted from psychologist Arthur Aron's 1997 study on how strangers become close." },
      { type: "p", text: "Everything stays on your phone, behind your phone's own screen lock if you want. Sotto is free for up to 5 people, on iPhone and Android." },
    ],
    related: ["remember-details-about-people", "gift-log"],
  },
  {
    slug: "why-babies-are-one-at-birth",
    title: "Why Is a Baby One Year Old at Birth? Because Mom Loved You a Year Before the World Did",
    summary: "In traditional East Asian age, a baby is one at birth. The saying behind it: Mom had you to herself for a year first. For moms keeping their baby's firsts.",
    content: [
      { type: "p", text: "\"Why are we already one year old when we are born? Because Mom had you all to herself for a year before anyone else did, so she will always have loved you one year longer than the rest of the world.\" In Taiwan, China and Korea, the traditional way of counting age makes a baby one year old on the day they are born, and this is what people tell children about it. That extra year is the time only Mom was there for." },
      { type: "p", text: "If you are a mom, or have a little one on the way, you know that year is real." },
      { type: "h2", text: "The year only you knew them" },
      { type: "image", src: "guides/mom-year-kick.webp", phone: "guides/mom-year-kick-1080w.webp", width: 2160, height: 1449, alt: "A pregnant felt mama bear sits on a quilt by a sunny window, both paws on her belly, laughing as she feels her baby kick." },
      { type: "p", text: "The first time your baby moved, you were lying in bed one night scrolling on your phone. It felt like a little fish blowing a bubble inside you. You froze, then laughed out loud, and the person lying next to you felt nothing at all." },
      { type: "p", text: "Soon you knew what time of day they liked to turn somersaults, that their hiccups came in small, steady taps, and that something sweet would wake them right up. You talked to them quietly on the bus and sang to them in the bath. You picked out name after name and crossed them off one by one. Nobody had met your baby yet, and you already knew them well." },
      { type: "h2", text: "After they were born, you were still the first to know" },
      { type: "image", src: "guides/mom-year-smile.webp", phone: "guides/mom-year-smile-1080w.webp", width: 2160, height: 1449, alt: "A felt mama bear lies on a rug nose to nose with her newborn cub, who gives her a big first smile." },
      { type: "p", text: "Their first smile was for you. You found their first tooth when the spoon clinked against it at mealtime. Their first walking shoes were 12.5 cm long; they took two steps, sat down with a bump and giggled at themselves. The day they called an apple an \"appy\", you laughed so hard in the kitchen that you had to bend over." },
      { type: "p", text: "People started saying how fast they were growing. Most of those very first firsts happened with only you there." },
      { type: "h2", text: "They will not remember any of this" },
      { type: "image", src: "guides/mom-year-steps.webp", phone: "guides/mom-year-steps-1080w.webp", width: 2160, height: 1449, alt: "A tiny felt bear cub in new walking shoes has tumbled onto its bottom and laughs with paws up, while the mama bear kneels nearby with open arms." },
      { type: "p", text: "Your child won't remember how long their first shoes were, or what their first word was, or that once they would only fall asleep holding two of your fingers. They were too little when it happened." },
      { type: "p", text: "You are the only one who can remember it for them. But busy days wear your memory down too, and a moment you are sure you will never forget may be a blur in a few years." },
      { type: "h2", text: "Write it down while you still remember" },
      {
        type: "steps",
        items: [
          "Write it the same day. Two or three lines is enough: what happened, and the face they made.",
          "Use their exact words. \"Appy\" means far more than \"can name fruit now\".",
          "Add a photo, and note their height and shoe size while you are at it. Years later you will see that they grew faster than you thought.",
          "You don't have to write every day. Only the things you want them to know one day.",
        ],
      },
      { type: "image", src: "guides/mom-year-story.webp", phone: "guides/mom-year-story-1080w.webp", width: 2160, height: 1449, alt: "A felt mama bear on a sofa reads from a small notebook to the cub on her lap, who laughs with its head thrown back; tiny knitted baby shoes sit beside them." },
      { type: "p", text: "One day they will ask what they were like when they were little, and you can read it to them, one note at a time. Tell them that before the world ever met them, you had already loved them for a year." },
      { type: "h2", text: "Keep a page for your baby in Sotto" },
      { type: "p", text: "Sotto is a notes app for the people in your life, with a page for each person. Make a page for your baby: their birthday, height and shoe size go in fields, and the firsts go in notes. Each note can hold photos or videos and keeps the date you wrote it." },
      { type: "p", text: "Everything stays on your phone, with no account and no ads. The free version holds up to 5 people with 5 notes each, and one one-time purchase removes the limits. Sotto is on iPhone and Android." },
    ],
    related: ["remember-details-about-people"],
  },
];
