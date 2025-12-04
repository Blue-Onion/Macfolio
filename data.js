const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },

  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.jpg",
    canOpen: true,
  },
  {
    id: "arc",
    name: "Articles", // was "arc"
    icon: "arc.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.jpg",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.jpg",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.jpg",
    canOpen: true,
  },
  {
    id: "Archive",
    name: "Archive", // was "Trash"
    icon: "trash.jpg",
    canOpen: false,
  },
];

const achievements = [
  {
    id: 1,
    title: "Supernova Hackathon Semifinalist",
    date: "2025",
    description:
      "Built an AI-powered web solution under 24 hours during Supernova.",
    image: "/images/leetcode.png", // placeholder
    link: "https://certificate-link.com/supernova",
  },
  {
    id: 2,
    title: "HackCBS Semifinalist",
    date: "2024",
    description:
      "Participated in one of the largest student-run hackathons at Delhi University.",
    image: "/images/leetcode.png", // placeholder
    link: "https://certificate-link.com/hackcbs",
  },
  {
    id: 3,
    title: "LeetCode Competitive Programming",
    date: "2004 — Present",
    username: "blueonion",
    image: "/images/leetcode.png", // placeholder
    link: "https://leetcode.com/u/Blue_onion/",
  },
];

const techStack = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "GO"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TailwindCSS", "GSAP"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "REST API", "JWT"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    category: "Deployment",
    items: ["Docker", "CI/CD", "Vercel"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Postman", "Linux"],
  },
  {
    category: "Integrations",
    items: ["Clerk", "Resend", "Gemini AI"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/Blue-Onion",
  },
  {
    id: 2,
    text: "Instagram",
    icon: "/icons/insta.svg",
    bg: "#4bcb63",
    link: "https://www.instagram.com/adityasinghrawat54/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/Blue_Onion_3480",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/aditya-singh-rawat-0a7416326",
  },
];

const LIBRARY_LOCATION = {
  id: 1,
  type: "library",
  name: "Library",
  icon: "/icons/gicon1.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Sunset Beach",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpeg",
    },
    {
      id: 2,
      name: "Mountain Vista",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 right-20",
      imageUrl: "/images/Supernova.jpeg",
    },
    {
      id: 3,
      name: "City Lights",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-40",
      imageUrl: "/images/hackcbs2.jpeg",
    },
    {
      id: 4,
      name: "Forest Path",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-80",
      imageUrl: "/images/con.jpeg",
    },
  ],
};

const MEMORIES_LOCATION = {
  id: 2,
  type: "memories",
  name: "Memories",
  icon: "/icons/gicon2.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Summer 2024",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-5 left-10",
      imageUrl: "/images/Con.jpeg",
    },
    {
      id: 2,
      name: "Birthday Party",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/hackcbs2.jpeg",
    },
    {
      id: 3,
      name: "Graduation Day",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/man3.jpeg",
    },
    {
      id: 4,
      name: "Graduation Day",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/me.jpeg",
    },
  ],
};

const PLACES_LOCATION = {
  id: 3,
  type: "places",
  name: "Places",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Paris",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Supernova.jpeg",
    },
    {
      id: 2,
      name: "Tokyo",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-20 left-80",
      imageUrl: "/images/Sunset.jpeg",
    },
    {
      id: 3,
      name: "New York",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 right-20",
      imageUrl: "/images/Buildings.jpeg",
    },
    {
      id: 4,
      name: "Barcelona",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-60 left-40",
      imageUrl: "/images/Bird.jpeg",
    },
  ],
};



const FAVORITES_LOCATION = {
  id: 5,
  type: "favorites",
  name: "Favorites",
  icon: "/icons/gicon5.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Best Shot 1",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-5 left-5",
      imageUrl: "/images/CP.jpeg",
    },
    {
      id: 2,
      name: "Best Shot 2",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-20",
      imageUrl: "/images/diwali.jpeg",
    },
    {
      id: 4,
      name: "Best Shot 2",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-20",
      imageUrl: "/images/man3.jpeg",
    },
    {
      id: 3,
      name: "Best Shot 3",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-60",
      imageUrl: "/images/mac.jpeg",
    },
  ],
};

const photosLinks = {
  library: LIBRARY_LOCATION,
  memories: MEMORIES_LOCATION,
  places: PLACES_LOCATION,
  
  favorites: FAVORITES_LOCATION,
};

const gallery = [
  {
    id: 1,
    img: "/images/gal1.png",
  },
  {
    id: 2,
    img: "/images/gal2.png",
  },
  {
    id: 3,
    img: "/images/gal3.png",
  },
  {
    id: 4,
    img: "/images/gal4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  achievements,
  techStack,
  socials,
  photosLinks,
  gallery,
};

const WORK_LOCATION = {
  id: 100,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1 - FinGenie
    {
      id: 101,
      name: "FinGenie",
      icon: "/images/folder.jpg",
      kind: "folder",
      position: "top-6 left-8",
      windowPosition: "top-[8vh] left-[20vw]",
      children: [
        {
          id: 201,
          name: "FinGenie Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-7 left-12",
          description: [
            "FinGenie is a smart financial assistant built using Next.js and powered by Gemini AI.",
            "It helps users manage their money with real-time expense tracking and personalized AI insights.",
            "Includes budgeting, reporting, authentication, server actions, and beautiful chart visualizations.",
            "Built with Prisma, Tailwind, PostgreSQL and deployed globally using Vercel.",
          ],
        },
        {
          id: 202,
          name: "Live Website",
          icon: "/images/arc.png",
          kind: "file",
          fileType: "url",
          href: "https://fin-genie-five.vercel.app/",
          position: "top-60 right-[18%]",
        },
        {
          id: 203,
          name: "Github Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Blue-Onion/FinGenie",
          position: "top-29 right-[21%]",
        },
        {
          id: 204,
          name: "FinGenie.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-10 right-[60%]",
          imageUrl: "/images/fingenie.png",
        },
      ],
    },

    // ▶ Project 2 - MediCall
    {
      id: 102,
      name: "MediCall",
      icon: "/images/folder.jpg",
      kind: "folder",
      position: "top-[35vh] left-[15vw]",
      windowPosition: "top-[25vh] left-[45vw]",
      children: [
        {
          id: 210,
          name: "MediCall Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-7 left-12",
          description: [
            "MediCall is a full-stack doctor appointment and video consultation platform.",
            "Patients can book, cancel, and manage appointments with real-time status updates and a credit system.",
            "Built with Next.js, Clerk Auth, Prisma, Neon DB, and Vonage for secure video calls.",
            "Features doctor verification, responsive UI, and seamless server actions for performance.",
          ],
        },
        {
          id: 211,
          name: "Live Demo",
          icon: "/images/arc.png",
          kind: "file",
          fileType: "url",
          href: "https://medmeet-phi.vercel.app/",
          position: "top-60 right-[18%]",
        },
        {
          id: 212,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Blue-Onion/MediCall",
          position: "top-29 right-[21%]",
        },
        {
          id: 213,
          name: "MediCall.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-10 right-[60%]",
          imageUrl: "/images/medicall.png",
        },
      ],
    },

    // ▶ Project 3 - SensAI
    {
      id: 103,
      name: "SensAI",
      icon: "/images/folder.jpg",
      kind: "folder",
      position: "top-[10vh] left-[70vw]",
      windowPosition: "top-[15vh] left-[5vw]",
      children: [
        {
          id: 220,
          name: "SensAI Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-7 left-12",
          description: [
            "SensAI is an AI-powered virtual interview coach built to help users practice real interview environments.",
            "It provides role-specific Q&A sessions, real-time feedback, and personalized improvement guidance.",
            "Features analytics for progress tracking, mock interviews, and AI-driven performance scoring.",
            "Built using Next.js, Gemini AI, Prisma, Tailwind, PostgreSQL, and deployed on Vercel.",
          ],
        },
        {
          id: 221,
          name: "Live Demo",
          icon: "/images/arc.png",
          kind: "file",
          fileType: "url",
          href: "https://sensai-beta.vercel.app/",
          position: "top-60 right-[18%]",
        },
        {
          id: 222,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Blue-Onion/Sensai",
          position: "top-29 right-[21%]",
        },
        {
          id: 223,
          name: "SensAI.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-10 right-[60%]",
          imageUrl: "/images/sensai.png",
        },
      ],
    },

    // ▶ Project 4 - Reflect
    {
      id: 104,
      name: "Reflect",
      icon: "/images/folder.jpg",
      kind: "folder",
      position: "top-[45vh] left-[48vw]",
      windowPosition: "top-[40vh] left-[30vw]",
      children: [
        {
          id: 230,
          name: "Reflect Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-7 left-12",
          description: [
            "Reflect is a journaling and mood-tracking web application built to help users understand their emotional patterns.",
            "Users can create and organize journal entries, analyze mood trends, and securely store data in the cloud.",
            "Features collections, mood insights, and Clerk-powered authentication for secure access.",
            "Built with Next.js, Prisma, PostgreSQL, Tailwind CSS, and deployed on Vercel.",
          ],
        },
        {
          id: 231,
          name: "Live Demo",
          icon: "/images/arc.png",
          kind: "file",
          fileType: "url",
          href: "https://reflect-six-mu.vercel.app/",
          position: "top-60 right-[18%]",
        },
        {
          id: 232,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Blue-Onion/Reflect",
          position: "top-29 right-[21%]",
        },
        {
          id: 233,
          name: "Reflect.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-10 right-[60%]",
          imageUrl: "/images/reflect.png",
        },
      ],
    },

    // ▶ Project 5 - PourTail
    {
      id: 105,
      name: "PourTail",
      icon: "/images/folder.jpg",
      kind: "folder",
      position: "top-[70vh] left-[5vw]",
      windowPosition: "top-[10vh] left-[60vw]",
      children: [
        {
          id: 240,
          name: "PourTail Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-7 left-12",
          description: [
            "PourTail is a beautifully animated cocktail landing page built with Next.js and GSAP.",
            "Features smooth scroll-triggered animations and interactive UI transitions.",
            "Focused on clean design, motion experience, and modern responsive styling.",
            "Powered with GSAP, Tailwind CSS, and deployed live via Vercel.",
          ],
        },
        {
          id: 241,
          name: "Live Demo",
          icon: "/images/arc.png",
          kind: "file",
          fileType: "url",
          href: "https://gsap-learining.vercel.app",
          position: "top-60 right-[18%]",
        },
        {
          id: 242,
          name: "GitHub Repo",
          icon: "/images/github.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/Blue-Onion/Pour-Tail",
          position: "top-29 right-[21%]",
        },
        {
          id: 243,
          name: "PourTail.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "bottom-10 right-[60%]",
          imageUrl: "/images/moijito.png",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/me.jpeg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/me2.jpeg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/con.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/me.jpeg",
      description: [
        "Hey! I’m Blue Onion 👋",
        "A web developer who loves building sleek, interactive websites that actually work brilliantly.",
        "I specialize in JavaScript, React, and Next.js, and I’m all about smooth performance, clean UI, great UX, and writing code that doesn’t require a rescue team to debug later.",
        "When I’m not deep in dev mode, you’ll probably find me tweaking layouts at 2AM, sipping overpriced coffee like it’s fuel for survival, or impulse-buying gadgets I absolutely claim are “for productivity” 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 50;
const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  arc: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
