"use client"

import { Home, History, QrCode, FileText, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "history", label: "History", icon: History },
  { id: "scan", label: "Scan", icon: QrCode },
  { id: "notes", label: "Notes", icon: FileText },
  { id: "account", label: "Account", icon: User },
]

export function Navigation({ activeTab, onTabChange }: NavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="glass-strong border-t mx-4 mb-4 rounded-2xl">
        <div className="flex items-center justify-around py-3">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={cn(
                  "flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                <Icon size={20} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
