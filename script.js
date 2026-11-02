const sections = [
  {
    name: "Experience",
    items: [
      {
        label: "Associate Software Engineer @ Hexaware",
        title: "Associate Software Engineer",
        organization: "Hexaware Technologies · Odido Netherlands",
        dates: "February 2024 — March 2025",
        location: "Chennai, Tamil Nadu",
        intro:
          "Supported broadband and internet provisioning for the Odido Netherlands telecom project as part of the Access Provisioning sub-team within Network Service Delivery.",
        highlights: [
          "Executed service provisioning workflows and handled day-to-day requests for broadband and internet services.",
          "Routed and fulfilled requests in Clarify and Versa Tracker while working to defined service-level targets.",
          "Monitored work-in-progress orders and used PuTTY for remote server checks and configuration verification.",
          "Followed standard operating procedures to maintain accurate provisioning data and reduce order fallouts and backlog.",
          "Completed three months of Infrastructure Management Services training before joining the live project.",
          "Gave hands-on knowledge transfer to new joiners and maintained a daily production report in Excel.",
        ],
        tags: ["Telecom", "Service delivery", "SLA management", "Clarify", "Versa Tracker", "PuTTY"],
      },
      {
        label: "ServiceNow Developer Trainee",
        title: "ServiceNow Developer Trainee",
        organization: "Technical upskilling & implementation · Self-directed",
        dates: "March 2025 — Present",
        location: "Remote",
        intro:
          "Building practical ServiceNow skills through hands-on work in a Personal Developer Instance, with a focus on ITSM and request workflows.",
        highlights: [
          "Developing familiarity with ServiceNow ITSM architecture, platform administration, and core workflows.",
          "Configuring a Personal Developer Instance to build, test, and automate IT catalog request lifecycles.",
          "Writing server-side Business Rules and client-side Client Scripts in JavaScript for data validation and ticket routing.",
          "Exploring Flow Designer and Service Catalog patterns for maintainable request experiences.",
        ],
        tags: ["ServiceNow", "ITSM", "JavaScript", "Business Rules", "Client Scripts", "Flow Designer"],
      },
    ],
  },
  {
    name: "Education",
    items: [
      {
        label: "Master of Business Administration",
        title: "Master of Business Administration",
        organization: "ISBM",
        dates: "2024 — 2026",
        location: "Gariyaband, Chhattisgarh",
        intro:
          "Completed a Master of Business Administration with a specialization in Human Resources (HR).",
        highlights: ["MBA specialization: Human Resources (HR)."],
        tags: ["Human Resources (HR)", "MBA", "Completed 2026"],
      },
      {
        label: "Bachelor of Computer Applications",
        title: "Bachelor of Computer Applications",
        organization: "Aditya Degree College",
        dates: "2020 — 2023",
        location: "Rajahmundry, Andhra Pradesh",
        intro:
          "Completed an undergraduate degree in computer applications, building a foundation in software and computing.",
        highlights: ["Undergraduate degree: Bachelor of Computer Applications."],
        tags: ["Computer applications", "2020–2023"],
      },
    ],
  },
  {
    name: "Skills",
    items: [
      {
        label: "ITSM fundamentals",
        title: "ITSM fundamentals",
        intro: "Working knowledge of IT service management concepts and workflows, built through hands-on ServiceNow practice.",
        highlights: ["ITSM architecture and core workflows", "Service catalog and request lifecycles", "Platform administration basics"],
        tags: ["ITSM architecture and core workflows", "Service catalog and request lifecycles", "Platform administration basics"],
      },
      {
        label: "Telecom service delivery",
        title: "Telecom service delivery",
        intro: "Hands-on experience supporting broadband and internet provisioning on the Odido Netherlands project.",
        highlights: ["Broadband provisioning and network service delivery", "Routing and fulfilling requests to defined service levels", "Monitoring work-in-progress orders"],
        tags: ["Broadband provisioning", "network service delivery", "defined service levels"],
      },
      {
        label: "SLA and queue management",
        title: "SLA and queue management",
        intro: "Worked to defined service-level targets in a queue-driven environment.",
        highlights: ["Queue management and request fulfilment", "SLA compliance", "Reducing order fallouts and backlog by following procedures"],
        tags: ["Queue management", "request fulfilment", "SLA compliance"],
      },
      {
        label: "Troubleshooting and SOPs",
        title: "Troubleshooting and SOPs",
        intro: "Followed standard operating procedures and verified configurations to keep provisioning data accurate.",
        highlights: ["Standard operating procedures", "Remote server checks and configuration verification", "Troubleshooting provisioning issues"],
        tags: ["standard operating procedures", "configuration verification", "Troubleshooting provisioning issues"],
      },
      {
        label: "Collaboration and knowledge transfer",
        title: "Collaboration and knowledge transfer",
        intro: "Worked across teams and helped new joiners get up to speed.",
        highlights: ["Collaborated with other Network Service Delivery teams", "Gave hands-on knowledge transfer to new joiners", "Kept a daily production report"],
        tags: ["Network Service Delivery teams", "knowledge transfer to new joiners", "daily production report"],
      },
    ],
  },
  {
    name: "Tools",
    items: [
      {
        label: "ServiceNow (PDI)",
        title: "ServiceNow (PDI)",
        icon: "servicenow",
        about: "ServiceNow is a cloud platform for IT service management and workflow automation. A Personal Developer Instance (PDI) is a free sandbox for building and testing on the platform.",
        usage: ["Set up and configured my own PDI to build and test IT catalog request lifecycles.", "Used it as the base for my Business Rules, Client Scripts, Flow Designer and ATF practice."],
        tags: ["ServiceNow", "ITSM", "PDI"],
      },
      {
        label: "Flow Designer",
        title: "Flow Designer",
        icon: "flow",
        about: "ServiceNow's low-code tool for building automations from triggers, actions and conditions.",
        usage: ["Explored Flow Designer to automate request handling in my PDI."],
        tags: ["ServiceNow", "Automation"],
      },
      {
        label: "Business Rules",
        title: "Business Rules",
        icon: "rules",
        about: "Server-side scripts in ServiceNow that run when records are inserted, updated, queried or deleted.",
        usage: ["Wrote server-side Business Rules in JavaScript for data validation and ticket routing."],
        tags: ["ServiceNow", "JavaScript"],
      },
      {
        label: "Client Scripts",
        title: "Client Scripts",
        icon: "client",
        about: "Browser-side scripts in ServiceNow that run on forms, for example on load, on change or on submit.",
        usage: ["Wrote Client Scripts in JavaScript to validate form input."],
        tags: ["ServiceNow", "JavaScript"],
      },
      {
        label: "ATF (Automated Test Framework)",
        title: "ATF (Automated Test Framework)",
        icon: "atf",
        about: "ServiceNow's built-in framework for creating and running automated tests of configurations and workflows.",
        usage: ["Used ATF in my PDI to test request automation."],
        tags: ["ServiceNow", "Testing"],
      },
      {
        label: "JavaScript",
        title: "JavaScript",
        icon: "javascript",
        about: "A widely used programming language. ServiceNow uses it for both client-side and server-side scripting.",
        usage: ["The language I've used for all my ServiceNow scripting: Business Rules, Client Scripts, validation and routing logic."],
        tags: ["JavaScript", "Scripting"],
      },
      {
        label: "Excel",
        title: "Excel",
        icon: "excel",
        about: "Spreadsheet software for organizing, calculating and reporting data.",
        usage: ["Kept a daily production report at Hexaware and worked with operational data."],
        tags: ["Excel", "Reporting"],
      },
      {
        label: "Clarify",
        title: "Clarify",
        icon: "clarify",
        about: "A CRM and case-tracking system used in telecom service operations.",
        usage: ["Used it to route and fulfil provisioning requests on the Odido Netherlands project."],
        tags: ["Telecom", "Ticketing"],
      },
      {
        label: "Versa Tracker",
        title: "Versa Tracker",
        icon: "versa",
        about: "A request-tracking tool used on the Odido project to manage and route service orders.",
        usage: ["Used it alongside Clarify to route requests and track orders to their service-level targets."],
        tags: ["Telecom", "Order tracking"],
      },
      {
        label: "PuTTY",
        title: "PuTTY",
        icon: "putty",
        about: "A free SSH and Telnet client for Windows used to connect to remote servers and network devices.",
        usage: ["Used it for remote server checks and configuration verification on provisioning work."],
        tags: ["SSH", "Remote access"],
      },
      {
        label: "Windows CLI / CMD",
        title: "Windows CLI / CMD",
        icon: "cli",
        about: "The Windows command-line interface for running commands and scripts.",
        usage: ["Used it for everyday checks and troubleshooting."],
        tags: ["CLI", "Troubleshooting"],
      },
    ],
  },
  {
    name: "Hobbies and interests",
    items: [
      {
        label: "My PC setup",
        title: "My PC setup",
        intro: "The rig I use for gaming and tinkering with local AI models.",
        highlights: [
          "Intel Core Ultra 7 265K",
          "NVIDIA GeForce RTX 5070 Ti",
          "16 GB DDR5 RAM",
          "2 TB Gen3 NVMe",
          "LG UltraGear 240 Hz 1080p",
          "Menel Nia 87 keyboard",
          "VXE R1 mouse (NearLink)",
        ],
      },
    ],
  },
];

const navigation = document.querySelector("#section-navigation");
const content = document.querySelector("#content");
const mainScroll = document.querySelector("#main-scroll");
const homeButton = document.querySelector(".home-button");
const homeGroup = document.querySelector(".home-group");
let activeSection = 0;
let activeItem = 0;

function makeElement(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text !== undefined) element.textContent = text;
  return element;
}

function addList(parent, items) {
  const list = makeElement("ul");
  items.forEach((text) => list.append(makeElement("li", "", text)));
  parent.append(list);
}

function addTags(parent, tags) {
  const list = makeElement("div", "tag-list");
  list.setAttribute("aria-label", "Related skills");
  tags.forEach((tag) => list.append(makeElement("span", "tag", tag)));
  parent.append(list);
}

const TOOL_ICONS = {
  servicenow: '<path d="M12 3 3 8l9 5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/>',
  flow: '<rect x="3" y="4" width="6" height="6" rx="1"/><rect x="15" y="14" width="6" height="6" rx="1"/><path d="M9 7h6a3 3 0 0 1 3 3v4"/>',
  rules: '<rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M7 17h.01"/>',
  client: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="m10 12-2 2.5 2 2.5M14 12l2 2.5-2 2.5"/>',
  atf: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 3 3 5-6"/>',
  javascript: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M10.5 8v6.5a1.5 1.5 0 0 1-1.5 1.5H8"/><path d="M17.5 9.2c-.2-.8-.9-1.2-1.7-1.2-1 0-1.6.6-1.6 1.3 0 1.9 3.5 1 3.5 3.1 0 .9-.8 1.6-1.9 1.6-.9 0-1.6-.4-1.9-1.2"/>',
  excel: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16"/>',
  clarify: '<path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z"/><path d="M14 7v2M14 11v2M14 15v2"/>',
  versa: '<circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="6" r="2.5"/><path d="M8.5 18H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h5.5"/>',
  putty: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3 3-3 3M12 15h5"/>',
  cli: '<path d="m5 7 6 5-6 5"/><path d="M13 18h6"/>',
};

function createToolIcon(iconName, className) {
  const icon = makeElement("span", className);
  icon.setAttribute("aria-hidden", "true");
  const paths = TOOL_ICONS[iconName];
  if (paths) {
    icon.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
      'stroke-linecap="round" stroke-linejoin="round" focusable="false">' + paths + "</svg>";
  } else {
    icon.classList.add("is-monogram");
    icon.textContent = String(iconName || "?").slice(0, 1).toUpperCase();
  }
  return icon;
}

function buildNavigation() {
  sections.forEach((section, sectionIndex) => {
    const group = makeElement("section", "nav-group");
    const title = makeElement("h2", "group-title", section.name);
    const count = makeElement("span", "group-meta");
    const list = makeElement("div", "item-list");
    group.dataset.section = String(sectionIndex);
    count.setAttribute("aria-label", `Item count in ${section.name}`);
    group.append(title, list, count);

    section.items.forEach((item, itemIndex) => {
      const button = makeElement("button", "item-button");
      button.type = "button";
      button.dataset.section = String(sectionIndex + 1);
      button.dataset.item = String(itemIndex);
      if (section.name === "Tools") {
        button.append(createToolIcon(item.icon, "nav-tool-icon"));
      }
      button.append(makeElement("span", "item-label", item.label));
      button.addEventListener("click", () => select(sectionIndex + 1, itemIndex, true));
      list.append(button);
    });

    navigation.append(group);
  });
}

let lastVerseIndex = -1;

function pickVerseIndex() {
  if (gitaVerses.length < 2) return 0;
  let index;
  do {
    index = Math.floor(Math.random() * gitaVerses.length);
  } while (index === lastVerseIndex);
  lastVerseIndex = index;
  return index;
}

function createVerseCard() {
  if (typeof gitaVerses === "undefined" || !gitaVerses.length) return null;

  const card = makeElement("button", "verse-card");
  card.type = "button";
  card.title = "Click for another verse";

  const icon = makeElement("span", "verse-icon");
  icon.setAttribute("aria-hidden", "true");
  icon.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" ' +
    'stroke-linecap="round" stroke-linejoin="round" focusable="false">' +
    '<path d="M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 .5 1 1 1.5 2 1.5C11 7 11 5 12 3z"/></svg>';

  const text = makeElement("span", "verse-text");
  const ref = makeElement("span", "verse-ref");

  function showVerse() {
    const verse = gitaVerses[pickVerseIndex()];
    text.textContent = verse.text;
    ref.textContent = verse.ref;
    card.setAttribute("aria-label", `${verse.text} ${verse.ref}. Click for another verse.`);
    card.classList.remove("is-changing");
    void card.offsetWidth;
    card.classList.add("is-changing");
  }

  showVerse();
  card.addEventListener("click", showVerse);
  card.append(icon, text, ref);
  return card;
}

function renderHome() {
  const page = makeElement("article", "page home-page");
  const hero = makeElement("header", "hero");
  const mark = makeElement("p", "hero-mark");
  mark.setAttribute("aria-hidden", "true");
  mark.append(document.createTextNode("VISHNU"));
  mark.append(makeElement("span", "", "."));
  hero.append(
    mark,
    makeElement("p", "eyebrow", "ServiceNow developer · Rajahmundry, India"),
    makeElement("h1", "", "Vishnu Vedesh Reddy Yeruva"),
    makeElement("p", "hero-lede", "Former associate software engineer, now building ServiceNow ITSM skills."),
  );

  const copy = makeElement("div", "intro-copy");
  const first = makeElement("p");
  first.append(
    document.createTextNode("I have a "),
    makeElement("span", "accent", "computer applications"),
    document.createTextNode(" background and hands-on experience supporting "),
    makeElement("span", "blue", "telecom service delivery"),
    document.createTextNode(" for broadband and internet provisioning."),
  );
  const second = makeElement("p");
  second.append(
    document.createTextNode("These days, I'm developing my skills in "),
    makeElement("span", "purple", "ServiceNow ITSM"),
    document.createTextNode(", building catalog workflows, configuring a Personal Developer Instance, and writing JavaScript scripts."),
  );
  const third = makeElement("p");
  third.append(
    document.createTextNode("I enjoy learning how technology and reliable operations come together to solve practical problems. With an MBA in HR completed, I'm now looking for ServiceNow developer and IT operations roles."),
  );
  copy.append(first, second, third);

  const contacts = makeElement("div", "contact-row");
  const email = makeElement("a", "", "Email me");
  email.href = "mailto:vedeshvishnu@gmail.com";
  const linkedin = makeElement("a", "", "LinkedIn");
  linkedin.href = "https://www.linkedin.com/in/vishnu-reddy-b92821401/";
  linkedin.target = "_blank";
  linkedin.rel = "noreferrer";
  const github = makeElement("a", "", "GitHub");
  github.href = "https://github.com/ReddyVishnuY";
  github.target = "_blank";
  github.rel = "noreferrer";
  const resume = makeElement("a", "", "View resume ↗");
  resume.href = "./cv.pdf";
  resume.target = "_blank";
  resume.rel = "noreferrer";
  contacts.append(email, linkedin, github, resume);

  const prompt = makeElement("p", "section-prompt");
  prompt.append(
    document.createTextNode("Explore my "),
    makeElement("span", "blue", "experience"),
    document.createTextNode(", "),
    makeElement("span", "accent", "education"),
    document.createTextNode(", "),
    makeElement("span", "purple", "skills"),
    document.createTextNode(", and "),
    makeElement("span", "blue", "tools"),
    document.createTextNode(" using the sections on the left."),
  );
  page.append(hero, copy, contacts, prompt);
  const verseCard = createVerseCard();
  if (verseCard) page.append(verseCard);
  content.replaceChildren(page);
}

function renderDetail(item, sectionName) {
  const page = makeElement("article", "page detail-page");
  const heading = makeElement("header", "detail-heading");
  heading.append(makeElement("p", "eyebrow", sectionName));
  const title = makeElement("h1", "", item.title);
  if (sectionName === "Tools") {
    const titleRow = makeElement("div", "detail-title-row");
    titleRow.append(createToolIcon(item.icon, "tool-detail-icon"), title);
    heading.append(titleRow);
  } else {
    heading.append(title);
  }

  if (item.organization) heading.append(makeElement("h2", "", item.organization));
  const meta = [item.dates, item.location].filter(Boolean).join(" · ");
  if (meta) heading.append(makeElement("p", "meta", meta));

  const body = makeElement("div", "detail-body");
  if (sectionName === "Tools") {
    body.append(makeElement("h3", "", "What it is"));
    body.append(makeElement("p", "", item.about));
    body.append(makeElement("h3", "", "How I've used it"));
    addList(body, item.usage);
  } else if (item.intro) {
    body.append(makeElement("p", "", item.intro));
  }
  if (sectionName !== "Tools" && item.highlights?.length) {
    const highlightsHeading = sectionName === "Experience"
      ? "What I worked on"
      : sectionName === "Skills"
        ? "Where I've applied it"
        : "Highlights";
    body.append(makeElement("h3", "", highlightsHeading));
    addList(body, item.highlights);
  }
  if (item.tags?.length) addTags(body, item.tags);
  page.append(heading, body);
  content.replaceChildren(page);
}

function updateNavigation() {
  const isHome = activeSection === 0;
  homeGroup.classList.toggle("is-active", isHome);
  homeButton.setAttribute("aria-current", isHome ? "page" : "false");

  navigation.querySelectorAll(".nav-group").forEach((group, index) => {
    const sectionIndex = index + 1;
    const selected = activeSection === sectionIndex;
    group.classList.toggle("is-active", selected);
    group.querySelector(".group-meta").textContent =
      selected ? `${activeItem + 1} of ${sections[index].items.length}` : `${sections[index].items.length} items`;
    group.querySelectorAll(".item-button").forEach((button, itemIndex) => {
      const isCurrent = selected && activeItem === itemIndex;
      button.setAttribute("aria-current", isCurrent ? "true" : "false");
      if (isCurrent && !button.closest(".sidebar-scroll").contains(document.activeElement)) {
        button.scrollIntoView({ block: "nearest" });
      }
    });
  });
}

function select(sectionIndex, itemIndex = 0, focusHeading = false) {
  activeSection = sectionIndex;
  activeItem = itemIndex;
  if (activeSection === 0) {
    renderHome();
  } else {
    const section = sections[activeSection - 1];
    renderDetail(section.items[activeItem], section.name);
  }
  updateNavigation();
  mainScroll.scrollTop = 0;
  if (focusHeading) {
    const heading = content.querySelector("h1");
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
  }
}

function moveSection(direction) {
  const next = (activeSection + direction + sections.length + 1) % (sections.length + 1);
  select(next, 0, true);
}

function moveItem(direction) {
  if (activeSection === 0) return;
  const items = sections[activeSection - 1].items;
  const next = (activeItem + direction + items.length) % items.length;
  select(activeSection, next, true);
}

homeButton.addEventListener("click", () => select(0, 0, true));
buildNavigation();
select(0);

document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey) return;
  const target = event.target;
  if (target instanceof HTMLElement && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))) return;

  if (event.key === "ArrowRight") {
    event.preventDefault();
    moveSection(1);
  } else if (event.key === "ArrowLeft") {
    event.preventDefault();
    moveSection(-1);
  } else if (event.key === "ArrowDown" && mainScroll.contains(document.activeElement)) {
    event.preventDefault();
    mainScroll.scrollBy({ top: 40 });
  } else if (event.key === "ArrowUp" && mainScroll.contains(document.activeElement)) {
    event.preventDefault();
    mainScroll.scrollBy({ top: -40 });
  } else if (event.key === "ArrowDown" && !(target instanceof HTMLAnchorElement)) {
    event.preventDefault();
    moveItem(1);
  } else if (event.key === "ArrowUp" && !(target instanceof HTMLAnchorElement)) {
    event.preventDefault();
    moveItem(-1);
  } else if (/^[1-6]$/.test(event.key)) {
    event.preventDefault();
    select(Number(event.key) - 1, 0, true);
  } else if (event.key === "PageDown" || event.key === "PageUp") {
    event.preventDefault();
    mainScroll.scrollBy({ top: (event.key === "PageDown" ? 1 : -1) * mainScroll.clientHeight * 0.8, behavior: "smooth" });
  }
});
