import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";

export const metadata: Metadata = { title: "制造能力 | LFADJ", description: "LFADJ 制造能力页面基础框架。", alternates: { canonical: "https://lfadj.com/zh/manufacturing", languages: { en: "/en/manufacturing", "zh-CN": "/zh/manufacturing" } } };
export default function Page() { return <RoutePlaceholder copy={{ title: "制造能力", description: "查看 LFADJ 工厂介绍、生产流程、质量控制和定制能力的基础页面结构。", parentLabel: "首页", parentHref: "/zh", homeLabel: "首页", homeHref: "/zh", backLabel: "返回首页" }} />; }
