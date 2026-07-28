import type { Metadata } from "next";
import { RoutePlaceholder } from "@/components/RoutePlaceholder";
import { SolutionsHubBrowse } from "@/components/solutions/SolutionsHubBrowse";
import { SolutionsHubRelated } from "@/components/solutions/SolutionsHubRelated";

export const metadata: Metadata = { title: "移动照明解决方案与选型指南 | LFADJ", description: "浏览 LFADJ 移动照明解决方案，了解如何根据项目需求、动力系统、灯杆配置和恶劣环境选择合适的移动照明灯塔。", alternates: { canonical: "https://lfadj.com/zh/solutions", languages: { en: "/en/solutions", "zh-CN": "/zh/solutions" } } };
export default function Page() {
  return (
    <>
      <RoutePlaceholder copy={{ title: "移动照明解决方案", description: "无论是建筑施工、矿山、设备租赁还是应急项目，LFADJ 都将根据照明需求、动力系统、灯杆配置和工作环境，帮助您选择适合的移动照明解决方案与项目配置。", parentLabel: "首页", parentHref: "/zh", homeLabel: "首页", homeHref: "/zh", backLabel: "返回首页", breadcrumbLabel: "解决方案", hideParentBreadcrumb: true, hideBackLink: true }} />
      <SolutionsHubBrowse lang="zh" />
      <SolutionsHubRelated lang="zh" />
    </>
  );
}
