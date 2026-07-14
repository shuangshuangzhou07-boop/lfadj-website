import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";

export const metadata: Metadata = { title: "移动照明解决方案 | LFADJ", description: "LFADJ 移动照明解决方案页面基础框架。", alternates: { canonical: "https://lfadj.com/zh/solutions", languages: { en: "/en/solutions", "zh-CN": "/zh/solutions" } } };
export default function Page() { return <RoutePlaceholder copy={{ title: "移动照明解决方案", description: "本页面将汇总建筑施工、矿山、油气、租赁设备和应急照明解决方案。", parentLabel: "首页", parentHref: "/zh", homeLabel: "首页", homeHref: "/zh", backLabel: "返回首页" }} />; }
