import {
  FaBell,
  FaChartBar,
  FaCalendarAlt,
  FaTachometerAlt,
} from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";
import { AiFillMessage } from "react-icons/ai";
import { MdDarkMode } from "react-icons/md";
import { BsFillGearFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import SidebarItem from "./SideBarItem";

const studentMenuItems = [
  {
    icon: <FaTachometerAlt />,
    label: "Dashboard",
    path: "/student/1/dashboard",
  },
  { icon: <FaChartBar />, label: "Todo", path: "/student/1/todo" },
  { icon: <AiFillMessage />, label: "Discuss/Doubts" },
  { icon: <FaCalendarAlt />, label: "Calendar" },
  { icon: <FaFilePen />, label: "Assessment" },
];

const tutorMenuItems = [
  { icon: <FaTachometerAlt />, label: "Clasess" },
  { icon: <FaChartBar />, label: "Doubt" },
  { icon: <AiFillMessage />, label: "Notice" },
  { icon: <FaCalendarAlt />, label: "Dashboard" },
  { icon: <FaFilePen />, label: "Assessment" },
];

const bottomItems = [
  { icon: <BsFillGearFill />, label: "Profile" },
  { icon: <MdDarkMode />, label: "Dark mode" },
  { icon: <IoLogOut />, label: "Logout" },
];

export default function Sidebar() {
  return (
    <div className="hidden sm:flex w-64 min-h-screen bg-gradient-to-br from-white via-[#fdf1f4] to-[#f3f3fd] shadow-md text-[#1f2937] p-4  flex-col justify-between border-r border-gray-200">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-lg font-bold mx-auto text-[#0C0950]">
            WeValue
          </span>
        </div>

        <div className="mb-6">
          <SidebarItem icon={<FaBell />} label="Notifications" badge="15+" />
        </div>

        <div className="text-sm text-gray-700">
          <div className="font-semibold text-xs text-gray-400 uppercase mb-2">
            Menu
          </div>
          <div className="space-y-1">
            {studentMenuItems.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-700">
        {bottomItems.map((item) => (
          <SidebarItem key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}
