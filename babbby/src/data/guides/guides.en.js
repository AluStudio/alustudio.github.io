// Babbby guides — English content pack, the source every translated language
// is generated from (`npm run l10n -- babbby apply <code>`). Every language's
// pack lists the same slugs in the same order (checked by
// scripts/copy-spa-pages.js); zh-Hant is written by the owner and zh-Hans is
// generated from it (scripts/gen-zh-hans.mjs).
//
// Article: { slug, title, summary, content, related }
//   title    — the page h1 and <title>, phrased the way parents search in that language
//   summary  — index-card text and the page's meta description (≤ 160 characters)
//   content  — blocks, opening with a paragraph that answers the title directly:
//              { type: "p" | "h2" | "note", text }
//              { type: "list" | "steps", items: [text] }
//              { type: "image", src, phone?, width, height, alt, caption? }
//                an illustration in public/guides/, the same file in every
//                language; phone is the 1080w file, required when src is
//                wider (checked by scripts/guide-images.mjs)
//   related  — slugs of other guides
//
// Guides are written for every market at once: a fact that differs by country
// (screen-time guidance, for one) names the countries instead of assuming one.
// Claims about Babbby must match the app's code (AGENTS.md §Product Repos);
// activity names are the app's own, from its activity library.

export const articles = [
  {
    slug: "screen-free-play-by-age",
    title: "Screen-Free Play at Home: What to Do With Your Baby or Toddler, by Age (0–6)",
    summary: "Cut screen time by keeping a few 5- to 15-minute games ready with things you already have: play ideas for ages 0–6, and how to keep going when tired.",
    content: [
      { type: "p", text: "If you want your child to spend less time on screens, the most practical step is to keep a few 5- to 15-minute games ready that start with things already in your home: a few cups and a box of blocks, or a roll of tape and a cup of water, is enough. When you are tired, the hardest part is coming up with something to play on the spot; with an age-matched activity ready to go, a screen does not have to fill that gap." },
      { type: "h2", text: "Screen-Free Play Ideas at Home, by Age (0 to 6 Years)" },
      { type: "p", text: "0 to 6 months: In the first six months, face-to-face expressions, vocal tone, and gentle floor play build the earliest back-and-forth exchanges through eye contact and cooing." },
      {
        type: "list",
        items: [
          "Tummy Time Head Lifts: Place your baby on a soft mat with a toy in front of them to encourage head lifts; start with 1 minute each time, build toward 15 to 20 minutes total a day, and stop if your baby looks uncomfortable.",
          "Narrate Your Actions: Describe what you are doing in short phrases during diaper changes, feeding, and dressing, speaking a little slower with lively intonation so your baby can respond to your voice.",
          "Copy My Face: Watch your baby closely and copy whatever facial expression they make, pausing so they notice your response and try another expression.",
        ],
      },
      { type: "p", text: "6 to 12 months: Pairing physical movement and everyday gestures with playful sounds encourages babies to babble, look back at you, and take social turns." },
      {
        type: "list",
        items: [
          "Cruising Along the Sofa: Help your baby pull up to stand along the sofa and place a toy at the other end to encourage side steps while you stay close for support.",
          "Animal Sound Play: Look at animal pictures together and make the matching animal sounds, pausing to let your baby vocalize or copy the sound back.",
          "Practice Bye-Bye Waves: Wave your hand and say \"bye-bye\" whenever someone leaves the room or home so your baby connects the spoken word with the gesture.",
        ],
      },
      { type: "p", text: "12 to 18 months: Simple cause-and-effect games create shared anticipation, giving young toddlers natural moments to point, laugh, and trade sounds with you." },
      {
        type: "list",
        items: [
          "Stack and Crash: Stack blocks into a small tower together and let your toddler knock them down, since toppling the blocks is the fun part that keeps the game going.",
          "Three-Cup Ball Hunt: Hide a small ball under one of three upside-down cups and slide them slowly while your toddler watches, then invite them to lift the cup and find it.",
          "Finger Painting: Set out non-toxic washable paint and a large sheet of paper for finger art, using old clothes or the bathroom floor so cleanup stays quick.",
        ],
      },
      { type: "p", text: "18 to 24 months: Imitating real household tasks lets older toddlers practice hand control while you talk back and forth about colors, actions, and quantities." },
      {
        type: "list",
        items: [
          "Pouring Practice: Give your toddler a small pitcher and a cup to practice pouring water in the bathroom or bath, where spills do not matter.",
          "Color Sorting: Invite your child to sort colored blocks into matching bowls, starting with two colors and naming each color together as they drop it in.",
          "Tear-and-Paste Art: Spread glue on a sheet of paper first, then let your toddler tear colored paper into pieces and press them onto it.",
        ],
      },
      { type: "p", text: "2 to 3 years: Hands-on crafts and counting games give two-year-olds concrete objects to name, count aloud, and discuss with you step by step." },
      {
        type: "list",
        items: [
          "Bead Necklace: Thread medium beads onto a string or shoelace together; stay close the entire time and keep beads out of your child's mouth.",
          "Count to 10: Line up blocks or small snacks and count from 1 to 10 together, pointing to each item one by one as you say the number.",
          "Paper Plate Masks: Draw the outline of a face or animal on a paper plate first, then let your child color it before taking turns wearing the masks.",
        ],
      },
      { type: "note", text: "Supervision note: Always stay within arm's reach when babies or young children play with small objects such as beads, small balls, blocks, paper scraps, or water, and keep small items out of their mouth." },
      { type: "p", text: "3 to 4 years: Rule-based movement, guessing games, and small self-care tasks encourage preschoolers to ask questions, follow clues, and swap roles with you." },
      {
        type: "list",
        items: [
          "Balance Beam Walk: Put a strip of tape on the floor and invite your child to walk along the line with their arms stretched out like an airplane.",
          "Riddle Guessing Game: Give simple clues such as \"Long trunk, big ears: what is it?\" for your child to guess, then swap roles so they make up clues for you.",
          "Pour Water: Let your child pour their own drink from a small pitcher at snack or mealtime, aiming for half full so the cup is easy to manage.",
        ],
      },
      { type: "p", text: "4 to 6 years: Early math games and multi-step creative projects invite older children to explain their reasoning and collaborate with you on a shared story." },
      {
        type: "list",
        items: [
          "Add and Subtract: Practice simple sums within 5 using snacks on a plate, where adding a piece shows addition and eating one counts as subtraction.",
          "Clay Stop-Motion: Shape clay characters and take photos while moving them a tiny bit each time, then flip through the photos together to watch your scene move.",
        ],
      },
      { type: "p", text: "Play at home does not replace a professional assessment. If you suspect your child is slow to talk or move, ask a pediatrician or a child development clinic." },
      { type: "h2", text: "Why Screen-Free Plans Fade by Day Three and How to Make Them Stick" },
      { type: "p", text: "Many parents know they want to cut back on screens, yet by day three they run out of ideas at the exact hour when meals need cooking and energy is low. When late-afternoon fatigue sets in, four small habits make screen-free play much easier to sustain." },
      {
        type: "steps",
        items: [
          "Put the next activity out before the screen request comes: Set three cups and a ball on the table or press a tape line onto the floor ahead of your busiest hour so your child spots something ready to play.",
          "Let 5 minutes count: A focused 5- to 15-minute game between household tasks is enough to reset a toddler's mood and build back-and-forth talk without exhausting you.",
          "Rotate developmental areas across the day: Alternate active movement like Balance Beam Walk with calm fine-motor work like Pouring Practice and a talking game like Riddle Guessing Game so neither of you gets bored.",
          "When you do use a screen, choose slow, age-appropriate content and watch and talk together: Co-viewing and talking about what happens on screen turns viewing into a shared conversation.",
        ],
      },
      { type: "h2", text: "Until What Age Do Countries Recommend No Screens?" },
      { type: "p", text: "Recommendations differ by country: the WHO, Taiwan, the United States and Japan say no screens under age 2, France and Germany say none before age 3, and Spain says none before age 6. From age 2, the WHO, Taiwan and the United States recommend no more than 1 hour a day. Follow the pediatric advice where you live." },
      { type: "h2", text: "Keeping Daily Play Ideas Ready With Babbby" },
      { type: "p", text: "If the hardest part is deciding what to play next, Babbby suggests up to 6 activities a day for your child's age, with the materials to get ready and roughly how many minutes each takes; the ideas above all come from its activities. It is an iPhone and iPad app for parents, so your child never has to touch the screen." },
    ],
    related: ["choosing-parenting-apps"],
  },
  {
    slug: "choosing-parenting-apps",
    title: "How to Choose a Parenting App That Makes Life Easier",
    summary: "Choose a parenting app for one current need, check trial terms and data access early, and test it on a tired evening with what you already have at home.",
    content: [
      { type: "p", text: "The most practical way to choose a parenting app is to look for one that saves daily effort without creating another chore. Start by picking the single job you want help with right now, whether that is caregiver handoffs, daily play ideas, or organizing photos, then check the trial rules, data access, and how the app works with ordinary household items on a tired evening. If a tool asks you to keep up with its schedule, buy extra supplies, or feel guilty over a missed log, you do not need to keep it." },
      { type: "h2", text: "Start with the One Thing You Need Help with Right Now" },
      { type: "p", text: "Separate the main jobs parenting apps do so you are not trying to solve everything at once. When partners, grandparents, or a caregiver take turns during the day, a shared routine log shows the next adult when the last feed, nap, or diaper change happened. When the hardest part of the afternoon is deciding what to do indoors, play suggestions and activity guides are more useful. When your camera roll is full, a photo journal focuses on turning scattered pictures into a tidy record." },
      { type: "p", text: "Few families need every tool at once, and needs change as a child grows. A shared feeding and sleep tracker saves repeated messages when several adults split daytime care, yet if one person handles most of the routine or your child has outgrown round-the-clock logging, you may only want half an hour of play ideas before dinner. Choosing the single problem that slows you down today keeps your phone from becoming extra work." },
      { type: "h2", text: "Check Trial Terms, Pricing, and Data Access Early" },
      { type: "p", text: "Parenting apps often hold family notes and photos over time, so inspect the payment model and data rules before entering much information. Parents often compare subscriptions with one-time payments, and each can make sense depending on the service: a subscription can be reasonable when your family regularly uses cloud storage, multi-person syncing, or ongoing updates, while a one-time payment does not by itself guarantee that an app fits your routine. In the first few days of a trial, check three details." },
      {
        type: "list",
        items: [
          "Trial terms and billing: Check how long the trial lasts, whether it leads to a subscription or a one-time payment, whether renewal is automatic, when charging begins, and how to cancel before you fill in a detailed profile.",
          "Access after stopping payment: Check what remains accessible after a trial or subscription ends, including whether everyday features lock immediately or whether you can still browse existing entries.",
          "Keeping your photos and records: Before adding many photos or notes, check whether you can still view past memories or export your photos and records if you stop paying.",
        ],
      },
      { type: "h2", text: "Test Play Suggestions with Household Items and Tired-Evening Energy" },
      { type: "p", text: "If you are trying an app for play ideas or activities, test it on a regular weekday evening when your energy is already low. Suggestions that look appealing while you are rested only help in everyday life if you can still start them when you are tired and only have ordinary household items nearby." },
      { type: "p", text: "Check the materials list first to see whether everyday items like paper cups, spoons, or a towel are enough to begin. If an app regularly asks for craft kits or specialty supplies, count the shopping, preparation, and storage space as part of the workload. Next, check whether the activity lists the materials, estimated time, clear steps, and purpose in one place so you can start right away without searching online for extra instructions." },
      { type: "h2", text: "Notice Whether Logging, Notifications, and Sharing Add Work" },
      { type: "p", text: "After a week of use, notice whether the app lightens your day or makes you feel behind. Streaks, badges, and progress charts help some parents, but if they leave you worrying about an unbroken chain or feeling guilty over missed entries, the logging is adding work. Using an app is always optional, and keeping a record is not a test of good parenting. Opening an app only for ideas, skipping checkboxes on busy days, or deleting a pressuring tool are all practical choices." },
      { type: "p", text: "Check notification settings and sharing rules early too. If an app sends frequent alerts or messages, see whether you can turn notifications off so it stays quiet until you open it. For family sharing, separate two questions: whether one purchase covers family members, and whether a child's record syncs across devices. If you share photos with relatives in the app, check whether you can control viewing access and comment permissions." },
      { type: "h2", text: "If You Only Want Simple Daily Play Ideas: Babbby" },
      { type: "p", text: "If you simply want ready-made play ideas when you open your phone, Babbby is an iPhone and iPad app for parents, not a screen for children. Each day it suggests up to six activities for your child's age, each with the materials, a tip, and roughly how many minutes it takes. They are options, not six tasks to finish: swap or adjust them, and mark one done when you get to it." },
      { type: "p", text: "You can keep up to three photos of an activity you played and look back on them in weekly and monthly photo reviews. Babbby is a free download with a 14-day full-access trial, then a one-time unlock with no subscription." },
    ],
    related: ["screen-free-play-by-age"],
  },
];
