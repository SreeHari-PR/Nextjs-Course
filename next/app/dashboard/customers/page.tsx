'use client'

import React from "react"
import { customers } from "../../data/data"
import { Mail, Phone, MapPin, User, Search } from 'lucide-react'

const CustomersPage = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Search customers..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 text-left"><User size={18} className="inline mr-2" />Customer ID</th>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left"><Mail size={18} className="inline mr-2" />Email</th>
              <th className="py-3 px-4 text-left"><Phone size={18} className="inline mr-2" />Phone</th>
              <th className="py-3 px-4 text-left"><MapPin size={18} className="inline mr-2" />Address</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr 
                key={customer.id} 
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors ${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <td className="py-3 px-4 font-medium text-gray-900">{customer.id}</td>
                <td className="py-3 px-4">{customer.name}</td>
                <td className="py-3 px-4 text-blue-600 hover:text-blue-800">
                  <a href={`mailto:${customer.email}`}>{customer.email}</a>
                </td>
                <td className="py-3 px-4">{customer.phone}</td>
                <td className="py-3 px-4">{customer.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CustomersPage

