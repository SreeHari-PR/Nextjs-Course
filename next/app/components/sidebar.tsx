"use client"

import Link from "next/link"
import { usePathname,useRouter } from "next/navigation"
import { Globe, Home, FileText, Users, LogOut } from 'lucide-react'

const menuItems = [
  {
    title: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Invoices",
    href: "/dashboard/invoices",
    icon: FileText,
  },
  {
    title: "Customers",
    href: "/dashboard/customers",
    icon: Users,
  },
]

export function AppSidebar() {
  const pathname = usePathname()
  const router=useRouter();
  const handleLogout=()=>{
    router.push('/')
    console.log('loggedout')
  }

  return (
    <aside className="flex h-screen w-64 flex-col bg-white shadow-md ">
      <div className="border-b border-gray-200 px-6 py-4 bg-blue-500">
        <div className="flex items-center gap-2 ">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
            <Globe className="h-10 w-10 text-white" />
          </div>
          <span className="text-lg font-semibold text-white">Acme</span>
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-gray-200 p-4">
        <button onClick={handleLogout} className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-50">
          <LogOut  className="h-4 w-4" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}

