import { invoices, customers } from "../data/data"

export function LatestInvoices() {
  const sortedInvoices = [...invoices].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ).slice(0, 5)

  return (
    <div className="bg-white p-6 rounded-lg shadow col-span-4 lg:col-span-3">
      <h3 className="text-lg font-semibold mb-4">Latest Invoices</h3>
      <div className="space-y-4">
        {sortedInvoices.map((invoice) => {
          const customer = customers.find(c => c.id === invoice.customerId)
          return (
            <div key={invoice.id} className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">
                {customer?.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="ml-4 flex-1">
                <p className="text-sm font-medium">{customer?.name}</p>
                <p className="text-xs text-gray-500">{customer?.email}</p>
              </div>
              <div className="text-sm font-medium">₹{invoice.amount.toFixed(2)}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

