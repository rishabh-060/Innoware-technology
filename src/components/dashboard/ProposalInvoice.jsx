import React, { useState } from "react";
import { motion } from "framer-motion";
import invoiceImg from "../../assets/invoice.svg"; // Use a relevant illustration

const ProposalInvoice = () => {
  const [formType, setFormType] = useState("proposal"); // proposal | invoice
  const [isOpen, setIsOpen] = useState(false);
  const [documents, setDocuments] = useState([]);
  const [formData, setFormData] = useState({
    client: "",
    email: "",
    project: "",
    services: [{ description: "", price: "" }],
    items: [{ description: "", qty: 1, price: "" }],
    terms: "",
    dueDate: "",
    taxRate: 0.1,
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleRowChange = (index, field, value, type) => {
    const rows = [...formData[type]];
    rows[index][field] = value;
    setFormData({ ...formData, [type]: rows });
  };

  const addRow = (type) => {
    setFormData({
      ...formData,
      [type]:
        type === "services"
          ? [...formData.services, { description: "", price: "" }]
          : [...formData.items, { description: "", qty: 1, price: "" }],
    });
  };

  const removeRow = (index, type) => {
    const rows = [...formData[type]];
    rows.splice(index, 1);
    setFormData({ ...formData, [type]: rows });
  };

  const resetForm = () => {
    setFormData({
      client: "",
      email: "",
      project: "",
      services: [{ description: "", price: "" }],
      items: [{ description: "", qty: 1, price: "" }],
      terms: "",
      dueDate: "",
      taxRate: 0.1,
    });
  };

  const handleSubmit = async () => {
    if (!formData.client || !formData.email) {
      alert("Client name and email are required!");
      return;
    }

    
  };

  const gradientButton =
    `relative inline-block px-6 py-1.5 rounded font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600
     shadow-lg hover:scale-105 hover:shadow-xl hover:from-cyan-400 hover:to-blue-500
     transition-all duration-300 transform`;

  return (
    <section className="relative min-h-[100vh] w-full py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-200 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Illustration */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={invoiceImg}
            alt="Proposal & Invoice"
            className="w-72 sm:w-80 md:w-[440px] lg:w-[500px] drop-shadow-2xl"
          />
        </motion.div>

        {/* Right Side - Controls */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Proposal &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
              Invoice Generator
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto md:mx-0">
            Quickly create and manage proposals or invoices with a clean, modern interface.
          </p>

          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <button className={`${gradientButton}`} onClick={() => setFormType("proposal")}>
              Proposal
            </button>
            <button className={`${gradientButton}`} onClick={() => setFormType("invoice")}>
              Invoice
            </button>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className={`${gradientButton} mt-4`}
          >
            Create {formType === "proposal" ? "Proposal" : "Invoice"}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-start pt-20 z-50">
          <motion.div
            className="bg-gray-900/90 backdrop-blur-xl rounded-3xl w-full max-w-3xl p-8 shadow-2xl border border-gray-800"
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-6">
              New {formType === "proposal" ? "Proposal" : "Invoice"}
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                name="client"
                placeholder="Client Name"
                value={formData.client}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-2xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Client Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-2xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="text"
                name="project"
                placeholder="Project Title"
                value={formData.project}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-2xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-2xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              {(formType === "proposal" ? formData.services : formData.items).map((row, i) => (
                <div key={i} className="flex gap-2">
                  <input
                    type="text"
                    placeholder={
                      formType === "proposal" ? "Service Description" : "Item Description"
                    }
                    value={row.description}
                    onChange={(e) =>
                      handleRowChange(
                        i,
                        "description",
                        e.target.value,
                        formType === "proposal" ? "services" : "items"
                      )
                    }
                    className="flex-1 p-2 bg-gray-800 rounded-2xl border border-gray-700"
                  />
                  {formType === "invoice" && (
                    <input
                      type="number"
                      placeholder="Qty"
                      value={row.qty}
                      onChange={(e) => handleRowChange(i, "qty", e.target.value, "items")}
                      className="w-16 p-2 bg-gray-800 rounded-2xl border border-gray-700"
                    />
                  )}
                  <input
                    type="number"
                    placeholder="Price"
                    value={row.price}
                    onChange={(e) =>
                      handleRowChange(
                        i,
                        "price",
                        e.target.value,
                        formType === "proposal" ? "services" : "items"
                      )
                    }
                    className="w-24 p-2 bg-gray-800 rounded-2xl border border-gray-700"
                  />
                  <button
                    onClick={() =>
                      removeRow(i, formType === "proposal" ? "services" : "items")
                    }
                    className="px-3 py-1 bg-red-500 rounded-2xl hover:bg-red-600 transition"
                  >
                    ✕
                  </button>
                </div>
              ))}

              <button
                onClick={() => addRow(formType === "proposal" ? "services" : "items")}
                className="mt-2 text-sm text-blue-400 underline"
              >
                + Add Row
              </button>

              <textarea
                name="terms"
                placeholder="Terms & Conditions"
                value={formData.terms}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 rounded-2xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />

              <div className="flex justify-end gap-4 mt-6">
                <button onClick={() => setIsOpen(false)} className={`${gradientButton}`}>
                  Cancel
                </button>
                <button onClick={handleSubmit} className={`${gradientButton}`}>
                  Generate & Send
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Documents Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16">
        {documents.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {documents.map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-4 bg-gray-900/70 border border-gray-800 rounded-2xl shadow-lg flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      doc.type === "proposal"
                        ? "bg-blue-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {doc.type.toUpperCase()}
                  </span>
                  <span className="text-gray-400 text-xs">{doc.dueDate}</span>
                </div>
                <h3 className="text-lg font-semibold">{doc.project}</h3>
                <p className="text-gray-400 text-sm">{doc.client}</p>
                <p className="text-gray-400 text-sm">{doc.email}</p>
                <button className="mt-3 px-3 py-1 bg-purple-600 rounded-xl text-sm hover:bg-purple-700 transition">
                  View
                </button>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 py-10 bg-gray-900/70 rounded-2xl border border-gray-800">
            No Proposals or Invoices found
          </div>
        )}
      </div>
    </section>
  );
};

export default ProposalInvoice;