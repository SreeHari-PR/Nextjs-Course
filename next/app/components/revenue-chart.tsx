"use client"

import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { invoices } from "../data/data"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

// Function to group invoices by month
function getMonthlyData() {
  const monthlyData = invoices.reduce((acc, invoice) => {
    const month = new Date(invoice.date).toLocaleString('default', { month: 'short' })
    acc[month] = (acc[month] || 0) + invoice.amount
    return acc
  }, {} as Record<string, number>)

  return Object.entries(monthlyData).map(([name, total]) => ({
    month: name,
    revenue: total
  }))
}

export function RevenueChart() {
  const data = getMonthlyData()

  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Revenue',
        data: data.map(item => item.revenue),
        backgroundColor: '#3b82f6',
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: number | string) {
            return '₹' + value
          }
        }
      }
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow col-span-4">
      <h3 className="text-lg font-semibold mb-4">Recent Revenue</h3>
      <div className="h-64 w-full">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  )
}

