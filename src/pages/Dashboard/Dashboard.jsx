// src/pages/Dashboard.jsx
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const role = user?.role || "user"; // "user" | "admin" | "super-admin"

  // Sample dynamic data (replace with API/fetch logic)
  const projects = [
    { name: "Project Alpha", status: "In Progress", due: "2024-08-15" },
    { name: "Project Beta", status: "Completed", due: "2024-07-20" },
    { name: "Project Gamma", status: "Pending", due: "2024-09-01" },
  ];

  const users = [
    { name: "John Doe", role: "User" },
    { name: "Jane Smith", role: "User" },
  ];

  const gradientButton = `relative inline-block px-6 py-1.5 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600
    shadow-lg hover:scale-105 hover:shadow-xl hover:from-cyan-400 hover:to-blue-500
    transition-all duration-300 transform`;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-gray-200">
      {/* Page Title */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-10">
        {role === "super-admin"
          ? "Super Admin Panel"
          : role === "admin"
          ? "Admin Dashboard"
          : "My Dashboard"}
      </h1>

      {/* Overview Cards */}
      <div className="grid gap-6 md:grid-cols-3 mb-10">
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-6 bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-800"
        >
          <h3 className="text-sm text-gray-400">Active Projects</h3>
          <p className="text-2xl font-bold mt-2">{projects.length}</p>
          <span className="text-green-400 text-xs">+10% from last month</span>
        </motion.div>

        {role !== "user" && (
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-800"
          >
            <h3 className="text-sm text-gray-400">Pending Payments</h3>
            <p className="text-2xl font-bold mt-2">$12,500</p>
            <span className="text-red-400 text-xs">-5% from last month</span>
          </motion.div>
        )}

        <motion.div
          whileHover={{ scale: 1.03 }}
          className="p-6 bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-800"
        >
          <h3 className="text-sm text-gray-400">Unread Messages</h3>
          <p className="text-2xl font-bold mt-2">12</p>
          <span className="text-green-400 text-xs">+20% from yesterday</span>
        </motion.div>

        {role === "super-admin" && (
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-gray-900/70 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-800"
          >
            <h3 className="text-sm text-gray-400">System Users</h3>
            <p className="text-2xl font-bold mt-2">1,245</p>
            <span className="text-blue-400 text-xs">+30 new this week</span>
          </motion.div>
        )}
      </div>

      {/* Recent Activity Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 mb-10"
      >
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        {projects.length ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="text-gray-400">
                <tr>
                  <th className="py-3 px-4">Project</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Due Date</th>
                  <th className="py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((proj, i) => (
                  <tr key={i} className="border-t border-gray-800">
                    <td className="py-3 px-4">{proj.name}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 text-xs rounded ${
                          proj.status === "Completed"
                            ? "bg-green-500/20 text-green-400"
                            : proj.status === "In Progress"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {proj.status}
                      </span>
                    </td>
                    <td className="py-3 px-4">{proj.due}</td>
                    <td className="py-3 px-4 text-blue-400 cursor-pointer hover:underline">
                      View
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-400 py-4 text-center">No recent activity found</p>
        )}
      </motion.div>

      {/* User Management */}
      {(role === "admin" || role === "super-admin") && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-800 mb-10"
        >
          <h2 className="text-lg font-semibold mb-4">User Management</h2>
          {users.length ? (
            <ul className="space-y-3 text-sm">
              {users.map((u, i) => (
                <li
                  key={i}
                  className="flex justify-between border-b border-gray-800 pb-2"
                >
                  <span>{u.name} ({u.role})</span>
                  <button className={gradientButton}>Manage</button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-400 py-4 text-center">No users found</p>
          )}
        </motion.div>
      )}

      {/* Super Admin Settings */}
      {role === "super-admin" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-800"
        >
          <h2 className="text-lg font-semibold mb-4">System Settings</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className={gradientButton}>Platform Configurations</button>
            <button className={gradientButton}>Audit Logs</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Dashboard;
