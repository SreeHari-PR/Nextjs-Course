import { MetricCards } from "../components/metric-cards"
import { RevenueChart } from "../components/revenue-chart"
import { LatestInvoices } from "../components/latest-invoice"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
        <div className="space-y-6">
          <MetricCards />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
            <RevenueChart />
            <LatestInvoices />
          </div>
        </div>
      </div>
    </div>
  )
}

