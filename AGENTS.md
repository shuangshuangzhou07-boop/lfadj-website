# LFADJ AI Development Entry Rules

本文件是 LFADJ 项目所有 AI、Codex 和开发任务的执行总入口，适用于 `E:\LFADJ\lfadj-website`、全部现有子目录及后续新增目录。

所有任务开始前必须读取 `.ai/CONSTITUTION.md`。它是本项目唯一最高宪法；即使用户没有重复粘贴，也必须默认遵守。子目录如以后存在 `AGENTS.md`，只能补充局部规则，不能推翻根目录规则或最高宪法。

## Required Standards

Before modifying any website files, always read:

1. The Website Constitution (CONSTITUTION.md)

2. Any relevant standards applicable to the current task.

Examples include (when applicable):

- SEO Internal Linking Standard
- Product Page Standard
- SEO Content Standard
- Image Standard
- Structured Data Standard

These standards are mandatory.

If a task relates to a specific area, the corresponding standard must be read and followed before making any modifications.

If a referenced standard does not yet exist, ignore it and continue following the Website Constitution and all existing standards.

## 1. 规则读取与优先级

按以下顺序读取和执行：

1. `.ai/CONSTITUTION.md`
2. 根目录 `AGENTS.md`
3. 与当前任务相关的专项规则
4. 用户当前任务的目标和允许修改范围
5. 当前代码现状与普通实现偏好

用户任务决定本次完成什么及允许修改哪些文件。专项规则要求读取或检查相关文件，不代表可以修改这些文件，也不能自动扩大用户授权范围。

当前任务不能静默推翻真实性、语言隔离、页面职责或其他最高宪法原则。规则冲突时必须在修改前说明，不得自行选择更方便的规则。如果只读检查即可完成任务，不得修改文件。

## 2. 按任务类型读取规则

| 任务类型 | 必读文件与关键要求 |
| --- | --- |
| 所有任务 | 读取 `AGENTS.md`、`.ai/CONSTITUTION.md` 和用户当前要求。 |
| 页面、SEO、文案、结构、内链、CTA | 读取宪法及与任务直接相关且确有内容的专项规则。修改前确认页面核心 SEO 主题、搜索意图和职责边界，并检查相关语言版本与重复内容。 |
| 产品参数、产品数据、产品页面数据 | 读取 `INFRASTRUCTURE_RULES.md`、`src/data/products/PATH_RULES.md`、`src/data/products/README.md` 及宪法真实性原则。不得绕过产品 SSOT、虚构参数或将未经确认数据直接硬编码到页面。 |
| 图片、Hero、产品图、应用场景图 | 读取 `docs/LFADJ_IMAGE_STANDARD_V1.md` 和宪法。遵守真实感、尺寸、格式、性能、命名及使用场景规范。 |
| 路由、Middleware、canonical、hreflang、重定向 | 读取宪法及与路由和基础设施直接相关的现有规则与代码。未经明确授权，不得删除、合并、新增或重定向现有路由，也不得创建第三套重复索引体系。 |
| 纯文档、规则文件、只读审计 | 只读取与任务直接相关的文件；不强制检查页面 SEO、双语页面或产品参数，也不执行网站构建。 |

产品缺失数据在中文前台显示“待确认”，英文前台显示“To be confirmed”。内部数据值和存储方式继续服从产品数据专项规则；前台本地化要求不授权擅自修改产品数据层。

`.ai/01_BUSINESS.md` 至 `.ai/15_CHECKLIST.md` 中部分文件可能只是占位文件。只有文件含实际可执行内容且与当前任务相关时，才作为专项规则使用；不得仅凭文件名假定存在完整规范。本规则不授权补全、删除或重命名这些文件。

## 3. 执行与范围控制

- 一次只完成一个明确任务。
- 默认只修改一个页面或模块，一般控制在 1–3 个文件。
- 只修改用户明确允许的文件。
- 修改前先读取现状，尽量保留当前架构、组件和数据流。
- 不得顺带重构、扩大范围或自动修复审计中发现的其他问题。
- 不得为局部任务大范围替换文件。
- 不得覆盖任务开始前已有的未提交改动。
- 发现无关问题时只记录并汇报。

## 4. 修改前检查

所有修改任务开始前必须确认：

1. 已读取最高宪法。
2. 已读取当前任务相关专项规则。
3. 已确认允许修改的文件和范围。
4. 已检查当前实现和已有未提交改动。
5. 已确认事实和数据来源。
6. 已评估对相关页面、路由、组件和数据层的影响。

仅按任务类型增加条件检查：

- 页面任务：SEO 主题、搜索意图、H1、重复内容和 CTA。
- 双语任务：中英文结构、重要信息同步和语言纯净度。
- 产品数据任务：SSOT、参数来源和前台本地化。
- 图片任务：图片标准和性能。
- 路由任务：canonical、hreflang、状态码和重定向。

纯文档或只读任务不得执行无关检查。

## 5. 按范围和风险验证

只执行能够验证本次修改的必要检查。不默认运行完整 build 或全站 lint，不得借验证修改其他问题。未执行的相关验证必须说明原因；只读任务不得执行会改变工作区的命令。

建议验证映射：

- Markdown 或规则文件：检查内容、引用路径、重复和限定范围的 Git diff。
- TypeScript：执行相关 TypeScript 或局部检查。
- 页面组件：检查目标页面及必要的类型验证。
- 路由或构建配置：执行必要的构建或路由验证。
- 样式：检查目标页面和响应式风险。
- 产品数据：检查数据来源、读取层和页面展示。

仅在以下情况执行完整 Production Build：

- 用户明确要求。
- 修改影响全局构建、路由、配置或依赖。
- 局部验证不足以判断修改安全性。

## 6. Git 安全

未经用户明确要求，不得执行 Git commit 或 Git push，也不得 reset、checkout、clean、stash、覆盖已有工作区改动或删除任务开始前的未跟踪文件。

必须区分本次修改与任务开始前已有改动。完成后可以使用只读 Git 命令检查本次差异；如存在其他未提交改动，必须在报告中说明但不得触碰。

## 7. 精简完成报告

每次修改任务至少汇报：

### 修改文件

列出本次实际修改的文件。

### 完成内容

说明实际完成内容。

### 读取的规则

列出实际读取并使用的宪法和专项规则。

### 验证结果

只列出实际执行的验证及真实结果。

### 范围检查

说明是否修改任务范围之外的内容。

### Git 状态

说明是否执行 commit 或 push，以及是否存在任务开始前的其他未提交改动。

### 风险或待确认项

列出无法确认的信息和后续风险。

仅在相关任务中增加页面 SEO 职责、重复内容与关键词蚕食、中英文同步、产品数据与真实性、图片标准、路由与技术 SEO 检查。不要让无关任务机械输出大量“不适用”。

## 8. Token 与上下文效率

- 只读取当前任务必要文件，不默认扫描整个仓库。
- 不重复输出完整宪法正文或重复解释已明确规则。
- 优先使用现有组件、数据和结构。
- 发现无关问题只汇报，不继续调查。
- 默认采用小任务、小 diff、最小必要验证。
- 不得为了节省 Token 跳过真实性、范围或安全检查。

## 9. 最终入口声明

所有 LFADJ 网站任务，即使用户没有重复粘贴规则，也必须默认遵守 `.ai/CONSTITUTION.md`。

`AGENTS.md` 只负责执行入口和工作流程，不替代、不复制最高宪法及专项规则正文。
