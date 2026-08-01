export type Lf951Language = "en" | "zh";

type Lf951TechnicalInformation = {
  label: string;
  value: string;
};

type Lf951Overview = {
  title: string;
  paragraphs: readonly string[];
  technicalInformationTitle: string;
  technicalInformation: readonly Lf951TechnicalInformation[];
};

export const lf951Overview: Record<Lf951Language, Lf951Overview> = {
  en: {
    title: "LF951 Portable Light Tower",
    paragraphs: [
      "The LF951 is designed for construction, road maintenance, emergency work and equipment rental projects that require a compact and movable lighting unit.",
      "Its manual mast and push-type chassis support straightforward positioning and deployment around the worksite. Lamp power and generator capacity can be selected according to the required lighting output and operating conditions.",
      "The LF951 is positioned as a practical option for smaller mobile work areas, while higher-output and extended-operation projects can be matched with the LF955 diesel mobile light tower.",
    ],
    technicalInformationTitle: "Technical Information",
    technicalInformation: [
      { label: "Mast Type", value: "Manual Telescopic Mast" },
      { label: "Mast Height", value: "Approximately 3–6 m" },
      { label: "Lifting Method", value: "Manual" },
      { label: "Number of Lamps", value: "4" },
      { label: "Lamp Power Options", value: "4 × 100 W / 4 × 200 W / 4 × 500 W / 4 × 1000 W" },
      { label: "Light Source", value: "LED" },
      { label: "Input Voltage", value: "AC 220 V / 50 Hz" },
      { label: "Protection Rating", value: "IP65" },
      { label: "Generator Type", value: "Diesel Generator Set, matched to lamp load" },
      { label: "Starting Method", value: "12 V Electric Start" },
      { label: "Wheel Configuration", value: "Four-Wheel Push-Type Chassis" },
      { label: "Braking Method", value: "Manual" },
    ],
  },
  zh: {
    title: "LF951 手推式移动照明灯塔",
    paragraphs: [
      "LF951手推式移动照明灯塔适用于建筑施工、道路维护、应急作业和设备租赁等需要紧凑移动照明设备的项目。",
      "手摇升降灯杆和手推式底盘方便设备在作业区域内进行定位与部署。灯具功率和发电机组容量可根据项目所需亮度及运行条件进行配置。",
      "LF951主要面向中小型移动作业区域；对于需要更高照明输出和更长运行时间的项目，可选择LF955柴油移动照明灯塔。",
    ],
    technicalInformationTitle: "技术信息",
    technicalInformation: [
      { label: "灯杆类型", value: "手摇伸缩灯杆" },
      { label: "灯杆高度", value: "约3–6米" },
      { label: "升降方式", value: "手摇升降" },
      { label: "灯具数量", value: "4盏" },
      { label: "灯具功率选项", value: "4×100W / 4×200W / 4×500W / 4×1000W" },
      { label: "光源类型", value: "LED" },
      { label: "输入电压", value: "AC 220V / 50Hz" },
      { label: "防护等级", value: "IP65" },
      { label: "发电机组类型", value: "柴油发电机组，根据灯具负载匹配" },
      { label: "启动方式", value: "12V电启动" },
      { label: "车轮配置", value: "四轮手推式底盘" },
      { label: "制动方式", value: "手动" },
    ],
  },
};
