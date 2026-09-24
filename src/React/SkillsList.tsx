import { useState } from "react";

const CategoryIcons = {
  "Web Development": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-app-window-mac text-[var(--sec)]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.01"/><path d="M10 8h.01"/><path d="M14 8h.01"/></svg>
  ),
  "Digital Marketing": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-megaphone text-[var(--sec)]"><path d="M3 11v2"/><path d="M19 8.5v7L10 13V7.5z"/><path d="M9 13v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5"/><path d="M19 8.5V5a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2v-7Z"/></svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Development": [
      "Full-Stack Architecture",
      "Database & API Integration",
      "High-Performance Web Apps",
    ],
    "Digital Marketing": [
      "Meta and Google ads campaign management",
      "Marketplace optimization and product promotion",
      "Content strategy and performance-focused marketing",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6 tracking-[-0.03em]">
        What I do?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className={`md:w-[400px] w-full text-left cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(93,169,255,0.12),_transparent_38%),_linear-gradient(180deg,_rgba(20,20,20,0.88),_rgba(12,12,12,0.96))] shadow-[0_12px_28px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--sec)]/30 hover:shadow-[0_16px_32px_rgba(12,18,32,0.38),0_0_0_1px_rgba(93,169,255,0.12)] ${
                openItem === category ? "border-[var(--sec)]/40" : ""
              }`}
            >
              <div className="relative flex items-center gap-3 p-4 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[2px] before:rounded-full before:bg-[var(--sec)] before:opacity-80 before:shadow-[0_0_16px_rgba(93,169,255,0.7)]">
                <div className="ml-2">{CategoryIcons[category as keyof typeof CategoryIcons]}</div>
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg font-medium tracking-[0.02em]">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform duration-300 flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm leading-relaxed">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center rounded-lg px-2 py-1 transition-colors hover:bg-white/5">
                      <span className="text-[var(--sec)] text-base">•</span>
                      <li className="pl-3 tracking-[0.01em]">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
