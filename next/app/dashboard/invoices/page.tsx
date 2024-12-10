'use client'

import React from "react"
import { customers, invoices } from '../../data/data'
import { Search, FileText, User, Calendar, IndianRupee, AlertCircle } from 'lucide-react'

const InvoicePage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Invoices</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search invoices..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 text-left"><FileText size={18} className="inline mr-2" />Invoice ID</th>
              <th className="py-3 px-4 text-left"><User size={18} className="inline mr-2" />Customer</th>
              <th className="py-3 px-4 text-left"><Calendar size={18} className="inline mr-2" />Date</th>
              <th className="py-3 px-4 text-left"><Calendar size={18} className="inline mr-2" />Due Date</th>
              <th className="py-3 px-4 text-left"><IndianRupee size={18} className="inline mr-2" />Amount</th>
              <th className="py-3 px-4 text-left"><AlertCircle size={18} className="inline mr-2" />Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => {
              const customer = customers.find(
                (cust) => cust.id === invoice.customerId
              );
              return (
                <tr 
                  key={invoice.id}
                  className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <td className="py-3 px-4 font-medium text-gray-900">{invoice.id}</td>
                  <td className="py-3 px-4">{customer?.name}</td>
                  <td className="py-3 px-4">{invoice.date}</td>
                  <td className="py-3 px-4">{invoice.dueDate}</td>
                  <td className="py-3 px-4">₹{invoice.amount.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-800"
                        : invoice.status === "Overdue"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}>
                      {invoice.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default InvoicePage

