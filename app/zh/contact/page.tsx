import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";

export const metadata: Metadata = { title: "联系我们 | LFADJ", description: "联系 LFADJ 获取移动照明项目支持。", alternates: { canonical: "https://lfadj.com/zh/contact", languages: { en: "/en/contact", "zh-CN": "/zh/contact" } } };
export default function Page() { return <RoutePlaceholder copy={{ title: "联系我们", description: "通过询价页面向 LFADJ 提交经过确认的项目需求和联系信息。", parentLabel: "首页", parentHref: "/zh", homeLabel: "首页", homeHref: "/zh", backLabel: "返回首页" }} />; }
