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
// Claims about Sotto must match the app's code (AGENTS.md §Product Repos). The
// ring size table mirrors sotto-ios UnitConversionService.ringSizeTable: each
// system shows the size nearest to the US size's circumference, as the app
// converts it.

export const RING_SIZE_ROWS = [
  ["4", "46.8", "14.9", "H½", "47", "7", "8"],
  ["5", "49.3", "15.7", "J½", "49", "9", "10"],
  ["6", "51.9", "16.5", "L½", "52", "11", "12"],
  ["7", "54.4", "17.3", "N½", "54", "14", "14"],
  ["8", "57.0", "18.1", "P½", "57", "16", "17"],
  ["9", "59.5", "18.9", "R½", "59", "18", "19"],
  ["10", "62.1", "19.8", "T½", "62", "20", "22"],
  ["11", "64.6", "20.6", "V½", "64", "23", "23"],
];

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
    related: ["find-gift-sizes-without-asking", "gift-log"],
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
];
