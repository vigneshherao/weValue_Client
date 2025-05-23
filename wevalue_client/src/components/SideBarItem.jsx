import { Link } from "react-router-dom";

const SidebarItem = ({ icon, label, badge, path }) => {
  const Wrapper = path ? Link : "div";

  return (
    <Wrapper
      to={path}
      className="flex items-center justify-between py-2 px-3 hover:bg-gray-100 transition duration-200 rounded cursor-pointer text-gray-900"
    >
      <div className="flex items-center gap-2">
        {icon}
        <span>{label}</span>
      </div>
      {badge && (
        <span className="text-xs bg-[#7a33ff] text-white px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Wrapper>
  );
};

export default SidebarItem;
