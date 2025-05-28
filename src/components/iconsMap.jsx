import {
  FaReact,
  FaPython,
  FaLaravel,
  FaJava,
  FaAndroid,
  FaUnity,
  FaStripe,
  FaBootstrap,
  FaGithub,
  FaCode,
  FaMicrosoft,
  FaMicrochip
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiMongodb,
  SiFastapi,
  SiOpencv,
  SiTensorflow,
  SiKeras,
  SiDotnet,
  SiTypescript,
  SiMysql,
  SiClerk,
  SiJson,
  SiThreedotjs,
  SiGimp,
  SiBlender,
  SiBluetooth
} from "react-icons/si";

import { Icon } from '@iconify/react';

export const techIcons = {
  React: () => <FaReact />,
  Python: () => <FaPython />,
  Laravel: () => <FaLaravel />,
  Java: () => <FaJava />,
  "Android Studio": () => <FaAndroid />,
  Unity3D: () => <FaUnity />,
  Stripe: () => <FaStripe />,
  "Tailwind CSS": () => <SiTailwindcss />,
  "Next.js": () => <SiNextdotjs />,
  Firebase: () => <SiFirebase />,
  MongoDB: () => <SiMongodb />,
  "Fast API": () => <SiFastapi />,
  OpenCV: () => <SiOpencv />,
  TensorFlow: () => <SiTensorflow />,
  Keras: () => <SiKeras />,
  "ASP.NET": () => <SiDotnet />,
  TypeScript: () => <SiTypescript />,
  MySQL: () => <SiMysql />,
  Clerk: () => <SiClerk />,
  Json: () => <SiJson />,
  "C#": () => <FaCode />,
  ".NET": () => <FaMicrosoft />,
  WinForms: () => <FaCode />,
  // zamiast SiEntityframework – fallback z Iconify lub zwykła ikona
  "Entity Framework": () => <Icon icon="mdi:database" width="1em" height="1em" />,
  Bootstrap: () => <FaBootstrap />,
  LLM: () => <FaGithub />,
  WebSockets: () => <FaGithub />,
  "STM32 MCU": () => <FaMicrochip/>,
  "Three.js": () => <SiThreedotjs />,
  Gimp: () => <SiGimp />,
  Blender: () => <SiBlender />,
  Bluetooth: () => <SiBluetooth />
};
