import { IndianRupee, Users, FileText, Clock } from 'lucide-react'
import { invoices, customers } from "../data/data"

export function MetricCards() {
  const totalCollected = invoices
    .filter(inv => inv.status === "Paid")
    .reduce((acc, inv) => acc + inv.amount, 0)
  
  const totalPending = invoices
    .filter(inv => inv.status === "Unpaid" || inv.status === "Overdue")
    .reduce((acc, inv) => acc + inv.amount, 0)

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">Collected</h3>
          <IndianRupee className="h-5 w-5 text-gray-400" />
        </div>
        <p className="text-2xl font-bold text-gray-700">₹{totalCollected.toFixed(2)}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">Pending</h3>
          <Clock className="h-5 w-5 text-gray-400" />
        </div>
        <p className="text-2xl font-bold text-gray-700">₹{totalPending.toFixed(2)}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">Total Invoices</h3>
          <FileText className="h-5 w-5 text-gray-400" />
        </div>
        <p className="text-2xl font-bold text-gray-700">{invoices.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-500">Total Customers</h3>
          <Users className="h-5 w-5 text-gray-400" />
        </div>
        <p className="text-2xl font-bold text-gray-700">{customers.length}</p>
      </div>
    </div>
  )
}

