import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";

export const metadata: Metadata = { title: "Manufacturing | LFADJ", description: "LFADJ manufacturing capability page framework.", alternates: { canonical: "https://lfadj.com/en/manufacturing", languages: { en: "/en/manufacturing", "zh-CN": "/zh/manufacturing" } } };
export default function Page() { return <RoutePlaceholder copy={{ title: "Manufacturing", description: "Explore the framework for LFADJ factory, production, quality control and customization information.", parentLabel: "Home", parentHref: "/en", homeLabel: "Home", homeHref: "/en", backLabel: "Back to Home" }} />; }
