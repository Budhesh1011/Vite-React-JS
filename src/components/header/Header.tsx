import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="bg-sky-900 text-white p-4 flex justify-between items-center">
      <button className="lg:hidden" onClick={toggleSidebar}>
        <FiMenu size={24} />
      </button>
      <Link to="/" className="text-xl font-bold">
        Budhesh
      </Link>
    </header>
  );
};

export default Header;
