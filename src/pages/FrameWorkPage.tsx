import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FrameWorkList } from "../data/FrameWorkList";
import Loader from "../components/common/Loader";

const FrameWorkPage = () => {
  return (
    <div className="p-6 min-h-[85vh]">
      <Loader>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FrameWorkList.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white dark:bg-black rounded-xl shadow-md p-4 hover:shadow-lg transition-shadow block group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={36} className="text-blue-500" />
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white flex-1">
                    {item.title}
                  </h3>
                  <FaRegArrowAltCircleRight
                    className="text-blue-500 group-hover:text-blue-600 transition"
                    size={20}
                  />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </a>
            );
          })}
        </div>
      </Loader>
    </div>
  );
};

export default FrameWorkPage;
