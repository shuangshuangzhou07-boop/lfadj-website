import type { Metadata } from "next";
import type { ReactElement } from "react";
import { notFound } from "next/navigation";

import ApplicationsPage, {
  metadata as applicationsMetadata,
} from "../应用场景/page";
import SolutionsPage, { metadata as solutionsMetadata } from "../解决方案/page";
import OemPage, { metadata as oemMetadata } from "../oem制造/page";
import CaseStudiesPage, { metadata as caseStudiesMetadata } from "../案例/page";
import FaqPage, { metadata as faqMetadata } from "../常见问题/page";
import BlogPage, { metadata as blogMetadata } from "../博客/page";
import ContactPage, { metadata as contactMetadata } from "../联系我们/page";

const pageMap = {
  应用场景: {
    Component: ApplicationsPage,
    metadata: applicationsMetadata,
  },
  解决方案: {
    Component: SolutionsPage,
    metadata: solutionsMetadata,
  },
  oem制造: {
    Component: OemPage,
    metadata: oemMetadata,
  },
  案例: {
    Component: CaseStudiesPage,
    metadata: caseStudiesMetadata,
  },
  常见问题: {
    Component: FaqPage,
    metadata: faqMetadata,
  },
  博客: {
    Component: BlogPage,
    metadata: blogMetadata,
  },
  联系我们: {
    Component: ContactPage,
    metadata: contactMetadata,
  },
} satisfies Record<string, { Component: () => ReactElement; metadata: Metadata }>;

type PageParams = {
  params: {
    slug: string;
  };
};

function normalizeSlug(slug: string) {
  return decodeURIComponent(slug);
}

export function generateMetadata({ params }: PageParams): Metadata {
  const page = pageMap[normalizeSlug(params.slug) as keyof typeof pageMap];

  if (!page) {
    return {};
  }

  return page.metadata;
}

export default function ChineseDynamicSlugPage({ params }: PageParams) {
  const page = pageMap[normalizeSlug(params.slug) as keyof typeof pageMap];

  if (!page) {
    notFound();
  }

  const Component = page.Component;
  return <Component />;
}
