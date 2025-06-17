import { Link } from "react-router-dom";
import { SideBarTabList } from "../../data/SideBarTabList";
import { FaBehance } from "react-icons/fa";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  return (
    <aside
      className={`bg-sky-900 mt-15 lg:mt-0 text-white w-64 p-4 space-y-4 fixed lg:static top-0 left-0 h-full transition-transform duration-300 z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <nav className="space-y-2">
        <FaBehance size={40} className="hidden lg:block" />
        {SideBarTabList?.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              to={item?.link}
              className="block p-2 rounded hover:bg-white hover:text-black"
              key={index}
              onClick={toggleSidebar}
            >
              <div className="flex items-center gap-2.5">
                <Icon size={18} />
                {item?.title}
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
