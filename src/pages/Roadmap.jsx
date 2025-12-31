import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaReact, 
  FaTools, FaServer, FaVial, FaCloud, FaUserTie,
  FaRocket
} from "react-icons/fa";




const roadmap = [
  {
    title: "1. HTML – Structure of the Web",
    icon: <FaHtml5 className="text-orange-500" />,
    points: [
      "HTML basics & page structure",
      "Tags, elements & attributes",
      "Block vs inline elements",
      "Forms & validation",
      "Semantic HTML",
      "HTML5 features (audio, video, canvas)",
      "Accessibility (ARIA, alt text, keyboard navigation)"
    ]
  },
  {
    title: "2. CSS – Styling & Layout",
    icon: <FaCss3Alt className="text-blue-500" />,
    points: [
      "Selectors, colors, units, typography",
      "Box model",
      "Flexbox & Grid",
      "Positioning & display types",
      "Responsive design",
      "Media queries & breakpoints",
      "Animations & transitions",
      "CSS variables & BEM naming"
    ]
  },
  {
    title: "3. JavaScript – Web Logic",
    icon: <FaJs className="text-yellow-400" />,
    points: [
      "Variables, data types, operators",
      "Loops & conditionals",
      "Functions & arrow functions",
      "Arrays & objects",
      "DOM manipulation",
      "Events & event bubbling",
      "Promises & async/await",
      "Closures & destructuring"
    ]
  },
  {
    title: "4. Version Control – Git & GitHub",
    icon: <FaGitAlt className="text-red-500" />,
    points: [
      "git init, clone, add, commit",
      "Branching & merging",
      "Pull requests",
      "Conflict resolution",
      "GitHub repositories",
      "Issues & GitHub Actions"
    ]
  },
  {
    title: "5. CSS Frameworks & UI Libraries",
    icon: <FaTools className="text-purple-500" />,
    points: [
      "Bootstrap",
      "Tailwind CSS",
      "Material UI",
      "Chakra UI",
      "ShadCN",
      "DaisyUI"
    ]
  },
  {
    title: "6. Package Managers & Build Tools",
    icon: <FaTools className="text-sky-500" />,
    points: [
      "npm, yarn, pnpm",
      "Vite",
      "Webpack",
      "Parcel",
      "ESBuild",
      "Babel"
    ]
  },
  {
    title: "7. Frontend Frameworks",
    icon: <FaReact className="text-cyan-400" />,
    points: [
      "React components",
      "Props & state",
      "Hooks (useState, useEffect, useRef)",
      "Context API",
      "React Router",
      "Redux / Zustand",
      "Angular basics",
      "Vue basics"
    ]
  },
  {
    title: "8. TypeScript",
    icon: <FaServer className="text-blue-600" />,
    points: [
      "Why TypeScript",
      "Types & interfaces",
      "Union & intersection types",
      "Generics",
      "Utility types"
    ]
  },
  {
    title: "9. API & Backend Basics",
    icon: <FaServer className="text-emerald-500" />,
    points: [
      "REST APIs",
      "HTTP methods & status codes",
      "Postman & Axios",
      "GraphQL basics"
    ]
  },
  {
    title: "10. Testing",
    icon: <FaVial className="text-pink-500" />,
    points: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Playwright"
    ]
  },
  {
    title: "11. Deployment & Hosting",
    icon: <FaCloud className="text-indigo-500" />,
    points: [
      "Netlify",
      "Vercel",
      "GitHub Pages",
      "Firebase Hosting"
    ]
  },
  {
    title: "12. Soft Skills",
    icon: <FaUserTie className="text-slate-700" />,
    points: [
      "Problem solving",
      "Debugging",
      "Clean code practices",
      "Communication",
      "UX thinking"
    ]
  },
  {
    title: "13. Optional Advanced Topics",
    icon: <FaRocket className="text-sky-600" />,
    points: [
      "Progressive Web Apps (PWA)",
      "WebSockets",
      "SSR (Next.js / Nuxt)",
      "Microfrontends"
    ]
  }
];

function Roadmap() {
  return (
    <div className="bg-white px-6 md:px-20 py-20">
      <h1 className="text-4xl md:text-6xl font-black text-center mb-20">
        Full Frontend Developer Roadmap
      </h1>

      <div className="space-y-14 max-w-5xl mx-auto">
        {roadmap.map((section, i) => (
          <div key={i} className="p-8 rounded-3xl border border-slate-200 hover:border-sky-500 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl">{section.icon}</div>
              <h2 className="text-2xl font-black">{section.title}</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-slate-600 text-sm">
              {section.points.map((p, j) => (
                <li key={j}>• {p}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
