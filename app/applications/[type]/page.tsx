import { notFound } from "next/navigation";

const applicationTypes = new Set([
  "construction",
  "mining",
  "emergency",
  "road-infrastructure",
  "events-rental",
]);

export const dynamicParams = false;

export function generateStaticParams() {
  return [];
}

export default function OSApplicationBridgePage({
  params,
}: {
  params: { type: string };
}) {
  if (!applicationTypes.has(params.type)) {
    notFound();
  }

  return (
    <main className="bg-white px-6 py-20">
      <section className="mx-auto max-w-[1200px]">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-gray-500">
          OS Application Bridge
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-black">
          {params.type.replace(/-/g, " ")}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Application bridge route connected to LFADJ AI Business OS.
        </p>
        <a
          href="/products"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white"
        >
          Products
        </a>
      </section>
    </main>
  );
}
