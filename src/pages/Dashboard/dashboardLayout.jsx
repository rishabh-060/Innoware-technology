// src/layouts/DashboardLayout.jsx
import React, { useState } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  Mail,
  CreditCard,
  Star,
  FileText,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../services/auth.services";
import { toast } from "react-toastify";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true); // desktop collapse
  const [mobileOpen, setMobileOpen] = useState(false); // mobile sidebar
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Manage Projects", path: "/dashboard/projects", icon: <FolderKanban size={20} /> },
    { name: "Messages", path: "/dashboard/messages", icon: <Mail size={20} /> },
    { name: "Billing", path: "/dashboard/billing", icon: <CreditCard size={20} /> },
    { name: "Reviews", path: "/dashboard/reviews", icon: <Star size={20} /> },
    { name: "Proposal & Invoice", path: "/dashboard/proposals", icon: <FileText size={20} /> },
  ];

  return (
    <div className="flex h-screen fixed left-0 top-0 right-0 bottom-0 bg-gray-950 text-gray-200">
      {/* Sidebar */}
      <aside
        className={`
          bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col
          ${isOpen ? "w-64" : "w-20"}
          ${mobileOpen ? "fixed inset-y-0 left-0 z-40" : "hidden"}
          lg:flex lg:static
        `}
      >
        {/* Brand + Toggle */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-800">
          <Link to={"/"} className="flex items-center gap-2">
            <span className="text-blue-400 text-xl">⚡</span>
            {isOpen && <span className="font-bold text-lg">InnoWare</span>}
          </Link>

        {/* Collapse (desktop) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden lg:flex items-center text-gray-400 hover:text-gray-200"
          >
            {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>

          {/* Close (mobile) */}
          <button
            className="lg:hidden text-gray-300"
            onClick={() => setMobileOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav Items (fills space above buttons) */}
        <nav className="flex-1 px-2 py-4 space-y-1">
          {menuItems.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all
                ${
                  isActive
                    ? "bg-blue-600/20 text-blue-400 border-l-4 border-blue-500"
                    : "text-gray-400 hover:bg-gray-800 hover:text-gray-100"
                }`
              }
              onClick={() => setMobileOpen(false)}
            >
              {item.icon}
              {isOpen && <span>{item.name}</span>}
              {!isOpen && (
                <span className="absolute left-16 bg-gray-800 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                  {item.name}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-5 border-gray-800">
          {/* New Project Button */}
          <Link
            to={"#"}
            className={`
              group flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all
              bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md hover:from-cyan-400 hover:to-blue-500 hover:shadow-lg
              ${isOpen ? "" : "justify-center"}
            `}
          >
            <Plus size={20} />
            {isOpen && <span>New Project</span>}
            {!isOpen && (
              <span className="absolute left-16 bg-gray-800 text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                New Project
              </span>
            )}
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="px-2 py-2 border-t border-gray-800">
          {/* Logout */}
          <button
            onClick={async () => {
              try {
                const result = await dispatch(logoutUser());
                if (result.meta.requestStatus === "fulfilled") {
                  toast.success("Logout successful!");
                  navigate("/login");
                } else {
                  toast.error(result.error?.message || "Logout failed!");
                }
              } catch (error) {
                console.error(error);
              }
            }}
            className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-red-400 hover:bg-red-500/10 rounded-lg transition"
          >
            <LogOut size={18} />
            {isOpen && "Logout"}
          </button>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 lg:ml-0 md:ml-20 overflow-y-auto scrollbar-hide ">
        {/* Mobile toggle button */}
        <div className="lg:hidden sticky top-0 left-0 p-2 z-10 w-full bg-transparent backdrop-blur-xl">
          <button
            className="bg-gray-800 p-2 rounded-md text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
