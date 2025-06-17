import type { IconType } from "react-icons";
import { FaHome } from "react-icons/fa";
import { SiLibrarything } from "react-icons/si";
import { FaUser } from "react-icons/fa6";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { LuListTodo } from "react-icons/lu";
import { SlCalculator } from "react-icons/sl";

interface SideBarTabListTypes {
  title: string;
  icon: IconType;
  link: string;
}

export const SideBarTabList: SideBarTabListTypes[] = [
  {
    title: "Home",
    icon: FaHome,
    link: "/home",
  },
  {
    title: "Library",
    icon: SiLibrarything,
    link: "/list-of-framework",
  },
  {
    title: "Users",
    icon: FaUser,
    link: "/users-list",
  },
  {
    title: "Charts",
    icon: LuChartNoAxesCombined,
    link: "/charts",
  },
  {
    title: "ToDo",
    icon: LuListTodo,
    link: "/todo-list",
  },
  {
    title: "Calculator",
    icon: SlCalculator,
    link: "/calculator",
  },
];
