import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Choose the Right Mast System for a Mobile Light Tower | LFADJ",
  description:
    "Learn how to choose the right mobile light tower mast system based on project duration, mobility requirements, working height and budget.",
};

export default function LightTowerMastSystemSolutionPage() {
  return (
    <main className="bg-white text-slate-950">
      <section className="border-b border-slate-200 bg-slate-50 px-6 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1200px]">
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            How to Choose the Right Mast System for a Mobile Light Tower
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
            Choose the right mast configuration based on project duration, mobility frequency, working height and budget.
          </p>
          <Link
            href="/en/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-slate-950 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-slate-700"
          >
            Contact LFADJ for Project Recommendation
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Four Factors to Consider</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">Project Duration</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Short-term projects prioritize fast deployment, while long-term projects prioritize stable operation.
              </p>
            </article>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">Mobility Frequency</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Projects that move frequently require more convenient mast operation.
              </p>
            </article>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">Working Height</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Different projects require different mast heights based on the required lighting coverage.
              </p>
            </article>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">Budget</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Select a suitable configuration based on project requirements and budget.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Mast System Options</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
            Different projects require different mast system options.
          </p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">Manual Mast</h3>
              <p className="mt-3 font-semibold text-amber-700">Economical Option</p>
              <p className="mt-3 leading-7 text-slate-600">Suitable for budget-sensitive projects.</p>
            </article>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">Electric Mast</h3>
              <p className="mt-3 font-semibold text-amber-700">Rental and Frequently Relocated Projects</p>
              <p className="mt-3 leading-7 text-slate-600">
                Reduces manual effort and improves onsite deployment efficiency.
              </p>
              <Link href="/en/products/lf955" className="mt-5 inline-flex font-semibold text-slate-950 underline decoration-amber-500 decoration-2 underline-offset-4">
                LF955 Diesel Mobile Light Tower
              </Link>
            </article>
            <article className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-950">Hydraulic Mast</h3>
              <p className="mt-3 font-semibold text-amber-700">Long-Term Projects and Greater Height Requirements</p>
              <p className="mt-3 leading-7 text-slate-600">
                Suitable for large projects that require greater stability.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recommended Configuration Examples</h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[560px] border-collapse bg-white text-left">
              <thead className="bg-slate-950 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold">Project Type</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Recommended Configuration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><th scope="row" className="px-6 py-4 font-semibold">Equipment Rental</th><td className="px-6 py-4 text-slate-600">7.5m Electric Mast</td></tr>
                <tr><th scope="row" className="px-6 py-4 font-semibold">Construction</th><td className="px-6 py-4 text-slate-600">7.5m Electric Mast</td></tr>
                <tr><th scope="row" className="px-6 py-4 font-semibold">Long-Term Infrastructure Projects</th><td className="px-6 py-4 text-slate-600">9m Hydraulic Mast</td></tr>
                <tr><th scope="row" className="px-6 py-4 font-semibold">Special Projects</th><td className="px-6 py-4 text-slate-600">Customized Configuration</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20 sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Related Products</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <Link href="/en/products/lf955" className="rounded-xl border border-slate-200 bg-white p-6 text-xl font-bold text-slate-950 shadow-sm transition-shadow hover:shadow-md">
              LF955 Diesel Mobile Light Tower
            </Link>
            <Link href="/en/products/lf971" className="rounded-xl border border-slate-200 bg-white p-6 text-xl font-bold text-slate-950 shadow-sm transition-shadow hover:shadow-md">
              LF971 Solar Mobile Light Tower
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Need Help Choosing the Right Configuration?</h2>
          <Link href="/en/contact" className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-amber-400">
            Submit Project Requirement
          </Link>
        </div>
      </section>
    </main>
  );
}
