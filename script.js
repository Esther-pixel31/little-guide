
const chapters = [
  {
    emoji: "🌷",
    title: "Getting to Know Me",
    description: "A little about the girl behind the screen.",
    body: [
      "I'm an introvert, and being comfortable with someone doesn't always mean I'll suddenly have a thousand things to say out loud. Sometimes my brain is busy having a whole conversation while my mouth is just sitting there. 😂",
      "Texting helps because I can gather my thoughts and explain myself properly. If I take a moment to find the words, it doesn't mean I don't want to talk to you.",
      "There's more to me than what comes through on a screen. Some sides of me take time to come out, especially when something matters to me."
    ],
    reminder: "Give me a little time to get comfortable, and you'll get to know more of me."
  },
  {
    emoji: "🤎",
    title: "Something Different This Time",
    description: "I'm learning how to build something deeper.",
    body: [
      "I've been in situationships before, and those have caused me have trauma from it, but this is my first actual relationship experience. So yes, there are things I'm learning as I go.",
      "I don't expect either of us to have everything figured out. I want us to communicate, ask questions, learn each other's habits, and give each other room to grow.",
      "I want something that feels mutual. We can support each other, but neither of us should have to carry the entire connection alone. I want us both to make an effort because we genuinely want to."
    ],
    reminder: "We don't have to be perfect at this. We just have to be willing to learn together."
  },
  {
    emoji: "💌",
    title: "How to Reach Me",
    description: "A message can mean a lot to me.",
    body: [
      "I'm more comfortable with texts than calls, especially when I'm still gathering my thoughts. That doesn't mean I never want to hear your voice; it just means texting is usually my easier starting point.",
      "I'm generally available for calls between 10 AM and 10 PM. After 10 PM, DND is automatically switched on, so a late reply isn't automatically a sign that something is wrong.",
      "I don't need minute-by-minute updates or instant replies. I appreciate communication that feels thoughtful and consistent, even when we're both busy."
    ],
    reminder: "It's not about talking every second. It's about knowing we're both making room for each other."
  },
  {
    emoji: "⏳",
    title: "My Timing Can Be Complicated",
    description: "Different hours don't always mean different feelings.",
    body: [
      "My schedule can be a little unusual. I usually work around noon to 5 PM, and my editing hours can stretch late into the night or even early morning.",
      "Sometimes I might reply briefly, get distracted, or read a message and forget to come back to it. I know that isn't always ideal, and I'm working on being more intentional with communication.",
      "If I'm quiet, please don't immediately assume I've lost interest. And if something needs a proper conversation, we can tell each other and find a time that works for both of us."
    ],
    reminder: "Let's make communication fit our real lives without making each other guess."
  },
  {
    emoji: "🦋",
    title: "How to Make Me Flutter",
    description: "A little affection goes a long way.",
    body: [
      "I like a man who lets me know that he wants to talk to me. Tell me you've missed me. Tell me you're excited to hear from me. Let me feel that I'm wanted instead of having to guess.",
      "I don't need dramatic speeches every day. Sometimes it's the little things: a thoughtful message, a genuine compliment, an unexpected voice note, or you remembering something I mentioned.",
      "I'm not asking you to perform or pretend to be someone you're not. I just appreciate someone who isn't afraid to express what he feels."
    ],
    reminder: "A little intentional affection can make an ordinary day feel special."
  },
  {
    emoji: "🎁",
    title: "The Things That Make Me Feel Loved",
    description: "It's the thought behind the little things.",
    body: [
      "Words of affirmation, acts of service, and thoughtful gifts are some of the things that make me feel cared for. It doesn't have to be expensive or elaborate. The thought behind it matters.",
      "I love when someone remembers a detail I shared, checks in about something important to me, or does a small thing because they thought it would make me happy.",
      "There's a difference between being remembered and being loved. I can be both, but I can't feel loved if I'm not remembered. To me, remembering is one of the ways love becomes visible: it shows that someone pays attention and carries the little details with them."
    ],
    reminder: "You don't have to buy me things. Thoughtfulness is what makes the difference."
  },
  {
    emoji: "🪴",
    title: "Trust Takes Time",
    description: "Some parts of me open up gradually.",
    body: [
      "Trust matters to me, especially when we're rebuilding a connection. I might not show every side of myself immediately, even when I care about someone.",
      "I want us to be able to say what we are comfortable with, respect each other's boundaries, and let closeness grow naturally. I don't want either of us to feel that we have to rush to prove our feelings.",
      "As I feel safer and more comfortable, you'll probably see a more confident, playful side of me. I'd like us to keep discovering each other without pressure."
    ],
    reminder: "Patience isn't a lack of interest. Sometimes it's how trust gets the room to grow."
  },
  {
    emoji: "🌧️",
    title: "When I Go Quiet",
    description: "Sometimes I'm processing more than I'm saying.",
    body: [
      "Sometimes something disappoints me, and instead of explaining it straight away, I go quiet. I might say I'm okay because I'm still trying to understand what I'm feeling.",
      "I can replay things in my head, wonder whether I misunderstood something, or decide to sleep on it. I don't expect you to read my mind, and I know I need to communicate rather than leave you guessing.",
      "A gentle question can help me open up. Sometimes I need advice, but sometimes I just want to vent and feel heard before we start looking for solutions.",
      "I want us both to feel safe enough to say when something is bothering us. You don't have to hide your difficult days from me, either."
    ],
    reminder: "Let's ask, listen, and explain instead of expecting each other to guess."
  },
  {
    emoji: "🎮",
    title: "The Call of Duty Effect",
    description: "I might act differently when it's you.",
    body: [
      "You already know me through Call of Duty, but playing with you can still make me nervous sometimes. Not because I'm trying to impress everyone in the lobby, but because it's you. 😂",
      "I might play badly, overthink something, or become a little awkward. Please allow me my moments.",
      "I like that gaming is one of the ways we connected. I hope we can keep enjoying it without needing every match or every conversation to be perfect."
    ],
    reminder: "If I miss every shot, please remember that my feelings are not a measure of my aim. 😂"
  },
  {
    emoji: "🫶",
    title: "Let Me Know the Real You",
    description: "I want to know what's going on beneath the surface, too.",
    body: [
      "I know some things about you already, but I also know there may be parts of your story that you haven't shared yet. That's okay. You don't owe me every detail before you're ready.",
      "If something is weighing on you, you can tell me. I might not always have the perfect answer, but I can listen and try to understand.",
      "Sometimes I'll need you to listen to me without immediately fixing things, and I want to offer you that same space. We can be honest about what we need from each other.",
      "I want this to be a connection where both of us get to be known, not just one person doing all the explaining."
    ],
    reminder: "You can take your time opening up. I want us both to have room to be real."
  },
  {
    emoji: "😉",
    title: "My Affectionate Side",
    description: "Playful, flirty, and Sexy.",
    body: [
      "I can be shy, but that doesn't mean I don't have a playful or flirty side. You don't have to hide your personality around me, either. I want us to be able to joke, flirt, and enjoy that side of our connection.",
      "Sometimes I might match your energy, and other times I might be tired, shy, distracted, or simply not in that mood. Neither moment has to become a big deal.",
      "I want affection and closeness to feel comfortable for both of us. We can be honest about what we like, what we're ready for, and when we'd rather change the subject."
    ],
    reminder: "Imagine me actually having the confidence to say everything that crosses my mind. I will be the pornstar in this case."
  },
  {
    emoji: "❤️",
    title: "The Mama & Babygirl Effect",
    description: "Some little things are cute because they're ours.",
    body: [
      "Mama and Babygirl are some of the words that turn me on, and I like the warmth and playfulness they bring to our conversations.",
      "Sometimes the smallest things become special because of the person they're connected to. A nickname, an inside joke, or a phrase that makes you smile can become a tiny reminder of your connection.",
      "It's not about making everything serious. I like having room for the soft, silly, affectionate parts of getting to know each other."
    ],
    reminder: "This two make me wet in seconds"
  },
  {
    emoji: "🌍",
    title: "Distance Doesn't Mean Disinterest",
    description: "Life can get busy, but we can still stay connected.",
    body: [
      "There may be times when we're travelling, working, or dealing with things that take us away from our usual routine. I know life doesn't stop just because two people are getting to know each other.",
      "When I'm away for work, I might have less time than usual. I don't expect us to be available every second, and I want us both to enjoy our lives without feeling guilty about every busy moment.",
      "A small check-in, a thoughtful message, or a quick voice note can help us feel connected when we have time apart. If one of us needs space, a little communication helps the other person understand what's happening."
    ],
    reminder: "We don't have to be constantly available to be considerate of each other."
  },
  {
    emoji: "🤝",
    title: "What I Need & What I Offer",
    description: "I want something that goes both ways.",
    body: [
      "I want honesty, consistency, affection, communication, and effort that comes from both of us. I want to feel wanted, not like I'm the only one trying to keep a connection alive.",
      "In return, I want to offer care, patience, listening, affection, encouragement, and the willingness to understand you better. I know I'll make mistakes sometimes, too, and I want to be able to own them.",
      "I can support you as you work through your feelings, but I can't do that work for you. Just as you can't be responsible for all of mine. We can be there for each other while still taking responsibility for ourselves."
    ],
    reminder: "I don't need perfection. I want mutual effort and the willingness to keep showing up."
  },
  {
    emoji: "🗣️",
    title: "When Something Feels Wrong",
    description: "Please talk to me rather than shutting me out.",
    body: [
      "If you're upset, overwhelmed, or unsure what to say, you don't have to explain everything immediately. You can tell me that you're struggling and need some time.",
      "What matters to me is that we don't leave each other completely in the dark. Even a simple message saying you need some space can help me understand what's happening.",
      "I want us to be able to talk about difficult things without turning every disagreement into a fight. We can ask questions, hear each other out, apologise when necessary, and work out what comes next.",
      "I'm not asking you to tell me every private thought. I'm asking for enough communication that we can treat each other with care."
    ],
    reminder: "Space is okay. Communicating about that space makes it easier for both of us."
  },
  {
    emoji: "✨",
    title: "Please, Be CHALANT",
    description: "Let me see that you care. 😂❤️",
    body: [
      "I like a man who is expressive and intentional. I don't want to have to decode every message or guess whether he actually wants to talk to me.",
      "Be excited to hear from me when you feel excited. Tell me when you miss me. Ask me about my day. Remember the things I tell you. Let your actions match the care you say you have.",
      "Being chalant doesn't mean being clingy or available every second. It means not acting indifferent just to look cool. I like affection that feels genuine, balanced, and freely given.",
      "And of course, I want to give that same energy back. This is about both of us feeling wanted, not one person constantly proving themselves."
    ],
    reminder: "You don't have to play it cool with me. Genuine effort is attractive."
  }
];

const surprises = [
  "You have absolutely no business looking that good and then expecting my mind to stay innocent. 😏",
  "I'm shy, not innocent. Please don't confuse the two, handsome. 🤭",
  "If you could hear every thought I keep to myself, that confident little smile might disappear. 😂❤️",
  "Keep talking to me like that and watch me forget how to form a proper sentence.",
  "You really enjoy testing my self-control, don't you? Just wait until I start teasing you back. 😈",
  "I have a whole other side you haven't met yet. Unfortunately for you, she takes her time making an appearance. 🖤",
  "Sometimes I read your messages, smile at my screen, and wonder how you expect me to act normal afterward. 🙄😏",
  "You can keep being a distraction. I'll keep pretending you're not. We both know I'm lying. 😂",
  "Imagine me finally getting over my shyness around you. Yeah, you might want to prepare yourself. 🤭",
  "My silence does not mean my imagination is quiet, sir. Mind your business. ❤️"
];

const chapterGrid = document.getElementById("chapter-grid");
const dialog = document.getElementById("chapter-dialog");
const dialogContent = document.getElementById("dialog-content");
const closeDialogButton = document.getElementById("close-dialog");
const nextChapterButton = document.getElementById("next-chapter");
const surpriseButton = document.getElementById("surprise-button");
const surpriseResult = document.getElementById("surprise-result");
const startButton = document.getElementById("start-button");
const backToTopButton = document.getElementById("back-to-top");
const readingProgressFill = document.getElementById("reading-progress-fill");
const floatingHearts = document.getElementById("floating-hearts");

let currentChapterIndex = 0;
let lastSurpriseIndex = -1;

const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

function createChapterCards() {
  chapterGrid.innerHTML = "";

  chapters.forEach((chapter, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "chapter-card";
    card.style.animationDelay = `${Math.min(index * 45, 500)}ms`;
    card.setAttribute(
      "aria-label",
      `Open chapter ${index + 1}: ${chapter.title}`
    );

    const emoji = document.createElement("span");
    emoji.className = "chapter-emoji";
    emoji.setAttribute("aria-hidden", "true");
    emoji.textContent = chapter.emoji;

    const number = document.createElement("span");
    number.className = "chapter-number";
    number.textContent = `CHAPTER ${String(index + 1).padStart(2, "0")}`;

    const title = document.createElement("h3");
    title.textContent = chapter.title;

    const description = document.createElement("p");
    description.textContent = chapter.description;

    const openLabel = document.createElement("span");
    openLabel.className = "chapter-open";
    openLabel.textContent = "Open this little chapter ↗";

    card.append(emoji, number, title, description, openLabel);

    card.addEventListener("click", () => {
      openChapter(index);
      createHeartBurst();
    });

    chapterGrid.appendChild(card);
  });
}

function openChapter(index) {
  currentChapterIndex = index;

  const chapter = chapters[index];
  dialogContent.replaceChildren();

  const emoji = document.createElement("div");
  emoji.className = "dialog-emoji";
  emoji.setAttribute("aria-hidden", "true");
  emoji.textContent = chapter.emoji;

  const number = document.createElement("p");
  number.className = "dialog-number";
  number.textContent =
    `CHAPTER ${String(index + 1).padStart(2, "0")} OF ${chapters.length}`;

  const title = document.createElement("h2");
  title.id = "dialog-title";
  title.textContent = chapter.title;

  const description = document.createElement("p");
  description.className = "dialog-description";
  description.textContent = chapter.description;

  dialogContent.append(emoji, number, title, description);

  chapter.body.forEach((paragraphText) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = paragraphText;
    dialogContent.appendChild(paragraph);
  });

  const reminder = document.createElement("div");
  reminder.className = "dialog-reminder";
  reminder.textContent = `A little reminder: ${chapter.reminder}`;
  dialogContent.appendChild(reminder);

  nextChapterButton.textContent =
    index === chapters.length - 1
      ? "Back to the beginning of the chapters ↗"
      : "Read another chapter →";

  if (!dialog.open) {
    dialog.showModal();
  }
}

function closeChapter() {
  if (dialog.open) {
    dialog.close();
  }
}

function openNextChapter() {
  const nextIndex =
    currentChapterIndex === chapters.length - 1
      ? 0
      : currentChapterIndex + 1;

  openChapter(nextIndex);
}

function showSurprise() {
  let nextIndex = Math.floor(Math.random() * surprises.length);

  if (surprises.length > 1) {
    while (nextIndex === lastSurpriseIndex) {
      nextIndex = Math.floor(Math.random() * surprises.length);
    }
  }

  lastSurpriseIndex = nextIndex;
  surpriseResult.textContent = surprises[nextIndex];

  surpriseResult.classList.remove("pop");
  void surpriseResult.offsetWidth;
  surpriseResult.classList.add("pop");

  createHeartBurst();
}

function createHeartBurst() {
  if (reduceMotion || !floatingHearts) return;

  const symbols = ["♡", "♥", "✧"];
  const count = 8;

  for (let index = 0; index < count; index += 1) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = symbols[
      Math.floor(Math.random() * symbols.length)
    ];

    heart.style.left = `${25 + Math.random() * 50}%`;
    heart.style.bottom = `${8 + Math.random() * 12}%`;
    heart.style.fontSize = `${14 + Math.random() * 16}px`;
    heart.style.animationDelay = `${Math.random() * 0.35}s`;

    floatingHearts.appendChild(heart);

    heart.addEventListener("animationend", () => {
      heart.remove();
    }, { once: true });
  }
}



function updateReadingProgress() {
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress =
    scrollableHeight > 0
      ? (window.scrollY / scrollableHeight) * 100
      : 0;

  readingProgressFill.style.width = `${Math.min(100, Math.max(0, progress))}%`;
}

function setupRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");

  if (reduceMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          currentObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  revealElements.forEach((element) => observer.observe(element));
}

startButton.addEventListener("click", () => {
  document.getElementById("intro").scrollIntoView({
    behavior: reduceMotion ? "auto" : "smooth"
  });

  createHeartBurst();
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: reduceMotion ? "auto" : "smooth"
  });
});

surpriseButton.addEventListener("click", showSurprise);
closeDialogButton.addEventListener("click", closeChapter);
nextChapterButton.addEventListener("click", openNextChapter);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeChapter();
  }
});

dialog.addEventListener("close", () => {
  const previouslyFocused = document.activeElement;

  if (previouslyFocused && typeof previouslyFocused.focus === "function") {
    previouslyFocused.focus();
  }
});

window.addEventListener("scroll", updateReadingProgress, { passive: true });
window.addEventListener("resize", updateReadingProgress);

createChapterCards();
setupRevealAnimations();
updateReadingProgress();
