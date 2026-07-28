import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mobile Light Tower Applications for Mining, Construction & Oil Gas | LFADJ",
  description:
    "Explore LFADJ mobile light tower applications for construction, mining, oil & gas, rental and emergency projects. Learn how reliable lighting supports different industrial environments.",
  alternates: {
    canonical: "https://lfadj.com/en/applications",
  },
  openGraph: {
    title: "LFADJ Mobile Light Tower Manufacturer",
    description:
      "Industrial mobile lighting solutions for construction, mining, and emergency use.",
    url: "https://lfadj.com/en/applications",
    type: "website",
  },
};

const applications = [
  {
    name: "Construction",
    title: "Construction Lighting",
    description:
      "Construction light towers support nighttime construction, road building and infrastructure projects that require dependable mobile illumination across changing work areas.",
  },
  {
    name: "Mining",
    title: "Mining Lighting",
    description:
      "Mine light towers provide mobile lighting for mining areas where high dust levels, remote locations and long operating hours place additional demands on equipment.",
  },
  {
    name: "Oil & Gas",
    title: "Oil & Gas Lighting Applications",
    description:
      "Oil and gas lighting equipment supports remote oil field projects and work areas that need reliable illumination during continuous operations.",
  },
  {
    name: "Rental",
    title: "Rental Lighting Applications",
    description:
      "Rental companies evaluate mobile light towers around reliability, maintenance costs and service life across repeated deployments for different customers.",
  },
  {
    name: "Emergency",
    title: "Emergency Lighting Applications",
    description:
      "Emergency lighting equipment supports disaster response, temporary power situations and projects that require rapid deployment of mobile illumination.",
  },
];

export default function EnglishApplicationsPage() {
  return (
    <main className="w-full bg-white">
      <section className="w-full bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[1280px]">
          <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            Mobile Light Tower Applications for Construction, Mining and Industrial Projects
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-gray-700 sm:text-xl">
            LFADJ provides reliable mobile lighting solutions for construction, mining, oil &amp; gas, rental and emergency applications.
          </p>
          <Link href="/en/products" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-blue-700 px-6 text-sm font-bold text-white hover:bg-blue-800">
            View Products
          </Link>
        </div>
      </section>

      <section className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">Industry Applications</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {applications.map((application) => (
              <article key={application.name} className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-700">{application.name}</p>
                <h3 className="mt-4 text-2xl font-bold text-gray-950">{application.title}</h3>
                <p className="mt-4 flex-1 text-base leading-7 text-gray-600">{application.description}</p>
                <Link href="/en/products" className="mt-7 self-start text-sm font-bold text-blue-700 underline-offset-4 hover:underline">
                  View Products →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
