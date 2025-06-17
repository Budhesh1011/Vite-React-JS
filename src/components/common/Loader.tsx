import { useEffect, useState } from "react";
import { LuLoaderPinwheel } from "react-icons/lu";

const Loader = ({
  duration,
  children,
}: {
  duration?: number;
  children?: React.ReactNode;
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, duration ?? 1000);

    return () => clearTimeout(timeout);
  }, [duration]);

  return loading ? (
    <div className="flex justify-center items-center min-h-[78vh]">
      <LuLoaderPinwheel className="animate-spin text-gray-500" size={48} />
    </div>
  ) : (
    children
  );
};

export default Loader;
