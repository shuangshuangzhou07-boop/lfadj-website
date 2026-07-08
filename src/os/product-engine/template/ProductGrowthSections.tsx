const blogLinks = [
  {
    label: "What Is a Mobile Light Tower?",
    href: "/en/blog/what-is-mobile-light-tower",
  },
  {
    label: "Diesel vs Solar Light Tower",
    href: "/en/blog/diesel-vs-solar-light-tower",
  },
  {
    label: "Construction Light Tower Guide",
    href: "/en/blog/how-to-choose-light-tower-for-construction",
  },
  {
    label: "Mining Site Lighting Solution Guide",
    href: "/en/blog/mining-site-lighting-solution-guide",
  },
];

const applicationLinks = [
  {
    label: "Construction Site Lighting",
    href: "/applications/construction-site-lighting",
  },
  {
    label: "Mining Site Lighting",
    href: "/applications/mining-site-lighting",
  },
  {
    label: "Emergency Rescue Lighting",
    href: "/applications/emergency-rescue-lighting",
  },
  {
    label: "Rental Fleet Lighting",
    href: "/applications/rental-fleet-lighting",
  },
];

const sections = [
  {
    title: "Why LF6130 for Industrial Use",
    bullets: [
      "Mobile Light Tower platform designed for construction, mining, emergency and rental projects.",
      "Diesel Light Tower power independence supports remote jobsites where grid power is unavailable.",
      "9m hydraulic mast and LED lighting help contractors improve visibility during night operations.",
      "Portable Light Tower Manufacturer support gives buyers OEM/ODM options for fleet and project needs.",
    ],
    links: [
      blogLinks[0],
      applicationLinks[0],
      { label: "Light Tower Manufacturer OEM", href: "/oem/light-tower-manufacturer" },
    ],
  },
  {
    title: "LF6130 vs Competitor Systems",
    bullets: [
      "Compared with generic diesel towers, LF6130 focuses on industrial deployment, stable lighting and manufacturer direct supply.",
      "Compared with solar-only systems, LF6130 is stronger for long runtime, poor weather and remote mining lighting tower applications.",
      "Compared with battery-only systems, LF6130 supports continuous outdoor operation where charging access is limited.",
      "Compared with low-cost portable towers, LF6130 emphasizes mast structure, LED efficiency and B2B procurement reliability.",
    ],
    links: [blogLinks[1], blogLinks[4] ?? blogLinks[0], applicationLinks[1]],
  },
  {
    title: "Total Cost of Ownership (TCO) Analysis",
    bullets: [
      "Industrial buyers should compare purchase price with fuel consumption, LED lifetime, service access and downtime risk.",
      "A construction lighting solution with faster deployment can reduce labor delay and improve project safety value.",
      "Rental fleet buyers should measure utilization, maintenance frequency, spare parts availability and resale value.",
      "OEM manufacturer support can reduce sourcing cost by improving documentation, branding and repeated supply consistency.",
    ],
    links: [
      blogLinks[2],
      { label: "Portable Light Tower Buying Guide", href: "/en/blog/portable-light-tower-buying-guide" },
      applicationLinks[3],
    ],
  },
  {
    title: "Deployment Scenarios (Real World Cases)",
    bullets: [
      "Road construction teams use mobile light tower equipment for asphalt paving, bridge work and tunnel lighting support.",
      "Mining operators use diesel LED towers for open pit mining, haul roads, equipment yards and night maintenance.",
      "Emergency teams deploy portable lighting for flood control, fire rescue and temporary repair scenes.",
      "Rental companies place LF6130 into equipment fleets for contractors that need flexible temporary lighting projects.",
    ],
    links: [
      blogLinks[3],
      { label: "Emergency Lighting Solution Guide", href: "/en/blog/emergency-lighting-solution-guide" },
      applicationLinks[2],
    ],
  },
];

export function ProductGrowthSections() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-3xl font-bold tracking-tight text-black">
          LF6130 SEO Decision Hub
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-2xl font-bold tracking-tight text-black">
                {section.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-700">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                {section.links.map((link) => (
                  <a
                    key={`${section.title}-${link.href}`}
                    href={link.href}
                    className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-bold text-gray-900 hover:border-blue-500 hover:text-blue-700"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
