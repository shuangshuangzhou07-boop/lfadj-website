import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About LFADJ",
  description: "LFADJ is a mobile light tower manufacturer for industrial projects.",
  alternates: {
    canonical: "https://lfadj.com/about",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold tracking-tight text-black">About LFADJ</h1>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        LFADJ designs and manufactures mobile light towers for construction,
        mining, emergency and rental buyers.
      </p>
    </main>
  );
}
