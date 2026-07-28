import Link from "next/link";

type SolutionsHubBrowseProps = {
  lang: "en" | "zh";
};

const solutionEntries = {
  en: [
    {
      title: "How to Choose the Right Light Tower for Your Project",
      description: "Compare project scenarios, lighting requirements and operating conditions to identify the right mobile light tower type.",
      href: "/en/solutions/how-to-choose-the-right-light-tower",
    },
    {
      title: "How to Choose the Right Light Tower Mast System",
      description: "Choose a manual, electric or other mast system based on deployment height, relocation frequency, operating method and budget.",
      href: "/en/solutions/how-to-choose-light-tower-mast-system",
    },
    {
      title: "How to Choose the Right Light Tower Power System",
      description: "Match the power configuration to lighting load, auxiliary equipment, site conditions and operating hours.",
      href: "/en/solutions/how-to-choose-right-light-tower-power-system",
    },
    {
      title: "How to Choose the Right Light Tower for Harsh Environments",
      description: "Select a suitable light tower configuration for heat, dust, corrosion and long-term operation.",
      href: "/en/solutions/how-to-choose-the-right-light-tower-for-harsh-environments",
    },
    {
      title: "How to Plan Temporary Site Lighting",
      description: "Learn how to plan temporary site lighting based on your project layout, working areas, operating hours and site conditions.",
      href: "/en/solutions/temporary-site-lighting",
    },
  ],
  zh: [
    {
      title: "如何为项目选择合适的移动照明灯塔",
      description: "根据项目场景、照明需求和使用条件判断适合的移动照明灯塔类型。",
      href: "/zh/solutions/how-to-choose-the-right-light-tower",
    },
    {
      title: "如何选择合适的移动照明灯塔升降系统",
      description: "根据部署高度、移动频率、操作方式和预算选择手动、电动或其他灯杆系统。",
      href: "/zh/solutions/how-to-choose-light-tower-mast-system",
    },
    {
      title: "如何选择合适的移动照明灯塔动力系统",
      description: "根据照明负载、外接设备、工作环境和运行时间选择动力配置。",
      href: "/zh/solutions/how-to-choose-right-light-tower-power-system",
    },
    {
      title: "如何选择适合恶劣环境的移动照明灯塔",
      description: "根据高温、沙尘、腐蚀和长期运行条件选择适合的灯塔配置。",
      href: "/zh/solutions/how-to-choose-the-right-light-tower-for-harsh-environments",
    },
    {
      title: "如何规划项目临时施工照明",
      description: "了解如何根据项目布局、作业区域、工作时间和现场环境，规划安全、高效的临时施工照明方案。",
      href: "/zh/solutions/temporary-site-lighting",
    },
  ],
} as const;

export function SolutionsHubBrowse({ lang }: SolutionsHubBrowseProps) {
  const entries = solutionEntries[lang];

  return (
    <section className="bg-slate-50 px-6 py-20 sm:px-8">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          {lang === "zh" ? "根据您的项目选择合适的解决方案" : "Choose the Right Solution for Your Project"}
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {entries.map((entry, index) => (
            <Link
              key={entry.href}
              href={entry.href}
              className={`group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-400 hover:shadow-md sm:p-7 md:col-span-2 ${
                entries.length % 2 === 1 && index === entries.length - 1 ? "md:col-start-2" : ""
              }`}
            >
              <h3 className="text-xl font-bold leading-7 text-slate-950 underline decoration-slate-300 underline-offset-4 group-hover:decoration-amber-500">
                {entry.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">{entry.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
